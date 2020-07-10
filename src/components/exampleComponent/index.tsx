import React from 'react';

import { ExampleText } from './styles';

const ExampleComponent: React.FC = ({ children }) => {
  return <ExampleText>{children}</ExampleText>;
};

export default ExampleComponent;
