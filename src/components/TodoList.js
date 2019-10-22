import React from 'react';
import { useModel } from 'hox';
import Todo from './Todo';

export default function TodoList() {
  const {todos} = useModel('todo')
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  )
}
