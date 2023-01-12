import React, { useState } from 'react';
import TodoList from './components/ToDo';
import NewToDo from './components/NewToDo';
import { Todo } from './models/todo';

function App() {
  const [ todos, setTodos ] = useState<Todo[]>([])
  const todoAddHandler = (message: string) => {
    setTodos(
      prevTodos => [
        ...prevTodos, {
                    id: Math.random().toString(),
                    message: message
      }]);
  }
  const todoDeleteHandler = (todoId: string) => {

    if (todos.length === 0) {
      return;
    }
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId) //delete the todo with the id that was passed in
    })
  }

  return (
    <div className="App">
      <NewToDo addToDo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
