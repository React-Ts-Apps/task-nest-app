import React from 'react';
import styled from 'styled-components';
import { FaTasks } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import StyledIcon from '../common/StyledIcon';
import ToggleSwitch from '../UI/ToggleSwitch';
import { useThemeContext } from '../../context/Theme/useThemeContext';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.navBg};
  height: 60px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: bold;
`;

const NavBar = () => {
  const { isDark, toggleTheme } = useThemeContext();
  return (
    <Nav>
      <Container>
        <StyledIcon>
          <FaTasks />
        </StyledIcon>
        <Title>Task Nest App</Title>
      </Container>

      <Container>
        <StyledIcon>
          <FiSun />
        </StyledIcon>
        <ToggleSwitch checked={isDark} toggle={toggleTheme} />
        <StyledIcon>
          <FiMoon />
        </StyledIcon>
      </Container>
    </Nav>
  );
};
export default NavBar;
