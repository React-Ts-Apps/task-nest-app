import NavBar from './NavBar';
import React from 'react';
import TaskBoard from '../Task/TaskBoard';
import { AddTaskButton, ButtonWrapper } from '../../styles/Button.styles';
import { FaPlus } from 'react-icons/fa';
import { StyledIcon } from '../../styles/StyledIcon.styles';

const Layout = () => {
  return (
    <>
      <NavBar />
      <ButtonWrapper>
        <AddTaskButton>Add New Task<StyledIcon><FaPlus></FaPlus></StyledIcon></AddTaskButton>
      </ButtonWrapper>
      <TaskBoard />
    </>
  );
};
export default Layout;
