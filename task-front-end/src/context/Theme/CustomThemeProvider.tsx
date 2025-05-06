import React, { ReactNode, useEffect, useState } from 'react';
import { CustomThemeContext } from './CustomThemeContext';
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from '../../hooks/useLocalStorage';
import { childProps } from '../../types/shared/contextTypes';

export const CustomThemeProvider = ({ children }: childProps) => {
  const [isDark, setIsDark] = useLocalStorage('theme', true);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <CustomThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
