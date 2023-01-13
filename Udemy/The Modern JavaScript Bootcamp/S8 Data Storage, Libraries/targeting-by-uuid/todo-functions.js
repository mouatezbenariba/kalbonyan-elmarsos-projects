// 1. Wire up button event
// 2. Remove todo by id
// 3. Save and rerender the todos list

// Fetch existing todos from localStorage
let getSavedTodos = function () {
  const storedInfo = JSON.parse(localStorage.getItem('todos'));
  if (storedInfo !== null) {
    return storedInfo;
  } else {
    return [];
  }
};

// Save todos to localeStorage
let saveTodos = function (todo) {
  return localStorage.setItem('todos', JSON.stringify(todo));
};

// Render appplication todos based on filtters
const renderTodos = function (todos, filter) {
  const incompletedTodos = toDo.filter(function (item) {
    return !item.completed;
  });

  const filterTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
  });

  generateSummaryDOM(incompletedTodos);

  filterTodos.forEach(function (item) {
    document.getElementById('todo-list').append(generateTodoDOM(item));
  });
};

// Get the DOM elements for an individual note
let generateTodoDOM = function (item) {
  const todoEl = document.createElement('div');
  const todoCheck = document.createElement('input');
  const todoText = document.createElement('span');
  const button = document.createElement('button');

  button.addEventListener('click', function () {
    removeTodo(item.id);
    saveTodos(toDo);
    renderTodos(toDo, filters);
  });

  // Setup todo checkbox
  todoCheck.setAttribute('type', 'checkbox');
  todoEl.appendChild(todoCheck);

  // Setup todo text
  todoText.textContent = item.text;
  todoEl.appendChild(todoText);

  // Setup remove button
  button.textContent = 'x';
  todoEl.appendChild(button);

  return todoEl;
};

// Get the DOM elements for list summary
let generateSummaryDOM = function (incomTodos) {
  return (document.getElementById(
    'todo-list'
  ).innerHTML = `<h2>You have ${incomTodos.length} Incompleted todos</h2>`);
};

// Remove a Todo from the todos list
const removeTodo = function (id) {
  const todoIndex = toDo.findIndex(function (todo) {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    toDo.splice(todoIndex, 1);
  }
};
