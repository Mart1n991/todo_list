import React from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todoName }) {
  return (
    <div className="todo">
      <p>{todoName}</p>
      <FontAwesomeIcon icon={faCheckSquare} />
      <FontAwesomeIcon icon={faTrashAlt} />
    </div>
  );
}
