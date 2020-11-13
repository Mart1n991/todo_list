import React from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  option,
  setOption,
}) {
  // Set inputText value
  const onInputTextChange = (event) => setInputText(event.target.value);

  // On submit button
  const onSubmit = (event) => {
    event.preventDefault();

    if (inputText.length <= 0) {
      window.alert("Úloha musí mať aspoň 1 znak");
    } else {
      setTodos([
        {
          todos: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
        ...todos,
      ]);
    }
    setInputText("");
  };

  //Selected value from options
  const onSelect = (event) => setOption(event.target.value);

  return (
    <form className="input-form">
      <input
        placeholder="pridaj úlohu"
        type="text"
        value={inputText}
        onChange={onInputTextChange}
      ></input>
      <button className="btn-add" onClick={onSubmit}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>

      <select className="filtered-todos" onChange={onSelect}>
        <option value="all">Všetky</option>
        <option value="completed">Dokončené</option>
        <option value="uncompleted">Nedokončené</option>
      </select>
    </form>
  );
}
