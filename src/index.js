import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {setModel} from 'hox';
import {useTodo} from './models/useTodo';

setModel('todo', useTodo);

ReactDOM.render(<App />, document.getElementById('root'));
