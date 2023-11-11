function formatTime(timeStamp: any) {
  const date = new Date(timeStamp * 1000);
  const hours = date.getHours();
  const mints = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formatHours = hours % 12 || 12;
  const formatedMinutes = mints < 10 ? `0${mints}` : mints;
  return `${formatHours}:${formatedMinutes} ${ampm}`;
}

export default formatTime;
