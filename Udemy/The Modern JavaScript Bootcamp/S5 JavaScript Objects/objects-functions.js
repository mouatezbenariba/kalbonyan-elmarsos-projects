// Lesson practice
let firstBook = {
  title: "English Textbook",
  year: "2009",
  pageCount: "200",
}

let secondBook = {
  title: "French Textbook",
  year: "2011",
  pageCount: "100",
}
/*
let getSummary = function(book) {
  console.log(`the title : ${book.title} - the year : ${book.year}`)
}
*/
let getSummary = function(book) {
  return {
    summary : `the title : ${book.title} - the year : ${book.year}`,
    pageCountSummary: `${book.title} is ${book.pageCount} long.`,
  }
}
let bookSummary = getSummary(firstBook);
let otherBookSummary = getSummary(secondBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.pageCountSummary);

console.log("-".repeat(40));
console.log("Lesson Challenge")
console.log("-".repeat(40));

// Challenge
let fahrenheitToCeliusKelvin = function(degree) {
  return {
    fahrenheit: degree,
    celsius : (degree - 32) * 5 / 9,
    kelvin: (degree + 459.67) * 5 / 9,
  }
}

let temps = fahrenheitToCeliusKelvin(32);

console.log(`Temperature in fahrenheit : ${temps.fahrenheit}`);
console.log(`Temperature in celsius : ${temps.celsius}`);
console.log(`Temperature in kelvin : ${temps.kelvin}`);