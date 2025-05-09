document.addEventListener('DOMContentLoaded', function() {
    // Données pour le graphique de croissance du marché (basées sur Data Bridge)
    const marketGrowthCtx = document.getElementById('marketGrowthChart').getContext('2d');
    const marketGrowthChart = new Chart(marketGrowthCtx, {
        type: 'line', // Type de graphique : ligne
        data: {
            labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'], // Années
            datasets: [{
                label: 'Valeur du Marché Mondial (Milliards USD)',
                data: [
                    4.45, // 2022 (valeur de base)
                    4.45 * Math.pow(1.0485, 1), // Calcul pour 2023 avec TCAC 4.85%
                    4.45 * Math.pow(1.0485, 2), // 2024
                    4.45 * Math.pow(1.0485, 3), // 2025
                    4.45 * Math.pow(1.0485, 4), // 2026
                    4.45 * Math.pow(1.0485, 5), // 2027
                    4.45 * Math.pow(1.0485, 6), // 2028
                    4.45 * Math.pow(1.0485, 7), // 2029
                    6.50  // 2030 (valeur cible) - on peut aussi calculer la dernière valeur
                ],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1, // Légère courbure de la ligne
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true, // Peut être mis à false si vous voulez un contrôle plus fin des dimensions via CSS
            scales: {
                y: {
                    beginAtZero: false, // Commencer l'axe Y près de la valeur min pour mieux voir la croissance
                    title: {
                        display: true,
                        text: 'Milliards USD'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Année'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(context.parsed.y) + ' Md';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    // Données pour le graphique illustratif des tendances de prix
    // ATTENTION : Ce graphique est PUREMENT ILLUSTRATIF et ne représente pas des données réelles précises.
    // Il vise à montrer une tendance générale à la hausse avec des fluctuations.
    const priceTrendCtx = document.getElementById('priceTrendChart').getContext('2d');
    const priceTrendChart = new Chart(priceTrendCtx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024 (Est.)', '2025 (Proj.)'],
            datasets: [{
                label: 'Indice de Tendance des Prix (Illustratif)',
                data: [100, 105, 102, 110, 115, 118, 125, 130], // Valeurs fictives pour illustrer la tendance
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.3,
                fill: false, // Pas de remplissage pour celui-ci pour varier
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Niveau de Prix Relatif (Base 100)'
                    }
                },
                x: {
                     title: {
                        display: true,
                        text: 'Année (Illustratif)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                         label: function(context) {
                            return ` Indice: ${context.parsed.y}`;
                        }
                    }
                },
                annotation: { // Nécessite le plugin chartjs-plugin-annotation si vous voulez des annotations plus poussées
                    annotations: {
                        line1: { // Exemple d'annotation simple
                            type: 'line',
                            yMin: 125,
                            yMax: 125,
                            borderColor: 'rgb(255, 159, 64)',
                            borderWidth: 2,
                            label: {
                                content: 'Forte demande / Pénurie 2024',
                                enabled: true,
                                position: "end"
                            }
                        }
                    }
                }
            }
        }
    });
});