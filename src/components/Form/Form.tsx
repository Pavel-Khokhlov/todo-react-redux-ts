import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../todosSlice";
import "./Form.css";

const Form = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const createBtnClassName = `btn ${value !== "" ? " btn-primary" : "btn-outline-primary disabled"}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    value !== "" ? dispatch(addTodo(value)) : alert("Enter the task");
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if(e.key === "Enter") dispatch(addTodo(value));
    setValue("");
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
          <h2 className="form__title">ToDo application (React+Rredux+TS)</h2>
          <div className="mb-3">
            <label className="form-label">Enter new todo</label>
            <div className="form__container">
              <input
                type="text"
                className="form-control form__input"
                name="todo"
                value={value}
                onChange={handleChange}
                placeholder="Enter new todo"
                autoFocus
              />
              <button type="submit" className={createBtnClassName} onKeyDown={handleKeyDown}>
                Create
              </button>
            </div>
          </div>
        </form>
  );
};

export default Form;
