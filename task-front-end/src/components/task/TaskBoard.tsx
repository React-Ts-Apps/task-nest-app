import React, { useState } from 'react';
import styled from 'styled-components';
import { COLUMNS, INITIAL_TASKS } from '../../data/Tasks';
import TaskColumn from './TaskColumn';

const TaskBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const TaskBoard = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  return (
    <div>
      <TaskBoardContainer>
        {COLUMNS.map((col) => (
          <TaskColumn
            key={col.id}
            column={col}
            tasks={tasks.filter((task) => task.status == col.id)}
          ></TaskColumn>
        ))}
      </TaskBoardContainer>
    </div>
  );
};
export default TaskBoard;
