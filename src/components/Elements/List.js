import styled from "react-emotion";

const List = styled("ul")`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: ${props =>
    props.horizontal ? "row" : props.vertical ? "column" : "intiial"};
`;

export default List;
