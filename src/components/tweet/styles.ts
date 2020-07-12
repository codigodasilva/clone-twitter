import styled from 'styled-components';

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

export const RetweetIcon = styled.div``;

export const TweetBody = styled.div``;

export const Avatar = styled.div``;

export const TweetContent = styled.div``;

export const ContentHeader = styled.div``;

export const ProfileName = styled.strong``;

export const ProfileUsername = styled.span``;

export const Dot = styled.div``;

export const TweetDate = styled.time``;

export const ProfileDescription = styled.div``;

export const ContentImage = styled.div``;

export const IconsWrapper = styled.div``;

export const RetweetStatus = styled.div``;

export const CommentIcon = styled.div``;

export const LikeIcon = styled.div``;

export const OptionsIcon = styled.div``;
