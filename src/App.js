import Calculator from "./Calculator";
import Cat, { Dog } from "./Cat";
import Event from "./Event";
import Layout from "./Layout";
import Product from "./Product";
import Setnumber from "./Setnumber";
import Sort2 from "./Sort2";
import State from "./State";

function App() {
  return (
    <>
      <Sort2 />
      <Calculator />
      <hr></hr>
      <Setnumber />
      <hr></hr>
      <State />
      <hr></hr>
      <Event />
      <hr></hr>
      <Product />
      <hr></hr>
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
