import styled from "react-emotion";
import { basicTransition, boxShadow } from "../../utils/classes";

const ChoiceCard = styled("li")`
  ${boxShadow};
  ${basicTransition};
  background-image: ${props =>
    props.bgImage ? `url(${props.bgImage})` : "none"};
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  list-style: none;
  width: 35%;
  max-width: 250px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: left;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  margin: 0 1rem;
  position: relative;
  & > * {
    position: relative;
  }
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: ${props =>
      props.gradientStyles && props.gradientStyles.opacity
        ? props.gradientStyles.opacity
        : "1"};
    background: ${props =>
      props.gradientStyles && props.gradientStyles.gradientFallback
        ? props.gradientStyles.gradientFallback
        : "transparent"};
    background: ${props =>
      props.gradientStyles && props.gradientStyles.gradientFallbackWebkit
        ? props.gradientStyles.gradientFallbackWebkit
        : "transparent"};
    background: ${props =>
      props.gradientStyles && props.gradientStyles.gradient
        ? props.gradientStyles.gradient
        : "transparent"};
  }
`;

export default ChoiceCard;
