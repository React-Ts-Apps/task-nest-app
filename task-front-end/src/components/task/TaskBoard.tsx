import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLUMNS, INITIAL_TASKS } from '../../data/Tasks';
import TaskColumn from './TaskColumn';
import { TaskStatus } from '../../types/TaskProps';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

type TaskColWrapperProps = {
  $status: TaskStatus;
};

const TaskBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;
const TaskColumnWrapper = styled.div<TaskColWrapperProps>`
  border-top: 2px solid
    ${({ $status }) =>
      $status === 'TODO' ? '#007acc' : $status === 'IN_PROGRESS' ? '#ff9900' : '#28a745'};
`;

const TaskBoard = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  useEffect(() => {
    console.log('Updated tasks:', tasks);
  }, [tasks]);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!active || !over) return;
    const draggedTaskId = active.id; //identify task being dragged by id
    const targetColumn = over.id as TaskStatus; //identify column by status

    setTasks((tasks) =>
      tasks.map((task) => (task.id == draggedTaskId ? { ...task, status: targetColumn } : task)),
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div>
        <TaskBoardContainer>
          {COLUMNS.map((col) => (
            <TaskColumnWrapper key={col.id} $status={col.id}>
              <TaskColumn
                column={col}
                tasks={tasks.filter((task) => task.status == col.id)}
              ></TaskColumn>
            </TaskColumnWrapper>
          ))}
        </TaskBoardContainer>
      </div>
    </DndContext>
  );
};
export default TaskBoard;
