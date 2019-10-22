import React, {useState} from 'react';
import {useModel} from 'hox';

export default function AddTodo(props) {
  const todo = useModel('todo');
  const [input, setInput] = useState('');

  function handleAddTodo() {
    todo.addTodo(input);
    setInput('');
  }

  return (
    <div>
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}
