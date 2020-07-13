import styled from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

export default styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.outlined ? 'transparent' : `${props.theme.colors.twitter}`};
  border: ${(props) =>
    props.outlined ? `1px solid ${props.theme.colors.twitter}` : 'none'};
  border-radius: 30px;
  color: ${(props) =>
    props.outlined
      ? `${props.theme.colors.twitter}`
      : `${props.theme.colors.white}`};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;

  &:hover {
    background-color: ${(props) =>
      props.outlined
        ? `${props.theme.colors.twitterDarkHover}`
        : `${props.theme.colors.twitterLightHover}`};
  }
`;
