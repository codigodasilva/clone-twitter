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

interface TweetProps {
  authorImage?: string;
  authorName: string;
  authorUsername: string;
  comments: string;
  date: string;
  likes: string;
  message: string;
  retweets: string;
}

const Tweet: React.FC<TweetProps> = ({
  authorImage,
  authorName,
  authorUsername,
  date,
  message,
  comments,
  retweets,
  likes,
}) => {
  return (
    <TweetContainer>
      <RetweetdMessage>
        <RetweetIconMiniature />
        You Retweeted
      </RetweetdMessage>
      <TweetBody>
        <Avatar src={authorImage} alt={authorName} />
        <TweetContent>
          <ContentHeader>
            <ProfileName>{authorName}</ProfileName>
            <ProfileUsername>{authorUsername}</ProfileUsername>
            <Dot />
            <TweetDate>{date}</TweetDate>
          </ContentHeader>
          <ProfileDescription>{message}</ProfileDescription>
          <ContentImage />

          <IconsWrapper>
            <CommentStatus>
              <CommentIcon />
              {comments}
            </CommentStatus>

            <RetweetStatus>
              <RetweetIcon />
              {retweets}
            </RetweetStatus>

            <LikeStatus>
              <LikeIcon />
              {likes}
            </LikeStatus>
            <OptionsIcon />
          </IconsWrapper>
        </TweetContent>
      </TweetBody>
    </TweetContainer>
  );
};

export default Tweet;
