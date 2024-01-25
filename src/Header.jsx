import styled from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <Hd>
      <h1>React logo</h1>
    </Hd>
  );
}
const Hd = styled.div`
  padding-top: 10px;
  height: 100px;
  background-color: yellowgreen;
`;

export default Header;
