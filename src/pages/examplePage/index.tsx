import React from 'react';

import { ExampleContainer } from './styles';
import { ExampleComponent } from '../../components';

const ExamplePage: React.FC = () => {
  return (
    <ExampleContainer>
      <ExampleComponent>template-reactjs-typescript/</ExampleComponent>
    </ExampleContainer>
  );
};

export default ExamplePage;
