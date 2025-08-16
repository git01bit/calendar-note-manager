import createCalendar from "./create-calendar.js";
import selectDayAndViewNotes from "./select-day-and-display-notes.js";

const calendarCreationBtn = document.getElementById("calendar-creation-btn");
const calendarDaysContainer = document.getElementById(
  "calendar-days-container",
);

// Set up event listeners for user interactions
calendarCreationBtn.addEventListener("click", () => {
  createCalendar();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createCalendar();
  }
});
calendarDaysContainer.addEventListener("click", selectDayAndViewNotes);
