import React from 'react';

import Feed from '../feed';

import { LayoutContainer, ContentWrapper, MenuBar, SideBar } from './styles';

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <MenuBar></MenuBar>
        <Feed />
        <SideBar></SideBar>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
