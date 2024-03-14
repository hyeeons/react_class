import styled from "styled-components";

const Controller = ({ handleSetCount }) => {
  return (
    <ControlBtn>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(+1)}>+1</button>
      <button onClick={() => handleSetCount(+10)}>+10</button>
      <button onClick={() => handleSetCount(+100)}>+100</button>
    </ControlBtn>
  );
};

const ControlBtn = styled.div`
  display: flex;
  gap: 10px;
  button {
    width: 100px;
    font-size: 20px;
    padding: 10px 0;
    cursor: pointer;
    border: none;
    background-color: lightblue;
    border-radius: 30px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  }
`;
export default Controller;
