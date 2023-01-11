import React from 'react';
import TodoList from './components/ToDo';

const App: React.FC = () => {
  const todos = [{ id: 't1', message: 'Hello, finish this project' }];
  return (
    <div className="App">
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
