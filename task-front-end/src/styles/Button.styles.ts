import { styled } from "styled-components";

export const AddTaskButton = styled.button`
  padding: .5rem 1rem;
  background-color:${({ theme }) => theme.buttonBg};
  justify-content: center;
  width: 150px; 
  height: 30px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: .5rem 2rem .25rem .5rem;
`;

export const TaskFormButtonWrapper = styled.div`
  display: flex;
  width:100%;
  max-width: 1000px;
  min-width: 100px;
  justify-content: flex-end;
  padding: 1rem 2rem 2rem 8rem;
`;
