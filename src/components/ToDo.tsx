import React from 'react'

interface TodoListProps {
    items: {id: string, message: string}[]
}


const TodoList: React.FC<TodoListProps> = props => {

    return (
    <ul>
        {props.items.map(todo =>
        <li
            key={todo.id}>
                {todo.message}
        </li>
        )}
    </ul>
    )
}



export default TodoList;
