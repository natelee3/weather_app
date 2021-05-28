'use strict';

const apiKey = 'de4fcf6028dfe9ccf2513aa919b22358'
const generateWeather = document.getElementById('generateWeather');

generateWeather.addEventListener('click', function() {
    const inputElements = document.querySelectorAll('input');
    const placeholders = document.querySelectorAll('span');
    
    let inputArray = []
    inputElements.forEach(inputElement => {
        inputArray.push(inputElement);
    })
    
    placeholders.forEach(function(placeholder, index) {
        placeholder.innerHTML = inputArray[index].value;
        getWeatherInfo(inputArray[0].value, inputArray[1].value);

    })
});   

function getWeatherInfo (city, state) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state},usa&units=imperial&appid=${apiKey}`
    
    fetch(url).then(response => response.json())
    .then(data => {
        updateWeather(data.main.feels_like, data.weather[0].description, data.main.temp_max, data.main.temp_min, data.main.humidity)
    })
    .catch(error => console.log("error"))
};

function updateWeather(currentTemp, currentConditions, todayHigh, todayLow, currentHumidity) {
    const div1 = document.querySelector('#currentTemp');
    div1.innerHTML = (currentTemp).toFixed(1) + "°F";
    const div2 = document.querySelector('#currentConditions')
    div2.innerHTML = currentConditions;
    const div3 = document.querySelector('#todayHigh');
    div3.innerHTML = todayHigh.toFixed(1) + "°F";
    const div4 = document.querySelector('#todayLow');
    div4.innerHTML = todayLow.toFixed(1) + "°F";
    const div5 = document.querySelector('#currentHumidity');
    div5.innerHTML = currentHumidity + "%";
}

