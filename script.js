// Select all the elements needed in the HTML page
// and assign them to a variable
const inputContainer = document.querySelector("#input-container");
const countdownForm = document.querySelector("#countdownForm");
const dateEl = document.querySelector("#date-picker");

// Global variable for the count down date and title
let countdownTitle = "";
let countdownDate = "";

// Set date Input Minimum with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Take Values from Form Input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(e.srcElement[0].value);
};

// Event listeners
countdownForm.addEventListener("submit", updateCountdown);
