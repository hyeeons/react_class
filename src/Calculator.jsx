import styled from "styled-components";

const Calculator = () => {
  return (
    <>
      <div>
        <CalculatorWrap>
          <div className="calc-box">입력창</div>
          <div>
            <div className="btn-sec">
              <button>(</button>
              <button>)</button>
              <button>%</button>
              <button>AC</button>
            </div>
            <div className="btn-">
              <div>
                <button>9</button>
                <button>8</button>
                <button>7</button>
                <button>6</button>
                <button>5</button>
                <button>4</button>
                <button>3</button>
                <button>2</button>
                <button>1</button>
                <button>=</button>
                <button>.</button>
                <button>0</button>
              </div>
              <div>
                <button>/</button>
                <button>*</button>
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          </div>
        </CalculatorWrap>
      </div>
    </>
  );
};

const CalculatorWrap = styled.div`
  width: 300px;
  height: 400px;
  background: lightyellow;
  button {
    width: 50px;
    height: 50px;
    background: white;
    border: 1px solid lightgray;
    margin: 10px;
  }
`;

export default Calculator;
