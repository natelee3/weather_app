'use strict';

const tempElement = document.getElementById('temp');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const getWeatherInfo = document.getElementById('getWeatherInfo');


    //function to convert Kelvin to farenheit
function kToF(k) {
    return ((k-273.15) * 9/5 + 32).toFixed(1)
}

getWeatherInfo.addEventListener('click', function() {
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=de4fcf6028dfe9ccf2513aa919b22358"
    )
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.weather[0].description);
        descriptionElement.innerHTML = data.weather[0].description;
        tempElement.innerHTML = kToF(data.main.temp) + "°F";
        humidityElement.innerHTML = data.main.humidity
    })
    .catch(error => console.log("error"))
})