import styled from "styled-components";
import Nav from "./Nav";

function Header(props) {
  const { nav, logo } = props;
  return (
    <Hd>
      <h1>{logo}</h1>
      <Nav nav={nav} />
    </Hd>
  );
}
const Hd = styled.div`
  padding-top: 10px;
  height: 300px;
  background-color: yellowgreen;
`;

export default Header;
