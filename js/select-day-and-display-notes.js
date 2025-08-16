const calendarDaysContainer = document.getElementById(
  "calendar-days-container",
);

function selectDayAndViewNotes(element) {
  if (
    element.target.tagName === "DIV" &&
    element.target.parentElement === calendarDaysContainer
  ) {
    if (!element.target.classList.contains("bg-red-500")) {
      const days = calendarDaysContainer.querySelectorAll("div");

      days.forEach((day) => {
        day.classList.remove("bg-red-500", "text-white");
        day.classList.add("hover:bg-gray-200");
      });

      element.target.classList.add("bg-red-500", "text-white");
      element.target.classList.remove("hover:bg-gray-200");
    }
  }
}
export default selectDayAndViewNotes;
