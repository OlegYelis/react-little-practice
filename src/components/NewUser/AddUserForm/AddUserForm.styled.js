import styled from '@emotion/styled';

export const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.label`
  display: flex;
  flex-direction: column;
  color: black;

  label {
    font-weight: bold;
    margin-bottom: 0.7rem;
    display: block;
  }

  input {
    font: inherit;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 22rem;
    max-width: 100%;
`;

export const Button = styled.button`
  background-color: darkblue;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  border: none;
  color: #ffffff;
  border-radius: 8px;

  &:hover,
  &:active {
    background-color: #2a5c84b2;
    border-color: #2a5c84b2;
  }
`;
