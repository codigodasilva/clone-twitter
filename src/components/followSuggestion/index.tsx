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
  suggestionAvatar: string;
  suggestionName: string;
  suggestionUsername: string;
}

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({
  suggestionAvatar,
  suggestionName,
  suggestionUsername,
}) => {
  return (
    <FollowSuggestionContainer>
      <FollowSuggestionWrapper>
        <SuggestionAvatar src={suggestionAvatar} />
        <SuggestionInfo>
          <SuggestionName>{suggestionName}</SuggestionName>
          <SuggestionUsername>{suggestionUsername}</SuggestionUsername>
        </SuggestionInfo>
      </FollowSuggestionWrapper>
      <FollowButton outlined>Follow</FollowButton>
    </FollowSuggestionContainer>
  );
};

export default FollowSuggestion;
