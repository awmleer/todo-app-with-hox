import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      {/* <VisibilityFilters /> */}
    </div>
  );
}

export default App;
