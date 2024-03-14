import styled from "styled-components";

import { useEffect, useState } from "react";
import Controller from "./Controller";
import Viewer from "./Viewer";

const CounterApp = () => {
  useEffect(() => {
    // document.body.style.backgroundColor = "lightpink";
    // document.body.id = "intro";
    // document.body.classList.add("classbody");
  }, []);

  const [count, setCount] = useState(0); // 1)
  const handleSetCount = (value) => {
    setCount(count + value);
  }; // 2)

  return (
    <AppSt>
      <h2>COUNTER APP</h2>
      <Viewer count={count} />
      <Controller handleSetCount={handleSetCount} />
    </AppSt>
  );
};

const AppSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;
export default CounterApp;
