import { useEffect, useRef, useState, useContext } from 'react';
import ItemInfo from './ItemInfo';
import ItemActions from './ItemActions';
import TodoListContext from '../context/TodoListContext';
import InputEditItemRefContext from '../context/InputEditItemContext';

const TodoItem = ({ model }) => {
  const inputRef = useRef(null);
  const [title, setTitle] = useState(model.title);
  const [isHovering, setHovering] = useState(false);
  const { todoList, setTodoList } = useContext(TodoListContext);

  useEffect(() => {
    if (model.editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [model.editMode, inputRef]);


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

  return (
    <InputEditItemRefContext.Provider value={{
      inputRef,
      isHovering,
      title,
      setHovering,
      saveItem,
      deleteItem,
      setTitle
    }}>

      <li className='flex items-start p-2 border-b-1 border-gray-200'>
        <ItemInfo model={model} />
        <ItemActions model={model} />
      </li>
    </InputEditItemRefContext.Provider>
  );
};

export default TodoItem;