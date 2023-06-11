const createTipper = (baseTip) => {
  return (bill) => {
    return baseTip * bill;
  };
};

const tip15 = createTipper(0.15);
const tip30 = createTipper(0.3);

console.log(tip15(100));
console.log(tip30(100));
