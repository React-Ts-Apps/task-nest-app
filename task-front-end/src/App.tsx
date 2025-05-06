import React from 'react';
import { CustomThemeProvider } from './context/Theme/CustomThemeProvider';
import './styles.css';
import { GlobalStyle } from './styles/GlobalStyles.styles';
import Layout from './components/Layout/Layout';
import { TaskProvider } from './context/Tasks/TaskProvider';

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <TaskProvider>
        <Layout />
      </TaskProvider>
    </CustomThemeProvider>
  );
};
export default App;
