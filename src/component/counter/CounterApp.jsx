import { useState } from "react";
import Controller from "./Controller";
import Viewer from "./Viewer";

const CounterApp = () => {
  const [count, setCount] = useState(0); // 1)
  const handleSetCount = (value) => {
    setCount(count + value);
  }; // 2)

  return (
    <div>
      <h1>Counter App 만들기</h1>
      <Viewer count={count} />
      <Controller handleSetCount={handleSetCount} />
    </div>
  );
};

export default CounterApp;
