import React from 'react';

import StickyBox from 'react-sticky-box';

import { sideBarData } from './sideBarData';

import {
  SideBarContainer,
  SearchBarWrapper,
  SearchInput,
  SearchIcon,
  SideBarWrapper,
} from './styles';

import SideBarList from '../sideBarList';
import News from '../news';
import FollowSuggestion from '../followSuggestion';

const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <SearchBarWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchBarWrapper>

      <StickyBox>
        <SideBarWrapper>
          <SideBarList
            title="What's happening"
            elements={[
              <News topic="Trending in Brazil" title="COVID-19" />,
              <News topic="Cinema" title="Matrix 4" />,
              <News topic="Entertainment" title="PlayStation 5" />,
            ]}
          />
          <SideBarList
            title="Who to floow"
            elements={sideBarData.map((suggestion) => (
              <FollowSuggestion
                key={suggestion.id}
                suggestionAvatar={suggestion.suggestionAvatar}
                suggestionName={suggestion.suggestionName}
                suggestionUsername={suggestion.suggestionUsername}
              />
            ))}
          />
        </SideBarWrapper>
      </StickyBox>
    </SideBarContainer>
  );
};

export default SideBar;
