import styled from "styled-components";

/* ---------- Tokens ---------- */

const lg = "@media (min-width: 1024px)";

/* ---------- Layout ---------- */

export const Page = styled.div`
  display: grid;
  min-height: 100vh;

  ${lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

/* ---------- Left brand panel ---------- */

export const Aside = styled.aside`
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 3rem;
  color: #fff;
  background: #fbe0cc;

  ${lg} {
    display: flex;
  }
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const BrandText = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

export const Hero = styled.div`
  max-width: 28rem;
`;

export const HeroTitle = styled.h2`
  font-size: 2.25rem;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

export const HeroText = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #e0e7ff;
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #c7d2fe;
`;

export const CircleTop = styled.div`
  pointer-events: none;
  position: absolute;
  top: -6rem;
  right: -6rem;
  width: 18rem;
  height: 18rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
`;

export const CircleBottom = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: -8rem;
  left: -4rem;
  width: 20rem;
  height: 20rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
`;

/* ---------- Right form panel ---------- */

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  background: #fff;
`;

export const Content = styled.div`
  width: 100%;
  width: 551px;
`;

export const MobileBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  ${lg} {
    display: none;
  }
`;

export const MobileBrandName = styled.span`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #0f172a;
`;

export const Title = styled.h1`
  color: #0f172a;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;

export const Subtitle = styled.p`
  color: #475569;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

/* ---------- Form ---------- */

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
`;

export const Field = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.375rem;
  color: #475569;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.625rem 0.875rem;
  color: #0f172a;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const PasswordInput = styled(Input)`
  padding-right: 2.75rem; 

  &::-ms-reveal {
    display: none;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  color: #64748b;
  background: transparent;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transform: translateY(-50%);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #0f172a;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const ErrorMessage = styled.p`
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #b91c1c;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  background: #0f172a;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px #fff,
      0 0 0 4px #4f46e5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
