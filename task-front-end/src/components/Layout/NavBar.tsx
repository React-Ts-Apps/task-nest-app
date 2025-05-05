import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { StyledIcon } from '../../styles/StyledIcon.styles';
import ToggleSwitch from '../Ui/ToggleSwitch';
import { useThemeContext } from '../../context/Theme/useThemeContext';
import { Nav, NavContainer } from '../../styles/Layout.styles';
import { H1Title } from '../../styles/Typography.styles';

const NavBar = () => {
  const { isDark, toggleTheme } = useThemeContext();
  return (
    <Nav>
      <NavContainer>
        <StyledIcon>
          <FaTasks />
        </StyledIcon>
        <H1Title>Task Nest App</H1Title>
      </NavContainer>

      <NavContainer>
        <StyledIcon>
          <FiSun />
        </StyledIcon>
        <ToggleSwitch checked={isDark} toggle={toggleTheme} />
        <StyledIcon>
          <FiMoon />
        </StyledIcon>
      </NavContainer>
    </Nav>
  );
};
export default NavBar;
