import React from "react";
import "./App.css";
import ListTodos from "./components/ListTodos/ListTodos";
import Form from "./components/Form/Form";

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
