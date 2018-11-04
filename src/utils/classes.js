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
