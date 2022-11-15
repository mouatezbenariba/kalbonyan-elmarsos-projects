// is valid password
// length is more than 8 - and it doesn't contain the word password

let isValidPassword = function(password) {
  return !password.includes("password") && password.length > 8;
}

console.log(isValidPassword("aaaaaaaaa"));
