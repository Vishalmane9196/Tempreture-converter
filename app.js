var celciusEl = document.querySelector(" #celcius  > input");
var fahrenheitEl = document.querySelector(" #fahrenheit  > input");
var kelvinEl = document.querySelector(" #kelvin  > input")

function roundNum(a) {
  return Math.round(a * 100) / 100;
}

function celiciusToFahrenheitAndKelvin() {
  const cTemp = parseFloat(celciusEl.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;

  fahrenheitEl.value = roundNum(fTemp);
  kelvinEl.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
  const fTemp = parseFloat(fahrenheitEl.value);
  const cTemp = (fTemp - 32) * 5 / 9;
  const kTemp = ((fTemp - 32) * 5 / 9) + 273.15;

  celciusEl.value = roundNum(cTemp);
  kelvinEl.value = roundNum(kTemp);

}

function kevinToCelciusAndFahrenheit() {
  const kTemp = parseFloat(kelvinEl.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (kTemp - 273.15) * 9 / 5 + 32

  celciusEl.value = roundNum(cTemp);
  fahrenheitEl.value = roundNum(fTemp);
}

function main() {
  celciusEl.addEventListener("input", celiciusToFahrenheitAndKelvin);
  fahrenheitEl.addEventListener("input", fahrenheitToCelciusAndKelvin);
  kelvinEl.addEventListener("input", kevinToCelciusAndFahrenheit);
}

main();