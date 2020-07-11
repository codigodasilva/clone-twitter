import React from 'react';

import {
  FeedContainer,
  ContentHeader,
  ButtonWrapper,
  BackButtonIcon,
  ProfileInfo,
  UserName,
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
          <BackButtonIcon></BackButtonIcon>
        </ButtonWrapper>
        <ProfileInfo>
          <UserName>Diego Ramos</UserName>
          <TwitsAmount>127 tweets</TwitsAmount>
        </ProfileInfo>
      </ContentHeader>

      {/* <ProfilePage></ProfilePage> */}

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
