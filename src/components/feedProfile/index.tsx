import React from 'react';

import { FeedProfileContainer, TabsWrapper, Tab } from './styles';

const FeedProfile: React.FC = () => {
  return (
    <FeedProfileContainer>
      <TabsWrapper>
        <Tab className="active">
          Tweets
          {/* <TweetsWrapper>
          <TweetWrapper />
          <TweetWrapper />
          <TweetWrapper />
          <TweetWrapper />
        </TweetsWrapper> */}
        </Tab>
        <Tab>Tweets & Replies</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </TabsWrapper>
    </FeedProfileContainer>
  );
};

export default FeedProfile;
