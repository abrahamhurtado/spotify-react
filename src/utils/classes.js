import { css } from "react-emotion";

export const boxShadow = css`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.35);
  }
`;

export const spotifyLogo = css`
  fill: #fff;
  height: 1.5rem;
  margin-right: 0.75rem;
`;

export const spotifyButton = css`
  background: #1db954;
  color: #fff;
`;

export const basicTransition = css`
  transition: all 0.2s ease-in;
`;

export const positionAfterPseudoElement = props => css`
  &::after {
    content: "${props.position}";
    display: block;
    position: absolute;
    background: red;
    color: #f7f7f7;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    opacity: .25;
    font-size: 1.5rem;
    ${basicTransition}
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;
