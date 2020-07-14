import React from 'react';

import {
  MenuBarContainer,
  TopSide,
  LogoWrapper,
  TwitterLogo,
  MenuButtonWrapper,
  HomeIcon,
  ButtonTitle,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  ProfileIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ProfileUserName,
  ProfileUsername,
  MoreOptionsIcon,
  NewTweetIcon,
  ButtonText,
} from './styles';

import Button from '../button';

const MenuBar: React.FC = () => {
  return (
    <MenuBarContainer>
      <TopSide>
        <LogoWrapper>
          <TwitterLogo />
        </LogoWrapper>
        <MenuButtonWrapper>
          <HomeIcon />
          <ButtonTitle>Home</ButtonTitle>
        </MenuButtonWrapper>

        <MenuButtonWrapper>
          <ExploreIcon />
          <ButtonTitle>Explore</ButtonTitle>
        </MenuButtonWrapper>

        <MenuButtonWrapper>
          <NotificationsIcon />
          <ButtonTitle>Notifications</ButtonTitle>
        </MenuButtonWrapper>

        <MenuButtonWrapper>
          <MessagesIcon />
          <ButtonTitle>Messages</ButtonTitle>
        </MenuButtonWrapper>

        <MenuButtonWrapper className="active">
          <ProfileIcon />
          <ButtonTitle>Profile</ButtonTitle>
        </MenuButtonWrapper>

        <Button>
          <NewTweetIcon />
          <ButtonText>Tweet</ButtonText>
        </Button>
      </TopSide>

      <BottomSide>
        <Avatar />
        <ProfileData>
          <ProfileUserName>Diego Ramos</ProfileUserName>
          <ProfileUsername>@diegocoderamos</ProfileUsername>
        </ProfileData>
        <MoreOptionsIcon />
      </BottomSide>
    </MenuBarContainer>
  );
};

export default MenuBar;
