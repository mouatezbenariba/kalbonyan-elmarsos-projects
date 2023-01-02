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

// 1. Setup a root div
// 2. Setup and append a checkbox (set type attribute)
// someNode.setAttribute("type","checkbox")
// 3. Setup and append a span (set text)
// 4. Setup and append a button (set text)

// Get the DOM elements for an individual note
let generateTodoDOM = function (item) {
  const todoEl = document.createElement('div');
  const todoCheck = document.createElement('input');
  const todoText = document.createElement('span');
  const button = document.createElement('button');

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
