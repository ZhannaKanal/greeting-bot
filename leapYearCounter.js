const isLeapYear = (num) => {
  if (num % 4 === 0 && (num % 400 === 0 || num % 100 !== 0)) {
    return num + " is a leap year.";
  } else {
    return num + " is not a leap year.";
  }
};
let year = 1900;
const result = isLeapYear(year);
console.log(result);
