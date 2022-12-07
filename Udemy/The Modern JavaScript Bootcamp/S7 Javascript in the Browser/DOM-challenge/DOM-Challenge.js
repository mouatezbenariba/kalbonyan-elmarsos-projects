const getPs = document.querySelectorAll("p");

getPs.forEach(function(item,index) {
  if (item.innerText.includes("the")) {
    item.remove();
  }
})

// getPs.forEach(
//   (item,index)=> (((item.innerText.includes("the"))? item.remove() : 1)))