const map = L.map('map').setView([-15.793889, -47.882778], 4);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markupFirst = null;

async function buscarLocalNoMapa(query) {
    if (!query) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const results = await response.json();

    if (results.length > 0) {
        const { lat, lon } = results[0];

        if (markupFirst) map.removeLayer(markupFirst);

        markupFirst = L.marker([lat, lon]).addTo(map);
        map.setView([lat, lon], 11);
    }
}
