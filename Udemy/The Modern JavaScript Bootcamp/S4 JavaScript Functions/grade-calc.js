let gardeCalc = function(studentScore, totalPossibleScore) {
  let gradePercentage = (studentScore / totalPossibleScore) * 100;
  let grade;
  if(gradePercentage <= 59) {
    grade = "F";
  } else if (gradePercentage <= 69) {
    grade = "D";
  } else if (gradePercentage <= 79){
    grade = "C"
  } else if (gradePercentage <= 89) {
    grade = "B";
  } else if (gradePercentage <= 100) {
    grade = "A";
  }
  return `You got a ${grade} (${gradePercentage}%)!`
}

let grade = gardeCalc(15,20);
console.log(grade);