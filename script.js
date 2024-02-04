function calculateAge() {
  const today = new Date();
  const birthdateInput = document.getElementById("birthdate").value;
}

const ageCalcuatorForm = document.getElementById("ageCalculator");
ageCalcuatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
