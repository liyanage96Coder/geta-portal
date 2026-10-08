import styled, { css } from "styled-components";

/* ---------- Tokens ---------- */

const lg = "@media (min-width: 1024px)";

const textXs = css`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const textSm = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

/* ---------- Shell ---------- */

export const Aside = styled.aside`
  position: sticky;
  top: 0;
  display: none;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 14rem;
  height: 100vh;
  padding: 1rem;
  background: rgba(241, 245, 249, 0.7);
  border-right: 1px solid #e2e8f0;

  ${lg} {
    display: flex;
  }
`;

/* ---------- Navigation ---------- */

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 2rem;
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  ${textSm}
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  color: ${({ $active }) => ($active ? "#9a3412" : "#475569")};
  background: ${({ $active }) => ($active ? "#fff7ed" : "transparent")};
  text-decoration: none;
  border-radius: 0.5rem;
  transition:
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $active }) =>
    !$active &&
    css`
      &:hover {
        color: #0f172a;
        background: rgba(226, 232, 240, 0.6);
      }
    `}

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #f97316;
  }

  svg {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }
`;

export const NavLabel = styled.span`
  flex: 1 1 0%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ActiveDot = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  background: #f97316;
  border-radius: 9999px;
`;

/* ---------- Footer / user ---------- */

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`;

export const Avatar = styled.div`
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  ${textXs}
  font-weight: 600;
  color: #7c2d12;
  background: #fed7aa;
  border-radius: 9999px;
`;

export const UserInfo = styled.div`
  min-width: 0;
`;

export const UserName = styled.p`
  margin: 0;
  overflow: hidden;
  ${textSm}
  font-weight: 600;
  color: #0f172a;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserCompany = styled.p`
  margin: 0;
  overflow: hidden;
  ${textXs}
  color: #64748b;
  text-overflow: ellipsis;
  white-space: nowrap;
`;