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
  font-size: 12px;
  padding-bottom: 10px;
`;

export const TaskId = styled.p`
  font-size: 12px;
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
    font-size:14px;
  `;
export const TaskFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const TaskFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap:.5rem;
`;

export const TaskFormInput = styled.input`
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding:10px;
  width:100%;
  max-width: 1000px;
  min-width: 100px;
`;

export const TaskFormTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 10px;
  width: 100%;
  max-height:500px;
  min-height: 200px;
  max-width: 1000px;
  min-width: 100px;
`;

export const TaskFormLabel = styled.label`
  font-weight: bold;
  font-size: 12px;
`;