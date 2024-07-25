import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.main`
  width: 100%;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  /* Quebra de elementos: */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;

  color: ${(props) => props.theme["gray-100"]};
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};

  font-weight: bold;
  font-size: 1.125rem;

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme["gray-100"]};

  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;
    border-radius: 8px;

    background-color: ${(props) => props.theme["gray-700"]};
  }
`;

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;

  color: ${(props) => props.theme["green-500"]};

  display: flex;
  justify-content: center;

  overflow: hidden;
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;

  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["green-500"]};
  font-weight: bold;
  border-radius: 8px;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
