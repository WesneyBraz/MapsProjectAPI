document.querySelector('#searchBtn').addEventListener('click', async (event) => {
    const cityName = document.querySelector('#searchInput').value;

    if (!cityName) {
        return showAlert('digite a cidade');
    }


    //const apiKey = '5daeb9e544596069e9e7f061b08a2e87';
    const apiKey = '8a60b2de14f7a17c7a11706b2cfcd87c'; //publica
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt-br`;
    const results = await fetch(apiURL);
    const json = await results.json();
    console.log(json);
});

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;

}