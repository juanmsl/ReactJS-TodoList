import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './TodoListApp';
import {
    ServiceWorker
} from './common';

ReactDOM.render(
    <TodoListApp />,
    document.getElementById('root')
);

ServiceWorker.register();
