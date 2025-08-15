class Calendar {
  constructor(monthName, monthDays) {
    this.monthName = monthName;
    this.monthDays = monthDays;
    this.monthNotes = {};

    for (let day = 1; day <= monthDays; day++) {
      this.monthNotes[day] = [];
    }
  }

  // Add a new note to a specific day
  addNote(day, note) {
    const trimmedNote = note.trim();

    if (day >= 1 && day <= this.monthDays && trimmedNote.length > 0) {
      this.monthNotes[day].push(trimmedNote);
    }
  }

  // Delete a note from a specific day
  deleteNote(day, note) {
    if (day >= 1 && day <= this.monthDays) {
      const notesOfTheDay = this.monthNotes[day];

      for (let i = 0; i < notesOfTheDay.length; i++) {
        if (notesOfTheDay[i] === note) {
          notesOfTheDay.splice(i, 1);
          break;
        }
      }
    }
  }

  // Get all notes for a specific day
  getNotes(day) {
    if (day >= 1 && day <= this.monthDays) {
      return this.monthNotes[day];
    } else {
      return [];
    }
  }
}
export default Calendar;
