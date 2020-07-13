import React from 'react';

import Tweet from '../tweet';

import {
  FeedProfileContainer,
  TabsWrapper,
  Tab,
  TabTitle,
  TweetsWrapper,
} from './styles';

const FeedProfile: React.FC = () => {
  return (
    <FeedProfileContainer>
      <TabsWrapper>
        <Tab>
          <TabTitle className="active">Tweets</TabTitle>
          <TweetsWrapper>
            <Tweet />
          </TweetsWrapper>
        </Tab>
        {/* <Tab>Tweets & Replies</Tab> */}
        {/* <Tab>Media</Tab> */}
        {/* <Tab>Likes</Tab> */}
      </TabsWrapper>
    </FeedProfileContainer>
  );
};

export default FeedProfile;
