import styled from 'styled-components';

export const FeedProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tab = styled.section`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  padding: 12px 20px;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.twitterDarkHover};
  }

  &.active {
    border-bottom: 2px solid ${(props) => props.theme.colors.twitter};
  }

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.twitter};
  }
`;
