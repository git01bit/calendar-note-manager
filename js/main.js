import createCalendar from "./create-calendar.js";
import selectDayAndViewNotes from "./select-day-and-display-notes.js";
import { addNote, selectedDay } from "./add-note.js";
import saveToLocalStorage from "./save-to-local-storage.js";

const calendarCreationBtn = document.getElementById("calendar-creation-btn");
const calendarDaysContainer = document.getElementById(
  "calendar-days-container",
);
const addNoteBtn = document.getElementById("add-note-btn");

// Set up event listeners for user interactions
calendarCreationBtn.addEventListener("click", () => {
  createCalendar();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createCalendar();
  }
});
calendarDaysContainer.addEventListener("click", (e) => {
  selectDayAndViewNotes(e);
  selectedDay(e);
});
addNoteBtn.addEventListener("click", addNote);
window.addEventListener("beforeunload", saveToLocalStorage);
