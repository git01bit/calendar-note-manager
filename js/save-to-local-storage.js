import { calendarObject } from "./create-calendar.js";

function saveToLocalStorage() {
  const dataToSave = {
    monthName: calendarObject.monthName,
    monthDays: calendarObject.monthDays,
    monthNotes: calendarObject.monthNotes,
  };
  localStorage.setItem("dataToSave", JSON.stringify(dataToSave));
}

export default saveToLocalStorage;
