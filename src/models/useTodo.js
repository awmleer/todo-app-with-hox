import { useRef, useState } from 'react';

export function useTodo() {
  const nextTodoIdRef = useRef(0);
  const [todos, setTodos] = useState([]);

  function addTodo(content) {
    setTodos(todos.concat([{
      id: nextTodoIdRef.current,
      content,
      completed: false,
    }]));
    nextTodoIdRef.current++;
  }

  function toggleTodo() {

  }

  return {
    todos,
    addTodo,
    toggleTodo,
  };
}
