// app.js

let map; // Déclarer map globalement pour y accéder depuis les filtres
let allRawData = []; // Pour stocker les données brutes initiales
let currentMarkers = []; // Pour stocker les marqueurs actuellement affichés

document.addEventListener('DOMContentLoaded', () => {
    allRawData = [...pistachioProducersData]; // Copier les données initiales

    map = L.map('map').setView([20, 0], 2.3); // Ajuster le zoom initial si besoin

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 2,
        maxZoom: 18
    }).addTo(map);

    setupFilters();
    applyFilters(); // Appliquer les filtres une première fois pour afficher tous les marqueurs
});

// app.js

// ... (tout le code existant jusqu'à la fonction createPopupContent) ...

function createPopupContent(producer) {
    let content = `<div class="producer-popup">`;
    content += `<h3>${producer.name}</h3>`;
    content += `<p><strong>Part de marché (estim.):</strong> ${producer.marketShare}</p>`;

    // Ajout des informations sur le prix moyen
    if (producer.averagePriceInfo) { // Vérifier si l'info existe
        content += `<p><strong>Prix moyen indicatif:</strong> ${producer.averagePriceInfo}</p>`; // NOUVELLE LIGNE
    }

    if (producer.qualityNotes) {
        if (producer.name === "Syrie") {
            content += `<div class="syria-info-section">${producer.qualityNotes}</div>`;
        } else {
            content += `<p><strong>Notes sur la qualité:</strong> ${producer.qualityNotes}</p>`;
        }
    }

    if (producer.keyRegions) {
        content += `<p><strong>Régions clés:</strong> ${producer.keyRegions}</p>`;
    }
    if (producer.keyPlayers && producer.keyPlayers.length > 0) {
        content += `<p><strong>Acteurs clés/Fournisseurs:</strong> ${producer.keyPlayers.join(', ')}</p>`;
    }
    if (producer.hasAOP) {
        content += `<p><strong><span class="aop-badge">AOP</span> Présente</strong></p>`;
    }
    content += `</div>`;
    return content;
}

// ... (le reste du code de app.js reste inchangé) ...

function getRadius(marketShareNumeric) {
    // Échelle de base : plus la part est grande, plus le rayon est grand.
    // Ajustez ces valeurs pour un rendu visuel optimal.
    // marketShareNumeric est un %, ex: 47.5
    if (marketShareNumeric <= 0) return 5; // Rayon minimum pour les parts très faibles ou non définies
    let radius = 5 + Math.sqrt(marketShareNumeric) * 2.5; // Racine carrée pour une meilleure différentiation visuelle
    return Math.min(Math.max(radius, 5), 35); // Contraint entre 5 et 35px
}

function renderMarkers(dataToRender) {
    // 1. Effacer les marqueurs précédents
    currentMarkers.forEach(marker => map.removeLayer(marker));
    currentMarkers = [];

    // 2. Afficher les nouveaux marqueurs
    dataToRender.forEach(producer => {
        const radius = getRadius(producer.marketShareNumeric);
        const circleColor = producer.color || '#4A90E2'; // Couleur par défaut si non spécifiée

        const circleMarker = L.circleMarker([producer.lat, producer.lon], {
            radius: radius,
            fillColor: circleColor,
            color: "#000", // Couleur de la bordure
            weight: 1,
            opacity: 1,
            fillOpacity: 0.75
        }).addTo(map);

        circleMarker.bindPopup(createPopupContent(producer), {
            maxWidth: 350, // Largeur maximale de la popup
            closeButton: true
        });

        // Stocker les données avec le marqueur pour une utilisation future si besoin (pas utilisé activement ici pour le filtrage direct)
        circleMarker.producerData = producer;
        currentMarkers.push(circleMarker);
    });
}

function setupFilters() {
    const continentFilter = document.getElementById('continent-filter');
    const aopFilter = document.getElementById('aop-filter');
    const resetButton = document.getElementById('reset-filters-button');


    // Remplir le filtre des continents dynamiquement
    const continents = [...new Set(allRawData.map(p => p.continent))].sort();
    continents.forEach(continent => {
        if (continent) { // S'assurer que le continent n'est pas undefined
            const option = document.createElement('option');
            option.value = continent;
            option.textContent = continent;
            continentFilter.appendChild(option);
        }
    });

    continentFilter.addEventListener('change', applyFilters);
    aopFilter.addEventListener('change', applyFilters);
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            continentFilter.value = 'all';
            aopFilter.value = 'all';
            applyFilters();
        });
    }
}

function applyFilters() {
    const selectedContinent = document.getElementById('continent-filter').value;
    const selectedAOP = document.getElementById('aop-filter').value;

    const filteredData = allRawData.filter(producer => {
        const continentMatch = (selectedContinent === 'all') || (producer.continent === selectedContinent);

        let aopMatch = (selectedAOP === 'all');
        if (selectedAOP === 'yes') {
            aopMatch = producer.hasAOP === true;
        } else if (selectedAOP === 'no') {
            aopMatch = producer.hasAOP === false || producer.hasAOP === undefined; // Inclure ceux où hasAOP n'est pas défini comme "non AOP"
        }
        return continentMatch && aopMatch;
    });

    renderMarkers(filteredData);
}