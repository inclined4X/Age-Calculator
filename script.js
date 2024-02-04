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

  const ageInMilliSeconds = today - birthDate;
  const ageInSeconds = Math.floor(ageInMilliSeconds / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInweekS = Math.floor(ageInDays / 7);
  const ageInMonths = Math.floor(ageInDays / 30.436875);
  const ageInYears = Math.floor(ageInDays / 365.25);

  // getting the result container id and result id
  const resultContainer = document.getElementById("result-container");
  const result = document.getElementById("result");

  result.innerHTML = `
    <div class = "result-item">
        <h3>Age:</h3>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${
    ageInDays % 30
  } Days</p>
    </div>
  `;

  resultContainer.style.display = "block";
}

const ageCalcuatorForm = document.getElementById("ageCalculator");
ageCalcuatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
