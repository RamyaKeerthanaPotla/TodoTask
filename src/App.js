import { useState } from "react";
import { todos } from "../todos";
import "./styles.css";

export default function App() {
  const [savedTodos, setSavedTodos] = useState(todos);
  const [inputvalue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    setSavedTodos(
      savedTodos.concat([
        { id: Math.random(), todo: inputvalue, isCompleted: false }
      ])
    );
    setInputValue("");
  };

  const changeStatus = (id) => {
    const updatedTodos = savedTodos.map((savedTodo) => {
      if (savedTodo.id === id) {
        return {
          ...savedTodo,
          isCompleted: !savedTodo.isCompleted
        };
      }
      return savedTodo;
    });
    setSavedTodos(updatedTodos);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={inputvalue} />
      <input type="button" name="add" value="add" onClick={addTodo} />
      <br />
      <br />
      {savedTodos.length === 0 && <p>No Todos</p>}
      {savedTodos.map((todo) => (
        <div>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onClick={() => changeStatus(todo.id)}
          />
          <span
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
            {" "}
            {todo.todo}
          </span>
        </div>
      ))}
    </div>
  );
}
