import TodoItem from './TodoItem';

const ItemList = (props) => {
  const { todoList } = props;

  return <ul className='mt-[1rem]'>
    {todoList.map((obj) => <TodoItem key={obj.id} model={obj} />)}
  </ul>;
};

export default ItemList;