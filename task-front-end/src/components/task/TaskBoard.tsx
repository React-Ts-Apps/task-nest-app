import React, { useState } from 'react';
import styled from 'styled-components';
import { COLUMNS, INITIAL_TASKS } from '../../data/Tasks';
import TaskColumn from './TaskColumn';
import { TaskStatus } from '../../types/TaskProps';

type TaskColWrapperProps = {
  status: TaskStatus;
};

const TaskBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;
const TaskColumnWrapper = styled.div<TaskColWrapperProps>`
  border-top: 2px solid
    ${({ status }) =>
      status === 'TODO' ? '#007acc' : status === 'IN_PROGRESS' ? '#ff9900' : '#28a745'};
`;

const TaskBoard = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  return (
    <div>
      <TaskBoardContainer>
        {COLUMNS.map((col) => (
          <TaskColumnWrapper key={col.id} status={col.id}>
            <TaskColumn
              column={col}
              tasks={tasks.filter((task) => task.status == col.id)}
            ></TaskColumn>
          </TaskColumnWrapper>
        ))}
      </TaskBoardContainer>
    </div>
  );
};
export default TaskBoard;
