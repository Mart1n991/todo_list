import React, { useState, useEffect } from "react";

//Import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

//Import styles
import "./app.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [option, setOption] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    //Option switch from all to completed or uncompleted
    switch (option) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [todos, option]);

  return (
    <div className="app-container">
      <h1 className="app-heading">TO-DO LIST</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        option={option}
        setOption={setOption}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
