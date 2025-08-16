import { calendarObject } from "./create-calendar.js";

const calendarDaysContainer = document.getElementById(
  "calendar-days-container",
);
const notesListContainer = document.getElementById("notes-list-container");

function selectDayAndViewNotes(element) {
  if (
    element.target.tagName === "DIV" &&
    element.target.parentElement === calendarDaysContainer
  ) {
    if (!element.target.classList.contains("bg-red-500")) {
      // Display selected day
      const days = calendarDaysContainer.querySelectorAll("div");

      days.forEach((day) => {
        day.classList.remove("bg-red-500", "text-white");
        day.classList.add("hover:bg-gray-200");
      });

      element.target.classList.add("bg-red-500", "text-white");
      element.target.classList.remove("hover:bg-gray-200");

      // Display selected day's notes
      const dayId = element.target.id;
      const dayNotes = calendarObject.getNotes(dayId);

      let notesHtml = "";

      dayNotes.forEach((note) => {
        notesHtml += `
        <li>
            <span class="cursor-pointer text-red-600"
              ><i class="fa-solid fa-trash-can fa-xs"></i
            ></span>
            ${note}
          </li>
        `;
      });

      notesListContainer.innerHTML = notesHtml;
    }
  }
}

export default selectDayAndViewNotes;
