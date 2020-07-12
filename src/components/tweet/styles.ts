import styled from 'styled-components';

import Icon from '../icon';

export const TweetContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  max-width: 100%;
`;

export const RetweetdMessage = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
`;

export const RetweetIconMiniature = styled(Icon).attrs({
  name: 'retweet',
})`
  width: 16px;
  height: 16px;
  margin-left: 36px;
  margin-right: 8px;
  fill: ${(props) => props.theme.colors.gray};
`;

export const RetweetIcon = styled(Icon).attrs({
  name: 'retweet',
})`
  width: 16px;
  height: 16px;
  margin-left: 36px;
  margin-right: 8px;
  fill: ${(props) => props.theme.colors.gray};
`;

export const TweetBody = styled.section`
  border: 1px solid red;
  display: flex;
  margin-top: 4px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  flex-shrink: 0;
  background: ${(props) => props.theme.colors.gray};

  position: absolute;
  top: 0;
  left: 0;
`;

export const TweetContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 60px;
`;

export const ContentHeader = styled.div``;

export const ProfileName = styled.strong``;

export const ProfileUsername = styled.span``;

export const Dot = styled.div``;

export const TweetDate = styled.time``;

export const ProfileDescription = styled.div``;

export const ContentImage = styled.div``;

export const IconsWrapper = styled.div``;

export const RetweetStatus = styled.div``;

export const CommentIcon = styled(Icon).attrs({
  name: 'chat',
})``;

export const LikeIcon = styled(Icon).attrs({
  name: 'like',
})``;

export const OptionsIcon = styled.div``;
