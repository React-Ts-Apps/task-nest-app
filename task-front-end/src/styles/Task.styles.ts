import { styled } from "styled-components";
import { TaskColWrapperProps } from "../types/TaskProps";

export const TaskBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;
export const TaskColumnWrapper = styled.div<TaskColWrapperProps>`
  border-top: 2px solid
    ${({ $status }) =>
        $status === 'TODO' ? '#007acc' : $status === 'IN_PROGRESS' ? '#ff9900' : '#28a745'};
`;

export const TaskItemCard = styled.div`
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

export const TaskCardTitle = styled.h3`
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  padding-bottom: 10px;
`;

export const TaskId = styled.p`
  font-size: 16px;
`;

export const TaskCol = styled.div`
    background-color: ${({ theme }) => theme.navBg};
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    height: 100vh;
  `;
export const TaskColHeader = styled.div`
    background-color: ${({ theme }) => theme.columnHeaderBg};
    height: 60px;
    padding: 20px;
  `;
export const TaskColTitle = styled.h2`
    font-weight: bold;
    font-size:16px;
  `;