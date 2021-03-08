const base = "https://api.openweathermap.org/data/2.5/weather?q=";


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch(base + query + '&units=metric&appid=9f011dd64702f54d5a3e773293215f3a')
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}


function displayResults (weather) {
    console.log(weather);
    
    let city = document.querySelector('.location .city'); 
    city.innerText = weather.name + ", " + weather.sys.country;

    let temp = document.querySelector('.current .temp');
    temp.innerText = Math.round(weather.main.temp) + "°C";

    let atm = document.querySelector('.current .weather');
    atm.innerText = weather.weather[0].main;

    let temp_avg = document.querySelector('.current .hi-low');
    temp_avg.innerText = Math.round(weather.main.temp_min) + "°C" + " / " + Math.round(weather.main.temp_max) + "°C";
}
