import createCalendar from "./create-calendar.js";
import selectDayAndViewNotes from "./select-day-and-display-notes.js";
import { addNote, selectedDay } from "./add-note.js";
import deleteNote from "./delete-note.js";
import saveToLocalStorage from "./save-to-local-storage.js";
import loadFromLocalStorage from "./load-from-local-storage.js";
import { savedCalendarObject } from "./load-from-local-storage.js";

const calendarCreationBtn = document.getElementById("calendar-creation-btn");
const calendarDeletionBtn = document.getElementById("calendar-deletion-btn");
const calendarDaysContainer = document.getElementById(
  "calendar-days-container",
);
const notesListContainer = document.getElementById("notes-list-container");
const addNoteBtn = document.getElementById("add-note-btn");

// Set up event listeners for user interactions
window.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  if (savedCalendarObject) {
    createCalendar();
  }
});
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

  notesListContainer.addEventListener("click", deleteNote);
});
addNoteBtn.addEventListener("click", addNote);
window.addEventListener("beforeunload", saveToLocalStorage);
