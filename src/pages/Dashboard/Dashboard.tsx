import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import {
  ShoppingBag,
  Banknote,
  Utensils,
  CalendarCheck,
  CalendarDays,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data (replace with API calls later)                                 */
/* ------------------------------------------------------------------ */



const stats = [
  {
    label: "Today's Orders",
    value: "54",
    icon: ShoppingBag,
    delta: "+12.4%",
    note: "vs yesterday",
  },
  {
    label: "Today's Revenue",
    value: "LKR 132,450",
    icon: Banknote,
    delta: "+8.2%",
    note: "vs yesterday",
  },
  {
    label: "Active Products",
    value: "48",
    icon: Utensils,
    delta: "0.0%",
    note: "on your menu",
  },
  {
    label: "Pending Reservations",
    value: "8",
    icon: CalendarCheck,
    delta: "New",
    note: "tables to confirm",
  },
];

const orders = [
  {
    id: "GETA-8812",
    items: "Chicken Kottu (L) x2, Ginger Beer x3",
    time: "5 mins ago",
    status: "new",
  },
  {
    id: "GETA-8810",
    items: "Egg Hoppers x4, Lunu Miris x1",
    time: "12 mins ago",
    status: "preparing",
  },
  {
    id: "GETA-8809",
    items: "Pol Roti Combo x1, Black Tea x1",
    time: "20 mins ago",
    status: "ready",
  },
];

// Full class names only: Tailwind can't detect classes built from fragments.
const statusStyles = {
  new: { label: "NEW", className: "bg-red-100 text-red-600" },
  preparing: { label: "PREPARING", className: "bg-amber-100 text-amber-700" },
  ready: {
    label: "READY FOR PICKUP",
    className: "bg-emerald-100 text-emerald-700",
  },
};

// Swap `emoji` for an `image` URL and render an <img> when you have real photos.
const topItems = [
  {
    name: "Cheese Kottu (Regular)",
    sold: 142,
    revenue: "LKR 213,000",
    emoji: "🍛",
    bg: "bg-amber-100",
  },
  {
    name: "Pol Roti & Lunu Miris Meal",
    sold: 98,
    revenue: "LKR 78,400",
    emoji: "🫓",
    bg: "bg-orange-100",
  },
  {
    name: "Fish Ambul Thiyal Curry",
    sold: 76,
    revenue: "LKR 152,000",
    emoji: "🍲",
    bg: "bg-rose-100",
  },
];

const activity = [
  { text: "Table Reservation Confirmed (Table 4, 4 Pax)", time: "10m ago" },
  { text: "Menu updated: 'Ambul Thiyal' price updated", time: "1h ago" },
  { text: "Payout of LKR 145,000 processed", time: "Yesterday" },
];

// value = bar height in %, highlight = the bar to emphasise
const salesData = {
  Day: [
    { label: "9am", value: 20 },
    { label: "11am", value: 45 },
    { label: "1pm", value: 90, highlight: true },
    { label: "3pm", value: 55 },
    { label: "5pm", value: 40 },
    { label: "7pm", value: 80 },
    { label: "9pm", value: 60 },
  ],
  Week: [
    { label: "Mon", value: 45 },
    { label: "Tue", value: 62 },
    { label: "Wed", value: 52 },
    { label: "Thu", value: 90, highlight: true },
    { label: "Fri", value: 65 },
    { label: "Sat", value: 100 },
    { label: "Sun", value: 78 },
  ],
  Month: [
    { label: "Wk 1", value: 60 },
    { label: "Wk 2", value: 75 },
    { label: "Wk 3", value: 95, highlight: true },
    { label: "Wk 4", value: 70 },
  ],
};

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function Card({ className = "", children }) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white p-5 ${className}`}
    >
      {children}
    </section>
  );
}

function StatCard({ label, value, icon: Icon, delta, note }) {
  return (
    <Card className="!p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-slate-600">{label}</p>
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px]">
        {value}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        <span className="font-semibold text-emerald-600">{delta}</span> {note}
      </p>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function LiveOrders() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-slate-900">Live Orders</h2>
          <span className="inline-flex items-center gap-1 rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-semibold text-red-500">
            <span className="size-1.5 rounded-full bg-red-500" />
            LIVE
          </span>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-teal-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          View monitor
        </a>
      </div>

      <ul className="mt-4 space-y-2.5">
        {orders.map((order) => {
          const status = statusStyles[order.status];
          return (
            <li
              key={order.id}
              className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-4 py-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">
                  {order.id}
                </p>
                <p className="truncate text-xs text-slate-500">{order.items}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                <span className="text-xs text-slate-400">{order.time}</span>
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-semibold ${status.className}`}
                >
                  {status.label}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

function SalesPerformance() {
  const [range, setRange] = useState("Week");

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-slate-900">
          Sales Performance
        </h2>

        <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 text-xs">
          {Object.keys(salesData).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={range === key}
              onClick={() => setRange(key)}
              className={`rounded-md px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                range === key
                  ? "bg-slate-100 font-semibold text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex h-48 gap-3 px-2 sm:gap-5 sm:px-6">
        {salesData[range].map(({ label, value, highlight }) => (
          <div key={label} className="flex flex-1 flex-col">
            <div className="flex flex-1 items-end">
              <div
                style={{ height: `${value}%` }}
                className={`w-full rounded-t-md transition-all duration-300 ${
                  highlight ? "bg-orange-500" : "bg-orange-100"
                }`}
              />
            </div>
            <span
              className={`mt-2 text-center text-xs ${
                highlight ? "font-semibold text-slate-900" : "text-slate-500"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function TopSelling() {
  return (
    <Card>
      <h2 className="text-sm font-semibold text-slate-900">
        Top Selling Items
      </h2>
      <ul className="mt-4 space-y-4">
        {topItems.map((item) => (
          <li key={item.name} className="flex items-center gap-3">
            <div
              className={`grid size-12 shrink-0 place-items-center rounded-lg text-2xl ${item.bg}`}
              aria-hidden="true"
            >
              {item.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-slate-900">
                {item.name}
              </p>
              <p className="text-xs text-slate-400">{item.sold} sold</p>
            </div>
            <p className="shrink-0 text-xs font-semibold text-teal-700">
              {item.revenue}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ActivityFeed() {
  return (
    <Card>
      <h2 className="text-sm font-semibold text-slate-900">Activity Feed</h2>
      <ul className="mt-4 space-y-4">
        {activity.map((entry) => (
          <li key={entry.text} className="flex gap-3">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-600" />
            <div>
              <p className="text-xs text-slate-800">{entry.text}</p>
              <p className="mt-0.5 text-[11px] text-slate-400">{entry.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.reload();
  };
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <header className="flex items-center border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
         <Logo />
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {/* Page header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Aayubowan, Amila!
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Here's the performance of The Ceylon Pavilion today.
              </p>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Logout
              </button>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700">
              <CalendarDays className="size-4 text-slate-500" />
              Today: Oct 24, 2026
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Main grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <LiveOrders />
              <SalesPerformance />
            </div>
            <div className="space-y-6">
              <TopSelling />
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
