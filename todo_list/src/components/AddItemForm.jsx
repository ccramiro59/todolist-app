import { v4 as uuidv4 } from "uuid";
import { useState, useContext } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import TodoListContext from "../context/TodoListContext";

const AddItemForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const { setTodoList } = useContext(TodoListContext);

  const onInputChanged = (evt) => setTodoValue(evt.target.value);

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const title = todoValue.trim();
    const id = uuidv4();

    if (title)
      setTodoList((list) => [{ id, title, completed: false }, ...list]);

    setTodoValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="flex">
        <input
          type="text"
          className="grow p-2 border border-gray-400 rounded-s-lg focus:outline-none focus:border-gray-800"
          name="todo_title"
          onChange={onInputChanged}
          value={todoValue}
          autoComplete={false}
          placeholder="Add Todo Task"
        ></input>
        <button
          type="submit"
          className="bg-purple-600 rounded-e-lg text-purple-200 px-4 cursor-pointer"
        >
          <MdAddCircleOutline />
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
