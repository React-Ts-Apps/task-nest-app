import { createContext } from 'react';

type themeContextType = {
  toggleTheme: () => void;
  isDark: boolean;
};

export const CustomThemeContext = createContext<themeContextType | undefined>(undefined);
