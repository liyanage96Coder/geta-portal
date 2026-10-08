import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const Mark = styled.div`
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: #fff;
  background: #f97316;
  border-radius: 0.5rem;
`;

export const TextBlock = styled.div`
  line-height: 1;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: #0f172a;
`;

// No line-height here on purpose: it inherits `1` from TextBlock,
// same as the original `leading-none` + `text-[10px]`.
export const Tagline = styled.p`
  margin: 0.125rem 0 0;
  font-size: 10px;
  font-weight: 600;
  color: #f97316;
`;