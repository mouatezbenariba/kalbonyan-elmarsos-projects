const car = {
  eggs: 20,
  getSummary() {
    return `The number of eggs is ${this.eggs}`;
  },
};

console.log(car.getSummary());

const cat = () => console.log('hello world');

cat();
