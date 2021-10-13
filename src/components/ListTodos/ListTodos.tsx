import React from "react";
import { useSelector } from "react-redux";
import { ITodo } from "../../todosSlice";
import Todo from "../Todo/Todo";
import { selectTodos } from "../../store";
import "./ListTodos.css";

const ListTodos = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul className="todos">
      <h3 className="form__title">List of Todos</h3>
      {todos.map((todo: ITodo) => {
        return <Todo key={todo.id} {...todo}></Todo>;
      })}
    </ul>
  );
};

export default ListTodos;
