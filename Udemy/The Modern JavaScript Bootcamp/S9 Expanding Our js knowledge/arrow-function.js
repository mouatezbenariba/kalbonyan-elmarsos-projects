// 1. Find the person with age 22
// 2. Print that person name

const people = [{
    name: 'Andrew',
    age: 27
  }, {
    name: 'Vikram',
    age: 31
  }, {
    name: 'Jess',
    age: 22
  }]

const age22 = people.find((person)=> person.age === 22);

console.log(`${age22.name} is the person with the age 22`);