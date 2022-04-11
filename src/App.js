import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, todo: "this is a simple task" }
  ]);
  return (
    <div className="App">
      <Header />
      <Form setTodo={setTodos} len={todos.length} />
      <List todoList={todos} setTodo={setTodos} />
    </div>
  );
}

export default App;
