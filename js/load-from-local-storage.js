import Calendar from "./class-calendar.js";

let savedCalendarObject;

function loadFromLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem("dataToSave"));

  if (savedData) {
    savedCalendarObject = new Calendar(
      savedData.monthName,
      savedData.monthDays,
    );
    savedCalendarObject.monthNotes = savedData.monthNotes;
  }
}
export default loadFromLocalStorage;
export { savedCalendarObject };
