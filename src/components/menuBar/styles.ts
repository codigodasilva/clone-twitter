import styled, { css } from 'styled-components';

import Icon from '../icon';
import { coderamos } from '../../assets';

const iconStyle = css`
  fill: ${(props) => props.theme.colors.white};
  flex-shrink: 0;
  height: 30px;
  width: 30px;
`;

const pictureStyle = css`
  background: url(${coderamos}) no-repeat center;
  background-size: max(45px, min(40px, 22vw)) max(45px, min(40px, 22vw));
`;

export const MenuBarContainer = styled.nav`
  display: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.mediaQueries.md} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 0;
    max-height: 100vh;
    overflow-y: scroll;
    padding: 8px 20px 20px;
    position: sticky;
    top: 0;
  }
`;

export const TopSide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.mediaQueries.lg} {
    align-items: flex-start;
  }
`;

export const MenuButtonWrapper = styled.button`
  align-items: center;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  padding: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.twitterDarkHover};
  }

  &:hover,
  &.active {
    span,
    svg {
      color: ${(props) => props.theme.colors.twitter};
      fill: ${(props) => props.theme.colors.twitter};
    }
  }

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 48px;
    justify-content: center;
    margin-top: 32px;
    width: 48px;

    > span {
      display: none;
    }

    @media ${(props) => props.theme.mediaQueries.lg} {
      border-radius: 30px;
      height: unset;
      width: 100%;

      > span {
        display: inline;
      }
    }
  }
`;

export const ButtonTitle = styled.span`
  display: none;

  @media ${(props) => props.theme.mediaQueries.lg} {
    display: inline;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
`;

export const LogoWrapper = styled.div`
  padding: 0 10px;
`;

export const TwitterLogo = styled(Icon).attrs({
  name: 'twitter',
})`
  fill: ${(props) => props.theme.colors.twitter};
  height: 42px;
  margin-bottom: 20px;
  width: 42px;
`;

export const HomeIcon = styled(Icon).attrs({
  name: 'home',
})`
  ${iconStyle}
`;

export const ExploreIcon = styled(Icon).attrs({
  name: 'hashtag',
})`
  ${iconStyle}
`;

export const NotificationsIcon = styled(Icon).attrs({
  name: 'bell',
})`
  ${iconStyle}
`;

export const MessagesIcon = styled(Icon).attrs({
  name: 'mail',
})`
  ${iconStyle}
`;

export const ProfileIcon = styled(Icon).attrs({
  name: 'profile',
})`
  ${iconStyle}
`;

export const BottomSide = styled.div`
  align-items: center;
  display: flex;
  margin-top: 20px;
  padding: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.twitterDarkHover};
    border-radius: 50px;
  }

  @media ${(props) => props.theme.mediaQueries.lg} {
    align-items: center;
  }
`;

export const Avatar = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 50%;
  flex-shrink: 0;
  height: 40px;
  width: 40px;

  ${pictureStyle};
`;

export const ProfileData = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.lg} {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-left: 8px;
  }
`;

export const ProfileUserName = styled.strong``;

export const ProfileUsername = styled.span`
  color: ${(props) => props.theme.colors.gray};
`;

export const MoreOptionsIcon = styled(Icon).attrs({
  name: 'arrowDown',
})`
  display: none;
  fill: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.mediaQueries.lg} {
    display: inline-block;
    font-size: 14px;
    height: 25px;
    margin-left: 30px;
    width: 25px;
  }
`;

export const NewTweetIcon = styled(Icon).attrs({
  name: 'newTweet',
})`
  fill: ${(props) => props.theme.colors.white};
  height: 22px;
  width: 22px;

  @media ${(props) => props.theme.mediaQueries.lg} {
    display: none;
  }
`;
