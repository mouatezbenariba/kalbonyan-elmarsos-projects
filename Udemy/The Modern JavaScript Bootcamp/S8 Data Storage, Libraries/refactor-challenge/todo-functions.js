// Fetch existing todos from localStorage
let getSavedTodos = function() {
  const storedInfo = JSON.parse(localStorage.getItem("todos"));
  if(storedInfo !== null) {
    return storedInfo;
  } else {
    return [];
  }
}

// Save todos to localeStorage
let saveTodos = function (todo) {
  return localStorage.setItem("todos", JSON.stringify(todo));
}

// Render appplication todos based on filtters
const renderTodos = function (todos, filter) {
  const incompletedTodos = toDo.filter(function(item) {
    return !item.completed;
  });
  
  const filterTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
  })
  
  generateSummaryDOM(incompletedTodos);

  filterTodos.forEach(function(item) {
    generateTodoDOM(item);
  })
}

// Get the DOM elements for an individual note
let generateTodoDOM = function(item) {
  let todoItem = document.createElement("p");
  todoItem.textContent = item.text;
  document.getElementById("todo-list").append(todoItem);
}

// Get the DOM elements for list summary
let generateSummaryDOM = function(incomTodos) {
  return document.getElementById("todo-list").innerHTML = `<h2>You have ${incomTodos.length} Incompleted todos</h2>`;
}