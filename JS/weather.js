async function buscarClimaPorCidade(cityName) {
    if (!cityName) return;

    const apiKey = '5daeb9e544596069e9e7f061b08a2e87';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt-br`;

    const response = await fetch(apiURL);
    const dados = await response.json();

    if (dados.cod === 200) {
        showInfo({
            city: dados.name,
            country: dados.sys.country,
            temp: dados.main.temp,
            tempMax: dados.main.temp_max,
            tempMin: dados.main.temp_min,
            windSpeed: dados.wind.speed,
            humidity: dados.main.humidity
        });
    } else {
        showAlert("Não foi possível localizar o clima");
    }
}

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