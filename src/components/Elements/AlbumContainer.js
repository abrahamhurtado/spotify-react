import styled from "react-emotion";
import { positionAfterPseudoElement } from "../../utils/classes";

const AlbumContainer = styled("div")`
  position: relative;
  grid-column: 1;
  grid-row: 1 / 4;
  ${positionAfterPseudoElement};
`;

export default AlbumContainer;
