// Select all the elements needed in the HTML page
// and assign them to a variable
const inputContainer = document.querySelector("#input-container");
const countdownForm = document.querySelector("#countdownForm");
const dateEl = document.querySelector("#date-picker");

const countdownEl = document.querySelector("#countdown");
const countdownElTitle = document.querySelector("#countdown-title");
const timeElements = document.querySelectorAll("span");
const countdownBtn = document.querySelector("#countdown-button");

const completeEl = document.querySelector("#complete");
const completeElBtn = document.querySelector("#complete-button");
const completeElInfo = document.querySelector("#complete-info");

// Global variable for the countdown date and title, countdown Value
let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set date Input Minimum with Today's Date
const today = new Date().toISOString().split("T")[0]; //split("T") returns an array of two items
dateEl.setAttribute("min", today);

// Populate Countdown / Complete UI
const updateDOM = () => {
  // Hide Input, show Countdown
  // Start the countdown
  countdownActive = setInterval(() => {
    // current moment in time
    const now = new Date().getTime(); //getTime returns it value in milliseconds
    const distance = countdownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    //Hide Input
    inputContainer.hidden = true;

    // If the countdown is over, show Complete
    if (distance < 0) {
      clearInterval(countdownActive);
      completeEl.hidden = false;
      completeElInfo.innerText = `${countdownTitle} finished on ${countdownDate}.`;
      return;
    }

    //Populate Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    //Show Countdown
    countdownEl.hidden = false;
  }, second);
};

// Take Values from Form Input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  // Check for valid date
  if (countdownDate === "") {
    alert("Please select a date");
  } else {
    //Get number version of future Date, updateDOM and get time value from it.
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }
};

// Reset All Values
const reset = () => {
  // Hide Countdowns, show Input
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  // stop the countdown
  clearInterval(countdownActive);
  // Reset Countdown Values
  countdownTitle = "";
  countdownDate = "";
};

// Event listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
