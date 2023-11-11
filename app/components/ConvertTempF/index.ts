function convertF(temp: any) {
  const fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
  return fahrenheit;
}

export default convertF;
