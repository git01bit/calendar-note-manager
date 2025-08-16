import { calendarObject } from "./create-calendar.js";

const creationFormContainer = document.getElementById(
  "creation-form-container",
);
const calendarContainer = document.getElementById("calendar-container");
const calendarName = document.getElementById("calendar-name");
const calendarDaysContainer = document.getElementById(
  "calendar-days-container",
);
const calendarCreationBtn = document.getElementById("calendar-creation-btn");
const calendarDeletionBtn = document.getElementById("calendar-deletion-btn");

function deleteCalendar() {
  calendarName.textContent = "";
  calendarDaysContainer.innerHTML = "";
  calendarObject.monthName = "";
  localStorage.clear();

  creationFormContainer.classList.remove("hidden");
  calendarCreationBtn.classList.remove("hidden");

  calendarContainer.classList.add("hidden");
  calendarDeletionBtn.classList.add("hidden");
}

export default deleteCalendar;
