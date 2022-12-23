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
const incompletedTodos = toDo.filter(function(item) {
  return !item.completed;
});

const filters = {
  searchText : "",
}
  
const renderTodos = function (todos, filter) {
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

document.querySelector("#search-todos").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(toDo, filters);
})
// Ends

// add button listner
document.querySelector("button").addEventListener("click", ()=>"A new todo has been added!");

// listen for todo text change
document.getElementById("add-todo-input").addEventListener("input", function(e) {
  console.log(e.target.value);
})