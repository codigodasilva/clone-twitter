import React from 'react';

import Feed from '../feed';

import { LayoutContainer, ContentWrapper, SideBar } from './styles';

import MenuBar from '../menuBar';

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
