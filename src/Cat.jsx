import styled from "styled-components";

// 자식컴포넌트
const Cat = (props) => {
  const { name, age } = props;
  return (
    <div>
      냥이의 이름은 {name}이고, {age}살입니다.
    </div>
  );
};
const Dog = (props) => {
  const { name, age } = props;
  return (
    <div>
      강아지의 이름은 {name}고, {age}살입니다.
    </div>
  );
};

// Const props = {name: "봄", age:"3"}과 같은 것

export default Cat;
export { Dog };
