function calculateAge() {
  const today = new Date();
  console.log(today);
  const birthdateInput = document.getElementById("birthdate").value;

  //date
  const birthDateParts = birthdateInput.split("-");

  //  get the day, month, year
  const birthDay = birthDateParts[0];
  const birthMonth = birthDateParts[1] - 1;
  const birthYear = birthDateParts[2];

  const birthDate = new Date(birthYear, birthMonth, birthDay);

  console.log(birthdateInput);
  console.log(birthDateParts);
  console.log(birthDay);
  console.log(birthMonth);
  console.log(birthYear);

  // check input type
  const isValidDate = (date) => {
    return (
      Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
    );
  };

  if (!isValidDate(birthDate)) {
    alert(
      "invalid date format: Please Enter A Valid date in DD-MM-YYYY format"
    );
    return;
  }
}

const ageCalcuatorForm = document.getElementById("ageCalculator");
ageCalcuatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
