import React from 'react';

import Profile from '../profile';

import {
  FeedContainer,
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

const Feed: React.FC = () => {
  return (
    <FeedContainer>
      <ContentHeader>
        <ButtonWrapper>
          <BackButtonIcon />
        </ButtonWrapper>
        <ProfileInfo>
          <ProfileName>Diego Ramos</ProfileName>
          <TwitsAmount>127 Tweets</TwitsAmount>
        </ProfileInfo>
      </ContentHeader>

      <Profile />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </FeedContainer>
  );
};

export default Feed;
