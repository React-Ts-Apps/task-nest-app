import React from 'react';
import type { TaskColumnProps } from '../../types/task/taskTypes';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';
import { TaskCol, TaskColHeader, TaskColTitle } from '../../styles/Task.styles';

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
