import styled from 'styled-components';

export const ExampleText = styled.span`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.title};
`;
