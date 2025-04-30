import React from 'react';
import { styled } from 'styled-components';
import type { TaskItem } from '../../types/TaskProps';

const TaskItemCard = styled.div`
  background-color: ${({ theme }) => theme.navBg};
  padding: 15px;
  margin: 20px 10px;
  border-radius: 8px;
  border: 1px solid #d0e3f1;
  box-shadow: ${({ theme }) => theme.boxShadow};
  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
    cursor: grab;
    transform: translateY(-3px);
    transition: 0.2s ease;
  }
`;

const CardTitle = styled.h3`
  font-weight: bold;
  font-style: normal;
  padding-bottom: 10px;
`;

const TaskId = styled.p`
  font-size: 16px;
`;

const TaskCard = ({ task }: { task: TaskItem }) => {
  return (
    <div>
      <TaskItemCard>
        <CardTitle>{task.title}</CardTitle>

        <TaskId>#{task.id}</TaskId>
      </TaskItemCard>
    </div>
  );
};
export default TaskCard;
