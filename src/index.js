let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
function search(city) {
  let apiKey = "0c9aa0cd1afbf05191a808e0dbfd7f21";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c9aa0cd1afbf05191a808e0dbfd7f21&units=metric`;
  axios(apiUrl).then(displayWeather);
}
function submitClick(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}
function searchLocation(position) {
  let apiKey = "0c9aa0cd1afbf05191a808e0dbfd7f21";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=0c9aa0cd1afbf05191a808e0dbfd7f21&units=metric`;
  axios(apiUrl).then(displayWeather);
}
function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);

  let Button = document.querySelector("#current-location-button");
  Button.addEventListener("click", getLocation);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitClick);

  
    
    
