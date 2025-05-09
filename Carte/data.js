// data.js
const pistachioProducersData = [
    {
        name: "États-Unis (Californie)",
        lat: 36.7783,
        lon: -119.4179,
        marketShare: "Environ 45-50% (Leader)",
        marketShareNumeric: 47.5,
        color: '#2E7D32',
        continent: "Amérique du Nord",
        hasAOP: false,
        qualityNotes: "Qualité constante, production à grande échelle, techniques agricoles avancées. Saveur généralement plus douce. Variété Kerman principale. Certifications fréquentes (Bio, Non-OGM, Sécurité Alimentaire).",
        averagePriceInfo: "~10-15 USD/kg (gros, selon grade/variété)", // NOUVEAU
        keyRegions: "Vallée de San Joaquin (Kern, Madera, Fresno, Kings)",
        keyPlayers: ["Setton Farms", "Nichols Farms", "Wonderful Pistachios", "Horizon Nut Co.", "Keenan Farms"]
    },
    {
        name: "Iran",
        lat: 32.4279,
        lon: 53.6880,
        marketShare: "Environ 30-35%",
        marketShareNumeric: 32.5,
        color: '#66BB6A',
        continent: "Asie",
        hasAOP: false,
        qualityNotes: "Réputé pour sa saveur riche et sa qualité élevée ('paradis de la pistache'). Teneur en huile élevée, excellente pour la torréfaction. Variétés notables : Akbari (super-longue), Kalle Ghouchi (jumbo), Ahmad Aghaei (longue), Fandoghi (ronde, la plus commercialisée).",
        averagePriceInfo: "~8-14 USD/kg (gros FOB, avant transport/taxes, variable)", // NOUVEAU
        keyRegions: "Kerman, Rafsanjan",
        keyPlayers: ["Rafsanjan Pistachio Producers Cooperative (RPPC)", "Kimiai Sabz Rafsanjan"]
    },
    {
        name: "Turquie (Gaziantep)",
        lat: 37.0660,
        lon: 37.3782,
        marketShare: "Environ 10-15%",
        marketShareNumeric: 12.5,
        color: '#AED581',
        continent: "Asie",
        hasAOP: false,
        qualityNotes: "Saveur unique, souvent décrite comme plus douce et plus tendre, parfois plus concentrée et noisettée. La région de Gaziantep (Antep) est centrale. Variétés : Kirmizi, Uzun, Siirt.",
        averagePriceInfo: "~9-16 USD/kg (gros, variété Antep, variable)", // NOUVEAU
        keyRegions: "Gaziantep (Antep), Sanliurfa, Adiyaman, Siirt",
        keyPlayers: ["Antepsan", "Tiryaki Agro", "Polat Fıstık", "Nouri Brothers"]
    },
    {
        name: "Syrie",
        lat: 34.8021,
        lon: 38.9968,
        marketShare: "Environ 3-5% (Production fortement affectée)",
        marketShareNumeric: 4,
        color: '#FFA726',
        continent: "Asie",
        hasAOP: false,
        qualityNotes: `Production historiquement importante, mais l'offre et la qualité sont actuellement impactées par l'instabilité prolongée.
                      <div class="immap-summary-title"><strong>Résumé des informations du rapport iMMAP (Déc 2018-Jan 2019) pour le Nord-Ouest Syrien :</strong></div>
                      <ul>
                        <li><strong>Résilience des producteurs :</strong> Malgré les défis, tentatives de maintien de la production.</li>
                        <li><strong>Impacts du conflit :</strong> Vergers et infrastructures de traitement endommagés ou détruits.</li>
                        <li><strong>Accès et sécurité :</strong> Difficultés d'accès aux terres (mines, engins non explosés), zones de front.</li>
                        <li><strong>Main d'œuvre et expertise :</strong> Perte de main d'œuvre qualifiée (agronomes, experts en traitement) due aux déplacements.</li>
                        <li><strong>Intrants :</strong> Accès limité et coût élevé des engrais, pesticides et carburant.</li>
                        <li><strong>Qualité et maladies :</strong> Difficultés à traiter les maladies des arbres, récoltes parfois prématurées affectant la qualité.</li>
                        <li><strong>Coûts de production :</strong> Forte augmentation (ex: de 17K SYP/MT en 2011 à 100K SYP/MT en 2018, prix portail fermier 2018: 850K-3M SYP/MT).</li>
                        <li><strong>Systèmes de support :</strong> Détérioration du contrôle qualité formel, du système de crédit et du soutien gouvernemental.</li>
                        <li><strong>Demande :</strong> Baisse de la demande locale (prix élevé pour les consommateurs), importance de l'exportation (formelle et informelle).</li>
                      </ul>
                      <p><em>Le rapport iMMAP fournit une analyse détaillée de la chaîne de valeur dans des conditions de crise.</em></p>`,
        averagePriceInfo: "Très variable, difficile à établir. Prix portail fermier (2018) : ~1.7-6 USD/kg (selon taux de change SYP de l'époque).", // NOUVEAU, basé sur rapport iMMAP
        keyRegions: "Historiquement : Alep, Hama, Idleb. Rapport iMMAP se concentre sur le Nord-Ouest.",
        keyPlayers: ["Acteurs locaux, coopératives informelles, commerçants (voir dynamiques dans le rapport iMMAP)."]
    },
    {
        name: "Chine",
        lat: 35.8617,
        lon: 104.1954,
        marketShare: "Production croissante (autour de 2-4%)",
        marketShareNumeric: 3,
        color: '#FFEE58',
        continent: "Asie",
        hasAOP: false,
        qualityNotes: "Production en augmentation, principalement destinée au vaste marché intérieur. Amélioration progressive de la qualité et des techniques de culture.",
        averagePriceInfo: "~7-12 USD/kg (gros, marché domestique, variable)", // NOUVEAU
        keyRegions: "Principalement la région autonome Ouïghoure du Xinjiang.",
        keyPlayers: ["Grandes exploitations agricoles et entreprises d'État."]
    },
    {
        name: "Grèce (Égine)",
        lat: 37.7475,
        lon: 23.5239,
        marketShare: "Niche (Moins de 1%)",
        marketShareNumeric: 0.8,
        color: '#4DD0E1',
        continent: "Europe",
        hasAOP: true,
        qualityNotes: "Qualité exceptionnelle, pistaches d'Égine (variété Koilarati) bénéficiant d'une <strong>Appellation d'Origine Protégée (AOP)</strong>. Souvent considérées parmi les meilleures au monde pour leur saveur plus douce, aromatique et complexe. Marché de niche, axé sur une qualité supérieure, prix généralement plus élevé.",
        averagePriceInfo: "~25-40 EUR/kg (détail/spécialisé, qualité AOP)", // NOUVEAU
        keyRegions: "Île d'Égine (Golfe Saronique)",
        keyPlayers: ["Coopérative Agricole des Producteurs d'Arachides d'Égine", "Nikos Tzitzis 'AEGINAI - Nuts'", "FIVETWENTY"]
    },
    {
        name: "Italie (Bronte, Sicile)",
        lat: 37.7998,
        lon: 14.8325,
        marketShare: "Niche (Moins de 1%, production mondiale ~1%)",
        marketShareNumeric: 0.5,
        color: '#7E57C2',
        continent: "Europe",
        hasAOP: true,
        qualityNotes: "Pistaches de Bronte (Pistacchio Verde di Bronte) avec <strong>Appellation d'Origine Protégée (AOP)</strong>. Couleur vert émeraude unique et saveur intense, attribuées au sol volcanique des pentes de l'Etna. Production biennale, récolte manuelle exigeante. Produit de luxe très recherché.",
        averagePriceInfo: "~50-80+ EUR/kg (détail/spécialisé, 'or vert de Sicile')", // NOUVEAU
        keyRegions: "Bronte (Sicile), sur les pentes de l'Etna",
        keyPlayers: ["Sciara", "Vincente Delicacies", "Pistì", "nombreuses petites exploitations familiales"]
    }
];