import styled from 'styled-components';

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
`;

export const SideBar = styled.aside``;
