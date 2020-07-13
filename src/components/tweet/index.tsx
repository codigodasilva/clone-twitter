import React from 'react';

import {
  TweetContainer,
  RetweetdMessage,
  RetweetIconMiniature,
  TweetBody,
  Avatar,
  TweetContent,
  ContentHeader,
  ProfileName,
  ProfileUsername,
  Dot,
  TweetDate,
  ProfileDescription,
  ContentImage,
  IconsWrapper,
  CommentStatus,
  RetweetStatus,
  LikeStatus,
  RetweetIcon,
  CommentIcon,
  LikeIcon,
  OptionsIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <TweetContainer>
      <RetweetdMessage>
        <RetweetIconMiniature />
        You Retweeted
      </RetweetdMessage>
      <TweetBody>
        <Avatar />
        <TweetContent>
          <ContentHeader>
            <ProfileName>Barack Obama</ProfileName>
            <ProfileUsername>@BarackObama</ProfileUsername>
            <Dot />
            <TweetDate>Jun 1</TweetDate>
          </ContentHeader>
          <ProfileDescription>
            I wrote out some thoughts on how to make this moment a real turning
            point to bring about real change––and pulled together some resources
            to help young activists sustain the momentum by channeling their
            energy into concrete action.
          </ProfileDescription>
          <ContentImage />

          <IconsWrapper>
            <CommentStatus>
              <CommentIcon />1
            </CommentStatus>

            <RetweetStatus>
              <RetweetIcon />8
            </RetweetStatus>

            <LikeStatus>
              <LikeIcon />
              25
            </LikeStatus>
            <OptionsIcon />
          </IconsWrapper>
        </TweetContent>
      </TweetBody>
    </TweetContainer>
  );
};

export default Tweet;
