import { styled } from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.navBg};
  height: 60px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;