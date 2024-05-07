const apiKey = "##";
const weatherContainer = document.querySelector(".weather-container");

const cities = ["Roma", "Milan", "Naples", "Bologna", "Florence", "Venice"];

cities.forEach(city => {
    requestApi(city);
});

function requestApi(cityName) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(api)
        .then(response => response.json())
        .then(result => weatherDetails(result))
        .catch(error => {
            console.error("An error occurred while fetching weather data.", error);
        });
}

function displayWeather(city, condition, temperature, wind, conditionId) {
    const div = document.createElement("div");
    div.classList.add("city-weather");

    const conditionImage = document.createElement("img");
    conditionImage.classList.add("condition-image");
    conditionImage.src = getConditionImage(conditionId);
    div.appendChild(conditionImage);

    const cityNameElement = document.createElement("h2");
    cityNameElement.classList.add("city-name");
    cityNameElement.innerText = `${city}`;
    div.appendChild(cityNameElement);

    const conditionElement = document.createElement("p");
    conditionElement.classList.add("condition");
    conditionElement.innerText = `Sky Conditions: ${condition}`;
    div.appendChild(conditionElement);

    const temperatureElement = document.createElement("p");
    temperatureElement.classList.add("temperature");
    temperatureElement.innerText = `Temperature: ${Math.round(temperature)}°C`;
    div.appendChild(temperatureElement);

    const windSpeedElement = document.createElement("p");
    windSpeedElement.classList.add("wind-speed");
    windSpeedElement.innerText = `Wind Speed: ${wind} km/h`;
    div.appendChild(windSpeedElement);

    weatherContainer.appendChild(div);
}

function weatherDetails(info) {
    if (info.cod === "404") {
        alert("City not found");
    } else {
        const city = info.name;
        const condition = info.weather[0].description;
        const temperature = info.main.temp;
        const wind = info.wind.speed;
        const conditionId = info.weather[0].id;

        displayWeather(city, condition, temperature, wind, conditionId);
    }
}

function getConditionImage(conditionId) {
    if (conditionId === 800) {
        return "icons/clear.png";
    } else if (conditionId >= 200 && conditionId <= 232) {
        return "icons/storm.png";
    } else if (conditionId >= 600 && conditionId <= 622) {
        return "icons/snow.png";
    } else if (conditionId >= 701 && conditionId <= 781) {
        return "icons/haze.png";
    } else if (conditionId >= 801 && conditionId <= 804) {
        return "icons/cloud.png";
    } else if ((conditionId >= 300 && conditionId <= 321) || (conditionId >= 500 && conditionId <= 531)) {
        return "icons/rain.png";
    }
}