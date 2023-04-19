import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const ModalWindow = styled.div`
  max-width: 420px;
  padding: 5px;
  background-color: rgba(255, 255, 255);
  border-radius: 10px;
`;
