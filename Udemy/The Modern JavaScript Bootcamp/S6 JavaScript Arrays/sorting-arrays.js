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

/**
// using another method

const sortList = function(list) {
   return list.sort(function(a, b) {
  const nameA = a.completed.toString().toLowerCase();
  const nameB = b.completed.toString().toLowerCase();
  if (nameB < nameA) {
    return -1;
  } else if (nameB > nameA) {
    return +1;
  } else {
    return 0;
  }
})
}
**/

const sortList = (list) => (list.sort(function(a, b) {
  return (!b.completed && a.completed) ? -1 : (b.completed && !a.completed) ? +1 : 0;
}))


console.log(sortList(toDo));

