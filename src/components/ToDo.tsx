import React from 'react';
import './ToDo.css';

interface ToDoListProps {
    items: {id: string, message: string}[]
    onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<ToDoListProps> = props => {
    return (
      <ul>
        {props.items.map(todo => (
          <li key={todo.id}>
            <span>{todo.message}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>REMOVE</button>
          </li>
        ))}
      </ul>
    )
}



export default TodoList;
