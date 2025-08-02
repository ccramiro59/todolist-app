import classNames from "classnames";
import { useContext, useEffect } from "react";
import TodoItemContext from '../context/TodoItemContext';

const ItemInfo = (props) => {
  const { model } = props;
  const { inputRef, title, editMode, isHovering, saveItem, setTitle, setEditMode }
    = useContext(TodoItemContext);

  const onInputChange = (evt) => setTitle(evt.target.value);

  const onInputBlur = () => {
    const _title = title.trim() || model.title;

    if (!isHovering && _title) {
      saveItem({ ...model, title: _title });
      setEditMode(false);
    }
  };

  const clss = classNames('w-full focus:outline-none border-purple-600', { 'border-b-1': editMode });

  return <div className='flex grow'>
    {editMode
      ? <input type='text'
        ref={inputRef}
        onChange={onInputChange}
        onBlur={onInputBlur}
        className={clss}
        value={title}
        autoComplete={false}></input>
      : <span>{model.title}</span>}
  </div>;
};

export default ItemInfo;