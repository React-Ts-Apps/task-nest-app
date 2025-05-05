import React from 'react';
import { CustomThemeProvider } from './context/Theme/CustomThemeProvider';
import './styles.css';
import { GlobalStyle } from './styles/GlobalStyles.styles';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Layout />
    </CustomThemeProvider>
  );
};
export default App;
