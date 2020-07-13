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
  BalloonIcon,
  CalendarIcon,
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
        <ButtonEdit outlined>Edit profile</ButtonEdit>
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
            <BalloonIcon />
            Born october 8, 1990
          </InfoItem>
          <InfoItem>
            <CalendarIcon />
            Joined september 2016
          </InfoItem>
        </InfoList>

        <FollowageWrapper>
          <Following>
            <strong>80</strong> Following
          </Following>
          <Followers>
            <strong>11</strong> Followers
          </Followers>
        </FollowageWrapper>
      </ProfileData>

      <FeedProfile />
    </ProfileContainer>
  );
};

export default Profile;
