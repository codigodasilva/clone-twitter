import React from 'react';

import Profile from '../profile';

import {
  HeaderContainer,
  ContentHeader,
  ButtonWrapper,
  BackButtonIcon,
  ProfileInfo,
  ProfileName,
  TwitsAmount,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ContentHeader>
        <ButtonWrapper>
          <BackButtonIcon />
        </ButtonWrapper>
        <ProfileInfo>
          <ProfileName>Diego Ramos</ProfileName>
          <TwitsAmount>175 Tweets</TwitsAmount>
        </ProfileInfo>
      </ContentHeader>

      <Profile />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </HeaderContainer>
  );
};

export default Header;
