import styled from "styled-components";

const TodoHd = () => {
  return (
    <TodoHdSt>
      <h2>할 일 관리 APP</h2>
      <p>2024.03.15 오늘의 할 일을 관리하세요!</p>
    </TodoHdSt>
  );
};

const TodoHdSt = styled.div`
  background-color: lightgoldenrodyellow;
  padding: 10px 0;
`;
export default TodoHd;
