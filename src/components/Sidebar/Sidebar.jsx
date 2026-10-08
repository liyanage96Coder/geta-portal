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
import * as S from "./Styles";


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
    <S.Aside>
      <Logo />

      <S.Nav aria-label="Main">
        {navItems.map(({ label, icon: Icon, active }) => (
          <S.NavLink
            key={label}
            href="#"
            $active={active}
            aria-current={active ? "page" : undefined}
          >
            <Icon />
            <S.NavLabel>{label}</S.NavLabel>
            {active && <S.ActiveDot />}
          </S.NavLink>
        ))}
      </S.Nav>

      <S.Footer>
        <S.Avatar>AP</S.Avatar>
        <S.UserInfo>
          <S.UserName>Amila Perera</S.UserName>
          <S.UserCompany>The Ceylon Pavilion</S.UserCompany>
        </S.UserInfo>
      </S.Footer>
    </S.Aside>
  );
}

export default Sidebar;