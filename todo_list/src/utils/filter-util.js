const filterTodoList = (list, completed) =>
  list.filter((item) => item.completed == completed);

export { filterTodoList };
