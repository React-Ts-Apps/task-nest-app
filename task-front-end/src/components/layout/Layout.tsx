import NavBar from './NavBar';
import React from 'react';
import TaskBoard from '../task/TaskBoard';
import NewTaskButton from '../UI/NewTaskButton';
import { styled } from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import StyledIcon from '../common/StyledIcon';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: .5rem 2rem .25rem .5rem;
`;
const Layout = () => {
  return (
    <>
      <NavBar />
      <ButtonWrapper>
        <NewTaskButton>Add New Task<StyledIcon><FaPlus></FaPlus></StyledIcon></NewTaskButton>
      </ButtonWrapper>
      <TaskBoard />
    </>
  );
};
export default Layout;
