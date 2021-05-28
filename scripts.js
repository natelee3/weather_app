'use strict';

const apiKey = 'de4fcf6028dfe9ccf2513aa919b22358'
const generateWeather = document.getElementById('generateWeather');


generateWeather.addEventListener('click', function() {
    const inputElement = document.querySelector('input');
    const placeholderElement = document.querySelector('span');
    
    placeholderElement.innerHTML = inputElement.value
    getWeatherInfo(inputElement.value);
});   
function getWeatherInfo (city) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=de4fcf6028dfe9ccf2513aa919b22358`
    
    fetch(url).then(response => response.json())
    .then(data => {
        console.log(data.main.humidity)
        updateWeather(data.main.feels_like, data.weather[0].description, data.main.temp_max, data.main.temp_min, data.main.humidity)
    })
    .catch(error => console.log("error"))
};

function updateWeather(currentTemp, currentConditions, todayHigh, todayLow, currentHumidity) {
    const div1 = document.querySelector('#currentTemp');
    div1.innerHTML = (currentTemp).toFixed(1);
    const div2 = document.querySelector('#currentConditions')
    div2.innerHTML = currentConditions;
    const div3 = document.querySelector('#todayHigh');
    div3.innerHTML = todayHigh.toFixed(1);
    const div4 = document.querySelector('#todayLow');
    div4.innerHTML = todayLow.toFixed(1);
    const div5 = document.querySelector('#currentHumidity');
    div5.innerHTML = currentHumidity;
}

