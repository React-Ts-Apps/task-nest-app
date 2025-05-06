import React from 'react';
import { CustomThemeProvider } from './context/Theme/CustomThemeProvider';
import './styles.css';
import { GlobalStyle } from './styles/GlobalStyles.styles';
import Layout from './components/Layout/Layout';
import { TaskProvider } from './context/Tasks/TaskProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskForm from './components/Task/TaskForm';
import NavBar from './components/Layout/NavBar';

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <TaskProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/task/:id" element={<TaskForm />} />
          </Routes>
        </TaskProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  );
};

export default App;
