import NavBar from './NavBar';
import React, { useState } from 'react';
import TaskBoard from '../Task/TaskBoard';
import { AddTaskButton, ButtonWrapper } from '../../styles/Button.styles';
import { FaPlus } from 'react-icons/fa';
import { StyledIcon } from '../../styles/StyledIcon.styles';
import TaskForm from '../Task/TaskForm';

const Layout = () => {
  const [showTaskForm, setShowTaskForm] = useState(false)

  const handleNewTask = () => {
    setShowTaskForm((prev) => !prev)
  }

  return (
    <div>
      <NavBar />
      {showTaskForm ? <TaskForm /> :
        <div>
          <ButtonWrapper>
            <AddTaskButton onClick={() => handleNewTask()}>
              Add New Task
              <StyledIcon>
                <FaPlus />
              </StyledIcon>
            </AddTaskButton>
          </ButtonWrapper>
          <TaskBoard />
        </div>
      }
    </div>
  );
};
export default Layout;
