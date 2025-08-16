import { day } from "./add-note.js";
import { calendarObject } from "./create-calendar.js";

// Delete selected note and update UI
function deleteNote(element) {
  if (element.target.tagName === "SPAN" || element.target.tagName === "I") {
    const selectedDeleteBtn =
      element.target.tagName === "I"
        ? element.target.parentElement
        : element.target;
    const parentLi = selectedDeleteBtn.parentElement;

    parentLi.removeChild(selectedDeleteBtn);

    const note = parentLi.textContent.trim();

    calendarObject.deleteNote(day, note);
    parentLi.remove();

    if (calendarObject.getNotes(day).length === 0) {
      const selectedDiv = document.getElementById(day);

      selectedDiv.querySelector("span").remove();
    }
  }
}

export default deleteNote;
