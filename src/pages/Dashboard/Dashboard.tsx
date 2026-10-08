import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Logo from "../../components/Logo/Logo";
import {
  ShoppingBag,
  Banknote,
  Utensils,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import * as S from "./Styles";

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

const orders: {
  id: string;
  items: string;
  time: string;
  status: S.OrderStatus;
}[] = [
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

// Colors for each status live in Dashboard.styles.ts (StatusBadge).
const statusLabels: Record<S.OrderStatus, string> = {
  new: "NEW",
  preparing: "PREPARING",
  ready: "READY FOR PICKUP",
};

// Swap `emoji` for an `image` URL and render an <img> when you have real photos.
// `bg` is a plain color value now (amber-100, orange-100, rose-100).
const topItems = [
  {
    name: "Cheese Kottu (Regular)",
    sold: 142,
    revenue: "LKR 213,000",
    emoji: "🍛",
    bg: "#fef3c7",
  },
  {
    name: "Pol Roti & Lunu Miris Meal",
    sold: 98,
    revenue: "LKR 78,400",
    emoji: "🫓",
    bg: "#ffedd5",
  },
  {
    name: "Fish Ambul Thiyal Curry",
    sold: 76,
    revenue: "LKR 152,000",
    emoji: "🍲",
    bg: "#ffe4e6",
  },
];

const activity = [
  { text: "Table Reservation Confirmed (Table 4, 4 Pax)", time: "10m ago" },
  { text: "Menu updated: 'Ambul Thiyal' price updated", time: "1h ago" },
  { text: "Payout of LKR 145,000 processed", time: "Yesterday" },
];

type Range = "Day" | "Week" | "Month";

// value = bar height in %, highlight = the bar to emphasise
const salesData: Record<
  Range,
  { label: string; value: number; highlight?: boolean }[]
> = {
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

const ranges = Object.keys(salesData) as Range[];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  delta: string;
  note: string;
}

function StatCard({ label, value, icon: Icon, delta, note }: StatCardProps) {
  return (
    <S.Card $compact>
      <S.StatTop>
        <S.StatLabel>{label}</S.StatLabel>
        <S.IconBadge>
          <Icon />
        </S.IconBadge>
      </S.StatTop>
      <S.StatValue>{value}</S.StatValue>
      <S.StatNote>
        <S.StatDelta>{delta}</S.StatDelta> {note}
      </S.StatNote>
    </S.Card>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function LiveOrders() {
  return (
    <S.Card>
      <S.RowBetween>
        <S.TitleGroup>
          <S.SectionTitle>Live Orders</S.SectionTitle>
          <S.LiveBadge>
            <S.LiveDot />
            LIVE
          </S.LiveBadge>
        </S.TitleGroup>
        <S.ViewLink href="#">View monitor</S.ViewLink>
      </S.RowBetween>

      <S.List $gap="0.625rem">
        {orders.map((order) => (
          <S.OrderItem key={order.id}>
            <S.OrderInfo>
              <S.OrderId>{order.id}</S.OrderId>
              <S.OrderDescription>{order.items}</S.OrderDescription>
            </S.OrderInfo>
            <S.OrderMeta>
              <S.OrderTime>{order.time}</S.OrderTime>
              <S.StatusBadge $status={order.status}>
                {statusLabels[order.status]}
              </S.StatusBadge>
            </S.OrderMeta>
          </S.OrderItem>
        ))}
      </S.List>
    </S.Card>
  );
}

function SalesPerformance() {
  const [range, setRange] = useState<Range>("Week");

  return (
    <S.Card>
      <S.RowBetween $gap="0.75rem">
        <S.SectionTitle>Sales Performance</S.SectionTitle>

        <S.RangeToggle>
          {ranges.map((key) => (
            <S.RangeButton
              key={key}
              type="button"
              $active={range === key}
              aria-pressed={range === key}
              onClick={() => setRange(key)}
            >
              {key}
            </S.RangeButton>
          ))}
        </S.RangeToggle>
      </S.RowBetween>

      <S.Chart>
        {salesData[range].map(({ label, value, highlight }) => (
          <S.BarColumn key={label}>
            <S.BarTrack>
              <S.Bar $highlight={highlight} style={{ height: `${value}%` }} />
            </S.BarTrack>
            <S.BarLabel $highlight={highlight}>{label}</S.BarLabel>
          </S.BarColumn>
        ))}
      </S.Chart>
    </S.Card>
  );
}

function TopSelling() {
  return (
    <S.Card>
      <S.SectionTitle>Top Selling Items</S.SectionTitle>
      <S.List $gap="1rem">
        {topItems.map((item) => (
          <S.TopItem key={item.name}>
            <S.Thumb $bg={item.bg} aria-hidden="true">
              {item.emoji}
            </S.Thumb>
            <S.TopItemInfo>
              <S.TopItemName>{item.name}</S.TopItemName>
              <S.TopItemSold>{item.sold} sold</S.TopItemSold>
            </S.TopItemInfo>
            <S.TopItemRevenue>{item.revenue}</S.TopItemRevenue>
          </S.TopItem>
        ))}
      </S.List>
    </S.Card>
  );
}

function ActivityFeed() {
  return (
    <S.Card>
      <S.SectionTitle>Activity Feed</S.SectionTitle>
      <S.List $gap="1rem">
        {activity.map((entry) => (
          <S.ActivityItem key={entry.text}>
            <S.ActivityDot />
            <div>
              <S.ActivityText>{entry.text}</S.ActivityText>
              <S.ActivityTime>{entry.time}</S.ActivityTime>
            </div>
          </S.ActivityItem>
        ))}
      </S.List>
    </S.Card>
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
    <S.Root>
      <Sidebar />

      <S.ContentColumn>
        <S.MobileHeader>
          <Logo />
        </S.MobileHeader>

        <S.Main>
          {/* Page header */}
          <S.PageHeader>
            <div>
              <S.Greeting>Aayubowan, Amila!</S.Greeting>
              <S.Subtext>
                Here's the performance of The Ceylon Pavilion today.
              </S.Subtext>
              <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
            </div>
            <S.DateBadge>
              <S.DateIcon />
              Today: Oct 24, 2026
            </S.DateBadge>
          </S.PageHeader>

          {/* Stat cards */}
          <S.StatGrid>
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </S.StatGrid>

          {/* Main grid */}
          <S.MainGrid>
            <S.LeftColumn>
              <LiveOrders />
              <SalesPerformance />
            </S.LeftColumn>
            <S.RightColumn>
              <TopSelling />
              <ActivityFeed />
            </S.RightColumn>
          </S.MainGrid>
        </S.Main>
      </S.ContentColumn>
    </S.Root>
  );
}