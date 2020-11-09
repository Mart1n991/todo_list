import React from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

//Import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">TO-DO LIST</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
