import styled from 'styled-components';

export const SideBarListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
`;

export const ListItemWrapper = styled.div``;

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid ${(props) => props.theme.colors.outline};
  }

  &:first-child {
    padding-top: 12px;
  }

  &:last-child {
    padding-bottom: 16px;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
