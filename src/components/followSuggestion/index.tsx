import React from 'react';

import {
  FollowSuggestionContainer,
  FollowSuggestionWrapper,
  SuggestionAvatar,
  SuggestionInfo,
  SuggestionName,
  SuggestionUsername,
  FollowButton,
} from './styles';

interface FollowSuggestionProps {
  name: string;
  username: string;
}

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({
  name,
  username,
}) => {
  return (
    <FollowSuggestionContainer>
      <FollowSuggestionWrapper>
        <SuggestionAvatar />
        <SuggestionInfo>
          <SuggestionName>{name}</SuggestionName>
          <SuggestionUsername>{username}</SuggestionUsername>
        </SuggestionInfo>
      </FollowSuggestionWrapper>
      <FollowButton outlined>Follow</FollowButton>
    </FollowSuggestionContainer>
  );
};

export default FollowSuggestion;
