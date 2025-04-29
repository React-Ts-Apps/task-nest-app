import React from 'react';
import { styled } from 'styled-components';
import type { TaskColumnData, TaskList } from '../../types/TaskProps';
import TaskCard from './TaskCard';

type TaskColumnProps = {
  tasks: TaskList;
  column: TaskColumnData;
};

const TaskCol = styled.div`
  background-colr: ${({ theme }) => theme.navBg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
  height: 100vh;
`;

const TaskColTitle = styled.h2`
  text-align: center;
  font-weight: bold;
`;

const TaskColumn = ({ column, tasks }: TaskColumnProps) => {
  return (
    <TaskCol>
      <TaskColTitle>{column.title}</TaskColTitle>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </TaskCol>
  );
};
export default TaskColumn;
