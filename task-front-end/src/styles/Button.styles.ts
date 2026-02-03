import { styled } from "styled-components";

interface ButtonProps {
  $variant?: 'primary' | 'secondary'
}

export const StyledButton = styled.button<ButtonProps>`
  padding: .5rem 1rem;
  background-color:${({ theme, $variant }) => $variant === 'secondary' ? theme.secondaryButton : theme.buttonBg};
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
  gap: 1rem;
`;

export const AgentButton = styled.button`
  margin: 10px;
  display: block;
  background-color: ${({ theme }) => theme.agentButtonBg};
  color: ${({ theme }) => theme.agentButtonText};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  height: 40px;
  font-size: 12px;
  font-weight: bold;
`;


export const AgentLogContainer = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.buttonBg + "22"}; // slightly transparent
  color: ${({ theme }) => theme.text};
  font-size: 0.85rem;
  height: 200px;
  overflow-y: auto;
  white-space: pre-wrap; // keeps newlines
  word-break: break-word;
`;

export const AgentLog = styled.div`
padding: 1rem;
`;