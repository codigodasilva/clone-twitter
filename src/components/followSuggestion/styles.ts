import styled from 'styled-components';

import Button from '../button';

export const FollowSuggestionContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const FollowSuggestionWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const SuggestionAvatar = styled.img`
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 50%;
  height: 48px;
  margin-right: 8px;
  width: 48px;
`;

export const SuggestionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SuggestionName = styled.strong`
  font-size: 14px;
`;

export const SuggestionUsername = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
`;

export const FollowButton = styled(Button)`
  padding: 6px 16px;
`;
