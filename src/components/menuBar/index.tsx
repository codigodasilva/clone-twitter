import React from 'react';

import {
  MenuBarContainer,
  TopSide,
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
} from './styles';

import Button from '../button';

const MenuBar: React.FC = () => {
  return (
    <MenuBarContainer>
      <TopSide>
        <TwitterLogo />
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
          <span>Tweet</span>
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
