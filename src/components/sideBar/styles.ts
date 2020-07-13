import styled from 'styled-components';

import Icon from '../icon';

export const SideBarContainer = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.xl} {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
  }
`;

export const SearchBarWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  max-height: 56px;
  padding: 10px 24px;
  position: fixed;
  top: 0;
  width: min(399px, 100%);
  z-index: 2;
`;

export const SearchInput = styled.input`
  background-color: ${(props) => props.theme.colors.search};
  border-radius: 20px;
  font-size: 14px;
  height: 40px;
  padding: 0 10px 0 52px;
  width: 100%;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.twitter};

    ~ svg {
      fill: ${(props) => props.theme.colors.twitter};
    }
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
})`
  fill: ${(props) => props.theme.colors.gray};
  height: 28px;
  left: 15px;
  position: relative;
  top: -33px;
  transition: 180ms ease-in-out;
  width: 28px;
  z-index: 1;
`;

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  padding: 56px 24px 200px;

  > div + div {
    margin-top: 12px;
  }
`;
