import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../todosSlice";
import { ITodo } from "../../todosSlice";
import "./Todo.css";

const Todo = (todo: ITodo) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  }

  const labelClassName = `todo__label ${todo.completed ? "todo__label_done" : ""}`;

  const removeBtnClassName = `btn ${todo.completed ? " btn-danger" : "btn-outline-danger disabled"}`;

  return (
    <li className="todo">
      <div className="todo__check" onChange={handleToggleTodo}>
        <input
          className="todo__input"
          type="checkbox"
          id={todo.text}
        />
        <label className={labelClassName} htmlFor={todo.text}>
          {todo.text}
        </label>
      </div>
      <button
        type="button"
        className={removeBtnClassName}
        onClick={handleRemoveTodo}
      >
        Remove
      </button>
    </li>
  );
};

export default Todo;
