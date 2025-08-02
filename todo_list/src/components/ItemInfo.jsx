import { useContext } from "react";
import TodoItemContext from '../context/TodoItemContext';

const ItemInfo = (props) => {
  const { model } = props;
  const { inputRef, isHovering, saveItem, title, setTitle }
    = useContext(TodoItemContext);

  const onInputChange = (evt) => setTitle(evt.target.value);

  const onInputBlur = () => {
    if (!isHovering) {
      saveItem({ ...model, title: title.trim(), editMode: false });
    }
  };

  return <div className='grow flex items-center wrap-anywhere'>
    {model.editMode
      ? <input type='text'
        ref={inputRef}
        onChange={onInputChange}
        onBlur={onInputBlur}
        className='w-full focus:outline-none'
        value={title}
        autoComplete={false}></input>
      : <span className='mr-2'>{model.title}</span>}
  </div>;
};

export default ItemInfo;