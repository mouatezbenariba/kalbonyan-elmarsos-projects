let toDo = [{
  text : "wake up at 04:00am",
  completed : true,
},{
  text : "pray",
  completed : true, 
},{
  text : "do workout",
  completed : false,
},{
  text : "take a shower",
  completed : true,
},{
  text : "go to work",
  completed : false,
}]

// Start
const filters = {
  searchText : "",
  hideFilter : "",
}
  
const hideFilter = {
  searchText : false,
}
  
const renderTodos = function (todos, filter) {
  
  const incompletedTodos = todos.filter(function(item) {
  return !item.completed;
});
  
  let filterTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
  })
  
  filterTodos = filterTodos.filter(function(todo) {
    return !todo.completed || !filters.hideFilter;
  })
  
 document.getElementById("todo-list").innerHTML = `<h2>You have ${incompletedTodos.length} Incompleted todos</h2>`

filterTodos.forEach(function(item) {
  let todoItem = document.createElement("p");
  todoItem.textContent = item.text;
  document.getElementById("todo-list").append(todoItem);
})
}

renderTodos(toDo, filters);

document.querySelector("#search-todos").addEventListener("input", function(e) {
  filters.searchText =  e.target.value;
  renderTodos(toDo, filters);
})

// add checkbo handler
document.querySelector("#hide-completed").addEventListener("change", function(e) {
    filters.hideFilter = e.target.checked;
    renderTodos(toDo, filters);
})
