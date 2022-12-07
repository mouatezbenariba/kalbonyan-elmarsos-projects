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

const incompletedTodos = toDo.filter(function(item) {
  return !item.completed;
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incompletedTodos.length} Incompleted todos`;
document.body.append(summary);

toDo.forEach(function(item) {
  let todoItem = document.createElement("p");
  todoItem.textContent = item.text;
  document.body.append(todoItem);
})

// add button listner
document.querySelector("button").addEventListener("click", ()=>"A new todo has been added!");