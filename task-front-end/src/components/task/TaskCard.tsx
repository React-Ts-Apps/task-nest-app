import React from 'react';
import { styled } from 'styled-components';
import type { TaskItem } from '../../types/TaskProps';

const TaskItemCard = styled.div`
  background-color: ${({ theme }) => theme.navBg};
  padding: 15px;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid #d0e3f1;
  box-shadow: ${({ theme }) => theme.boxShadow};
  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
    transform: translateY(-3px);
    transition: 0.2s ease;
  }
`;

const CardTitle = styled.h1`
  font-weight: bold;
  font-style: normal;
  padding-bottom: 10px;
`;

const TaskCard = ({ task }: { task: TaskItem }) => {
  return (
    <div>
      <TaskItemCard>
        <CardTitle>{task.title}</CardTitle>
        <p>{task.description}</p>
      </TaskItemCard>
    </div>
  );
};
export default TaskCard;
