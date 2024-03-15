import styled from "styled-components";
import TodoHd from "./TodoHd";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { useRef, useState } from "react";

const Todo = () => {
  const TodoArr = [
    // {
    //   id: 1,
    //   isDone: false,
    //   task: "아주 신나게 놀기",
    //   createdDate: new Date().getTime(),
    // },
    // {
    //   id: 2,
    //   isDone: false,
    //   task: "아주 맛있는 밥 먹기",
    //   createdDate: new Date().getTime(),
    // },
    // {
    //   id: 3,
    //   isDone: false,
    //   task: "아주 꿀잠자기",
    //   createdDate: new Date().getTime(),
    // },
  ];
  const [todo, setTodo] = useState(TodoArr);

  const idRef = useRef(0);

  const addTodo = ({ task }) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      task,
      createdDate: new Date().getTime(),
    };
    setTodo([newTodo, ...todo]);
  };

  return (
    <TodoAppSt>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList todo={todo} />
    </TodoAppSt>
  );
};

const TodoAppSt = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 500px;
  height: 100%;
`;
export default Todo;
