import React from 'react';
import { CustomThemeProvider } from './context/Theme/CustomThemeProvider';
import './styles.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Layout />
    </CustomThemeProvider>
  );
};
export default App;
