import axios from "axios";

const apiKey = `4b9efd876f2cf008bb604369b1d1e09f`;
const units = "metric";

export function getWeatherForCity(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    return axios.get(apiUrl);
}

export function getWeatherForGps(latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    return axios.get(apiUrl);
}

export function getForecastForGps(latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    return axios.get(apiUrl);
}