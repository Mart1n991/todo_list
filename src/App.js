import React, { useState } from "react";

//Import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className="app-container">
      <h1 className="app-heading">TO-DO LIST</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
