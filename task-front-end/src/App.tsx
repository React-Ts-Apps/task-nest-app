import React from 'react';
import NavBar from './components/layout/NavBar';
import { CustomThemeProvider } from './context/Theme/CustomThemeProvider';
import './styles.css';
import { GlobalStyle } from './styles/GlobalStyle';
const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <NavBar />
    </CustomThemeProvider>
  );
};
export default App;
