import React, { useState } from 'react';
import styled from 'styled-components';

// Task interface for TypeScript
interface Task {
  id: number;
  title: string;
}

// Styled Components
const TaskBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const TaskColumn = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TaskTitle = styled.h2`
  text-align: center;
`;

const TaskCard = styled.div`
  background-color: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState({
    toDo: [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' },
    ],
    inProgress: [
      { id: 4, title: 'Task 4' },
      { id: 5, title: 'Task 5' },
    ],
    completed: [{ id: 6, title: 'Task 6' }],
  });

  return (
    <TaskBoardContainer>
      <TaskColumn>
        <TaskTitle>To Do</TaskTitle>
        {tasks.toDo.map((task) => (
          <TaskCard key={task.id}>{task.title}</TaskCard>
        ))}
      </TaskColumn>
      <TaskColumn>
        <TaskTitle>In Progress</TaskTitle>
        {tasks.inProgress.map((task) => (
          <TaskCard key={task.id}>{task.title}</TaskCard>
        ))}
      </TaskColumn>
      <TaskColumn>
        <TaskTitle>Completed</TaskTitle>
        {tasks.completed.map((task) => (
          <TaskCard key={task.id}>{task.title}</TaskCard>
        ))}
      </TaskColumn>
    </TaskBoardContainer>
  );
};

export default TaskBoard;
