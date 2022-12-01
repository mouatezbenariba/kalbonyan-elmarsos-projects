// 1.  convert array to array of an object

let toDo = [{
  text : "wake up at 04:00am",
  completed : "True",
},{
  text : "pray",
  completed : "True", 
},{
  text : "do workout",
  completed : "True",
},{
  text : "take a shower",
  completed : "True",
},{
  text : "go to work",
  completed : "True",
}]

// 2. create functoin to remove a todo by text value

const deleteTodo = function(array, text) {
  const index = array.findIndex((array) => array.text.toLowerCase() === text.toLowerCase());
  return (index !== -1 ? array.splice(index,1) : array);
}

deleteTodo(toDo, "do workout");
