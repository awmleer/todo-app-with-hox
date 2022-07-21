import { createGlobalStore } from "hox";
import { useRef, useState, useMemo } from "react";
import { VISIBILITY_FILTERS } from "../constants";

function useTodo() {
  const nextTodoIdRef = useRef(0);
  const [todos, setTodos] = useState([]);

  function addTodo(content) {
    setTodos(
      todos.concat([
        {
          id: nextTodoIdRef.current,
          content,
          completed: false,
        },
      ])
    );
    nextTodoIdRef.current++;
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  }

  const [activeFilter, setActiveFilter] = useState(VISIBILITY_FILTERS.ALL);

  const filteredTodos = useMemo(() => {
    switch (activeFilter) {
      case VISIBILITY_FILTERS.ALL:
        return todos;
      case VISIBILITY_FILTERS.INCOMPLETE:
        return todos.filter((todo) => !todo.completed);
      case VISIBILITY_FILTERS.COMPLETED:
        return todos.filter((todo) => todo.completed);
    }
  }, [todos, activeFilter]);

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    activeFilter,
    setActiveFilter,
  };
}

export const [useTodoStore] = createGlobalStore(useTodo);
