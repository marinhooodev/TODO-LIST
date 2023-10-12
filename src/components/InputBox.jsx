import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const InputBox = () => {
  const ENTER_KEY = 13;
  const ESC_KEY = 27;

  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const changeValue = () => {
    setInputValue(document.getElementById("InputPadrao").value);
  };

  const apagarTexto = () => {
    setInputValue("");
  };

  const lerDados = (e) => {
    if (e.which === ENTER_KEY) {
      /* Enter */ enviarDados();
    } else if (e.which === ESC_KEY) {
      /*  Esc */ apagarTexto();
    }
  };

  const enviarDados = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: document.getElementById("InputPadrao").value,
        checked: false,
      },
    ]);

    apagarTexto();
  };

  const toggleTaskMark = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const removeTask = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <>
      <div id="inputBox">
        <input
          id="InputPadrao"
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={changeValue}
          onKeyDown={lerDados}
        />
        <FaPlus className="plusIcon" onClick={enviarDados} />
      </div>

      <div className="listBox">
        <ul id="todoList">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <p
                className={[
                  "task-title",
                  todo.checked ? "checkedTask" : "",
                ].join(" ")}
                onClick={() => toggleTaskMark(todo)}
              >
                {todo.title}
              </p>
              <FiTrash2
                className="trashIcon"
                onClick={() => removeTask(todo)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InputBox;
