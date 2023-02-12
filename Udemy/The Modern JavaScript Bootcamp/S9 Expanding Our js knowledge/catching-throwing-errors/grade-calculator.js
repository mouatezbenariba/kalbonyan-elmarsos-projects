let gardeCalc = function (studentScore, totalPossibleScore) {
  if (typeof studentScore === 'number' && typeof totalPossibleScore === 'number') {
    console.log('test 01');
    let gradePercentage = (studentScore / totalPossibleScore) * 100;
    let grade;
    if (gradePercentage <= 59) {
      grade = 'F';
    } else if (gradePercentage <= 69) {
      grade = 'D';
    } else if (gradePercentage <= 79) {
      grade = 'C';
    } else if (gradePercentage <= 89) {
      grade = 'B';
    } else if (gradePercentage <= 100) {
      grade = 'A';
    }
    return `You got a ${grade} (${gradePercentage}%)!`;
  } else {
    // throw 'Error! what are you doing!';
    throw Error('What are you doing?');
  }
};

try {
  let grade = gardeCalc('10', 20);
  console.log(grade);
} catch {
  console.log('catch worked');
}
