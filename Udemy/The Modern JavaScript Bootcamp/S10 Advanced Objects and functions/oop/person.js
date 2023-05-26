// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }
  setName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

class Students extends Employee {
  constructor(firstName, lastName, age, position, likes, grade) {
    super(firstName, lastName, age, position, likes);
    this.grade = grade;
  }

  getBio() {
    this.grade >= 70
      ? `The grade is: ${this.grade}, Andrew is passing the class.`
      : `The grade is: ${this.grade}, Andrew failed the class.`;
  }

  updateGrade(updateValue) {
    this.grade += updateValue;
  }
}

const andrew = new Students(
  'andrew',
  'mead',
  23,
  'instructor',
  ['hiking', 'reading'],
  80
);

console.log(andrew.getBio());
andrew.updateGrade(-50);
console.log(andrew.getBio());
