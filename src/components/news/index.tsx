import React from 'react';

import { NewsContainer, Topic, Title } from './styles';

interface NewsProps {
  topic: string;
  title: string;
}

const News: React.FC<NewsProps> = ({ topic, title }) => {
  return (
    <NewsContainer>
      <Topic>{topic}</Topic>
      <Title>{title}</Title>
    </NewsContainer>
  );
};

export default News;
