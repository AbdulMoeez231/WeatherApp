function getDayName(Timestamp:any) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timestampInMilliseconds = Timestamp * 1000;
  const date = new Date(timestampInMilliseconds);
  const dayIndex = date.getDay();

  return daysOfWeek[dayIndex];
}

export default getDayName;
