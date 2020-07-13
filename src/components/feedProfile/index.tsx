import React, { useState } from 'react';

import Tweet from '../tweet';
import { feedProfileData } from './feedProfileData';

import {
  FeedProfileContainer,
  TabsTitles,
  TabsWrapper,
  Tab,
  TabTitle,
  TweetsWrapper,
} from './styles';

const FeedProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tweets');

  return (
    <FeedProfileContainer>
      <TabsTitles>
        <TabTitle
          className={activeTab === 'tweets' ? 'active' : ''}
          onClick={() => setActiveTab('tweets')}
        >
          Tweets
        </TabTitle>
        <TabTitle
          className={activeTab === 'tweets & replies' ? 'active' : ''}
          onClick={() => setActiveTab('tweets & replies')}
        >
          Tweets & replies
        </TabTitle>
        <TabTitle
          className={activeTab === 'media' ? 'active' : ''}
          onClick={() => setActiveTab('media')}
        >
          Media
        </TabTitle>
        <TabTitle
          className={activeTab === 'likes' ? 'active' : ''}
          onClick={() => setActiveTab('likes')}
        >
          Likes
        </TabTitle>
      </TabsTitles>
      <TabsWrapper>
        <Tab>
          {activeTab === 'tweets' && (
            <TweetsWrapper>
              {feedProfileData.map((tweet) => (
                <Tweet
                  key={tweet.id}
                  authorImage={tweet.authorImage}
                  authorName={tweet.authorName}
                  authorUsername={tweet.authorUsername}
                  date={tweet.date}
                  message={tweet.message}
                  comments={tweet.comments}
                  retweets={tweet.retweets}
                  likes={tweet.likes}
                />
              ))}
            </TweetsWrapper>
          )}
        </Tab>
      </TabsWrapper>
    </FeedProfileContainer>
  );
};

export default FeedProfile;
