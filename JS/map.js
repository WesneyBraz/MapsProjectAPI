const map = L.map('map').setView([-15.793889, -47.882778], 2);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markupFirst = null;

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
    try {
        const response = await fetch(url);
        const results = await response.json();

        if (results.length > 0) {
            const { lat, lon, display_name } = results[0];

            if (markupFirst) {
                map.removeLayer(markupFirst);
            }

            markupFirst = L.marker([lat, lon]).addTo(map)
                /*.bindPopup(display_name)
                .openPopup()*/;
                
            map.setView([lat, lon], 15);
        } else {
            alert('Não foi possivel encontrar o local!');
        }
    }
    catch (error) {
        alert('Ocorreu um erro!');
    }
});