import React from "react";

//Import icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">TO-DO LIST</h1>
      <form>
        <input placeholder="pridaj úlohu"></input>
        <button className="btn-add">
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>

        <select>
          <option>Všetky</option>
          <option>Dokončené</option>
          <option>Nedokončené</option>
        </select>
      </form>
    </div>
  );
}

export default App;
