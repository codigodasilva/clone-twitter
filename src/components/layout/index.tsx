import React from 'react';

import { LayoutContainer, ContentWrapper } from './styles';

import Header from '../header';
import MenuBar from '../menuBar';
import SideBar from '../sideBar';

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <MenuBar></MenuBar>
        <Header />
        <SideBar></SideBar>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
