import styled from "styled-components";

const Clock = () => {
  return (
    <ClockSt>
      <h2>현재 시간을 알려드립니다</h2>
      <h1> {new Date().toLocaleTimeString()} </h1>
    </ClockSt>
  );
};

const ClockSt = styled.div`
  text-align: center;
`;
export default Clock;
