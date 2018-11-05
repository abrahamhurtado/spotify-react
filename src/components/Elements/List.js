import styled from "react-emotion";

const List = styled("ul")`
  padding: 0;
  margin: 1rem 0 0;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: ${props =>
    props.horizontal ? "row" : props.vertical ? "column" : "intiial"};
`;

export default List;
