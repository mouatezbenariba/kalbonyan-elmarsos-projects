// 1. Delete the dummy data [done]
// 2. Read and parse the data when the app starts up [done]
// 3. Stringify and write the data when new data is added [done]

let toDo = [];
const storedInfo = JSON.parse(localStorage.getItem("todos"))
if(storedInfo !== null) {
  toDo = storedInfo;
}
// Start
const filters = {
  searchText : "",
}

const renderTodos = function (todos, filter) {
  console.log(toDo);
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
console.log(storedInfo)
if(storedInfo !== null) {
  console.log("hello1")
  renderTodos(toDo, filters);
}

document.querySelector("#search-todos").addEventListener("input", function(e) {
  filters.searchText =  e.target.value;
  console.log("hello2")
  if(storedInfo !== null) {
    renderTodos(toDo, filters); 
  }
})

// setup a sunmit hundler and cancel default action
document.getElementById("todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
// add a new item to the todo array
    toDo.push({
    text: e.target.elements.addTodo.value,
    completed: false,
  })
  localStorage.setItem("todos", JSON.stringify(toDo));
//  rerender the application
    renderTodos(toDo, filters); 
//   clear the input field value
  e.target.elements.addTodo.value = "";
})