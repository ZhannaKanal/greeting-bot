const maskEmail = (email) => {
  const indexOfDog = email.indexOf("@"); //12
  const sliced = email.slice(1, indexOfDog - 1); //reecodecam
  const repeated = "*".repeat(sliced.length); // **********
  const masked =
    email[0] +
    repeated +
    email[indexOfDog - 1] +
    email.slice(indexOfDog, email.length); //f ********** p @example.com
  return masked;
};
let email = "freecodecamp@example.com";
console.log(maskEmail(email));
