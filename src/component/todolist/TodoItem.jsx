import { useState } from "react";
import styled from "styled-components";

const TodoItem = ({ todo }) => {
  return (
    <TodoItemSt>
      {/* index대신 key값을 id로 (고유번호임) */}
      {todo.map(({ id, isDone, task, createdDate }) => (
        <li key={id}>
          <input type="checkbox" />
          <span>{task}</span>
          <span>{new Date(createdDate).toLocaleDateString()}</span>
          <button>삭제</button>
        </li>
      ))}
    </TodoItemSt>
  );
};

const TodoItemSt = styled.div`
  list-style: none;

  span {
    margin-right: 10px;
    margin-bottom: 7px;
  }

  li {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid lightcoral;
    background-color: #fff;
  }
`;
export default TodoItem;
