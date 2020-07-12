import React from 'react';
import { colors } from '../../styles/theme';

import { ReactComponent as arrowLeft } from '../../assets/twitterIcons/arrowLeft.svg';
import { ReactComponent as balloon } from '../../assets/twitterIcons/balloon.svg';
import { ReactComponent as bell } from '../../assets/twitterIcons/bell.svg';
import { ReactComponent as calendar } from '../../assets/twitterIcons/calendar.svg';
import { ReactComponent as comment } from '../../assets/twitterIcons/comment.svg';
import { ReactComponent as home } from '../../assets/twitterIcons/home.svg';
import { ReactComponent as like } from '../../assets/twitterIcons/like.svg';
import { ReactComponent as location } from '../../assets/twitterIcons/location.svg';
import { ReactComponent as mail } from '../../assets/twitterIcons/mail.svg';
import { ReactComponent as newTweet } from '../../assets/twitterIcons/newTweet.svg';
import { ReactComponent as retweet } from '../../assets/twitterIcons/retweet.svg';
import { ReactComponent as search } from '../../assets/twitterIcons/search.svg';
import { ReactComponent as tweetOptions } from '../../assets/twitterIcons/tweetOptions.svg';

interface IconProps {
  name: keyof typeof dictionary;
  color?: keyof typeof colors;
  width?: number;
  height?: number;
  className?: string;
}

const dictionary = {
  arrowLeft,
  balloon,
  bell,
  calendar,
  comment,
  home,
  like,
  location,
  mail,
  newTweet,
  retweet,
  search,
  tweetOptions,
};

const Icon: React.FC<IconProps> = ({
  name,
  color,
  width,
  height,
  className,
  ...rest
}) => {
  if (!name) return null;
  const IconExporter = dictionary[name];
  return (
    <IconExporter
      fill={color}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  );
};

export default Icon;
