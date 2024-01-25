import styled from "styled-components";

const Nav = () => {
  return (
    <Nv>
      <ul>
        <li>
          <a href="">html</a>
        </li>
        <li>
          <a href="">css</a>
        </li>
        <li>
          <a href="">java script</a>
        </li>
      </ul>
    </Nv>
  );
};

const NavMobile = (props) => {
  console.log(props);
  console.log(props.nav);
  console.log(props.nav[0]);
  console.log(props.nav[1]);
  console.log(props.nav[2]);
  const list = [];
  for (let i = 0; i < props.nav.length; i++) {
    list.push(
      <li>
        <a href={"/sub/" + props.nav[i].title + ".html"}>
          {props.nav[i].title}
        </a>
      </li>
    );
  }

  return (
    <Nv>
      Nav
      <ul>{list}</ul>
    </Nv>
  );
};

const Nv = styled.div`
  height: 200px;
  background-color: lightpink;
`;

export default Nav;
export { NavMobile };
// default는 하나만 있어야 함.
// default 값이 아니면 {}를 넣어줘야 함.
// 여러개라면 {a, b, c, d} 여러개 넣어주기

// 문자가 아닌 데이터를 받을 때에는 {}로 감싸줘야 함
