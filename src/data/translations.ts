export type Locale = 'en' | 'fr' | 'ar';

export interface TranslationDictionary {
  brand: {
    title: string;
    sub: string;
    missionKicker: string;
    description: string;
  };
  nav: {
    home: string;
    checklist: string;
    checklistSub: string;
    species: string;
    amphibians: string;
    amphibiansSub: string;
    turtles: string;
    turtlesSub: string;
    lizards: string;
    lizardsSub: string;
    snakes: string;
    snakesSub: string;
    scorpions: string;
    scorpionsSub: string;
    research: string;
    publications: string;
    publicationsSub: string;
    bibliography: string;
    bibliographySub: string;
    researchProjects: string;
    researchProjectsSub: string;
    distributionAtlas: string;
    distributionAtlasSub: string;
    projects: string;
    expeditions: string;
    distribution: string;
    submitObservation: string;
    about: string;
    team: string;
    teamSub: string;
    courses: string;
    coursesSub: string;
    outreach: string;
    outreachSub: string;
    media: string;
    mediaSub: string;
    contact: string;
    contactSub: string;
    admin: string;
  };
  common: {
    search: string;
    searchPlaceholder: string;
    filterByGroup: string;
    filterByFamily: string;
    filterByStatus: string;
    filterByEndemicity: string;
    allGroups: string;
    allFamilies: string;
    allStatuses: string;
    all: string;
    endemicOnly: string;
    resetFilters: string;
    resultsCount: string;
    noResults: string;
    loading: string;
    error: string;
    retry: string;
    viewDetails: string;
    learnMore: string;
    backToList: string;
    shareRecord: string;
    copyCitation: string;
    copied: string;
    openDoi: string;
    requestPdf: string;
    status: string;
    family: string;
    order: string;
    classTaxon: string;
    scientificName: string;
    commonNames: string;
    distribution: string;
    habitat: string;
    imageCredit: string;
    verifiedRecord: string;
    endemicToMorocco: string;
    nearEndemic: string;
    threatened: string;
    endemicBadge: string;
    noPhoto: string;
    viewMonograph: string;
    exploreDistribution: string;
    globalAssessment: string;
    taxonomicGroup: string;
  };
  statusLabels: {
    LC: string;
    NT: string;
    VU: string;
    EN: string;
    CR: string;
    DD: string;
    NE: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    exploreChecklist: string;
    discoverProjects: string;
    statsYears: string;
    statsStudents: string;
    statsExpeditions: string;
    statsAtlas: string;
    statsSpecies: string;
    statsEndemics: string;
    statsPapers: string;
    statsCitations: string;
    statsContributors: string;
    groupsEyebrow: string;
    groupsTitle: string;
    groupsViewAll: string;
    speciesCountSuffix: string;
    endemicsSuffix: string;
    nativeMarineSuffix: string;
    spotlightEyebrow: string;
    spotlightTitle: string;
    spotlightPhotoBadge: string;
    spotlightCta: string;
    herpatlasEyebrow: string;
    herpatlasTitle: string;
    herpatlasSub: string;
    herpatlasCta: string;
    herpatlasRanges: string;
    herpatlasRangesSub: string;
    herpatlasTransects: string;
    herpatlasTransectsSub: string;
    herpatlasTrends: string;
    herpatlasTrendsSub: string;
    sciencePubsEyebrow: string;
    sciencePubsTitle: string;
    sciencePubsCount: string;
    sciencePubsDesc: string;
    sciencePubsBrowse: string;
    sciencePubsCitations: string;
    scienceFieldEyebrow: string;
    scienceFieldTitle: string;
    scienceFieldDesc: string;
    scienceFieldCount: string;
    scienceFieldContributors: string;
    scienceFieldProjects: string;
    observeEyebrow: string;
    observeTitle: string;
    observeDesc: string;
    observeCta: string;
    observePriorEyebrow: string;
    observeRequirement1: string;
    observeRequirement2: string;
    observeRequirement3: string;
    observeRequirement4: string;
    featuredProjectsTitle: string;
    featuredProjectsSub: string;
    viewAllProjects: string;
    fieldGalleryTitle: string;
    fieldGallerySub: string;
    researchHighlightsTitle: string;
    researchHighlightsSub: string;
    getInvolvedTitle: string;
    getInvolvedSub: string;
    submitCta: string;
    partnersTitle: string;
    partnersEyebrow: string;
    partnersDesc: string;
  };
  pages: {
    amphibians: {
      title: string;
      eyebrow: string;
      description: string;
      stat1: string;
      stat2: string;
      stat3: string;
      notice: string;
    };
    lizards: {
      title: string;
      eyebrow: string;
      description: string;
      stat1: string;
      stat2: string;
      stat3: string;
    };
    snakes: {
      title: string;
      eyebrow: string;
      description: string;
      stat1: string;
      stat2: string;
      stat3: string;
      notice: string;
    };
    turtles: {
      title: string;
      eyebrow: string;
      description: string;
      stat1: string;
      stat2: string;
      stat3: string;
      notice: string;
    };
    scorpions: {
      title: string;
      eyebrow: string;
      description: string;
      stat1: string;
      stat2: string;
      stat3: string;
      notice: string;
    };
    team: {
      title: string;
      eyebrow: string;
      description: string;
      stat1: string;
      stat2: string;
      stat3: string;
      allMembers: string;
      principal: string;
      phd: string;
      technician: string;
      student: string;
      collaborator: string;
    };
    projects: {
      title: string;
      eyebrow: string;
      description: string;
      stat1: string;
      stat2: string;
      stat3: string;
    };
  };
  observationForm: {
    title: string;
    sub: string;
    dateLabel: string;
    locationLabel: string;
    gpsButton: string;
    coordinatesLabel: string;
    privacyNote: string;
    speciesLabel: string;
    speciesOptional: string;
    habitatLabel: string;
    notesLabel: string;
    photoLabel: string;
    photoHelp: string;
    observerName: string;
    observerEmail: string;
    observerPhone: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    successSub: string;
    validationError: string;
  };
  footer: {
    brandBio: string;
    quickLinks: string;
    resources: string;
    scientificGovernance: string;
    speciesDirectory: string;
    researchAndData: string;
    organization: string;
    getInvolved: string;
    copyright: string;
    allRightsReserved: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  en: {
    brand: {
      title: 'Morocco Herpetology',
      sub: 'Scientific Reference & Conservation Platform',
      missionKicker: 'Science · Conservation · Education',
      description: 'Dedicated to the documentation, research, and conservation of Morocco’s amphibians, reptiles, and scorpions.'
    },
    nav: {
      home: 'Home',
      checklist: 'Species Checklist',
      checklistSub: '136 species · CSV export & filters',
      species: 'Species',
      amphibians: 'Amphibians',
      amphibiansSub: '14 species · 3 endemics',
      turtles: 'Turtles',
      turtlesSub: '8 species · terrestrial & marine',
      lizards: 'Lizards',
      lizardsSub: '81 species · largest group',
      snakes: 'Snakes',
      snakesSub: '26 species · 4 venomous',
      scorpions: 'Scorpions',
      scorpionsSub: '7 documented taxa · Buthidae',
      research: 'Research',
      publications: 'Publications',
      publicationsSub: '29 peer-reviewed papers',
      bibliography: 'Bibliography',
      bibliographySub: '2,164 Moroccan citations',
      researchProjects: 'Research Axes',
      researchProjectsSub: 'Taxonomy · ecology · thermal biology',
      distributionAtlas: 'Distribution Atlas',
      distributionAtlasSub: 'Spatial occurrence & gap analysis',
      projects: 'Projects',
      expeditions: 'Expeditions',
      distribution: 'Distribution Data',
      submitObservation: 'Submit an observation',
      about: 'About',
      team: 'Scientific Committee',
      teamSub: '15 researchers & field officers',
      courses: 'Academic Courses',
      coursesSub: 'University modules & field training',
      outreach: 'Youth Outreach',
      outreachSub: 'Schools & citizen science seminars',
      media: 'Media & Field Archive',
      mediaSub: 'Documentary photos & press',
      contact: 'Contact & Inquiries',
      contactSub: 'Faculty labs & emergency guidance',
      admin: 'Scientific Portal'
    },
    common: {
      search: 'Search',
      searchPlaceholder: 'Search by scientific, English, French, or Arabic name...',
      filterByGroup: 'Taxonomic Group',
      filterByFamily: 'Family',
      filterByStatus: 'Conservation Status',
      filterByEndemicity: 'Endemicity',
      allGroups: 'All Taxonomic Groups',
      allFamilies: 'All Families',
      allStatuses: 'All Conservation Statuses',
      all: 'All',
      endemicOnly: 'Moroccan Endemics Only',
      resetFilters: 'Reset Filters',
      resultsCount: 'species documented',
      noResults: 'No species found matching your selected criteria.',
      loading: 'Loading scientific records...',
      error: 'An error occurred while loading data.',
      retry: 'Retry',
      viewDetails: 'View Species Profile',
      learnMore: 'Learn More',
      backToList: 'Back to Explorer',
      shareRecord: 'Share',
      copyCitation: 'Copy Citation',
      copied: 'Citation Copied!',
      openDoi: 'View Publisher / DOI',
      requestPdf: 'Request PDF Copy',
      status: 'IUCN Red List Status',
      family: 'Family',
      order: 'Order',
      classTaxon: 'Class',
      scientificName: 'Scientific Name & Authority',
      commonNames: 'Common Names',
      distribution: 'Moroccan Distribution',
      habitat: 'Habitat & Ecology',
      imageCredit: 'Photo Credit',
      verifiedRecord: 'Verified Scientific Record',
      endemicToMorocco: 'Endemic to Morocco',
      nearEndemic: 'Regional / Near-Endemic',
      threatened: 'Threatened Taxon',
      endemicBadge: 'Endemic',
      noPhoto: 'No photograph available',
      viewMonograph: 'View Species Monograph',
      exploreDistribution: 'Explore Distribution',
      globalAssessment: 'Global Assessment',
      taxonomicGroup: 'Taxonomic Group'
    },
    statusLabels: {
      LC: 'Least Concern (LC)',
      NT: 'Near Threatened (NT)',
      VU: 'Vulnerable (VU)',
      EN: 'Endangered (EN)',
      CR: 'Critically Endangered (CR)',
      DD: 'Data Deficient (DD)',
      NE: 'Not Evaluated (NE)'
    },
    home: {
      heroEyebrow: "A free resource for Morocco's biodiversity",
      heroTitle: 'The Herpetofauna of Morocco',
      heroSubtitle: 'Discover Morocco’s reptiles, amphibians, and arachnids. A scientific resource, grounded in field observation.',
      heroCta: 'Explore species',
      exploreChecklist: 'Explore National Checklist',
      discoverProjects: 'Conservation Initiatives',
      statsYears: 'Years of Fieldwork & Research',
      statsStudents: 'Students & Trainees Reached Annually',
      statsExpeditions: 'Scientific Field Expeditions per Year',
      statsAtlas: 'Verified Biodiversity Data Platform',
      statsSpecies: 'Documented species',
      statsEndemics: 'Moroccan endemics',
      statsPapers: 'Peer-reviewed papers',
      statsCitations: 'Moroccan citations',
      statsContributors: 'Scientific contributors',
      groupsEyebrow: 'THE SPECIES DIRECTORY',
      groupsTitle: 'Five groups. 136 species.',
      groupsViewAll: 'View full checklist',
      speciesCountSuffix: 'species',
      endemicsSuffix: 'endemics',
      nativeMarineSuffix: 'native & marine',
      spotlightEyebrow: 'SPECIES SPOTLIGHT',
      spotlightTitle: 'A closer look.',
      spotlightPhotoBadge: 'FIELD PHOTO',
      spotlightCta: 'Explore species',
      herpatlasEyebrow: 'THE SPECIES DIRECTORY',
      herpatlasTitle: 'HerpAtlas Morocco',
      herpatlasSub: 'A centralized georeferenced database monitoring distribution ranges, elevational transects, and population trends across Morocco.',
      herpatlasCta: 'Explore distribution atlas',
      herpatlasRanges: 'Distribution ranges',
      herpatlasRangesSub: 'Georeferenced occurrence records across all biomes',
      herpatlasTransects: 'Elevational transects',
      herpatlasTransectsSub: 'Vertical extent from sea level to Alpine zones',
      herpatlasTrends: 'Population trends',
      herpatlasTrendsSub: 'Observing taxa trends over long-term monitoring',
      sciencePubsEyebrow: 'PEER-REVIEWED SCIENCE',
      sciencePubsTitle: 'From field to literature.',
      sciencePubsCount: '29',
      sciencePubsDesc: 'Peer-reviewed papers on Morocco\'s herpetofauna',
      sciencePubsBrowse: 'Browse 29 publications',
      sciencePubsCitations: 'Search 2,164 citations',
      scienceFieldEyebrow: 'FIELD SCIENCE',
      scienceFieldTitle: 'Science on the ground.',
      scienceFieldDesc: 'Discover the researchers and field scientists behind the scientific committee. Field research safeguarding native habitats.',
      scienceFieldCount: '15',
      scienceFieldContributors: 'Scientific contributors',
      scienceFieldProjects: 'View research projects',
      observeEyebrow: 'FIELD RECORD SUBMISSION',
      observeTitle: 'Seen something worth recording?',
      observeDesc: 'Help document Morocco\'s herpetofauna. Our scientific committee verifies every record before integration into the HerpAtlas collection.',
      observeCta: 'Submit an observation',
      observePriorEyebrow: 'PRIOR TO RELEASE',
      observeRequirement1: 'Observation date',
      observeRequirement2: 'Approximate locality',
      observeRequirement3: 'In-situ photograph',
      observeRequirement4: 'Observer confidence',
      featuredProjectsTitle: 'Priority Conservation Initiatives',
      featuredProjectsSub: 'Applying science, technology, and community partnerships to solve real conservation problems across Morocco.',
      viewAllProjects: 'View All Projects',
      fieldGalleryTitle: 'Evidence in Action: From the Field',
      fieldGallerySub: 'Field observations, habitat surveys, and community training in the varied ecosystems of Morocco.',
      researchHighlightsTitle: 'Peer-Reviewed Scientific Output',
      researchHighlightsSub: 'Taxonomic revisions, ecological discoveries, and spatial modeling from our research team.',
      getInvolvedTitle: 'Contribute to Moroccan Herpetology',
      getInvolvedSub: 'Your wildlife encounters provide vital distribution evidence. Submit observations safely with coordinate protection for sensitive species.',
      submitCta: 'Submit a Field Record',
      partnersTitle: 'Institutional & Scientific Partners',
      partnersEyebrow: 'Academic & Institutional Alliances',
      partnersDesc: 'Formally partnered with Moroccan government ministries, academic faculties, and recognized international zoological organizations to drive field herpetology, anti-poaching mitigation, and biodiversity protection.'
    },
    pages: {
      amphibians: {
        title: 'Amphibians of Morocco',
        eyebrow: 'Class Amphibia · Anura & Caudata · 5 Families',
        description: 'Morocco hosts 14 recognized amphibian species belonging to 5 families: Salamandridae, Alytidae, Bufonidae, Ranidae, and Pelobatidae. Positioned between the Mediterranean basin and the Saharan arid limit, Morocco’s hydrographic basins support unique relics, including the Moroccan Spadefoot Toad (Pelobates varaldii) and the North African Fire Salamander (Salamandra algira).',
        stat1: 'Native Species',
        stat2: 'Moroccan Endemics',
        stat3: 'Taxonomic Families',
        notice: 'Key conservation threats include wetland drainage, agricultural aquifer depletion, and clinical vigilance for Batrachochytrium chytridiomycosis.'
      },
      lizards: {
        title: 'Lizards of Morocco',
        eyebrow: 'Suborder Sauria · 9 Families · Western Palearctic Diversity Center',
        description: 'With 81 documented species across 9 families (Lacertidae, Gekkonidae, Phyllodactylidae, Agamidae, Scincidae, Blanidae, Trogonophidae, Chamaeleonidae, and Varanidae), Morocco represents the richest hotspot for saurian diversification in the Western Palearctic. The High Atlas, Anti-Atlas, and Saharan ecotones have driven extensive speciation.',
        stat1: 'Documented Species',
        stat2: 'Moroccan Endemics',
        stat3: 'Taxonomic Families'
      },
      snakes: {
        title: 'Snakes of Morocco',
        eyebrow: 'Suborder Serpentes · 26 Documented Species · 7 Families',
        description: 'Morocco’s ophidian fauna comprises 26 documented snake species across 7 families: Colubridae, Psammophiidae, Lamprophiidae, Natricidae, Leptotyphlopidae, Elapidae, and Viperidae. The majority are harmless predators vital to ecosystem balance and rodent control, alongside 7 front-fanged, medically significant venomous species.',
        stat1: 'Native Species',
        stat2: 'Medically Significant',
        stat3: 'Moroccan Endemics',
        notice: 'In accordance with Moroccan biodiversity conservation laws, exact geographic coordinates for all Viperidae and Elapidae are generalized to prevent illegal commercial collecting.'
      },
      turtles: {
        title: 'Turtles & Tortoises of Morocco',
        eyebrow: 'Order Testudines · 8 Documented Species · Terrestrial, Freshwater & Marine',
        description: 'Morocco is home to 8 chelonian species spanning continental tortoises (Testudo graeca), freshwater terrapins (Mauremys leprosa, Emys orbicularis), and globally protected marine turtles foraging along the Atlantic and Mediterranean coasts.',
        stat1: 'Documented Species',
        stat2: 'Ecological Guilds',
        stat3: 'Protection Status',
        notice: 'All Moroccan chelonians are legally protected. Wild collection for the domestic pet trade or souvenir market is strictly prohibited under national law 29-05.'
      },
      scorpions: {
        title: 'Scorpions of Morocco',
        eyebrow: 'Order Scorpiones · Arachnida of Morocco · Clinical Toxinology',
        description: 'Morocco features an exceptionally rich scorpion fauna primarily within the families Buthidae and Scorpionidae. Across the arid and semi-arid regions of Souss, Drâa, and the Oriental, scorpion envenomation represents a critical public health priority.',
        stat1: 'Audited Catalog Taxa',
        stat2: 'Endemic Taxa',
        stat3: 'Medical Families',
        notice: 'Digital cataloging for Moroccan arachnida is ongoing. The current dataset features confirmed voucher records for medically significant Buthidae and Scorpionidae.'
      },
      team: {
        title: 'Our Research Team',
        eyebrow: 'Scientific Committee & Research Investigators',
        description: 'Meet the faculty researchers, doctoral candidates, technical specialists, and field herpetologists driving conservation science, university academic training, and biodiversity monitoring at Morocco Herpetology.',
        stat1: 'Core Investigators',
        stat2: 'Primary Institutional Base',
        stat3: 'Field-Verified Researchers',
        allMembers: 'All Members',
        principal: 'Principal Investigators',
        phd: 'PhD Fellows',
        technician: 'Technical Specialists',
        student: 'Graduate Researchers',
        collaborator: 'Collaborators'
      },
      projects: {
        title: 'Conservation Projects & Field Actions',
        eyebrow: 'Conservation Interventions & Habitat Restoration',
        description: 'Discover our priority conservation interventions across Morocco. We combine systematic scientific research, environmental engineering, local community engagement, and multi-institutional partnerships to safeguard threatened species and ecosystems.',
        stat1: 'Flagship Programmes',
        stat2: 'Institutional Partners',
        stat3: 'Active Field Scope'
      }
    },
    observationForm: {
      title: 'Submit a Wildlife Observation',
      sub: 'Help document species occurrence across Morocco. Every record is scientifically reviewed before cataloging.',
      dateLabel: 'Observation Date',
      locationLabel: 'Location Description / Nearest Town',
      gpsButton: 'Use My Current GPS Position',
      coordinatesLabel: 'Latitude & Longitude',
      privacyNote: 'Privacy Notice: Precise GPS coordinates of sensitive or threatened taxa are automatically blurred to prevent poaching.',
      speciesLabel: 'Observed Species (if known)',
      speciesOptional: 'Optional — leave blank if uncertain or seeking assistance.',
      habitatLabel: 'Habitat Type / Substrate',
      notesLabel: 'Field Notes & Behavior',
      photoLabel: 'Photographic Evidence',
      photoHelp: 'Upload clear photographs of dorsal pattern, head scales, or ventral characters if available.',
      observerName: 'Your Name / Contributor ID',
      observerEmail: 'Email Address for Scientific Follow-up',
      observerPhone: 'WhatsApp / Phone (Optional for quick contact)',
      submitButton: 'Submit for Scientific Review',
      submitting: 'Verifying and submitting observation...',
      successMessage: 'Observation Submitted Successfully',
      successSub: 'Your record has been logged in our pending review queue with unique identifier. Thank you for contributing to Morocco’s biodiversity knowledge!',
      validationError: 'Please complete all required fields and verify coordinates.'
    },
    footer: {
      brandBio: 'A scientific resource dedicated to documentation, taxonomy, and conservation of Moroccan reptiles, amphibians, and scorpions.',
      quickLinks: 'Navigation',
      resources: 'Scientific Resources',
      scientificGovernance: 'Institutional Governance',
      speciesDirectory: 'Species Directory',
      researchAndData: 'Research & Data',
      organization: 'Organization',
      getInvolved: 'Get Involved',
      copyright: 'Scientific data published under Creative Commons Attribution 4.0.',
      allRightsReserved: 'All rights reserved.',
      backToTop: 'Back to top'
    }
  },
  fr: {
    brand: {
      title: 'Morocco Herpetology',
      sub: 'Plateforme Scientifique de Référence & de Conservation',
      missionKicker: 'Science · Conservation · Éducation',
      description: 'Dédiée à la documentation, la recherche et la préservation des amphibiens, reptiles et scorpions du Maroc.'
    },
    nav: {
      home: 'Accueil',
      checklist: 'Checklist des Espèces',
      checklistSub: '136 espèces · Export CSV & filtres',
      species: 'Espèces',
      amphibians: 'Amphibiens',
      amphibiansSub: '14 espèces · 3 endémiques',
      turtles: 'Tortues',
      turtlesSub: '8 espèces · terrestres & marines',
      lizards: 'Lézards',
      lizardsSub: '81 espèces · groupe principal',
      snakes: 'Serpents',
      snakesSub: '26 espèces · 4 venimeuses',
      scorpions: 'Scorpions',
      scorpionsSub: '7 taxons documentés · Buthidae',
      research: 'Recherche',
      publications: 'Publications',
      publicationsSub: '29 articles à comité de lecture',
      bibliography: 'Bibliographie',
      bibliographySub: '2 164 citations marocaines',
      researchProjects: 'Axes de Recherche',
      researchProjectsSub: 'Taxonomie · écologie · biologie thermique',
      distributionAtlas: 'Atlas de Répartition',
      distributionAtlasSub: 'Occurrence spatiale & modélisation',
      projects: 'Projets',
      expeditions: 'Expéditions',
      distribution: 'Données de Répartition',
      submitObservation: 'Soumettre une observation',
      about: 'À Propos',
      team: 'Comité Scientifique',
      teamSub: '15 chercheurs & agents de terrain',
      courses: 'Formations Académiques',
      coursesSub: 'Modules universitaires & stages de terrain',
      outreach: 'Sensibilisation & Jeunesse',
      outreachSub: 'Écoles & séminaires participatifs',
      media: 'Médias & Archives',
      mediaSub: 'Photographies naturalistes & presse',
      contact: 'Contact & Demandes',
      contactSub: 'Laboratoires & assistance d\'urgence',
      admin: 'Portail Scientifique'
    },
    common: {
      search: 'Rechercher',
      searchPlaceholder: 'Nom scientifique, français, anglais ou arabe...',
      filterByGroup: 'Groupe Taxonomique',
      filterByFamily: 'Famille',
      filterByStatus: 'Statut de Conservation',
      filterByEndemicity: 'Endémisme',
      allGroups: 'Tous les groupes taxonomiques',
      allFamilies: 'Toutes les familles',
      allStatuses: 'Tous les statuts UICN',
      all: 'Tout',
      endemicOnly: 'Endémiques du Maroc uniquement',
      resetFilters: 'Réinitialiser les filtres',
      resultsCount: 'espèces documentées',
      noResults: 'Aucune espèce ne correspond à vos critères de recherche.',
      loading: 'Chargement des données scientifiques...',
      error: 'Une erreur est survenue lors du chargement.',
      retry: 'Réessayer',
      viewDetails: 'Consulter la Fiche Espèce',
      learnMore: 'En Savoir Plus',
      backToList: 'Retour à l\'Explorateur',
      shareRecord: 'Partager',
      copyCitation: 'Copier la Référence',
      copied: 'Référence Copiée !',
      openDoi: 'Voir chez l\'Éditeur / DOI',
      requestPdf: 'Demander le Tiré à Part (PDF)',
      status: 'Statut Liste Rouge UICN',
      family: 'Famille',
      order: 'Ordre',
      classTaxon: 'Classe',
      scientificName: 'Nom Scientifique & Auteur',
      commonNames: 'Noms Communs',
      distribution: 'Répartition au Maroc',
      habitat: 'Habitat & Écologie',
      imageCredit: 'Crédit Photographique',
      verifiedRecord: 'Donnée Scientifique Vérifiée',
      endemicToMorocco: 'Endémique du Maroc',
      nearEndemic: 'Quasi-Endémique Régional',
      threatened: 'Taxon Menacé',
      endemicBadge: 'Endémique',
      noPhoto: 'Aucune photographie disponible',
      viewMonograph: 'Consulter la Monographie',
      exploreDistribution: 'Explorer la Répartition',
      globalAssessment: 'Évaluation Globale',
      taxonomicGroup: 'Groupe Taxonomique'
    },
    statusLabels: {
      LC: 'Préoccupation mineure (LC)',
      NT: 'Quasi menacée (NT)',
      VU: 'Vulnérable (VU)',
      EN: 'En danger (EN)',
      CR: 'En danger critique (CR)',
      DD: 'Données insuffisantes (DD)',
      NE: 'Non évaluée (NE)'
    },
    home: {
      heroEyebrow: 'Une ressource libre pour la biodiversité du Maroc',
      heroTitle: "L'Herpétofaune du Maroc",
      heroSubtitle: "Découvrez les reptiles, amphibiens et arachnides du Maroc. Une ressource scientifique de référence, ancrée dans l'observation de terrain.",
      heroCta: 'Explorer les espèces',
      exploreChecklist: 'Consulter la Checklist Nationale',
      discoverProjects: 'Nos Projets de Conservation',
      statsYears: 'Années d\'Expérience et de Recherche',
      statsStudents: 'Étudiants et Jeunes Sensibilisés par An',
      statsExpeditions: 'Expéditions Scientifiques par An',
      statsAtlas: 'Plateforme Validée de Données Naturalistes',
      statsSpecies: 'Espèces documentées',
      statsEndemics: 'Endémiques du Maroc',
      statsPapers: 'Articles scientifiques',
      statsCitations: 'Citations marocaines',
      statsContributors: 'Contributeurs scientifiques',
      groupsEyebrow: 'LE RÉPERTOIRE DES ESPÈCES',
      groupsTitle: 'Cinq groupes. 136 espèces.',
      groupsViewAll: 'Voir la checklist complète',
      speciesCountSuffix: 'espèces',
      endemicsSuffix: 'endémiques',
      nativeMarineSuffix: 'indigènes & marines',
      spotlightEyebrow: 'FOCUS SUR UNE ESPÈCE',
      spotlightTitle: 'Gros plan.',
      spotlightPhotoBadge: 'PHOTO DE TERRAIN',
      spotlightCta: 'Explorer les espèces',
      herpatlasEyebrow: 'LE RÉPERTOIRE DES ESPÈCES',
      herpatlasTitle: 'HerpAtlas Maroc',
      herpatlasSub: 'Une base de données géoréférencée centralisée suivant les aires de répartition, les transects altitudinaux et les dynamiques de populations au Maroc.',
      herpatlasCta: "Explorer l'atlas de répartition",
      herpatlasRanges: 'Aires de répartition',
      herpatlasRangesSub: 'Données de présence géoréférencées dans tous les biomes',
      herpatlasTransects: 'Transects altitudinaux',
      herpatlasTransectsSub: 'Extension verticale du niveau de la mer aux zones alpines',
      herpatlasTrends: 'Tendances des populations',
      herpatlasTrendsSub: 'Suivi rigoureux de l\'évolution des taxons sur le long terme',
      sciencePubsEyebrow: 'SCIENCE À COMITÉ DE LECTURE',
      sciencePubsTitle: 'Du terrain aux publications.',
      sciencePubsCount: '29',
      sciencePubsDesc: 'Articles scientifiques sur l\'herpétofaune du Maroc',
      sciencePubsBrowse: 'Consulter 29 publications',
      sciencePubsCitations: 'Rechercher 2 164 citations',
      scienceFieldEyebrow: 'SCIENCE DE TERRAIN',
      scienceFieldTitle: 'La science sur le terrain.',
      scienceFieldDesc: 'Découvrez les chercheurs et herpétologues de terrain composant le comité scientifique et menant des actions de suivi in situ.',
      scienceFieldCount: '15',
      scienceFieldContributors: 'Contributeurs scientifiques',
      scienceFieldProjects: 'Voir les projets de recherche',
      observeEyebrow: 'SOUMISSION D\'OBSERVATION DE TERRAIN',
      observeTitle: 'Vous avez fait une observation remarquable ?',
      observeDesc: 'Participez à la documentation de l\'herpétofaune marocaine. Notre comité scientifique vérifie chaque donnée avant son intégration dans les collections de l\'HerpAtlas.',
      observeCta: 'Soumettre une observation',
      observePriorEyebrow: 'DONNÉES REQUISES',
      observeRequirement1: 'Date d\'observation',
      observeRequirement2: 'Localité approximative',
      observeRequirement3: 'Photographie in situ',
      observeRequirement4: 'Niveau de certitude de l\'observateur',
      featuredProjectsTitle: 'Initiatives Prioritaires de Conservation',
      featuredProjectsSub: 'Mettre la rigueur scientifique et la collaboration locale au service de solutions concrètes sur le terrain.',
      viewAllProjects: 'Voir Tous les Projets',
      fieldGalleryTitle: 'Actions sur le Terrain',
      fieldGallerySub: 'Missions d\'inventaire, sauvetages de faune et formation des communautés dans tous les écosystèmes marocains.',
      researchHighlightsTitle: 'Publications Scientifiques Récentes',
      researchHighlightsSub: 'Découvertes taxonomiques, études d\'écologie thermique et bilans de conservation.',
      getInvolvedTitle: 'Contribuez à la Recherche Herpétologique',
      getInvolvedSub: 'Vos observations sont précieuses pour documenter la répartition des espèces. Les données sont validées et les coordonnées sensibles sont protégées.',
      submitCta: 'Soumettre une Observation',
      partnersTitle: 'Partenaires Institutionnels & Scientifiques',
      partnersEyebrow: 'Alliances Académiques & Institutionnelles',
      partnersDesc: 'En partenariat formel avec les ministères marocains, les universités et les organisations zoologiques internationales pour la recherche herpétologique et la préservation de la biodiversité.'
    },
    pages: {
      amphibians: {
        title: 'Amphibiens du Maroc',
        eyebrow: 'Classe des Amphibiens · Anoures & Urodèles · 5 Familles',
        description: 'Le Maroc abrite 14 espèces d\'amphibiens réparties en 5 familles : Salamandridae, Alytidae, Bufonidae, Ranidae et Pelobatidae. Entre le bassin méditerranéen et la limite aride saharienne, les bassins hydrographiques marocains soutiennent des taxons relictuels uniques comme le Pélobate marocain (Pelobates varaldii) et la Salamandre tachetée nord-africaine (Salamandra algira).',
        stat1: 'Espèces Indigènes',
        stat2: 'Endémiques du Maroc',
        stat3: 'Familles Taxonomiques',
        notice: 'Les menaces majeures comprennent l\'assèchement des zones humides, la baisse des nappes phréatiques et la vigilance face à la chytridiomycose.'
      },
      lizards: {
        title: 'Lézards du Maroc',
        eyebrow: 'Sous-ordre des Sauriens · 9 Familles · Centre de Diversité du Paléarctique',
        description: 'Avec 81 espèces documentées au sein de 9 familles (Lacertidae, Gekkonidae, Phyllodactylidae, Agamidae, Scincidae, Blanidae, Trogonophidae, Chamaeleonidae et Varanidae), le Maroc représente le foyer de diversification des sauriens le plus remarquable du Paléarctique occidental.',
        stat1: 'Espèces Documentées',
        stat2: 'Endémiques du Maroc',
        stat3: 'Familles Taxonomiques'
      },
      snakes: {
        title: 'Serpents du Maroc',
        eyebrow: 'Sous-ordre des Serpents · 26 Espèces Documentées · 7 Familles',
        description: 'La faune ophidienne du Maroc compte 26 espèces de serpents réparties en 7 familles : Colubridae, Psammophiidae, Lamprophiidae, Natricidae, Leptotyphlopidae, Elapidae et Viperidae. La majorité sont des prédateurs inoffensifs vitaux pour l\'équilibre des écosystèmes.',
        stat1: 'Espèces Indigènes',
        stat2: 'Importance Médicale',
        stat3: 'Endémiques du Maroc',
        notice: 'Conformément aux lois de conservation de la biodiversité, les coordonnées géographiques précises des espèces venimeuses sont protégées contre les collectes illégales.'
      },
      turtles: {
        title: 'Tortues du Maroc',
        eyebrow: 'Ordre des Testudines · 8 Espèces · Terrestres, Dulçaquicoles & Marines',
        description: 'Le Maroc héberge 8 espèces de chéloniens comprenant la tortue mauresque (Testudo graeca), des cistudes d\'eau douce (Mauremys leprosa, Emys orbicularis) et des tortues marines protégées au niveau planétaire.',
        stat1: 'Espèces Documentées',
        stat2: 'Guildes Écologiques',
        stat3: 'Statut de Protection',
        notice: 'Toutes les tortues du Maroc sont strictement protégées. La collecte dans la nature pour le commerce ou l\'artisanat est formellement interdite par la loi 29-05.'
      },
      scorpions: {
        title: 'Scorpions du Maroc',
        eyebrow: 'Ordre des Scorpiones · Arachnides du Maroc · Toxinologie Clinique',
        description: 'Le Maroc présente une arachnofaune scorpionique d\'une exceptionnelle diversité, principalement au sein des familles Buthidae et Scorpionidae. La piqûre de scorpion constitue une priorité majeure de santé publique dans les régions arides.',
        stat1: 'Taxons Vérifiés',
        stat2: 'Taxons Endémiques',
        stat3: 'Familles Médicales',
        notice: 'Le catalogage numérique des arachnides du Maroc est en cours d\'enrichissement continu par les équipes scientifiques.'
      },
      team: {
        title: 'Comité Scientifique & Chercheurs',
        eyebrow: 'Comité Scientifique & Équipe de Recherche',
        description: 'Découvrez les enseignants-chercheurs, doctorants, ingénieurs et herpétologues de terrain qui pilotent les programmes scientifiques, les formations académiques et le suivi de la biodiversité.',
        stat1: 'Chercheurs Principaux',
        stat2: 'Base Institutionnelle (UIZ / FPT)',
        stat3: 'Missions de Terrain Réalisées',
        allMembers: 'Tous les membres',
        principal: 'Investigateurs principaux',
        phd: 'Doctorants',
        technician: 'Spécialistes techniques',
        student: 'Jeunes chercheurs',
        collaborator: 'Collaborateurs'
      },
      projects: {
        title: 'Projets de Conservation & Actions de Terrain',
        eyebrow: 'Actions de Conservation & Restauration des Habitats',
        description: 'Découvrez nos initiatives prioritaires de conservation à travers le Maroc. Nous combinons recherche scientifique de pointe, sensibilisation des populations locales et partenariats institutionnels.',
        stat1: 'Programmes Phares',
        stat2: 'Partenaires Institutionnels',
        stat3: 'Zones d\'Intervention'
      }
    },
    observationForm: {
      title: 'Transmettre une Observation de Faune',
      sub: 'Aidez-nous à documenter la biodiversité marocaine. Chaque fiche est examinée par nos spécialistes avant validation.',
      dateLabel: 'Date de l\'Observation',
      locationLabel: 'Localité / Ville la Plus Proche',
      gpsButton: 'Utiliser ma Position GPS Actuelle',
      coordinatesLabel: 'Coordonnées (Latitude & Longitude)',
      privacyNote: 'Protection de la faune : Les coordonnées précises des taxons sensibles sont automatiquement floutées pour prévenir le braconnage.',
      speciesLabel: 'Espèce Observée (si identifiée)',
      speciesOptional: 'Facultatif — laissez vide si vous souhaitez une aide à l\'identification.',
      habitatLabel: 'Type de Milieu / Substrat',
      notesLabel: 'Notes de Terrain et Comportement',
      photoLabel: 'Photographies Témoins',
      photoHelp: 'Téléversez des clichés nets montrant la tête, les écailles ou la livrée dorsale.',
      observerName: 'Nom de l\'Observateur / Identifiant',
      observerEmail: 'Adresse Électronique pour le Suivi',
      observerPhone: 'WhatsApp / Téléphone (Optionnel pour contact rapide)',
      submitButton: 'Transmettre pour Validation Scientifique',
      submitting: 'Vérification et transmission en cours...',
      successMessage: 'Observation Enregistrée avec Succès',
      successSub: 'Votre observation a été attribuée à notre file de validation avec un identifiant unique. Merci pour votre contribution précieuse !',
      validationError: 'Veuillez renseigner tous les champs obligatoires et vérifier les coordonnées.'
    },
    footer: {
      brandBio: 'Une ressource scientifique indépendante consacrée à l\'étude, la protection et la valorisation de l\'herpétofaune et de l\'arachnofaune du Maroc.',
      quickLinks: 'Navigation',
      resources: 'Ressources Scientifiques',
      scientificGovernance: 'Gouvernance & Déontologie',
      speciesDirectory: 'Répertoire des Espèces',
      researchAndData: 'Recherche & Données',
      organization: 'Organisation',
      getInvolved: 'Participer',
      copyright: 'Données scientifiques publiées sous licence Creative Commons Attribution 4.0.',
      allRightsReserved: 'Tous droits réservés.',
      backToTop: 'Haut de page'
    }
  },
  ar: {
    brand: {
      title: 'علم الزواحف في المغرب',
      sub: 'المنصة العلمية المرجعية لحماية الزواحف والبرمائيات',
      missionKicker: 'علم · محافظة · تربية بيئية',
      description: 'منصة علمية مرجعية مكرسة لدراسة وتوثيق وحماية الزواحف والبرمائيات والعقارب في المملكة المغربية.'
    },
    nav: {
      home: 'الرئيسية',
      checklist: 'قائمة الأنواع الوطنية',
      checklistSub: '136 نوعاً · تصدير وفلاتر بحثية',
      species: 'الأنواع',
      amphibians: 'البرمائيات',
      amphibiansSub: '14 نوعاً · 3 متوطنة بالمغرب',
      turtles: 'السلاحف',
      turtlesSub: '8 أنواع · برية وبحرية',
      lizards: 'السحالي',
      lizardsSub: '81 نوعاً · المجموعة الأكبر',
      snakes: 'الثعابين والأفاعي',
      snakesSub: '26 نوعاً · 4 سامة',
      scorpions: 'العقارب',
      scorpionsSub: '7 أصناف موثقة · فصيلة البوثيدي',
      research: 'البحث العلمي',
      publications: 'المنشورات العلمية',
      publicationsSub: '29 ورقة علمية محكمة',
      bibliography: 'المراجع الببليوغرافية',
      bibliographySub: '2,164 مرجعاً واستشهاداً',
      researchProjects: 'محاور البحث',
      researchProjectsSub: 'التصنيف · البيئة · الديناميكا الحرارية',
      distributionAtlas: 'أطلس التوزيع الجغرافي',
      distributionAtlasSub: 'خرائط التواجد والمسح المكاني',
      projects: 'المشاريع',
      expeditions: 'البعثات الميدانية',
      distribution: 'بيانات التوزيع',
      submitObservation: 'إرسال ملاحظة ميدانية',
      about: 'عن المنصة',
      team: 'اللجنة العلمية',
      teamSub: '15 باحثاً ومختصاً ميدانياً',
      courses: 'التكوينات الأكاديمية',
      coursesSub: 'وحدات جامعية وتدريب ميداني',
      outreach: 'التربية والتوعية',
      outreachSub: 'برامج المدارس والعلوم التشاركية',
      media: 'الإعلام والأرشيف',
      mediaSub: 'صور وثائقية وتغطيات صحفية',
      contact: 'الاتصال والتواصل',
      contactSub: 'المختبرات الجامعية والدعم العاجل',
      admin: 'بوابة المراجعة العلمية'
    },
    common: {
      search: 'بحث',
      searchPlaceholder: 'البحث بالاسم العلمي، العربي، الفرنسي أو الإنجليزي...',
      filterByGroup: 'المجموعة التصنيفية',
      filterByFamily: 'الفصيلة',
      filterByStatus: 'درجة الحماية والتهديد',
      filterByEndemicity: 'الأنواع المتوطنة',
      allGroups: 'جميع المجموعات',
      allFamilies: 'جميع الفصائل',
      allStatuses: 'جميع درجات القائمة الحمراء',
      all: 'الكل',
      endemicOnly: 'الأنواع المتوطنة بالمغرب فقط',
      resetFilters: 'إعادة ضبط خيارات البحث',
      resultsCount: 'نوعاً موثقاً',
      noResults: 'لم يتم العثور على أنواع تطابق معايير البحث المحددة.',
      loading: 'جاري تحميل البيانات العلمية...',
      error: 'حدث خطأ أثناء تحميل السجلات.',
      retry: 'إعادة المحاولة',
      viewDetails: 'عرض البطاقة العلمية للنوع',
      learnMore: 'المزيد من التفاصيل',
      backToList: 'العودة للدليل الشامل',
      shareRecord: 'مشاركة السجل',
      copyCitation: 'نسخ المرجع العلمي',
      copied: 'تم نسخ المرجع بنجاح!',
      openDoi: 'الاطلاع لدى الناشر / المعرف الرقمي',
      requestPdf: 'طلب نسخة من المقال (PDF)',
      status: 'حالة الحفظ (القائمة الحمراء UICN)',
      family: 'الفصيلة',
      order: 'الرتبة',
      classTaxon: 'الطائفة',
      scientificName: 'الاسم العلمي والسلطة التصنيفية',
      commonNames: 'الأسماء الشائعة',
      distribution: 'التوزيع الجغرافي بالمغرب',
      habitat: 'الموئل الطبيعي والسلوك البيئي',
      imageCredit: 'حقوق الصورة',
      verifiedRecord: 'سجل علمي معتمد',
      endemicToMorocco: 'متوطن بالمغرب فقط',
      nearEndemic: 'متوطن إقليمي بشمال إفريقيا',
      threatened: 'نوع مهدد بالانقراض',
      endemicBadge: 'متوطن',
      noPhoto: 'لا تتوفر صورة فوتوغرافية',
      viewMonograph: 'عرض البطاقة العلمية للنوع',
      exploreDistribution: 'استكشاف التوزيع الجغرافي',
      globalAssessment: 'تقييم عالمي',
      taxonomicGroup: 'المجموعة التصنيفية'
    },
    statusLabels: {
      LC: 'غير مهدد (LC)',
      NT: 'قريب من التهديد (NT)',
      VU: 'هش / معرض للتهديد (VU)',
      EN: 'مهدد بالانقراض (EN)',
      CR: 'مهدد بشكل حرج (CR)',
      DD: 'معطيات غير كافية (DD)',
      NE: 'لم يقيّم بعد (NE)'
    },
    home: {
      heroEyebrow: 'منصة مفتوحة للتنوع البيولوجي في المغرب',
      heroTitle: 'زواحف وبرمائيات المغرب',
      heroSubtitle: 'اكتشف زواحف وبرمائيات وعقارب المغرب. منصة علمية مرجعية قائمة على الملاحظة والبحث الميداني الدقيق.',
      heroCta: 'استكشاف الأنواع',
      exploreChecklist: 'استكشاف القائمة الوطنية للأنواع',
      discoverProjects: 'مشاريع المحافظة الميدانية',
      statsYears: 'سنوات من الخبرة والبحث الميداني',
      statsStudents: 'طالب وتلميذ يستفيدون سنوياً من التوعية',
      statsExpeditions: 'بعثات علمية استكشافية كل عام',
      statsAtlas: 'قاعدة بيانات وطنية محققة علمياً',
      statsSpecies: 'نوعاً موثقاً',
      statsEndemics: 'أنواع متوطنة بالمغرب',
      statsPapers: 'ورقة بحثية محكمة',
      statsCitations: 'مرجعاً واستشهاداً ببليوغرافياً',
      statsContributors: 'باحثاً ومساهماً علمياً',
      groupsEyebrow: 'دليل الأنواع الوطنية',
      groupsTitle: 'خمس مجموعات. 136 نوعاً.',
      groupsViewAll: 'عرض القائمة الشاملة',
      speciesCountSuffix: 'نوعاً',
      endemicsSuffix: 'أنواع متوطنة',
      nativeMarineSuffix: 'محلية وبحرية',
      spotlightEyebrow: 'تسليط الضوء على الأنواع',
      spotlightTitle: 'نظرة عن قرب.',
      spotlightPhotoBadge: 'توثيق ميداني',
      spotlightCta: 'استكشاف الأنواع',
      herpatlasEyebrow: 'دليل الأنواع الوطنية',
      herpatlasTitle: 'أطلس زواحف وبرمائيات المغرب',
      herpatlasSub: 'قاعدة بيانات جغرافية مركزية ترصد نطاقات التوزيع والمسارات الارتفاعية واتجاهات أعداد الكائنات الحية في شتى ربوع المملكة المغربية.',
      herpatlasCta: 'استكشاف أطلس التوزيع الجغرافي',
      herpatlasRanges: 'نطاقات التوزيع الجغرافي',
      herpatlasRangesSub: 'سجلات رصد جغرافية دقيقة في مختلف المناطق البيئية',
      herpatlasTransects: 'المسارات الارتفاعية',
      herpatlasTransectsSub: 'تدرج التواجد من مستوى البحر حتى القمم الأطلسية',
      herpatlasTrends: 'ديناميات ومراقبة الأعداد',
      herpatlasTrendsSub: 'تتبع ومراقبة تطور وحالة الأنواع عبر الزمن',
      sciencePubsEyebrow: 'أبحاث علمية محكمة',
      sciencePubsTitle: 'من الميدان إلى الأدبيات العلمية.',
      sciencePubsCount: '29',
      sciencePubsDesc: 'ورقة بحثية محكمة حول زواحف وبرمائيات المغرب',
      sciencePubsBrowse: 'تصفح 29 منشوراً علمياً',
      sciencePubsCitations: 'البحث في 2,164 مرجعاً',
      scienceFieldEyebrow: 'العلوم الميدانية',
      scienceFieldTitle: 'البحث العلمي في قلب الميدان.',
      scienceFieldDesc: 'تعرف على الباحثين وعلماء الطبيعة الذين يشكلون اللجنة العلمية للمنصة ومشاريعهم المستمرة في الميدان.',
      scienceFieldCount: '15',
      scienceFieldContributors: 'باحثاً ومساهماً علمياً',
      scienceFieldProjects: 'عرض المشاريع البحثية',
      observeEyebrow: 'المشاركة المجتمعية والميدانية',
      observeTitle: 'هل رصدت كائناً يستحق التوثيق؟',
      observeDesc: 'ساهم معنا في توثيق وحماية زواحف وبرمائيات المغرب. تخضع جميع الملاحظات للتحقق والتدقيق من طرف اللجنة العلمية قبل إدراجها في الأطلس الوطني.',
      observeCta: 'إرسال ملاحظة ميدانية',
      observePriorEyebrow: 'البيانات المطلوبة للتوثيق',
      observeRequirement1: 'تاريخ المشاهدة',
      observeRequirement2: 'الموقع التقريبي للمشاهدة',
      observeRequirement3: 'صورة واضحة في الميدان',
      observeRequirement4: 'مدى ثقة الراصد في تحديد النوع',
      featuredProjectsTitle: 'مشاريع المحافظة ذات الأولوية',
      featuredProjectsSub: 'تطبيق الحلول العلمية والتقنية الحديثة بالشراكة مع المجتمعات المحلية لحماية الحياة البرية.',
      viewAllProjects: 'عرض جميع المشاريع',
      fieldGalleryTitle: 'التنوع البيولوجي في الميدان',
      fieldGallerySub: 'صور وتوثيقات حية لعمليات المسح العلمي وإنقاذ الكائنات الحية في شتى ربوع المغرب.',
      researchHighlightsTitle: 'منشورات ودراسات الفريق العلمي',
      researchHighlightsSub: 'مراجعات تصنيفية، واكتشافات بيئية، ودراسات حرارية محكمة منشورة في مجلات دولية.',
      getInvolvedTitle: 'ساهم معنا في توثيق وحماية التنوع البيولوجي',
      getInvolvedSub: 'تساهم ملاحظاتكم الميدانية في إثراء خرائط التوزيع. تتم مراجعة كافة السجلات مع الحماية الصارمة للمواقع الجغرافية للأنواع المهددة.',
      submitCta: 'إرسال ملاحظة ميدانية',
      partnersTitle: 'الشركاء المؤسساتيون والعلميون',
      partnersEyebrow: 'شراكات أكاديمية ومؤسساتية',
      partnersDesc: 'شراكات رسمية مع الوزارات المغربية، والكليات الجامعية، والمنظمات الدولية المتخصصة لدعم البحث الميداني وحماية التنوع البيولوجي ومكافحة الصيد غير المشروع.'
    },
    pages: {
      amphibians: {
        title: 'برمائيات المغرب',
        eyebrow: 'طائفة البرمائيات · اللاذيلبيات والذيلبيات · 5 فصائل',
        description: 'يحتضن المغرب 14 نوعاً معتمداً من البرمائيات تنتمي إلى 5 فصائل رئيسية: السلمندريات، الضفادع القرصية، العلاجم، الضفادع الحقيقية، وضفادع المجرفة. تشكل الأحواض المائية المغربية موائل فريدة لأنواع نادرة ومتوطنة مثل ضفدع المجرفة المغربي وسلمندر شمال إفريقيا الناري.',
        stat1: 'أنواع أصلية',
        stat2: 'أنواع متوطنة بالمغرب',
        stat3: 'فصائل تصنيفية',
        notice: 'تشمل التحديات البيئية الرئيسية تراجع المناطق الرطبة واستنزاف الفرشات المائية وتغير المناخ ومخاطر الفطريات البرمائية.'
      },
      lizards: {
        title: 'سحالي المغرب',
        eyebrow: 'رتيبة السحالي · 9 فصائل · مركز التنوع البيولوجي بغرب بالياركتيك',
        description: 'بوجود 81 نوعاً موثقاً عبر 9 فصائل، يعد المغرب المركز الأغنى بتنوع السحالي في غرب المنطقة القطبية الشمالية القديمة. شكلت النظم البيئية للأطلس الكبير والأطلس الصغير والمناطق الصحراوية محركات تطورية لتنوع مذهل.',
        stat1: 'نوعاً موثقاً',
        stat2: 'أنواع متوطنة بالمغرب',
        stat3: 'فصائل تصنيفية'
      },
      snakes: {
        title: 'ثعابين وأفاعي المغرب',
        eyebrow: 'رتيبة الثعابين والأفاعي · 26 نوعاً موثقاً · 7 فصائل',
        description: 'تضم فونا الثعابين في المغرب 26 نوعاً موثقاً ضمن 7 فصائل. أغلبيتها كائنات غير ضارة تلعب دوراً حاسماً في التوازن البيئي ومكافحة القوارض، إلى جانب 7 أنواع سامة ذات أهمية طبية وسريرية.',
        stat1: 'أنواع أصلية',
        stat2: 'أهمية طبية سمية',
        stat3: 'أنواع متوطنة بالمغرب',
        notice: 'حماية للحياة البرية، يتم تمويه وحجب الإحداثيات الدقيقة للأفاعي السامة لحمايتها من الجمع والتجارة غير المشروعة.'
      },
      turtles: {
        title: 'سلاحف المغرب',
        eyebrow: 'رتبة السلحفيات · 8 أنواع موثقة · برية، نهرية وبحرية',
        description: 'يأوي المغرب 8 أنواع من السلاحف تشمل السلحفاة البرية المهموزة (Testudo graeca)، وسلاحف المياه العذبة، والسلاحف البحرية المحمية دولياً التي ترتاد السواحل المغربية.',
        stat1: 'أنواع موثقة',
        stat2: 'أنماط بيئية',
        stat3: 'درجة الحماية الدولية',
        notice: 'تخضع جميع سلاحف المغرب لحماية قانونية صارمة. ويمنع القانون الوطني رقم 29-05 صيدها أو الاتجار بها بشكل قاطع.'
      },
      scorpions: {
        title: 'عقارب المغرب',
        eyebrow: 'رتبة العقارب · عنكبيات المغرب · علم السموم السريري',
        description: 'يتميز المغرب بتنوع استثنائي في فصائل العقارب وخاصة فصيلتي البوثيدي والسكوربيونيدي. تشكل دراسة سموم العقارب ورصد انتشارها أولوية علمية وصحية في المناطق الجافة وشبه الجافة.',
        stat1: 'أصناف معتمدة',
        stat2: 'أصناف متوطنة',
        stat3: 'فصائل سمية طبية',
        notice: 'تتواصل عمليات المسح الميداني والتوثيق الرقمي لعنكبيات المغرب لتحديث خرائط التوزيع والبيانات التصنيفية.'
      },
      team: {
        title: 'اللجنة العلمية وفريق البحث',
        eyebrow: 'اللجنة العلمية والباحثون الميدانيون',
        description: 'تعرف على الأساتذة الباحثين، وطلبة الدكتوراه، والخبراء التقنيين، وعلماء الطبيعة الميدانيين القائمين على برامج البحث وحماية التنوع البيولوجي في منصة Morocco Herpetology.',
        stat1: 'باحثون رئيسيون',
        stat2: 'المقر الجامعي الأساسي (UIZ / FPT)',
        stat3: 'باحثون موثقون ميدانياً',
        allMembers: 'جميع الأعضاء',
        principal: 'الباحثون الرئيسيون',
        phd: 'طلبة الدكتوراه',
        technician: 'الخبراء التقنيون',
        student: 'الباحثون الميدانيون',
        collaborator: 'المتعاونون العلميون'
      },
      projects: {
        title: 'مشاريع المحافظة والأعمال الميدانية',
        eyebrow: 'مشاريع الحماية الميدانية وإعادة تأهيل الموائل',
        description: 'اكتشف برامجنا ذات الأولوية لحماية الحياة البرية عبر المغرب. نجمع بين البحث العلمي الأكاديمي، وإشراك الساكنة المحلية، والتعاون المؤسساتي الوثيق لصيانة الكائنات المهددة وموائلها الطبيعية.',
        stat1: 'برامج نموذجية',
        stat2: 'شركاء مؤسساتيون',
        stat3: 'نطاق جغرافي نشط'
      }
    },
    observationForm: {
      title: 'إرسال ملاحظة ميدانية للحياة البرية',
      sub: 'ساهم في تحسين المعرفة العلمية بزواحف وبرمائيات المغرب. تخضع جميع الملاحظات للفحص والتحقق من طرف باحثين مختصين.',
      dateLabel: 'تاريخ المشاهدة',
      locationLabel: 'وصف الموقع / أقرب مدينة أو قرية',
      gpsButton: 'تحديد موقعي الجغرافي الحالي تلقائياً',
      coordinatesLabel: 'الإحداثيات الجغرافية (خط العرض وخط الطول)',
      privacyNote: 'حماية الحياة البرية: يتم تلقائياً تمويه وحجب الإحداثيات الدقيقة للأنواع المهددة لحمايتها من الصيد غير القانوني.',
      speciesLabel: 'النوع المشاهد (إن كان معروفاً)',
      speciesOptional: 'اختياري — اترك الخانة فارغة إذا كنت غير متأكد وترغب في المساعدة في التعرف عليه.',
      habitatLabel: 'نوع الموئل الطبيعي (صخري، رملي، مائي، زراعي)',
      notesLabel: 'ملاحظات وسلوك الكائن الحي أثناء الرصد',
      photoLabel: 'الصور التوثيقية الميدانية',
      photoHelp: 'يرجى تحميل صور واضحة تظهر الرأس، الحراشف، أو نقوش الظهر لتسهيل عملية التعرف الدقيق.',
      observerName: 'اسم الراصد / رقم التعريف',
      observerEmail: 'البريد الإلكتروني للتواصل والمتابعة العلمية',
      observerPhone: 'رقم الهاتف / واتساب (اختياري للاتصال السريع)',
      submitButton: 'إرسال للمراجعة والاعتماد العلمي',
      submitting: 'جاري التحقق وإرسال البيانات...',
      successMessage: 'تم إرسال الملاحظة الميدانية بنجاح',
      successSub: 'تم تسجيل ملاحظتك في قائمة المراجعة العلمية وتخصيص رقم تعريفي فريد لها. شكراً لمساهمتك القيمة في حماية التنوع البيولوجي بالمغرب!',
      validationError: 'يرجى ملء جميع الحقول الإلزامية والتحقق من الإحداثيات.'
    },
    footer: {
      brandBio: 'منصة علمية مرجعية مكرسة للبحث الميداني وحماية الزواحف والبرمائيات والعقارب ونشر المعرفة العلمية الموثوقة في المغرب.',
      quickLinks: 'أقسام المنصة',
      resources: 'المصادر العلمية',
      scientificGovernance: 'الحكامة وأخلاقيات البحث',
      speciesDirectory: 'دليل الأنواع',
      researchAndData: 'البحث والبيانات',
      organization: 'عن المنصة',
      getInvolved: 'المشاركة والمساهمة',
      copyright: 'البيانات العلمية منشورة وفق رخصة المشاع الإبداعي Attribution 4.0.',
      allRightsReserved: 'كافة الحقوق محفوظة.',
      backToTop: 'العودة إلى الأعلى'
    }
  }
};
