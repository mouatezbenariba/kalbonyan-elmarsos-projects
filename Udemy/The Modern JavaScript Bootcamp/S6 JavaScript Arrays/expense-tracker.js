let toDo = [{
  text : "wake up at 04:00am",
  completed : true,
},{
  text : "pray",
  completed : false, 
},{
  text : "do workout",
  completed : true,
},{
  text : "take a shower",
  completed : true,
},{
  text : "go to work",
  completed : false,
}]

// create the filtering method

let filterTodo = function(list, query) {
  return list.filter((list) => !list.completed)
}

console.log(filterTodo(toDo,"false"));