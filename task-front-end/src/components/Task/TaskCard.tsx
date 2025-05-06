import React from 'react';
import type { TaskItem } from '../../types/task/taskTypes';
import { useDraggable } from '@dnd-kit/core';
import { TaskItemCard, TaskCardTitle, TaskId } from '../../styles/Task.styles';
import { Link } from 'react-router-dom';

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
      <Link to={`/task/${task.id}`}>
        <TaskItemCard>
          <TaskCardTitle>{task.title}</TaskCardTitle>
          <TaskId>#{task.taskNumber}</TaskId>
        </TaskItemCard>
      </Link>
    </div >
  );
};
export default TaskCard;
