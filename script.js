// Select all the elements needed in the HTML page
// and assign them to a variable
const inputContainer = document.querySelector("#input-container");
const countdownForm = document.querySelector("#countdownForm");
const dateEl = document.querySelector("#date-picker");

// Set date Input Minimum with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

const updateCountdown = () => {};

// Event listeners
countdownForm.addEventListener("submit", updateCountdown);
