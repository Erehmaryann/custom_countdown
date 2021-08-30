// Select all the elements needed in the HTML page
// and assign them to a variable
const inputContainer = document.querySelector("#input-container");
const countdownForm = document.querySelector("#countdownForm");
const dateEl = document.querySelector("#date-picker");

const countdownEl = document.querySelector("#countdown");
const countdownElTitle = document.querySelector("#countdown-title");

// Global variable for the countdown date and title, countdown Value
let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

// Set date Input Minimum with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Take Values from Form Input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  //Get number version of current Date, and updateDom and get time value from it.
  countdownValue = new Date(countdownDate).getTime();
  console.log(countdownValue);
};

// Event listeners
countdownForm.addEventListener("submit", updateCountdown);
