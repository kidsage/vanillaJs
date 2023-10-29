require("dotenv").config();

const API_KEY = process.env.WEATHER_API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      // const temp = data.main.temp;

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}
function onGeoError() {
  alert("failed");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
