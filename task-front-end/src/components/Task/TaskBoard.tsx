import React from 'react';
import { COLUMNS } from '../../data/Tasks';
import TaskColumn from './TaskColumn';
import { TaskStatus } from '../../types/task/taskTypes';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { TaskBoardContainer, TaskColumnWrapper } from '../../styles/Task.styles';
import { useTaskContext } from '../../context/Tasks/useTaskContext';

const TaskBoard = () => {
  const { tasks, dispatch } = useTaskContext()

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!active || !over) return;
    const draggedTaskId = active.id; //identify task being dragged by id
    const targetColumn = over.id as TaskStatus; //identify column by status

    dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id: draggedTaskId, status: targetColumn } })
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
