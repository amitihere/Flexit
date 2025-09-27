export function generateDates(n) {
    let today = new Date();
    let arr = [];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < n; i++) {
      let nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const dayName = weekdays[nextDay.getDay()];
      arr.push([nextDay.getDate(), dayName]);
    }
  
    return arr;
  }