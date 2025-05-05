import React from 'react';
import { styled } from 'styled-components';
import type { TaskItem } from '../../types/TaskProps';
import { useDraggable } from '@dnd-kit/core';

const TaskItemCard = styled.div`
  background-color: ${({ theme }) => theme.background};
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
  font-size: 14px;
  padding-bottom: 10px;
`;

const TaskId = styled.p`
  font-size: 16px;
`;

const TaskCard = ({ task }: { task: TaskItem }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: { column: task.status },
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px,${transform.y}px, 0)` : undefined,
  };

  return (
    <div {...attributes} {...listeners} ref={setNodeRef} style={style}>
      <TaskItemCard>
        <CardTitle>{task.title}</CardTitle>
        <TaskId>#{task.id}</TaskId>
      </TaskItemCard>
    </div>
  );
};
export default TaskCard;
