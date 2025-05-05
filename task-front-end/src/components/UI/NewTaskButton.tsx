import styled from "styled-components";

const NewTaskButton = styled.button`
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
export default NewTaskButton