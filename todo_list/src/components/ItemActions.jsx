import classNames from 'classnames';
import { useContext } from 'react';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import TodoItemContext from '../context/TodoItemContext';

const ItemActions = (props) => {
  const { model } = props;
  const { setHovering, saveItem, deleteItem, title, editMode, setTitle, setEditMode } = useContext(TodoItemContext);

  const mouseEnter = () => {
    setHovering(true);
  };

  const mouseLeave = () => {
    setHovering(false);
  };

  const editBtnStyle = classNames('p-2 text-sm cursor-pointer', {
    'bg-purple-600': editMode,
    'text-purple-200': editMode,
    'hover:text-purple-600': !editMode
  });

  return <div className='inline-flex rounded-md overflow-clip border border-gray-200'>
    <button type='button'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={() => {
        const _title = title.trim() || model.title;
        saveItem({ ...model, title: _title });
        setTitle(_title);
        setEditMode(!editMode);
      }}
      className={editBtnStyle}>
      <MdEdit /></button>
    <button type='button'
      onClick={() => { deleteItem(model.id) }}
      className='p-2 text-sm cursor-pointer hover:text-purple-600'>
      <MdDeleteOutline /></button>
  </div>;
};

export default ItemActions;