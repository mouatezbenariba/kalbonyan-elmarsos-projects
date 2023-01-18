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

  button.addEventListener('click', function () {
    removeTodo(item.id);
    saveTodos(toDo);
    renderTodos(toDo, filters);
  });

  // Setup todo checkbox
  todoCheck.setAttribute('type', 'checkbox');
  todoCheck.checked = item.completed;
  todoCheck.addEventListener('change', function () {
    console.log('hello');
    toggleTodo(item, todoCheck);
    saveTodos(toDo);
    renderTodos(toDo, filters);
  });
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

// Toggle Todo
const toggleTodo = function (todo, todoCheck) {
  todo.completed = todoCheck.checked;
};

// The Toggle Todo solution of Andrew Mead is different then mine
