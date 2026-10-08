import styled, { css } from "styled-components";
import { CalendarDays } from "lucide-react";

/* ---------- Tokens ---------- */

const sm = "@media (min-width: 640px)";
const lg = "@media (min-width: 1024px)";
const xl = "@media (min-width: 1280px)";

const textXs = css`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const textSm = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const ease = "150ms cubic-bezier(0.4, 0, 0.2, 1)";

export type OrderStatus = "new" | "preparing" | "ready";

const statusColors: Record<OrderStatus, { bg: string; color: string }> = {
  new: { bg: "#fee2e2", color: "#dc2626" },
  preparing: { bg: "#fef3c7", color: "#b45309" },
  ready: { bg: "#d1fae5", color: "#047857" },
};

/* ---------- Page shell ---------- */

export const Root = styled.div`
  display: flex;
  min-height: 100vh;
  font-family:
    ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #0f172a;
  background: #f8fafc;
`;

export const ContentColumn = styled.div`
  flex: 1 1 0%;
  min-width: 0;
`;

export const MobileHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;

  ${lg} {
    display: none;
  }
`;

export const Main = styled.main`
  padding: 1rem;

  ${sm} {
    padding: 1.5rem;
  }

  ${lg} {
    padding: 2rem;
  }
`;

/* ---------- Page header ---------- */

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ${sm} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Greeting = styled.h1`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #0f172a;
`;

export const Subtext = styled.p`
  margin: 0.25rem 0 0;
  ${textSm}
  color: #64748b;
`;

export const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  font-family: inherit;
  ${textSm}
  font-weight: 500;
  color: #fff;
  background: #dc2626;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #b91c1c;
  }

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 2px #fff,
      0 0 0 4px #dc2626;
  }
`;

export const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.5rem 0.75rem;
  ${textXs}
  font-weight: 500;
  color: #334155;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
`;

export const DateIcon = styled(CalendarDays)`
  width: 1rem;
  height: 1rem;
  color: #64748b;
`;

/* ---------- Grids ---------- */

export const StatGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;

  ${sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const MainGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;

  ${lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${lg} {
    grid-column: span 2 / span 2;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

/* ---------- Shared building blocks ---------- */

export const Card = styled.section<{ $compact?: boolean }>`
  padding: ${({ $compact }) => ($compact ? "1rem" : "1.25rem")};
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  ${textSm}
  font-weight: 600;
  color: #0f172a;
`;

export const List = styled.ul<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
`;

export const RowBetween = styled.div<{ $gap?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ $gap }) => $gap ?? "0"};
`;

/* ---------- Stat card ---------- */

export const StatTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StatLabel = styled.p`
  margin: 0;
  ${textSm}
  color: #475569;
`;

export const IconBadge = styled.span`
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 2rem;
  height: 2rem;
  color: #0f766e;
  background: #f0fdfa;
  border-radius: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const StatValue = styled.p`
  margin: 0.75rem 0 0;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #0f172a;

  ${sm} {
    font-size: 28px;
  }
`;

export const StatNote = styled.p`
  margin: 0.25rem 0 0;
  ${textXs}
  color: #94a3b8;
`;

export const StatDelta = styled.span`
  font-weight: 600;
  color: #059669;
`;

/* ---------- Live orders ---------- */

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LiveBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.375rem;
  font-size: 10px;
  font-weight: 600;
  color: #ef4444;
  background: #fef2f2;
  border-radius: 0.25rem;
`;

export const LiveDot = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  background: #ef4444;
  border-radius: 9999px;
`;

export const ViewLink = styled.a`
  ${textSm}
  font-weight: 500;
  color: #0f766e;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #0d9488;
  }
`;

export const OrderItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
`;

export const OrderInfo = styled.div`
  min-width: 0;
`;

export const OrderId = styled.p`
  margin: 0;
  ${textSm}
  font-weight: 600;
  color: #0f172a;
`;

export const OrderDescription = styled.p`
  margin: 0;
  ${textXs}
  color: #64748b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const OrderMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-end;
  gap: 0.375rem;

  ${sm} {
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const OrderTime = styled.span`
  ${textXs}
  color: #94a3b8;
`;

export const StatusBadge = styled.span<{ $status: OrderStatus }>`
  padding: 0.125rem 0.5rem;
  font-size: 10px;
  font-weight: 600;
  color: ${({ $status }) => statusColors[$status].color};
  background: ${({ $status }) => statusColors[$status].bg};
  border-radius: 0.25rem;
`;

/* ---------- Sales performance ---------- */

export const RangeToggle = styled.div`
  display: inline-flex;
  padding: 0.125rem;
  ${textXs}
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
`;

export const RangeButton = styled.button<{ $active: boolean }>`
  padding: 0.25rem 0.75rem;
  font: inherit;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active }) => ($active ? "#0f172a" : "#64748b")};
  background: ${({ $active }) => ($active ? "#f1f5f9" : "transparent")};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition:
    color ${ease},
    background-color ${ease};

  &:hover {
    color: #0f172a;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #f97316;
  }
`;

export const Chart = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 12rem;
  margin-top: 1.5rem;
  padding: 0 0.5rem;

  ${sm} {
    gap: 1.25rem;
    padding: 0 1.5rem;
  }
`;

export const BarColumn = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

export const BarTrack = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: flex-end;
`;

// Height is passed inline from the component (style={{ height: `${value}%` }})
// so styled-components doesn't generate a new class for every value.
export const Bar = styled.div<{ $highlight?: boolean }>`
  width: 100%;
  background: ${({ $highlight }) => ($highlight ? "#f97316" : "#ffedd5")};
  border-radius: 0.375rem 0.375rem 0 0;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BarLabel = styled.span<{ $highlight?: boolean }>`
  margin-top: 0.5rem;
  ${textXs}
  text-align: center;
  font-weight: ${({ $highlight }) => ($highlight ? 600 : 400)};
  color: ${({ $highlight }) => ($highlight ? "#0f172a" : "#64748b")};
`;

/* ---------- Top selling ---------- */

export const TopItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Thumb = styled.div<{ $bg: string }>`
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 2rem;
  background: ${({ $bg }) => $bg};
  border-radius: 0.5rem;
`;

export const TopItemInfo = styled.div`
  flex: 1 1 0%;
  min-width: 0;
`;

export const TopItemName = styled.p`
  margin: 0;
  ${textXs}
  font-weight: 600;
  color: #0f172a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TopItemSold = styled.p`
  margin: 0;
  ${textXs}
  color: #94a3b8;
`;

export const TopItemRevenue = styled.p`
  flex-shrink: 0;
  margin: 0;
  ${textXs}
  font-weight: 600;
  color: #0f766e;
`;

/* ---------- Activity feed ---------- */

export const ActivityItem = styled.li`
  display: flex;
  gap: 0.75rem;
`;

export const ActivityDot = styled.span`
  flex-shrink: 0;
  width: 0.375rem;
  height: 0.375rem;
  margin-top: 0.375rem;
  background: #0d9488;
  border-radius: 9999px;
`;

export const ActivityText = styled.p`
  margin: 0;
  ${textXs}
  color: #1e293b;
`;

export const ActivityTime = styled.p`
  margin: 0.125rem 0 0;
  font-size: 11px;
  color: #94a3b8;
`;