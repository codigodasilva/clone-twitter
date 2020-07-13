import React from 'react';

import { SideBarListContainer, Item, Title } from './styles';

interface SideBarListProps {
  title: string;
  elements: React.ReactNode[];
}

const SideBarList: React.FC<SideBarListProps> = ({ title, elements }) => {
  return (
    <SideBarListContainer>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </SideBarListContainer>
  );
};

export default SideBarList;
