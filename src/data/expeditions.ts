export interface FieldExpedition {
  id: string;
  slug: string;
  title: string;
  titleFr: string;
  titleAr: string;
  year: number;
  dates: string;
  region: string;
  regionFr: string;
  regionAr: string;
  bioclimaticZone: string;
  objectives: string;
  objectivesFr: string;
  objectivesAr: string;
  summary: string;
  summaryFr: string;
  summaryAr: string;
  contributors: string[];
  speciesObserved: string[];
  photos: {
    url: string;
    caption: string;
    captionFr: string;
    captionAr: string;
    credit: string;
  }[];
  relatedProjects: string[];
}

export const EXPEDITIONS_DATA: FieldExpedition[] = [
  {
    id: 'exp-2026-anti-atlas',
    slug: 'anti-atlas-gueltas-survey-2026',
    title: 'Western Anti-Atlas High Gorges & Relict Gueltas Survey',
    titleFr: 'Prospections des Gorges et Gueltas de l\'Anti-Atlas Occidental',
    titleAr: 'استكشاف خوانق وقلتات الأطلس الصغير الغربي 2026',
    year: 2026,
    dates: 'April 12 – April 24, 2026',
    region: 'Souss-Massa (Aït Baha, Tafraoute, Ida Ougnidif)',
    regionFr: 'Souss-Massa (Aït Baha, Tafraoute, Ida Ougnidif)',
    regionAr: 'سوس ماسة (آيت باها، تافراوت، إيدا اوكنظيف)',
    bioclimaticZone: 'Arid to Semi-Arid Mountain Ecotone',
    objectives: 'Document reproductive success of Moroccan amphibians in high-elevation isolated gueltas following spring rainfall and map endemic Quedenfeldtia populations.',
    objectivesFr: 'Évaluer la reproduction des amphibiens dans les gueltas d\'altitude isolées après les pluies printanières et cartographier les populations de Quedenfeldtia.',
    objectivesAr: 'توثيق تكاثر البرمائيات في القلتات الصخرية المرتفعة ورسم خرائط تواجد الوزغ النهاري المتوطن.',
    summary: 'A 12-day systematic transect through the quartzite and granite massifs of the western Anti-Atlas. 14 isolated seasonal water bodies were examined, confirming healthy recruitment for Discoglossus scovazzi and Bufotes boulengeri. New locality records were verified for Vipera mauritanica and Quedenfeldtia moerens.',
    summaryFr: 'Un suivi systématique de 12 jours à travers les massifs de quartzite et de granite. 14 points d\'eau saisonniers inspectés ont confirmé le recrutement de Discoglossus scovazzi et Bufotes boulengeri, avec de nouvelles mentions pour Vipera mauritanica.',
    summaryAr: 'مهمة استكشافية استمرت 12 يوماً عبر الكتل الصخرية بالأطلس الصغير، شملت فحص 14 نقطة مائية موسمية وتأكيد تكاثر الضفادع المتوطنة ورصد أفاعي وسحالي نادرة.',
    contributors: ['Abdellah Bouazza', 'Aziza Lansari', 'Soufiane Zaroual', 'Zohayr Dibar'],
    speciesObserved: [
      'Discoglossus scovazzi',
      'Bufotes boulengeri',
      'Quedenfeldtia moerens',
      'Daboia mauritanica',
      'Agama bibronii',
      'Psammophis schokari'
    ],
    photos: [
      {
        url: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/1.png',
        caption: 'Granitic guelta surveyed near Tafraoute holding breeding Discoglossus',
        captionFr: 'Guelta granitique prospectée près de Tafraoute abritant des têtards',
        captionAr: 'قلتة مائية صخرية قرب تافراوت تحتضن شراغيف الضفدع المتوطن',
        credit: 'Bouazza A.'
      },
      {
        url: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/2.png',
        caption: 'Adult Daboia mauritanica documented under quartzite scree at 1,320m',
        captionFr: 'Daboia mauritanica adulte photographiée sous un éboulis à 1 320 m',
        captionAr: 'أفعى موريتانية بالغة موثقة تحت ركام صخري على علو 1320 متر',
        credit: 'Lansari A.'
      }
    ],
    relatedProjects: ['biodiversity-in-action-ait-baha', 'from-traps-to-refugia']
  },
  {
    id: 'exp-2025-atlantic-sahara',
    slug: 'atlantic-sahara-coastal-dunes-2025',
    title: 'Atlantic Sahara Coastal Sand Dunes & Sebkha Transects',
    titleFr: 'Transects Côtiers et Sebkhas du Sahara Atlantique',
    titleAr: 'مسوحات الكثبان الساحلية والسباخ بالصحراء الأطلسية 2025',
    year: 2025,
    dates: 'October 3 – October 18, 2025',
    region: 'Guelmim-Oued Noun & Laâyoune-Sakia El Hamra',
    regionFr: 'Guelmim-Oued Noun & Laâyoune-Sakia El Hamra',
    regionAr: 'كلميم واد نون والعيون الساقية الحمراء',
    bioclimaticZone: 'Saharan Coastal Desert',
    objectives: 'Survey psammophilous reptile communities, monitor nocturnal viperids (Cerastes cerastes), and evaluate population boundaries of Acanthodactylus busacki.',
    objectivesFr: 'Étudier les communautés de reptiles sabulicoles, suivre les vipéridés nocturnes (Cerastes cerastes) et préciser l\'aire d\'Acanthodactylus busacki.',
    objectivesAr: 'دراسة مجتمعات الزواحف الرملية، وتتبع الأفاعي المقرنة الليلية، وتحديد حدود انتشار سحلية العيون.',
    summary: 'Two weeks of nocturnal and morning sand tracking along 480 km of coastal dunes and gravel hamadas. Over 18 reptile species were documented, including fine-scale habitat partitioning between sympatric Acanthodactylus species and active foraging Cerastes.',
    summaryFr: 'Deux semaines de prospections nocturnes et matinales sur 480 km de dunes et regs côtiers. Plus de 18 espèces de reptiles ont été relevées avec des données comportementales inédites.',
    summaryAr: 'أسبوعان من التتبع الليلي والصباحي عبر 480 كم من الكثبان الساحلية والحمادات، أسفرا عن توثيق أكثر من 18 نوعاً من الزواحف وتسجيل سلوكيات نادرة.',
    contributors: ['Abdellah Bouazza', 'Mohamed Mousaid', 'Sacha Facchini', 'Louis Gonin'],
    speciesObserved: [
      'Cerastes cerastes',
      'Acanthodactylus busacki',
      'Acanthodactylus aureus',
      'Spalerosophis diadema',
      'Stenodactylus mauritanicus',
      'Androctonus mauritanicus'
    ],
    photos: [
      {
        url: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Acanthodactylus-busacki.jpg',
        caption: 'Acanthodactylus busacki in active foraging stance on stabilized white coastal dune',
        captionFr: 'Acanthodactylus busacki en chasse active sur dune blanche stabilisée',
        captionAr: 'سحلية العيون هدبية الأصابع في حالة ترصد ونشاط فوق الكثبان الساحلية',
        credit: 'Bouazza A.'
      },
      {
        url: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/6.png',
        caption: 'Nocturnal encounter with Cerastes cerastes partially buried in sand',
        captionFr: 'Rencontre nocturne avec Cerastes cerastes enfouie dans le sable',
        captionAr: 'مشاهدة ليلية للأفعى المقرنة وهي مدفونة جزئياً تحت الرمال',
        credit: 'Mousaid M.'
      }
    ],
    relatedProjects: ['herpatlas-morocco', 'serpentid']
  },
  {
    slug: 'high-atlas-thermal-ecology-2025',
    id: 'exp-2025-high-atlas',
    title: 'High Atlas Alpine Scree & Day Gecko Thermal Ecology',
    titleFr: 'Écologie Thermique des Geckos Diurnes du Haut Atlas',
    titleAr: 'البيئة الحرارية لوزغ الأطلس النهاري في قمم الأطلس الكبير 2025',
    year: 2025,
    dates: 'July 8 – July 21, 2025',
    region: 'Marrakech-Safi (Toubkal Massif, Oukaïmeden, Tizi n\'Test)',
    regionFr: 'Marrakech-Safi (Massif du Toubkal, Oukaïmeden, Tizi n\'Test)',
    regionAr: 'مراكش آسفي (كتلة توبقال، أوكايمدن، تيزي نتاست)',
    bioclimaticZone: 'High Mountain Alpine & Sub-Alpine (2,200m – 3,200m)',
    objectives: 'Investigate reproductive female egg mass and thermal preferences in the endemic Atlas Day Gecko Quedenfeldtia trachyblepharus along altitudinal clines.',
    objectivesFr: 'Étudier la taille des pontes des femelles et la thermorégulation du gecko diurne de l\'Atlas Quedenfeldtia trachyblepharus selon l\'altitude.',
    objectivesAr: 'دراسة حجم البيض والتفضيلات الحرارية لإناث وزغ الأطلس النهاري عبر التدرج الارتفاعي الجبلي.',
    summary: 'High-altitude physiological and behavioral field surveys conducted between 2,200m and 3,100m. The results confirmed that high-elevation females produce significantly larger eggs to ensure embryo development in shortened alpine summers, published in Herpetozoa (Lansari et al., 2026).',
    summaryFr: 'Recherche de terrain en haute altitude (2 200 à 3 100 m). Les résultats confirment que les femelles d\'altitude pondent des œufs plus volumineux pour compenser la brièveté de l\'été alpin, étude publiée dans Herpetozoa (Lansari et al., 2026).',
    summaryAr: 'دراسة ميدانية في أعالي الجبال أكدت أن إناث هذا النوع في المرتفعات تضع بيضاً أكبر حجماً لضمان نمو الأجنة خلال فترات الصيف الجبلي القصيرة، ونُشرت النتائج في مجلة Herpetozoa العلمية.',
    contributors: ['Aziza Lansari', 'Abdellah Bouazza', 'Nada Ait Bouhmad', 'Hafsa Mahmoudi'],
    speciesObserved: [
      'Quedenfeldtia trachyblepharus',
      'Atlantolacerta andreanskyi',
      'Vipera monticola',
      'Coronella girondica'
    ],
    photos: [
      {
        url: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Image2.png',
        caption: 'High alpine scree near Oukaïmeden at 2,750m habitat of Quedenfeldtia trachyblepharus',
        captionFr: 'Éboulis d\'altitude à l\'Oukaïmeden (2 750 m), habitat de Quedenfeldtia trachyblepharus',
        captionAr: 'منحدرات صخرية شاهقة في أوكايمدن على علو 2750 م، موطن وزغ الأطلس المتوطن',
        credit: 'Lansari A.'
      }
    ],
    relatedProjects: ['herpatlas-morocco']
  },
  {
    slug: 'sub-saharan-oasis-scorpions-2024',
    id: 'exp-2024-draa-valley',
    title: 'Drâa Valley & Pre-Saharan Oases Arachnological Expedition',
    titleFr: 'Expédition Arachnologique dans la Vallée du Drâa et les Oasis',
    titleAr: 'البعثة الاستكشافية لعقارب وادي درعة والواحات الصحراوية 2024',
    year: 2024,
    dates: 'May 14 – May 28, 2024',
    region: 'Drâa-Tafilalet (Zagora, Mhamid El Ghizlane, Tagounite)',
    regionFr: 'Drâa-Tafilalet (Zagora, Mhamid El Ghizlane, Tagounite)',
    regionAr: 'درعة تافيلالت (زاكورة، محاميد الغزلان، تاكونيت)',
    bioclimaticZone: 'Hyper-Arid Pre-Saharan Oasis',
    objectives: 'Conduct UV-light nocturnal surveys of Buthid and Scorpionid scorpion assemblages, clarify taxonomic limits, and collect tissue samples for venom studies.',
    objectivesFr: 'Réaliser des inventaires nocturnes sous lumière ultraviolette des scorpions Buthidae, clarifier leur taxonomie et prélever des échantillons.',
    objectivesAr: 'إجراء مسوحات ليلية بالأشعة فوق البنفسجية لرصد العقارب، وتدقيق تصنيفها العلمي وأخذ عينات لدراسة السموم.',
    summary: 'Systematic night surveys using specialized blacklight torches across rocky slopes, palm groves, and stabilized sand dunes. Rediscovered enigmatic morphs of Buthus and documented micro-habitat specialization between Androctonus and Buthus species.',
    summaryFr: 'Prospections nocturnes systématiques sous UV dans les palmeraies et regs. Redécouverte de formes rares de Buthus et documentation fine de la ségrégation de micro-habitat avec Androctonus.',
    summaryAr: 'مسوحات ليلية باستخدام مصابيح الأشعة فوق البنفسجية بالواحات والمنحدرات الصحراوية، أثمرت عن إعادة توثيق عينات نادرة وفهم التوزيع البيئي لمختلف أجناس العقارب.',
    contributors: ['Mohamed Mousaid', 'Abdellah Bouazza', 'Soufiane Zaroual'],
    speciesObserved: [
      'Androctonus liouvillei',
      'Buthus draa',
      'Hottentotta gentili',
      'Cerastes vipera',
      'Eryx jaculus'
    ],
    photos: [
      {
        url: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/6.png',
        caption: 'Adult Buthus draa fluorescing under 395nm UV light in the middle Drâa valley',
        captionFr: 'Buthus draa adulte fluorescent sous éclairage UV à 395 nm dans la vallée du Drâa',
        captionAr: 'عقرب وادي درعة يظهر التوهج الأخضر المميز تحت الأشعة فوق البنفسجية ليلاً',
        credit: 'Mousaid M.'
      }
    ],
    relatedProjects: ['herpatlas-morocco', 'serpentid']
  }
];
