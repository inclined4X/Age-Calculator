function calculateAge() {
  const today = new Date();
  const birthdateInput = document.getElementById("birthdate").value;

  //  get the day, month, year
  const birthDay = birthDateParts[0];
  const birthMonth = birthDateParts[1] - 1;
  const birthYear = birthDateParts[2];

  //date
  const birthDateParts = birthdateInput.split("-");
  //   console.log(birthdateInput);
  //   console.log(birthDateParts);
}

const ageCalcuatorForm = document.getElementById("ageCalculator");
ageCalcuatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
