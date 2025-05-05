import React from 'react';
import type { TaskItem } from '../../types/TaskProps';
import { useDraggable } from '@dnd-kit/core';
import { TaskItemCard, TaskCardTitle, TaskId } from '../../styles/Task.styles';

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
        <TaskCardTitle>{task.title}</TaskCardTitle>
        <TaskId>#{task.id}</TaskId>
      </TaskItemCard>
    </div>
  );
};
export default TaskCard;
