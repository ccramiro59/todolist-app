import { useState } from 'react';

import TodoListContext from './context/TodoListContext';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import './TodoListApp.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const todoListContext = { todoList, setTodoList };

  return (
    <TodoListContext.Provider value={todoListContext}>
      <div className='max-w-lg mx-auto p-[1rem]'>
        <AddItemForm />
        <ItemList sectionTitle={'Active'} todoList={todoList} completedOnly={false} />
        <ItemList sectionTitle={'Completed'} todoList={todoList} completedOnly={true} />
      </div>
    </TodoListContext.Provider>
  );
}

export default App;
