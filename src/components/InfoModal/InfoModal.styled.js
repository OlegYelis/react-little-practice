import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #1b18115f;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 15px;
  background-color: #ffffff;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 30px 0;
  border-radius: 15px 15px 0 0;
  color: #ffffff;
  background-color: #012e7a;
`;

export const ModalTxt = styled.p`
  font-size: 20px;
  padding: 30px 0;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #012e7a;
  font-size: 17px;
  width: 80%;
  padding: 10px 0;
  cursor: pointer;
  border: none;
  color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;

  &:hover,
  &:active {
    background-color: #2a5c84b2;
  }
`;
