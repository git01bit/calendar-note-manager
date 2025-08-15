import createCalendar from "./create-calendar.js";

const calendarCreationBtn = document.getElementById("calendar-creation-btn");

// Start creating calendar when button is clicked or Enter is pressed
calendarCreationBtn.addEventListener("click", () => {
  createCalendar();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createCalendar();
  }
});
