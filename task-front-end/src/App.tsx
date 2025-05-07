import React from 'react';
import { CustomThemeProvider } from './context/Theme/CustomThemeProvider';
import './styles.css';
import { GlobalStyle } from './styles/GlobalStyles.styles';
import Layout from './components/Layout/Layout';
import { TaskProvider } from './context/Tasks/TaskProvider';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import TaskForm from './components/Task/TaskForm';
import NavBar from './components/Layout/NavBar';

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <NavBar />
      <HashRouter>
        <TaskProvider>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/create-task" element={<TaskForm isViewMode={false} />} />
            <Route path="/task/:id" element={<TaskForm isViewMode={true} />} />
            {/* Optional redirect for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </TaskProvider>
      </HashRouter>
    </CustomThemeProvider>
  );
};

export default App;
