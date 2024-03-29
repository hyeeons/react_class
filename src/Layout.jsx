import Airbnb from "./Airbnbicon";
import Article from "./Article";
import Comments from "./Comments";
import Footer from "./Footer";
import Header from "./Header";
import { NavMobile } from "./Nav";

function Layout() {
  const navArr = [
    { title: "m-메뉴1" },
    { title: "m-메뉴2" },
    { title: "m-메뉴3" },
  ];
  const nav = [
    { title: "pc-메뉴1" },
    { title: "pc-메뉴2" },
    { title: "pc-메뉴3" },
  ];

  return (
    <div className="wrap">
      <Header logo="봄이회사" nav={nav} />
      <NavMobile nav={navArr} />
      <Airbnb />
      <Comments />
      <Article tit="html이란?" desc="html이란 이것이다." />
      <Article tit="css란?" desc="css란 이것이다." />
      <Article tit="js란?" desc="js란 이것이다." />
      <Footer />
    </div>
  );
}

export default Layout;

// 1. return
// return 내부에는 하나의 태그만 존재해야 함
// 여러개의 태그를 사용하고 싶다면 <> </>
// 또는 <Fragment> </Fragment>를 사용함.
// 한 줄 이상인 경우 ()로 감싸줌

// 2. 함수선언
// 일반함수
// const Footer = function () {
//   return <Ft>footer</Ft>;
// };

// 화살표함수
// const Footer = () => {
//   return <Ft>footer</Ft>;
// };

// 3. style 만들기
// styled.header (여기서 header는 태그이름)
// component의 앞글자는 대문자로 해야 함
