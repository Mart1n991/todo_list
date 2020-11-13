import React from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Form({ inputText, setInputText, todos, setTodos }) {
  // Set inputText value
  const onInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputText.length <= 0) {
      window.alert("Úloha musí mať aspoň 1 znak");
    } else {
      setTodos([
        ...todos,
        {
          todos: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }

    setInputText("");
  };

  return (
    <form>
      <input
        placeholder="pridaj úlohu"
        type="text"
        value={inputText}
        onChange={onInputTextChange}
      ></input>
      <button className="btn-add" onClick={onSubmit}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>

      <select className="filtered-todos">
        <option className="all-todos">Všetky</option>
        <option className="completed-todos">Dokončené</option>
        <option className="uncompleted-todos">Nedokončené</option>
      </select>
    </form>
  );
}
