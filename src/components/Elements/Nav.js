import styled from "react-emotion";

const Nav = styled("nav")`
  width: 100%;
  display: flex;
  align-items: center;
  background: #333;
  position: sticky;
  top: 0;
  z-index: 9999;
  h1 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0 !important;
    flex: 1 0 auto;
    padding: 0 1rem;
  }
  ul {
    margin: 0;
    a {
      width: 50%;
      margin: 0 !important;
      li {
        height: auto;
        max-width: 100%;
        border-radius: 0px;
        justify-content: center;
        text-align: center;
        h3 {
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Nav;
