import React, { useState } from "react";
import tasks from "./data";
import List from "./List";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [todos, setTodos] = useState(tasks);
  const [input, setInput] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    const newTodos = todos.concat({ id: uuidv4(), task: input });
    setTodos(newTodos);
    setInput("");
  };
  return (
    <div>
      <h1>To do List</h1>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task"
        />
        <button disabled={!input} onClick={addTask}>
          Add
        </button>
      </form>
      <List todos={todos} tsks={setTodos} />
    </div>
  );
};

export default Todo;
