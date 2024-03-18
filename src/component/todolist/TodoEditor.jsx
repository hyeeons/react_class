import { useRef, useState } from "react";
import styled from "styled-components";

const TodoEditor = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  const onChangeTask = (e) => setTask(e.target.value);
  const onSubmit = () => {
    if (!task) {
      alert("할 일을 입력해주세요!");
      inputRef.current.focus();
      return;
    }
    addTodo({ task });
    setTask("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <TodoEditSt>
      <h3>새로운 Todo 작성하기</h3>
      <div className="inputBox">
        <input
          ref={inputRef}
          type="text"
          placeholder="내가 할 일은?"
          onChange={onChangeTask}
          value={task}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </TodoEditSt>
  );
};

const TodoEditSt = styled.div`
  background-color: lightpink;
  padding: 10px 0;
  height: 100px;
  .inputBox {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  input[type="text"] {
    width: 210px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid lightcoral;
    background-color: #fff;
    text-align: center;
  }
`;
export default TodoEditor;
