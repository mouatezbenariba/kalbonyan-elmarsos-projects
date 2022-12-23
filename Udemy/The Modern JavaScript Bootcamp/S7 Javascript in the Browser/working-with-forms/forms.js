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
}
  
const renderTodos = function (todos, filter) {
  const incompletedTodos = toDo.filter(function(item) {
  return !item.completed;
});
  
  const filterTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
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

// setup a sunmit hundler and cancel default action
document.getElementById("todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
// add a new item to the todo array
  toDo.push({
    text: e.target.elements.addTodo.value,
    completed: false,
  })
//  rerender the application
  renderTodos(toDo, filters);
//   clear the input field value
  e.target.elements.addTodo.value = "";
})