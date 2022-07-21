import React, { useState } from "react";
import { useTodoStore } from "../models/todo";

export default function AddTodo(props) {
  const { addTodo } = useTodoStore();
  const [input, setInput] = useState("");

  function handleAddTodo() {
    addTodo(input);
    setInput("");
  }

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}
