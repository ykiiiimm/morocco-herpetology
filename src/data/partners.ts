export interface Partner {
  id: string;
  name: string;
  nameFr: string;
  nameAr: string;
  category: 'academic' | 'government' | 'conservation' | 'international';
  role: string;
  roleFr: string;
  roleAr: string;
  website: string;
  logo: string;
  location?: string;
  acronym?: string;
}

export const PARTNERS_DATA: Partner[] = [
  {
    id: 'partner-anef',
    name: 'National Agency of Water and Forests (ANEF)',
    nameFr: 'Agence Nationale des Eaux et Forêts (ANEF)',
    nameAr: 'الوكالة الوطنية للمياه والغابات',
    category: 'government',
    role: 'Protected Area Oversight & Wildlife Governance',
    roleFr: 'Gestion des aires protégées et réglementation faunistique',
    roleAr: 'تدبير المناطق المحمية وتطبيق التشريعات الخاصة بالحياة البرية',
    website: 'http://www.eauxetforets.gov.ma/SitePages/Index.aspx',
    logo: '/partners/anef.png',
    acronym: 'ANEF'
  },
  {
    id: 'partner-uiz',
    name: 'Université Ibn Zohr (UIZ Agadir)',
    nameFr: 'Université Ibn Zohr (UIZ Agadir)',
    nameAr: 'جامعة ابن زهر بأكادير',
    category: 'academic',
    role: 'Academic Research, Ecology Laboratory & Student Supervision',
    roleFr: 'Recherche académique, laboratoire d\'écologie et encadrement des étudiants',
    roleAr: 'البحث الأكاديمي، مختبرات البيولوجيا والبيئة، وتأطير الطلبة الباحثين',
    website: 'https://www.uiz.ac.ma/',
    logo: '/partners/uiz.png',
    acronym: 'UIZ Agadir'
  },
  {
    id: 'partner-crocoparc',
    name: 'Crocoparc Agadir',
    nameFr: 'Crocoparc Agadir',
    nameAr: 'حديقة كروكوبارك أكادير',
    category: 'conservation',
    role: 'Ex-situ Conservation Facilities, Veterinary Care & Public Education',
    roleFr: 'Infrastructures d\'élevage conservatoire, soins vétérinaires et éducation',
    roleAr: 'منشآت التكاثر الحمائي، الرعاية البيطرية، والتوعية العامة',
    website: 'https://www.crocoparc.com/',
    logo: '/partners/crocoparc.png',
    acronym: 'Crocoparc'
  },
  {
    id: 'partner-chester-zoo',
    name: 'Chester Zoo (North of England Zoological Society)',
    nameFr: 'Chester Zoo',
    nameAr: 'حديقة حيوانات تشستر',
    category: 'international',
    role: 'Conservation Science & Wildlife Trapping Mitigation Partnership',
    roleFr: 'Soutien scientifique et technique aux projets de réduction des pièges',
    roleAr: 'الشراكة العلمية الدولية والدعم التقني لمشاريع إنقاذ الحياة البرية',
    website: 'https://www.chesterzoo.org/',
    logo: '/partners/chesterzoo.png',
    acronym: 'Chester Zoo'
  },
  {
    id: 'partner-aquatis',
    name: 'Aquatis Aquarium-Vivarium Lausanne',
    nameFr: 'Aquatis Aquarium-Vivarium Lausanne',
    nameAr: 'أكواتيس لوزان للأحياء المائية والزواحف',
    category: 'international',
    role: 'Herpetological Expertise & Educational Exchange',
    roleFr: 'Expertise herpétologique et échanges éducatifs internationaux',
    roleAr: 'الخبرة التخصصية في علوم الزواحف والتبادل العلمي التربوي',
    website: 'https://www.aquatis.ch/',
    logo: '/partners/aquatis.svg',
    acronym: 'Aquatis'
  },
  {
    id: 'partner-amanat',
    name: 'AMANAT (Association Marocaine pour les Amis de la Nature)',
    nameFr: 'AMANAT',
    nameAr: 'جمعية أمانات لحماية الطبيعة',
    category: 'conservation',
    role: 'Community Outreach, Field Engagement & Awareness in Arid Zones',
    roleFr: 'Sensibilisation communautaire et mobilisation de terrain en zone aride',
    roleAr: 'التوعية المجتمعية والميدانية في المناطق الجافة وشبه الجافة',
    website: 'https://amanat.ma/',
    logo: '/partners/amanat.png',
    acronym: 'AMANAT'
  },
  {
    id: 'partner-fauna-morocco',
    name: 'Fauna Morocco',
    nameFr: 'Fauna Morocco',
    nameAr: 'مؤسسة فونا ماروك',
    category: 'conservation',
    role: 'National Biodiversity Observation Exchange',
    roleFr: 'Échange de données naturalistes et documentation de la faune marocaine',
    roleAr: 'تبادل البيانات الميدانية وتوثيق التنوع الحيواني المغربي',
    website: 'https://fauna-morocco.org/',
    logo: '/partners/faunamorocco.svg',
    acronym: 'Fauna Morocco'
  },
  {
    id: 'partner-herp-belgium',
    name: 'HERP Belgium',
    nameFr: 'HERP Belgium',
    nameAr: 'منظمة هيرب بلجيكا',
    category: 'international',
    role: 'Field Herpetology Expeditions & Educational Media',
    roleFr: 'Missions de prospection herpétologique et médias scientifiques',
    roleAr: 'البعثات الميدانية الاستكشافية والإعلام العلمي المتخصص',
    website: 'https://herp.be/',
    logo: '/partners/herpbelgium.png',
    acronym: 'HERP Belgium'
  },
  {
    id: 'partner-perle-oiseaux',
    name: 'La Perle aux Oiseaux',
    nameFr: 'La Perle aux Oiseaux',
    nameAr: 'لؤلؤة الطيور',
    category: 'conservation',
    role: 'Avian & Herpetological Rescue in Souss Estuaries',
    roleFr: 'Sauvetage et soins de la faune sauvage dans les estuaires du Souss',
    roleAr: 'إنقاذ ورعاية الكائنات البرية في مصبات وسواحل سوس',
    website: 'https://laperleauxoiseaux.com/',
    logo: '/partners/perleauxoiseaux.png',
    acronym: 'Perle aux Oiseaux'
  }
];

export const PARTNERS: Partner[] = PARTNERS_DATA.map(p => ({
  ...p,
  location: p.category === 'government' ? 'Rabat, Morocco' :
            p.category === 'academic' ? 'Agadir, Morocco' :
            p.category === 'international' ? 'International' : 'Morocco'
}));
