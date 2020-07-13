import styled, { css } from 'styled-components';
import { obama } from '../../assets';
import Icon from '../icon';

const pictureStyle = css`
  background: url(${obama}) no-repeat center;
  background-size: max(45px, min(45px, 22vw)) max(45px, min(45px, 22vw));
`;

const statusStyle = css`
  cursor: pointer;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: color 0.2s;
`;

const iconsStyle = css`
  width: 18px;
  height: 18px;
  fill: ${(props) => props.theme.colors.gray};
  margin-right: 4px;
  transition: fill 0.2s;
`;

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

export const TweetBody = styled.section`
  display: flex;
  margin-top: 4px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.gray};

  position: absolute;
  top: 0;
  left: 0;

  ${pictureStyle}
`;

export const TweetContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 60px;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  white-space: nowrap;
`;

export const ProfileName = styled.strong`
  margin-right: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ProfileUsername = styled.span`
  color: ${(props) => props.theme.colors.gray};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  width: 2px;
  height: 2px;
  margin: 0 10px;
  border-radius: 50%;
`;

export const TweetDate = styled.time`
  color: ${(props) => props.theme.colors.gray};
`;

export const ProfileDescription = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ContentImage = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background-color: ${(props) => props.theme.colors.outline};
  border-radius: 14px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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
  ${statusStyle}

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
`;

export const LikeStatus = styled.div`
  ${statusStyle}

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
  ${iconsStyle};

  &:hover {
    fill: ${(props) => props.theme.colors.twitter};
  }
`;
