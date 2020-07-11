import React from 'react';

import FeedProfile from '../feedProfile';

import {
  ProfileContainer,
  BannerWrapper,
  Avatar,
  ProfileData,
  ButtonEdit,
  ProfileName,
  ProfileUsername,
  ProfileDescription,
  ProfileDescriptionLink,
  InfoList,
  InfoItem,
  LocationIcon,
  CakeIcon,
  FollowageWrapper,
  Following,
  Followers,
} from './styles';

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <BannerWrapper>
        <Avatar />
      </BannerWrapper>

      <ProfileData>
        <ButtonEdit outlined>edit profile</ButtonEdit>
        <ProfileName>Diego Ramos</ProfileName>
        <ProfileUsername>@diegocoderamos</ProfileUsername>
        <ProfileDescription>
          developer at&ensp;
          <ProfileDescriptionLink href="https://github.com/coderamos">
            coderamos
          </ProfileDescriptionLink>
        </ProfileDescription>

        <InfoList>
          <InfoItem>
            <LocationIcon />
            São Paulo, Brazil
          </InfoItem>

          <InfoItem>
            <CakeIcon />
            born october 8, 1990
          </InfoItem>
        </InfoList>

        <FollowageWrapper>
          <Following>
            <strong>80</strong> following
          </Following>
          <Followers>
            <strong>11</strong> followers
          </Followers>
        </FollowageWrapper>
      </ProfileData>

      <FeedProfile />
    </ProfileContainer>
  );
};

export default Profile;
