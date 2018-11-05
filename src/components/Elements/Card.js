import styled from "react-emotion";

const Card = styled("li")`
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: minmax(300px, 300px);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
  margin-bottom: 2rem;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
  }
`;

export default Card;
