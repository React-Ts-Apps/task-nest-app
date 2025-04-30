import React from 'react';
import { styled } from 'styled-components';
import type { TaskColumnData, TaskList } from '../../types/TaskProps';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';

type TaskColumnProps = {
  tasks: TaskList;
  column: TaskColumnData;
};

const TaskCol = styled.div`
  background-colr: ${({ theme }) => theme.navBg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 100vh;
`;
const TaskColHeader = styled.div`
  background-color: ${({ theme }) => theme.navBg};
  height: 60px;
  padding: 20px;
`;
const TaskColTitle = styled.h2`
  font-weight: bold;
`;

const TaskColumn = ({ column, tasks }: TaskColumnProps) => {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <TaskCol ref={setNodeRef}>
      <TaskColHeader>
        <TaskColTitle>{column.title}</TaskColTitle>
      </TaskColHeader>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </TaskCol>
  );
};
export default TaskColumn;
