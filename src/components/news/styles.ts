import styled from 'styled-components';

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Topic = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  margin-bottom: 4px;
`;

export const Title = styled.strong`
  font-size: 15px;
`;
