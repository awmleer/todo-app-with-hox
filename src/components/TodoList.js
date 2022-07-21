import React from "react";
import Todo from "./Todo";
import { useTodoStore } from "../models/todo";

export default function TodoList() {
  const { todos } = useTodoStore();
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
}
