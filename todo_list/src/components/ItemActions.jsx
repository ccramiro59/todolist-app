import { useContext } from 'react';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import TodoItemContext from '../context/TodoItemContext';

const ItemActions = (props) => {
  const { model } = props;
  const { setHovering, saveItem, deleteItem, title } = useContext(TodoItemContext);

  const mouseEnter = () => setHovering(true);

  const mouseLeave = () => setHovering(false);

  return <div className='inline-flex rounded-md overflow-clip border border-gray-200'>
    <button type='button'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={() => saveItem({ ...model, title, editMode: !model.editMode })}
      className={[
        model.editMode && 'bg-purple-600',
        model.editMode && 'text-purple-200',
        'px-4',
        'py-2',
        'text-sm',
        'cursor-pointer'].filter(Boolean).join(' ')}>
      <MdEdit /></button>
    <button type='button'
      onClick={() => { deleteItem(model.id) }}
      className='px-4 py-2 text-sm cursor-pointer'>
      <MdDeleteOutline /></button>
  </div>;
};

export default ItemActions;