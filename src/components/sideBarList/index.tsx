import React from 'react';

import { SideBarListContainer, Item, Title } from './styles';

interface SideBarListProps {
  elements: React.ReactNode[];
  title: string;
}

const SideBarList: React.FC<SideBarListProps> = ({ elements, title }) => {
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
