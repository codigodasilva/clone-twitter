import styled, { css } from 'styled-components';
import { coderamos } from '../../assets';
import Icon from '../icon';

import Button from '../button';

const iconStyle = css`
  cursor: pointer;
  fill: ${(props) => props.theme.colors.gray};
  height: 18px;
  margin-right: 4px;
  transition: fill 0.2s;
  width: 18px;

  &:hover,
  &.active {
    fill: ${(props) => props.theme.colors.twitter};
  }
`;

const pictureStyle = css`
  background: url(${coderamos}) no-repeat center;
  background-size: max(45px, min(135px, 22vw)) max(45px, min(135px, 22vw));
`;

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BannerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.twitter};
  flex-shrink: 0;
  height: min(33vw, 199px);
  position: relative;
  width: 100%;
`;

export const Avatar = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 50%;
  border: 3.75px solid ${(props) => props.theme.colors.primary};
  bottom: max(-60px, -10vw);
  height: max(45px, min(135px, 22vw));
  left: 16px;
  position: absolute;
  width: max(45px, min(135px, 22vw));

  ${pictureStyle};
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  padding: min(calc(10vw + 8px), 64px) 16px 0;
  position: relative;
`;

export const ProfileName = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileUsername = styled.h2`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  font-weight: normal;
`;

export const ProfileDescription = styled.p`
  font-size: 16px;
  margin-top: 12px;
`;

export const ProfileDescriptionLink = styled.a`
  color: ${(props) => props.theme.colors.twitter};
  text-decoration: none;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 10px;
  margin-top: 10px;

  @media ${(props) => props.theme.mediaQueries.sm} {
    flex-direction: row;
  }
`;

export const InfoItem = styled.li`
  align-items: center;
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  font-size: 16px;
  white-space: nowrap;

  @media ${(props) => props.theme.mediaQueries.sm} {
    flex-direction: row;

    & + li {
      margin-left: 16px;
    }
  }
`;

export const LocationIcon = styled(Icon).attrs({
  name: 'location',
})`
  ${iconStyle}
`;

export const BalloonIcon = styled(Icon).attrs({
  name: 'balloon',
})`
  ${iconStyle}
`;

export const CalendarIcon = styled(Icon).attrs({
  name: 'calendar',
})`
  ${iconStyle}
`;

export const FollowageWrapper = styled.div`
  display: flex;
`;

export const Following = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;

  & + span {
    margin-left: 20px;
  }
`;

export const Followers = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
`;

export const ButtonEdit = styled(Button)`
  font-size: 12px;
  padding: 4px 16px;
  position: absolute;
  right: 8px;
  top: 2vw;

  @media ${(props) => props.theme.mediaQueries.xs} {
    font-size: 16px;
    padding: 10px 20px;
    top: 10px;
  }
`;
