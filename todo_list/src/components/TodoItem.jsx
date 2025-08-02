import classNames from 'classnames';
import { useEffect, useRef, useState, useContext } from 'react';
import ItemInfo from './ItemInfo';
import ItemActions from './ItemActions';
import TodoListContext from '../context/TodoListContext';
import TodoItemContext from '../context/TodoItemContext';

const TodoItem = ({ model }) => {
  const inputRef = useRef(null);
  const [title, setTitle] = useState(model.title);
  const [editMode, setEditMode] = useState(false);
  const [isHovering, setHovering] = useState(false);
  const { todoList, setTodoList } = useContext(TodoListContext);

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode, inputRef]);


  const saveItem = (obj) => {
    setTodoList(
      todoList.map((previousObj) => obj.id == previousObj.id ? obj : previousObj)
    );
  };

  const deleteItem = (id) => {
    setTodoList(
      todoList.filter((previousObj) => id != previousObj.id)
    );
  };

  const bulletClss = classNames('', { 'text-purple-400': !model.completed });

  return (
    <TodoItemContext.Provider value={{
      inputRef,
      isHovering,
      title,
      editMode,
      setHovering,
      saveItem,
      deleteItem,
      setTitle,
      setEditMode
    }}>

      <li className='flex space-x-4 items-center p-2 cursor-pointer rounded-lg hover:bg-purple-50'>
        <span className={bulletClss}>&bull;</span>
        <ItemInfo model={model} />
        <ItemActions model={model} />
      </li>
    </TodoItemContext.Provider>
  );
};

export default TodoItem;