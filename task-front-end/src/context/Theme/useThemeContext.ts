import { useContext } from "react";
import { CustomThemeContext } from "./CustomThemeContext";

export const useThemeContext = () => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error("Theme context is undefined");
  }
  return context;
};
