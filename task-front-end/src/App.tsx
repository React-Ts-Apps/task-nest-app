import React from "react";
import NavBar from "./components/layout/NavBar";
import { CustomThemeProvider } from "./context/Theme/CustomThemeProvider";
import "./styles.css";
const App = () => {
  return (
    <CustomThemeProvider>
      <NavBar />
    </CustomThemeProvider>
  );
};
export default App;
