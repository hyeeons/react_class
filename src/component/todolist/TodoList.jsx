import { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchTodo = () => {
    return todo.filter((Item) => Item.task.includes(search));
  };

  return (
    <TodoListSt>
      <h3>오늘의 할 일!</h3>
      <div className="inputBox">
        <input
          type="text"
          placeholder="오늘의 할 일을 검색해보세요"
          value={search}
          onChange={onSearch}
        />
        <ul>
          <TodoItem todo={todo} getSearchTodo={getSearchTodo} />
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
