//F1
function showTime(time) {
    let hours = time.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[time.getDay()];

    return `${day} ${hours}:${minutes}`;
}

//F2
function showTemp(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#current-temperature").innerHTML = Math.round(
        response.data.main.temp
    );

    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed
    );
    document.querySelector("#weather-description").innerHTML =
        response.data.weather[0].main;
}

//F3
function searchCity(city) {
    let apiKey = "dffc8c427a5c5c2e6c671ca095897824";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    searchCity(city);
}

function searchLocation(position) {
    let apiKey = "dffc8c427a5c5c2e6c671ca095897824";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
        position.coords.latitude
        }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemp);
}

function getCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#current-temperature");
    temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#current-temperature");
    temperatureElement.innerHTML = 19;
}

//F1
let currentTime = new Date();
let time = document.querySelector("#date");
time.innerHTML = showTime(currentTime);

//F2
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Porto");
