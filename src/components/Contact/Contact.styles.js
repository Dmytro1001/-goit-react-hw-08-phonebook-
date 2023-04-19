import styled from '@emotion/styled';

const viewportHeight = document.documentElement.clientHeight;

export const Container = styled.div`
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 0;
  padding: 10px;
  height: calc(${viewportHeight}px - 305px);
  overflow-y: scroll;

  margin-bottom: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(180deg, #2196f3, #1976d2);
  }
`;

export const Name = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
`;
export const Number = styled.span`
  display: block;
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
`;
