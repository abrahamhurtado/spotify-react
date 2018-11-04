import styled, { css } from "react-emotion";

const titleStyles = css`
  color: #fff;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.75rem;
`;

export const Title = styled("h1")`
  ${titleStyles};
  line-height: 1.125;
`;

export const Subtitle = styled("h2")`
  ${titleStyles};
  line-height: 1.25;
`;
