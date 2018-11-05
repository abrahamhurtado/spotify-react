import styled from "react-emotion";

const TrackArtists = styled("p")`
  margin: 0;
  padding: 0.5rem 1rem;
  color: #f7f7f7;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-size: 1rem;
  display: block;
`;

export default TrackArtists;
