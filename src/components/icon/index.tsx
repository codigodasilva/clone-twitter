import React from 'react';
import { colors } from '../../styles/theme';

import { ReactComponent as arrowDown } from '../../assets/twitterIcons/arrowDown.svg';
import { ReactComponent as arrowLeft } from '../../assets/twitterIcons/arrowLeft.svg';
import { ReactComponent as balloon } from '../../assets/twitterIcons/balloon.svg';
import { ReactComponent as bell } from '../../assets/twitterIcons/bell.svg';
import { ReactComponent as calendar } from '../../assets/twitterIcons/calendar.svg';
import { ReactComponent as chat } from '../../assets/twitterIcons/chat.svg';
import { ReactComponent as hashtag } from '../../assets/twitterIcons/hashtag.svg';
import { ReactComponent as home } from '../../assets/twitterIcons/home.svg';
import { ReactComponent as like } from '../../assets/twitterIcons/like.svg';
import { ReactComponent as location } from '../../assets/twitterIcons/location.svg';
import { ReactComponent as mail } from '../../assets/twitterIcons/mail.svg';
import { ReactComponent as newTweet } from '../../assets/twitterIcons/newTweet.svg';
import { ReactComponent as profile } from '../../assets/twitterIcons/profile.svg';
import { ReactComponent as retweet } from '../../assets/twitterIcons/retweet.svg';
import { ReactComponent as search } from '../../assets/twitterIcons/search.svg';
import { ReactComponent as tweetOptions } from '../../assets/twitterIcons/tweetOptions.svg';
import { ReactComponent as twitter } from '../../assets/twitterIcons/twitter.svg';

interface IconProps {
  className?: string;
  color?: keyof typeof colors;
  height?: number;
  name: keyof typeof dictionary;
  width?: number;
}

const dictionary = {
  arrowDown,
  arrowLeft,
  balloon,
  bell,
  calendar,
  chat,
  hashtag,
  home,
  like,
  location,
  mail,
  newTweet,
  profile,
  retweet,
  search,
  tweetOptions,
  twitter,
};

const Icon: React.FC<IconProps> = ({
  className,
  color,
  height,
  name,
  width,
  ...rest
}) => {
  if (!name) return null;
  const IconExporter = dictionary[name];
  return (
    <IconExporter
      className={className}
      fill={color}
      height={height}
      width={width}
      {...rest}
    />
  );
};

export default Icon;
