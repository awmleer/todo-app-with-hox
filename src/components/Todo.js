import React from "react";
import { useTodoStore } from "../models/todo";

export default function Todo({ todo }) {
  const { toggleTodo } = useTodoStore();
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={`todo-item__text ${
          todo && todo.completed && "todo-item__text--completed"
        }`}
      >
        {todo.content}
      </span>
    </li>
  );
}
