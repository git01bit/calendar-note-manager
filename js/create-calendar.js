import Calendar from "./class-calendar.js";

const monthNameInput = document.getElementById("month-name-input");
const monthDaysInput = document.getElementById("month-days-input");
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

let monthName;
let monthDays;

// Create a new instance of Calendar class
function createCalendarObject() {
  monthName = monthNameInput.value;
  monthDays = parseInt(monthDaysInput.value);

  return new Calendar(monthName, monthDays);
}

// Create calendar UI
function createCalendar() {
  const calendarObject = createCalendarObject();
  let daysHtml = "";

  calendarName.textContent = calendarObject.monthName;

  for (let i = 1; i <= calendarObject.monthDays; i++) {
    daysHtml += `
    <div
        id="${i}"
        class="cursor-pointer border border-black py-6 transition-all duration-300 hover:bg-gray-200"
        >
        ${i}
    </div>
    `;
  }
  calendarDaysContainer.innerHTML = daysHtml;

  creationFormContainer.classList.add("hidden");
  calendarCreationBtn.classList.add("hidden");

  calendarContainer.classList.remove("hidden");
  calendarDeletionBtn.classList.remove("hidden");
}
export default createCalendar;
