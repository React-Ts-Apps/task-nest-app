import { createContext } from "react";

type themeContext = {
  toggleTheme: () => void;
  isDark: boolean;
};

export const CustomThemeContext = createContext<themeContext | undefined>(
  undefined
);
