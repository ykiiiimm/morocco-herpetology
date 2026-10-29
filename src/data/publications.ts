export interface Publication {
  id: string;
  year: number;
  type: string;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  issue: string;
  pages: string;
  doi: string;
  pdf: string;
  publisher: string;
  keywords: string[];
  featured?: boolean;
  abstract?: string;
}

export const PUBLICATIONS_DATA: Publication[] = [
  {
    "id": "pub-1",
    "year": 2026,
    "type": "Journal Article",
    "title": "High-elevation females lay larger eggs in the Atlas Day Gecko, Quedenfeldtia trachyblepharus (Boettger, 1873)",
    "authors": "Lansari, A., Blouin-Demers, G., Lourdais, O., El Mouden, E. H., & Bouazza, A.",
    "journal": "Herpetozoa",
    "volume": "39",
    "issue": "",
    "pages": "273–279",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Quedenfeldtia trachyblepharus",
      "Atlas Day Gecko",
      "Reproduction",
      "Egg size",
      "High Atlas",
      "Morocco"
    ],
    "featured": true
  },
  {
    "id": "pub-2",
    "year": 2026,
    "type": "Journal Article",
    "title": "Spatio-temporal patterns and diversity of sea turtle strandings in the Moroccan exclusive economic zone (1980–2024)",
    "authors": "Dibar, Z., Lansari, A., El Morjani, Z. E. A., & Bouazza, A.",
    "journal": "Salamandra",
    "volume": "62",
    "issue": "2",
    "pages": "59–66",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Sea turtles",
      "Strandings",
      "Marine biodiversity",
      "Conservation",
      "Morocco"
    ],
    "featured": true
  },
  {
    "id": "pub-3",
    "year": 2026,
    "type": "Journal Article",
    "title": "Rediscovery of the enigmatic holotype of Buthus barbouri Werner, 1932 (Scorpiones: Buthidae), with a new synonymy",
    "authors": "Mousaid, M., Flores, Z., Rivera, A., Lansari, A., & Bouazza, A.",
    "journal": "Zootaxa",
    "volume": "5768",
    "issue": "4",
    "pages": "597–600",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Buthus barbouri",
      "Scorpiones",
      "Buthidae",
      "Taxonomy",
      "Scorpion"
    ],
    "featured": false
  },
  {
    "id": "pub-4",
    "year": 2026,
    "type": "Journal Article",
    "title": "A reassessment of “Tityus” tenuimanus Banks, 1910, as a misidentified Leiurus sp. (Scorpiones: Buthidae)",
    "authors": "Mousaid, M., Yağmur, E. A., Flores, Z., Rivera, A., Lansari, A., & Bouazza, A.",
    "journal": "Euscorpius",
    "volume": "2026",
    "issue": "431",
    "pages": "1–7",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Tityus tenuimanus",
      "Leiurus",
      "Scorpiones",
      "Buthidae",
      "Taxonomy"
    ],
    "featured": false
  },
  {
    "id": "pub-5",
    "year": 2025,
    "type": "Journal Article",
    "title": "A note on evaporative water loss rates in the checkerboard worm lizard (Trogonophis wiegmanni Kaup 1830) from semi-arid environment in Morocco",
    "authors": "Denize-Proust, N., Le Galliard, J.-F., & Bouazza, A.",
    "journal": "Amphibia-Reptilia",
    "volume": "46",
    "issue": "4",
    "pages": "535–541",
    "doi": "https://doi.org/10.1163/15685381-bja10242",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Trogonophis wiegmanni",
      "Worm lizard",
      "Physiology",
      "Water loss",
      "Morocco"
    ],
    "featured": true
  },
  {
    "id": "pub-6",
    "year": 2025,
    "type": "Journal Article",
    "title": "New insights into the distribution of Scincus and Scincopus (Scincidae) in Northwest Africa, with the first record of the Sandfish Skink, Scincus scincus (Linnaeus, 1758), from Morocco",
    "authors": "Bouazza, A., & Martínez del Mármol, G.",
    "journal": "Herpetology Notes",
    "volume": "18",
    "issue": "",
    "pages": "903–911",
    "doi": "",
    "pdf": "",
    "publisher": "https://herpetologynotes.org/index.php/hn/article/view/214",
    "keywords": [
      "Scincus",
      "Scincopus",
      "Scincus scincus",
      "Sandfish",
      "Distribution",
      "Morocco"
    ],
    "featured": true
  },
  {
    "id": "pub-7",
    "year": 2025,
    "type": "Journal Article",
    "title": "Interactions culturelles et enjeux éthiques dans le tourisme: cas des charmeurs de serpents sur la place Jemaa el-Fna à Marrakech (Maroc)",
    "authors": "Bouazza, A., Jannot, L., & Lahlafi, T.",
    "journal": "Études Caribéennes",
    "volume": "13",
    "issue": "1",
    "pages": "1–13",
    "doi": "https://doi.org/10.4000/13ltl",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Snake charmers",
      "Tourism",
      "Ethics",
      "Jemaa el-Fna",
      "Marrakech",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-8",
    "year": 2025,
    "type": "Journal Article",
    "title": "An update about the genus Uromastyx in Morocco: distribution limits and phenotypic variability",
    "authors": "Bouazza, A., Gil, R. B., Camina, Á., González, I. G., Lansari, A., & Martínez del Mármol, G.",
    "journal": "Boletín de la Asociación Herpetológica Española",
    "volume": "36",
    "issue": "1",
    "pages": "55–58",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Uromastyx",
      "Distribution",
      "Phenotypic variability",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-9",
    "year": 2025,
    "type": "Journal Article",
    "title": "Novel observations of arachnid predation on the Mountain Skink, Chalcides montanus Werner, 1931, and the Algerian Sand Gecko, Tropiocolotes algericus Loveridge, 1947, in Morocco",
    "authors": "Mousaid, M., & Bouazza, A.",
    "journal": "Herpetology Notes",
    "volume": "18",
    "issue": "",
    "pages": "857–860",
    "doi": "",
    "pdf": "https://herpetologynotes.org/index.php/hn/article/view/212/72",
    "publisher": "",
    "keywords": [
      "Chalcides montanus",
      "Tropiocolotes algericus",
      "Arachnids",
      "Predation",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-10",
    "year": 2025,
    "type": "Journal Article",
    "title": "Nouvelles données sur la Couleuvre-chat d’Afrique du Nord, Telescopus tripolitanus, au Maroc",
    "authors": "Bouazza, A., Lansari, A., Deschandol, F., & Rihane, A.",
    "journal": "Bulletin de la Société Herpétologique de France",
    "volume": "187",
    "issue": "",
    "pages": "1–4",
    "doi": "https://doi.org/10.48716/bullshf.187-4",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Telescopus tripolitanus",
      "Snake",
      "Distribution",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-11",
    "year": 2025,
    "type": "Journal Article",
    "title": "New phylogeographic insights for the Saurodactylus brosseti species complex: range extensions and additional contact zones among evolutionary lineages",
    "authors": "Berrilli, E., Harris, D. J., Uetz, P., Bouazza, A., Delcour, N., & Salvi, D.",
    "journal": "Amphibia-Reptilia",
    "volume": "1",
    "issue": "aop",
    "pages": "1–8",
    "doi": "https://doi.org/10.1163/15685381-BJA10218",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Saurodactylus brosseti",
      "Phylogeography",
      "Contact zones",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-12",
    "year": 2025,
    "type": "Journal Article",
    "title": "Deep Learning-Based Snake Species Identification for Enhanced Snakebite Management",
    "authors": "Iguernane, M., Ouzziki, M., Es-Saady, Y., Hajji, M. el, Lansari, A., & Bouazza, A.",
    "journal": "AI",
    "volume": "6",
    "issue": "2",
    "pages": "21",
    "doi": "https://doi.org/10.3390/AI6020021",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Artificial intelligence",
      "Deep learning",
      "Snake identification",
      "Snakebite",
      "Morocco"
    ],
    "featured": true
  },
  {
    "id": "pub-13",
    "year": 2024,
    "type": "Journal Article",
    "title": "Dragons in desert trouble: anthropogenic wells as a potential threat to the Desert Monitor, Varanus griseus (Daudin, 1803), in Morocco",
    "authors": "Zdunek, P., Bouazza, A., & Martínez del Mármol, G.",
    "journal": "Herpetology Notes",
    "volume": "17",
    "issue": "",
    "pages": "821–826",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Varanus griseus",
      "Desert Monitor",
      "Wells",
      "Conservation",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-14",
    "year": 2024,
    "type": "Journal Article",
    "title": "Venom variation among the three subspecies of the North African mountain viper Vipera monticola (Saint-Girons 1954)",
    "authors": "Damm, M., Avella, I., Merzara, R., Lucchini, N., Buldain, J., Corga, F., Bouazza, A., Fahd, S., Süssmuth, R. D., & Martínez-Freiría, F.",
    "journal": "Biochimie",
    "volume": "",
    "issue": "",
    "pages": "",
    "doi": "https://doi.org/10.1016/J.BIOCHI.2024.07.008",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Vipera monticola",
      "Venom",
      "Mountain viper",
      "North Africa",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-15",
    "year": 2023,
    "type": "Journal Article",
    "title": "Fieldwork campaigns and citizen science data increase the distributional range of the elusive Vipera monticola in Morocco",
    "authors": "Martínez-Freiría, F., Bouazza, A., Buldain, J., Freitas, I., Avella, I., Scaramuzzi, A., Sioumpoura, K., Oliveira, D., & Fahd, S.",
    "journal": "Basic and Applied Herpetology",
    "volume": "37",
    "issue": "",
    "pages": "95–105",
    "doi": "https://doi.org/10.11160/BAH.249",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Vipera monticola",
      "Citizen science",
      "Distribution",
      "Fieldwork",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-16",
    "year": 2022,
    "type": "Journal Article",
    "title": "Cross-sectional study of ticks in the vulnerable free-living spur-thighed tortoise Testudo graeca (Testudines: Testudinidae) from Morocco",
    "authors": "Laghzaoui, E. M., Bouazza, A., Abbad, A., & El Mouden, E. H.",
    "journal": "International Journal of Acarology",
    "volume": "48",
    "issue": "1",
    "pages": "76–83",
    "doi": "https://doi.org/10.1080/01647954.2021.2024595",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Testudo graeca",
      "Ticks",
      "Tortoise",
      "Parasites",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-17",
    "year": 2022,
    "type": "Journal Article",
    "title": "New high-elevation records of Malpolon monspessulanus and Hemorrhois hippocrepis from the High Atlas Mountains (Morocco)",
    "authors": "Scaramuzzi, A., Avella, I., Lansari, A., Bouazza, A., & Martínez-Freiría, F.",
    "journal": "Boletín de la Asociación Herpetológica Española",
    "volume": "33",
    "issue": "",
    "pages": "7–11",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Malpolon monspessulanus",
      "Hemorrhois hippocrepis",
      "High Atlas",
      "Distribution",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-18",
    "year": 2021,
    "type": "Journal Article",
    "title": "Checklist of amphibians and reptiles of Morocco: A taxonomic update and standard Arabic names",
    "authors": "Bouazza, A., El Mouden, E. H., & Rihane, A.",
    "journal": "Herpetology Notes",
    "volume": "14",
    "issue": "",
    "pages": "1–14",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Checklist",
      "Amphibians",
      "Reptiles",
      "Taxonomy",
      "Arabic names",
      "Morocco"
    ],
    "featured": true
  },
  {
    "id": "pub-19",
    "year": 2020,
    "type": "Journal Article",
    "title": "New record of the Sahara sand viper, Cerastes vipera (Linnaeus, 1758), from north-eastern Morocco",
    "authors": "Bouazza, A., Laïdi, K., & Martin, J.",
    "journal": "Herpetology Notes",
    "volume": "13",
    "issue": "",
    "pages": "203–205",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Cerastes vipera",
      "Sahara sand viper",
      "Distribution",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-20",
    "year": 2019,
    "type": "Book Chapter",
    "title": "Climate Change Effects on Venomous Snakes",
    "authors": "Bouazza, A., El Hidan, M. A., Aimrane, A., Kahime, K., Lansari, A., Laaradia, M. A., Lahouaoui, H., & Moukrim, A.",
    "journal": "",
    "volume": "",
    "issue": "",
    "pages": "475–490",
    "doi": "https://doi.org/10.4018/978-1-5225-7775-1.ch024",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Climate change",
      "Venomous snakes",
      "Snake ecology"
    ],
    "featured": false
  },
  {
    "id": "pub-21",
    "year": 2019,
    "type": "Book Chapter",
    "title": "Depression and Anxiety Emerging From Heavy Metals",
    "authors": "Lahouaoui, H., Aimrane, A., Khamsi, Y., Zouhairi, N., Benammi, H., El Hidan, M. A., Draoui, A., Alahyane, H., & Bouazza, A.",
    "journal": "",
    "volume": "",
    "issue": "",
    "pages": "305–321",
    "doi": "https://doi.org/10.4018/978-1-5225-7775-1.ch015",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Heavy metals",
      "Depression",
      "Anxiety",
      "Toxicology"
    ],
    "featured": false
  },
  {
    "id": "pub-22",
    "year": 2018,
    "type": "Journal Article",
    "title": "New records in Morocco and predictive distribution modeling for the rare Algerian Thread-snake: Myriopholis algeriensis (Jacquet, 1895)",
    "authors": "Bouazza, A., Lansari, A., Martínez del Mármol, G., Barthe, L., Berroneau, M., & Donaire, D.",
    "journal": "Bulletin de la Société Herpétologique de France",
    "volume": "166",
    "issue": "",
    "pages": "43–50",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Myriopholis algeriensis",
      "Thread-snake",
      "Distribution modelling",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-23",
    "year": 2018,
    "type": "Journal Article",
    "title": "Cas de Tortues Caouannes, Caretta caretta, Echouées au Large du Maroc Atlantique entre Azemmour et Bouznika",
    "authors": "Rihane, A., Bouazza, A., & Aksissou, M.",
    "journal": "African Sea Turtle Newsletter",
    "volume": "10",
    "issue": "",
    "pages": "21–23",
    "doi": "",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Caretta caretta",
      "Sea turtle",
      "Stranding",
      "Atlantic Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-24",
    "year": 2018,
    "type": "Journal Article",
    "title": "Androctonus genus species in arid regions: Ecological niche models, geographical distributions, and envenomation risk",
    "authors": "El Hidan, M. A. El, Touloun, O., Bouazza, A., Laaradia, M. A., & Boumezzough, A.",
    "journal": "Veterinary World",
    "volume": "11",
    "issue": "3",
    "pages": "286–292",
    "doi": "https://doi.org/10.14202/vetworld.2018.286-292",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Androctonus",
      "Scorpion",
      "Ecological niche modelling",
      "Envenomation"
    ],
    "featured": false
  },
  {
    "id": "pub-25",
    "year": 2017,
    "type": "Journal Article",
    "title": "The mitochondrial genomes of atlas geckos (Quedenfeldtia): Mitogenome assembly from transcriptomes and anchored hybrid enrichment datasets",
    "authors": "Lyra, M. L., Joger, U., Schulte, U., Slimani, T., El Mouden, E. H., Bouazza, A., Küunzel, S., Lemmon, A. R., Lemmon, E. M., & Vences, M.",
    "journal": "Mitochondrial DNA Part B: Resources",
    "volume": "2",
    "issue": "1",
    "pages": "356–358",
    "doi": "https://doi.org/10.1080/23802359.2017.1339212",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Quedenfeldtia",
      "Atlas gecko",
      "Mitogenome",
      "Genetics"
    ],
    "featured": false
  },
  {
    "id": "pub-26",
    "year": 2016,
    "type": "Journal Article",
    "title": "Thermal constraints and the influence of reproduction on thermoregulation in a high-altitude gecko (Quedenfeldtia trachyblepharus)",
    "authors": "Bouazza, A., Slimani, T., El Mouden, H., Blouin-Demers, G., & Lourdais, O.",
    "journal": "Journal of Zoology",
    "volume": "300",
    "issue": "1",
    "pages": "36–44",
    "doi": "https://doi.org/10.1111/jzo.12353",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Quedenfeldtia trachyblepharus",
      "Thermoregulation",
      "Reproduction",
      "High Atlas",
      "Morocco"
    ],
    "featured": true
  },
  {
    "id": "pub-27",
    "year": 2015,
    "type": "Journal Article",
    "title": "The Atlas Massif separates a northern and a southern mitochondrial haplotype group of North African water frogs Pelophylax saharicus (Anura: Ranidae) in Morocco",
    "authors": "Lansari, A., Vences, M., Hauswaldt, S., Hendrix, R., Donaire, D., Bouazza, A., Joger, U., El Mouden, E. H., & Slimani, T.",
    "journal": "Amphibia-Reptilia",
    "volume": "36",
    "issue": "4",
    "pages": "437–443",
    "doi": "https://doi.org/10.1163/15685381-00003015",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Pelophylax saharicus",
      "Water frog",
      "Phylogeography",
      "Atlas Mountains",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-28",
    "year": 2014,
    "type": "Journal Article",
    "title": "New insights on phylogeography and distribution of painted frogs (Discoglossus) in northern Africa and the Iberian Peninsula",
    "authors": "Vences, M., de Pous, P., Nicolas, V., Diaz-Rodriguez, J., Donaire, D., Hugemann, K., Hauswaldt, J. S., Amat, F., Barnestein, J. A. M., Bogaerts, S., Bouazza, A., Carranza, S., Galan, P., de la Vega, J., Joger, U., Lansari, A., El Mouden, E. H., Ohler, A., Sanuy, D., et al.",
    "journal": "Amphibia-Reptilia",
    "volume": "35",
    "issue": "3",
    "pages": "305–320",
    "doi": "https://doi.org/10.1163/15685381-00002954",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Discoglossus",
      "Painted frogs",
      "Phylogeography",
      "North Africa",
      "Morocco"
    ],
    "featured": false
  },
  {
    "id": "pub-29",
    "year": 2013,
    "type": "Journal Article",
    "title": "Patterns of throat colour variation in Quedenfeldtia trachyblepharus, a high-altitude gecko endemic to the High Atlas Mountains of Morocco",
    "authors": "Blouin-Demers, G., Lourdais, O., Bouazza, A., Verreault, C., El Mouden, H., & Slimani, T.",
    "journal": "Amphibia-Reptilia",
    "volume": "34",
    "issue": "4",
    "pages": "567–572",
    "doi": "https://doi.org/10.1163/15685381-00002900",
    "pdf": "",
    "publisher": "",
    "keywords": [
      "Quedenfeldtia trachyblepharus",
      "Colour variation",
      "Gecko",
      "High Atlas",
      "Morocco"
    ],
    "featured": false
  }
];

export const PUBLICATIONS = PUBLICATIONS_DATA;
