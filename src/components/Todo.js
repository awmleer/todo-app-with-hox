import React from 'react';
import { useModel } from 'hox';

export default function Todo({todo}) {
  const {toggleTodo} = useModel('todo');
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={`todo-item__text ${todo && todo.completed && 'todo-item__text--completed'}`}
      >
        {todo.content}
      </span>
    </li>
  )
}
