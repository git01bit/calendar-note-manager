import { calendarObject } from "./create-calendar.js";

const noteInput = document.getElementById("note-input");
const notesListContainer = document.getElementById("notes-list-container");
const calendarDaysContainer = document.getElementById(
  "calendar-days-container",
);

let day;

// Set selected day
function selectedDay(element) {
  day = element.target.id;
}

// Add note, refresh notes list, update day marker
function addNote(e) {
  // Add a new note to the selected day
  const newNote = noteInput.value;

  calendarObject.addNote(day, newNote);
  noteInput.value = "";

  // Display the updated list of notes for the selected day
  const dayNotes = calendarObject.getNotes(day);

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

  // Add marker to day if no marker exists
  const days = calendarDaysContainer.querySelectorAll("div");

  days.forEach((div) => {
    const spanInsideDiv = div.querySelector("span");

    if (div.id === day && !spanInsideDiv) {
      div.classList.add("relative");
      div.innerHTML += `
      <span
        class="absolute top-2 left-2 size-3 rounded-full bg-white"
      ></span>
      `;
    }
  });
}

export { addNote, selectedDay, day };
