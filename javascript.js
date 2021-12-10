async function DelhiWeather() {
  let response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=af5638996111497895484023211012&q=Delhi"
  );
  let data = await response.json();
  document.getElementById("Delhi_Weather").innerHTML =
    data.current.temp_c + "°" + "C";
}
DelhiWeather();

async function MumbaiWeather() {
  let response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=af5638996111497895484023211012&q=Mumbai"
  );
  let data = await response.json();
  document.getElementById("Mumbai_Weather").innerHTML =
    data.current.temp_c + "°" + "C";
}
MumbaiWeather();
async function ChennaiWeather() {
  let response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=af5638996111497895484023211012&q=Chennai"
  );
  let data = await response.json();
  document.getElementById("Chennai_Weather").innerHTML =
    data.current.temp_c + "°" + "C";
}
ChennaiWeather();
async function KolkataWeather() {
  let response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=af5638996111497895484023211012&q=Kolkata"
  );
  let data = await response.json();
  document.getElementById("Kolkata_Weather").innerHTML =
    data.current.temp_c + "°" + "C";
}
KolkataWeather();
