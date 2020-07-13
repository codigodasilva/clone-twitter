import styled, { css } from 'styled-components';

import Icon from '../icon';
import { coderamos } from '../../assets';

const iconStyle = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  fill: ${(props) => props.theme.colors.white};
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
    position: sticky;
    top: 0;
    left: 0;
    padding: 8px 20px 20px;

    max-height: 100vh;
    overflow-y: scroll;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.lg} {
    align-items: flex-start;
  }
`;

export const MenuButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 16px;
  cursor: pointer;
  border-radius: 40px;

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
    margin-top: 32px;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    > span {
      display: none;
    }

    @media ${(props) => props.theme.mediaQueries.lg} {
      width: 100%;
      border-radius: 30px;
      height: unset;

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
    margin-left: 20px;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const TwitterLogo = styled(Icon).attrs({
  name: 'twitter',
})`
  fill: ${(props) => props.theme.colors.twitter};
  width: 42px;
  height: 42px;
  margin-bottom: 20px;
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

export const BottonSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray};

  ${pictureStyle};
`;

export const ProfileData = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.lg} {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    font-size: 14px;
  }
`;

export const ProfileUserName = styled.strong``;

export const ProfileUsername = styled.span`
  color: ${(props) => props.theme.colors.gray};
`;

export const MoreOptionsIcon = styled(Icon).attrs({
  name: 'arrowDown',
})`
  fill: ${(props) => props.theme.colors.gray};
  width: 18px;
  height: 18px;
`;
