var map = L.map('map').setView([26.56678062889397,-80.10393188855006], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([26.56678062889397,-80.10393188855006]).addTo(map)
		.bindPopup('Casa Maltese<br> Where Chris is currently recovering')
		.openPopup();

var marker = L.marker([26.570782,-80.033150]).addTo(map)
    .bindPopup('Gulfstream<br> The water is rather warm')
    .openPopup();

var marker = L.marker([26.937320,-80.799201]).addTo(map)
    .bindPopup('Lake O<br> Lots of big gators')
    .openPopup();