import Logo from "../Logo/Logo";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Wallet,
  CreditCard,
  Percent,
  Megaphone,
  Store,
  UserCog,
} from "lucide-react";


const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Products", icon: UtensilsCrossed },
  { label: "Financials", icon: Wallet },
  { label: "Subscriptions", icon: CreditCard },
  { label: "Discounts & Promotions", icon: Percent },
  { label: "Branding & Marketing", icon: Megaphone },
  { label: "Store Settings", icon: Store },
  { label: "User Settings", icon: UserCog },
];

function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col border-r border-slate-200 bg-slate-100/70 p-4 lg:flex">
      <Logo />

      <nav aria-label="Main" className="mt-8 flex flex-col gap-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
              active
                ? "bg-orange-50 font-medium text-orange-800"
                : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
            }`}
          >
            <Icon className="size-4 shrink-0" />
            <span className="flex-1 truncate">{label}</span>
            {active && <span className="size-1.5 rounded-full bg-orange-500" />}
          </a>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-4">
        <div className="grid size-9 place-items-center rounded-full bg-orange-200 text-xs font-semibold text-orange-900">
          AP
        </div>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-sm font-semibold text-slate-900">
            Amila Perera
          </p>
          <p className="truncate text-xs text-slate-500">The Ceylon Pavilion</p>
        </div>
      </div>
    </aside>
  );
}


export default Sidebar;