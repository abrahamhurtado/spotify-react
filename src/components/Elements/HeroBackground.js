import styled from "react-emotion";

const HeroBackground = styled("div")`
  width: 100%;
  height: 100vh;
  background: ${props => (props.bgImage ? `url(${props.bgImage})` : "none")};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > * {
    position: relative;
  }
  &::before {
    display: block;
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props =>
      props.gradientStyles.gradientFallback
        ? props.gradientStyles.gradientFallback
        : "none"};
    background: ${props =>
      props.gradientStyles.gradientFallbackWebkit
        ? props.gradientStyles.gradientFallbackWebkit
        : "none"};
    background: ${props =>
      props.gradientStyles.gradient ? props.gradientStyles.gradient : "none"};
    opacity: ${props =>
      props.gradientStyles.opacity ? props.gradientStyles.opacity : "0.5"};
  }
`;

export default HeroBackground;
