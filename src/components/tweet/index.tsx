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
  RetweetStatus,
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
          <ProfileDescription>developer at codebot</ProfileDescription>
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
