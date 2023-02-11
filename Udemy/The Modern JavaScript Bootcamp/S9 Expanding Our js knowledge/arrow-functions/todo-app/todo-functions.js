// 1. Wire up button event
// 2. Remove todo by id
// 3. Save and rerender the todos list

// Fetch existing todos from localStorage
let getSavedTodos = () => {
  const storedInfo = JSON.parse(localStorage.getItem('todos'));
  if (storedInfo !== null) {
    return storedInfo;
  } else {
    return [];
  }
};

// Save todos to localeStorage
let saveTodos = (todo) => localStorage.setItem('todos', JSON.stringify(todo));

// Render appplication todos based on filtters
const renderTodos = (todos, filter) => {
  const incompletedTodos = todos.filter((item) => !item.completed);

  // hide completed todos
  hideCompletedTodos.value === 'Show Completed Todos'
    ? (chosenTodo = incompletedTodos)
    : (chosenTodo = todos);

  const filterTodos = chosenTodo.filter((todo) =>
    todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
  );

  generateSummaryDOM(incompletedTodos);

  // filterTodos.forEach(function (item) {
  filterTodos.forEach((item) => {
    document.getElementById('todo-list').append(generateTodoDOM(item));
  });
};

// add hide completed todos
const hideCompletedTodos = document.querySelector('#hide-completed');
hideCompletedTodos.addEventListener('click', () => {
  if (hideCompletedTodos.value === 'Hide Completed Todos') {
    hideCompletedTodos.value = 'Show Completed Todos';
    renderTodos(toDo, filters);
  } else if (hideCompletedTodos.value === 'Show Completed Todos') {
    hideCompletedTodos.value = 'Hide Completed Todos';
    renderTodos(toDo, filters);
  }
});

// 1. Setup a root div
// 2. Setup and append a checkbox (set type attribute)
// someNode.setAttribute("type","checkbox")
// 3. Setup and append a span (set text)
// 4. Setup and append a button (set text)

// Get the DOM elements for an individual note
let generateTodoDOM = (item) => {
  const todoEl = document.createElement('div');
  const todoCheck = document.createElement('input');
  const todoText = document.createElement('span');
  const button = document.createElement('button');

  button.addEventListener('click', () => {
    removeTodo(item.id);
    saveTodos(toDo);
    renderTodos(toDo, filters);
  });

  // Setup todo checkbox
  todoCheck.setAttribute('type', 'checkbox');
  todoCheck.checked = item.completed;
  todoCheck.addEventListener('change', () => {
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
let generateSummaryDOM = (incomTodos) =>
  (document.getElementById(
    'todo-list'
  ).innerHTML = `<h2>You have ${incomTodos.length} Incompleted todos</h2>`);

// Remove a Todo from the todos list
const removeTodo = (id) => {
  const todoIndex = toDo.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    toDo.splice(todoIndex, 1);
  }
};

// Toggle Todo
const toggleTodo = (todo, todoCheck) => {
  todo.completed = todoCheck.checked;
};

// The Toggle Todo solution of Andrew Mead is different then mine
