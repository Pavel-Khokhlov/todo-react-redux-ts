import React from "react";
import { useDispatch } from "react-redux";
import { checkedTodo, deleteTodo } from "../../store/todosSlice";
import { ITodo } from "../../store/todosSlice";
import "./Todo.css";

const Todo = (todo: ITodo) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggleTodo = () => {
    dispatch(checkedTodo(todo));
  };

  const labelClassName = `todo__label ${
    todo.completed ? "todo__label_done" : ""
  }`;

  const removeBtnClassName = `btn ${
    todo.completed ? " btn-danger" : "btn-outline-danger disabled"
  }`;

  return (
    <li className="todo">
      <div className="todo__check" onClick={handleToggleTodo}>
        <input
          className="todo__input"
          type="checkbox"
          checked={todo.completed}
          readOnly
        />
        <label className={labelClassName} htmlFor={todo.title}>
          {todo.title}
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
