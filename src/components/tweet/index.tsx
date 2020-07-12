import React from 'react';

import {
  TweetContainer,
  RetweetdMessage,
  RetweetIcon,
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
  RetweetStatus,
  CommentIcon,
  LikeIcon,
  OptionsIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <TweetContainer>
      <RetweetdMessage>
        <RetweetIcon />
        you retweeted
      </RetweetdMessage>
      <TweetBody>
        <Avatar />
        <TweetContent>
          <ContentHeader>
            <ProfileName>Diego Ramos</ProfileName>
            <ProfileUsername>@diegocoderamos</ProfileUsername>
            <Dot />
            <TweetDate>July 12</TweetDate>
          </ContentHeader>
          <ProfileDescription>developer at github</ProfileDescription>
          <ContentImage />

          <IconsWrapper>
            <RetweetStatus>
              <CommentIcon />1
            </RetweetStatus>

            <RetweetStatus>
              <RetweetIcon />8
            </RetweetStatus>

            <RetweetStatus>
              <LikeIcon />
              25
            </RetweetStatus>
            <OptionsIcon />
          </IconsWrapper>
        </TweetContent>
      </TweetBody>
    </TweetContainer>
  );
};

export default Tweet;
