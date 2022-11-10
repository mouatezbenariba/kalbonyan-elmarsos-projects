let getTip = function(total, tipPercent = 0.2) {
  return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}.`;
}

tip = getTip(100,0.2);
console.log(tip)