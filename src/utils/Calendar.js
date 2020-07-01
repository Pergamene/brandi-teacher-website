class Calendar {
  static getWeeks(offset, days) {
    const weeks = [];
    let week = [];
    for (let i = 0; i < offset; i++) {
      week.push(0);
    }
    for (let i = 1; i <= days; i++) {
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
      week.push(i);
    }
    if (week.length < 7) {
      for (let i = week.length; i < 7; i++) {
        week.push(0);
      }
    }
    weeks.push(week);
    return weeks;
  }

  static getStatus(data) {
    const status = new Set();
    for (let day in data) {
      status.add(data[day].type);
    };
    return Array.from(status);
  }
}

export default Calendar;
