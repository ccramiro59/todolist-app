import { useMemo } from 'react';
import TodoItem from './TodoItem';
import { filterTodoList } from '../utils/filter-util';

const ItemList = (props) => {
  const { todoList, sectionTitle, completedOnly } = props;

  const list = useMemo(() => filterTodoList(todoList, completedOnly), [todoList, completedOnly]);

  return <div className='my-4'>
    <h2 className='font-bold text-gray-900'>{sectionTitle} <span className='px-2 px-1 ring-1 ring-purple-700/10 text-xs text-purple-700 rounded-sm'>{list.length}</span></h2>
    <ul>{list.map((obj) => <TodoItem key={obj.id} model={obj} />)}</ul>
  </div>;
};

export default ItemList;