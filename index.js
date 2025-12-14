alert("JS Connected");

const birthdayInput = document.getElementById("birthday");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

calculateButton.addEventListener("click", calculateAge);



function calculateAge() {
  const birthdayValue = birthdayInput.value;

  if (birthdayValue === "") {
    alert("Please enter your date of birth");
    return;
  }

  const age = getAge(birthdayValue);
  resultElement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}
