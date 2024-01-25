import Cat, { Dog } from "./Cat";
import Layout from "./Layout";

function App() {
  return (
    <>
      {/* 부모 컴포넌트 */}
      <Cat name="봄이" age="3" />
      {/* {name: "봄이", age:2} 객체가 Cat 자식 컴포넌트로 전달됨 => Cat.jsx의 매개변수 props로 전달 */}
      <Cat name="여름" age="5" />
      <Dog name="멍멍이" age="2" />

      <Layout />
    </>
  );
}

export default App;
