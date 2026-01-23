document.querySelector('#searchBtn').addEventListener('click', async (event) => {
    const cityName = document.querySelector('#searchInput').value;

    if (!cityName) {
        return showAlert('digite a cidade');
    }


    const apiKey = '5daeb9e544596069e9e7f061b08a2e87';
    //const apiKey = '8a60b2de14f7a17c7a11706b2cfcd87c'; //publica
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt-br`;
    const results = await fetch(apiURL);
    const json = await results.json();

    if (json.cod === 200) {
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity
        });
    } else {
        showAlert("não foi possivel localizar!")
    }

});

function showInfo(json) {
    showAlert('');
    document.querySelector('#location').innerHTML = `${json.city},${json.country}`;
    document.querySelector('#temp').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')}<sup> C°</sup>`;
    document.querySelector('#tempMax').innerHTML = `${json.tempMax.toFixed(1).toString().replace('.', ',')}<sup> C°</sup>`;
    document.querySelector('#tempMin').innerHTML = `${json.tempMin.toFixed(1).toString().replace('.', ',')}<sup> C°</sup>`;
    document.querySelector('#wind').innerHTML = `${json.windSpeed}km/h`;
    document.querySelector('#humidity').innerHTML = `${json.humidity}%`;
}

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;

}