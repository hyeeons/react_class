import styled from "styled-components";

const Nav = (props) => {
  console.log("Nav입니다.");
  console.log(props); // {nav: Array(3)}
  console.log(props.nav); // (3) [{...}, {...}, {...}]
  console.log(props.nav[0]); // {title:'pc-메뉴1'}
  console.log(props.nav[0].title); // pc-메뉴1
  const list = [];
  return (
    <Nv>
      <ul>
        {props.nav.map((item, index) => (
          <li key={index}>
            <a href={"/sub/" + item.title + ".html"}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Nv>
  );
};

const NavMobile = (props) => {
  console.log("NavMobile입니다.");
  console.log(props);
  console.log(props.nav);
  console.log(props.nav[0]);
  console.log(props.nav[1]);
  console.log(props.nav[2]);
  const list = [];
  for (let i = 0; i < props.nav.length; i++) {
    list.push(
      <li key={i}>
        <a href={"/sub/" + props.nav[i].title + ".html"}>
          {props.nav[i].title}
        </a>
      </li>
    );
  }

  return (
    <Nv>
      NAV
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

// map 함수
// {배열이름.map(()=> ())}
// {배열이름.map((item, index)=> ())}
