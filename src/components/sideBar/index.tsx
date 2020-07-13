import React from 'react';

import {
  SideBarContainer,
  SearchBarWrapper,
  SearchInput,
  SearchIcon,
  SideBarWrapper,
} from './styles';

import SideBarList from '../sideBarList';
import FollowSuggestion from '../followSuggestion';

const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <SearchBarWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchBarWrapper>

      <SideBarWrapper>
        <SideBarList
          title="What's happening"
          elements={[<h3>teste</h3>, <h3>teste</h3>, <h3>teste</h3>]}
        />

        <SideBarList
          title="Who to floow"
          elements={[
            <FollowSuggestion name="Fernando Daciuk" username="@fdaciuk" />,
            <FollowSuggestion name="Felipe Fialho" username="@felipefialho_" />,
            <FollowSuggestion
              name="Willian Justen"
              username="@Willian_justen"
            />,
          ]}
        />
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
