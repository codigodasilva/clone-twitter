import styled, { css } from 'styled-components';
import Icon from '../icon';

const statusStyle = css`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  transition: color 0.2s;
  transition: opacity 0.2s;
`;

const iconsStyle = css`
  fill: ${(props) => props.theme.colors.gray};
  height: 18px;
  margin-right: 4px;
  transition: fill 0.2s;
  width: 18px;
`;

export const TweetContainer = styled.section`
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 14px 16px;
`;

export const RetweetdMessage = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  font-size: 12px;
`;

export const RetweetIconMiniature = styled(Icon).attrs({
  name: 'retweet',
})`
  fill: ${(props) => props.theme.colors.gray};
  height: 16px;
  margin-left: 36px;
  margin-right: 8px;
  width: 16px;
`;

export const TweetBody = styled.section`
  display: flex;
  margin-top: 4px;
  position: relative;
`;

export const Avatar = styled.img`
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 50%;
  flex-shrink: 0;
  height: 48px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
`;

export const TweetContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  padding-left: 60px;
  width: 100%;
`;

export const ContentHeader = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  white-space: nowrap;
`;

export const ProfileName = styled.strong`
  margin-right: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileUsername = styled.span`
  color: ${(props) => props.theme.colors.gray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 50%;
  height: 2px;
  margin: 0 10px;
  width: 2px;
`;

export const TweetDate = styled.time`
  color: ${(props) => props.theme.colors.gray};
`;

export const ProfileDescription = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ContentImage = styled.div`
  background-color: ${(props) => props.theme.colors.outline};
  border-radius: 14px;
  cursor: pointer;
  height: min(285px, max(175px, 41vw));
  margin-top: 12px;
  transition: opacity 0.2s;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }
`;

export const IconsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 12px auto 0;
  width: 100%;
`;

export const CommentStatus = styled.div`
  ${statusStyle}

  color: ${(props) => props.theme.colors.gray};
    > svg {
      fill: ${(props) => props.theme.colors.gray};
    }

  &:hover {
    color: ${(props) => props.theme.colors.twitter};
    > svg {
      fill: ${(props) => props.theme.colors.twitter};
    }
  }
`;

export const RetweetStatus = styled.div`
  color: ${(props) => props.theme.colors.retweet};

  > svg {
    fill: ${(props) => props.theme.colors.retweet};
  }

  &:hover {
    color: ${(props) => props.theme.colors.retweet};
    > svg {
      fill: ${(props) => props.theme.colors.retweet};
    }
  }

  ${statusStyle}
`;

export const LikeStatus = styled.div`
  color: ${(props) => props.theme.colors.gray};
  > svg {
    fill: ${(props) => props.theme.colors.gray};
  }

  &:hover {
    color: ${(props) => props.theme.colors.like};
    > svg {
      fill: ${(props) => props.theme.colors.like};
    }
  }

  ${statusStyle}
`;

export const CommentIcon = styled(Icon).attrs({
  name: 'chat',
})`
  ${iconsStyle}
`;

export const RetweetIcon = styled(Icon).attrs({
  name: 'retweet',
})`
  ${iconsStyle}
`;

export const LikeIcon = styled(Icon).attrs({
  name: 'like',
})`
  ${iconsStyle}
`;

export const OptionsIcon = styled(Icon).attrs({
  name: 'tweetOptions',
})`
  &:hover {
    fill: ${(props) => props.theme.colors.twitter};
  }

  ${iconsStyle};
`;
