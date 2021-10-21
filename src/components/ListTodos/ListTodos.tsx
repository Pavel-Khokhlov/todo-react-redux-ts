import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, ITodo } from "../../store/todosSlice";
import Todo from "../Todo/Todo";
import { selectStatus, selectTodos } from "../../store/store";
import "./ListTodos.css";
import Loader from "../Loader/Loader";

const ListTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus)

  useEffect(() => {
    dispatch(getTodos());
  }, [])

  return (
    <ul className="todos">
      <h3 className="form__title">List of Todos</h3>
      {todos.map((todo: ITodo) => {
        return <Todo key={todo.title} {...todo}></Todo>;
      })}
    </ul>
  );
};

export default ListTodos;
