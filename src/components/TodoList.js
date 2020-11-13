import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todoName={todo.todos}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
        />
      ))}
    </div>
  );
}
