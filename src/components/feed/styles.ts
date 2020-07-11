import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../assets';

const iconStyle = css`
  cursor: pointer;
  fill: ${(props) => props.theme.colors.gray};
  height: 30px;
  transition: fill 0.2s;
  width: 30px;

  &:hover,
  &.active {
    fill: ${(props) => props.theme.colors.twitter};
  }
`;

export const FeedContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media ${(props) => props.theme.mediaQueries.sm} {
    border-left: 1px solid ${(props) => props.theme.colors.outline};
    border-right: 1px solid ${(props) => props.theme.colors.outline};
  }
`;

export const ContentHeader = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  display: flex;
  padding: 8px 0 8px 12px;
  position: sticky;
  text-align: left;
  top: 0;
`;

export const ButtonWrapper = styled.button`
  border-radius: 50%;
  cursor: pointer;
  padding: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.twitterDarkHover};
  }
`;

export const BackButtonIcon = styled(ArrowLeft)`
  fill: ${(props) => props.theme.colors.twitter};
  height: 24px;
  width: 24px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const UserName = styled.strong`
  font-size: 19px;
`;

export const TwitsAmount = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 15px;
`;

export const BottomMenu = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${(props) => props.theme.colors.outline};
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 8px min(46px, max(10vw, 10px));
  position: fixed;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.sm} {
    display: none;
  }
`;

export const HomeIcon = styled(Home)`
  ${iconStyle}
`;

export const SearchIcon = styled(Search)`
  ${iconStyle}
`;

export const BellIcon = styled(Notifications)`
  ${iconStyle}
`;

export const EmailIcon = styled(Email)`
  ${iconStyle}
`;
