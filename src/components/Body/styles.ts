import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Loading = styled.div`
  margin: 0 auto;
`;

export const ErrorMessage = styled.p`
  margin-top: 20px;
  color: #f95e5a;
  text-align: center;
`;

export const EmptyToolsMessage = styled.p`
  margin-top: 20px;
  color: gray;
  text-align: center;
`;
