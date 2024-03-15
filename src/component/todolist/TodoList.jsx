import { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  return (
    <TodoListSt>
      <h3>오늘의 할 일!</h3>
      <div className="inputBox">
        <input type="text" placeholder="오늘의 할 일을 검색해보세요" />
        <ul>
          <TodoItem todo={todo} />
        </ul>
      </div>
    </TodoListSt>
  );
};

const TodoListSt = styled.div`
  background-color: lightcyan;
  padding: 10px 0;
  input[type="text"] {
    width: 230px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid lightcoral;
    background-color: #fff;
    text-align: center;
  }
`;
export default TodoList;
