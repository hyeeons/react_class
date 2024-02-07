import { useState } from "react";
import styled from "styled-components";

const Setnumber = () => {
  const [number, Setnumber] = useState(0);
  //   const Increase = () => {
  //     Setnumber(number + 1);
  //   };
  //   const Decrease = () => {
  //     Setnumber(number - 1);
  //   };

  return (
    <>
      <h1>숫자 증감</h1>
      <h2>{number}</h2>
      <ButtonSt
        onClick={() => {
          Setnumber(number + 1);
        }}
      >
        +
      </ButtonSt>
      <ButtonSt
        onClick={() => {
          Setnumber(number - 1);
        }}
      >
        -
      </ButtonSt>
    </>
  );
};

const ButtonSt = styled.button`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 10px;
  background: lightblue;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  color: purple;
`;

export default Setnumber;
