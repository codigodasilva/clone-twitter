import styled from 'styled-components';

export const FeedProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabsTitles = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tab = styled.section`
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
`;

export const TabTitle = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.gray};
  font-weight: bold;
  padding: 12px 20px;
  text-align: center;
  transition: color 0.2s, background-color 0.2s;
  white-space: nowrap;
  width: 100%;

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

export const TweetsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
