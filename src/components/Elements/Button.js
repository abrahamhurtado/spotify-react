import styled, { css } from "react-emotion";
import { backgrounds, borderColors, colors } from "../../utils/backgrounds";

const dynamicButtonStyles = ({ hierarchy = "primary", action = "default" }) => {
  return css`
    background: ${backgrounds[hierarchy][action]};
    color: ${colors[hierarchy][action]};
    border: ${hierarchy === "secondary" ? "2px solid" : "none"};
    border-color: ${borderColors[hierarchy][action]};
  `;
};

const Button = styled("button")`
  ${dynamicButtonStyles};
  text-align: center;
  padding: 0.75rem 1rem;
  margin: 0;
  font-size: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  width: auto;
  & > * {
    flex: 1 1 auto;
  }
`;

export default Button;
