import React, { ReactNode, useState } from 'react';
import { CustomThemeContext } from './CustomThemeContext';
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';

type childProps = {
  children: ReactNode;
};

export const CustomThemeProvider = ({ children }: childProps) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <CustomThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
