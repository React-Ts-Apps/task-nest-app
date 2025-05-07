
import React, { useState } from 'react';
import TaskBoard from '../Task/TaskBoard';
import { StyledButton, ButtonWrapper } from '../../styles/Button.styles';
import { FaPlus } from 'react-icons/fa';
import { StyledIcon } from '../../styles/StyledIcon.styles';
import TaskForm from '../Task/TaskForm';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const handleNewTask = () => {
    navigate('/create-task')
  }

  return (
    <div>
      <ButtonWrapper>
        <StyledButton onClick={() => handleNewTask()}>
          Add New Task
          <StyledIcon>
            <FaPlus />
          </StyledIcon>
        </StyledButton>
      </ButtonWrapper>
      <TaskBoard />
    </div>
  );
};
export default Layout;
