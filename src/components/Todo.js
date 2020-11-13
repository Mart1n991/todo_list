import React, { useState } from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todoName, todo, todos, setTodos }) {
  const [isActive, setIsActive] = useState(false);
  //Function to delete todo
  const deleteTodo = () => {
    setIsActive(true);

    setTimeout(function () {
      setTodos(todos.filter((element) => element.id !== todo.id));
    }, 800);
  };

  //Function to add completestatus to true
  const addCompletedTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo ${isActive ? "todo-fall" : " "}`}>
      <p
        className={`todo-name ${
          todo.completed ? "todo-completed" : "todo-uncompleted"
        }`}
      >
        {todoName}
      </p>
      <div className="buttons">
        <button className="btn-complete" onClick={addCompletedTodo}>
          <FontAwesomeIcon icon={faCheckSquare} />
        </button>
        <button className="btn-delete" onClick={deleteTodo}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}
