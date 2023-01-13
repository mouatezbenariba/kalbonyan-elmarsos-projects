let toDo = getSavedTodos();

const filters = {
  searchText: '',
};

renderTodos(toDo, filters);

document.querySelector('#search-todos').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderTodos(toDo, filters);
});

document.getElementById('todo-form').addEventListener('submit', function (e) {
  e.preventDefault();
  toDo.push({
    id: uuid.v4(),
    text: e.target.elements.addTodo.value,
    completed: false,
  });
  saveTodos(toDo);
  renderTodos(toDo, filters);
  e.target.elements.addTodo.value = '';
});
