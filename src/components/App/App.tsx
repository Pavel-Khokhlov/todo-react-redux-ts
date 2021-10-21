import React from "react";
import "./App.css";
import ListTodos from "../ListTodos/ListTodos";
import Form from "../Form/Form";

function App() {

  return (
    <>
      <header className="header"></header>
      <main className="main">
        <Form />
        <ListTodos />
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
