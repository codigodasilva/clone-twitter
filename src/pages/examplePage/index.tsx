import React from 'react';

import { ExampleContainer } from './styles';
import { ExampleComponent } from '../../components';

const ExamplePage: React.FC = () => {
  return (
    <ExampleContainer>
      <ExampleComponent>clone-twitter</ExampleComponent>
    </ExampleContainer>
  );
};

export default ExamplePage;
