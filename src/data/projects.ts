export interface ConservationProject {
  slug: string;
  title: string;
  titleFr: string;
  titleAr: string;
  kicker: string;
  kickerFr: string;
  kickerAr: string;
  status: 'Active' | 'Ongoing' | 'Completed';
  category: string;
  categoryFr: string;
  categoryAr: string;
  overview: string;
  overviewFr: string;
  overviewAr: string;
  problem: string;
  problemFr: string;
  problemAr: string;
  geographicScope: string;
  geographicScopeFr: string;
  geographicScopeAr: string;
  objectives: string[];
  objectivesFr: string[];
  objectivesAr: string[];
  methods: string[];
  methodsFr: string[];
  methodsAr: string[];
  milestones: string[];
  milestonesFr: string[];
  milestonesAr: string[];
  image: string;
  tags: string[];
  partners: {
    name: string;
    role: string;
    logo?: string;
  }[];
  leadResearchers: string[];
  id?: string;
  heroImage?: string;
  summary?: string;
  region?: string;
  timeframe?: string;
}

export const PROJECTS_DATA: ConservationProject[] = [
  {
    slug: 'herpatlas-morocco',
    title: 'HerpAtlas Morocco',
    titleFr: 'HerpAtlas Maroc',
    titleAr: 'أطلس الزواحف والبرمائيات في المغرب',
    kicker: 'Citizen Science · Digital Atlas',
    kickerFr: 'Sciences Citoyennes · Atlas Numérique',
    kickerAr: 'علوم المواطن · أطلس رقمي',
    status: 'Active',
    category: 'Biodiversity Mapping & Citizen Science',
    categoryFr: 'Cartographie de la Biodiversité & Sciences Participatives',
    categoryAr: 'رسم خرائط التنوع البيولوجي والعلوم التشاركية',
    overview: 'An intelligent digital atlas and citizen-science platform for submitting geolocated observations, exploring species distribution maps, and improving national herpetological documentation. Observations undergo rigorous scientific review, and sensitive species coordinates are automatically blurred to protect vulnerable wild populations.',
    overviewFr: 'Un atlas numérique et plateforme de science citoyenne permettant de soumettre des observations géolocalisées, d\'explorer les cartes de répartition des espèces et d\'améliorer la documentation herpétologique nationale. Les données sont validées scientifiquement et les coordonnées des espèces sensibles sont protégées.',
    overviewAr: 'أطلس رقمي ومنصة علمية مجتمعية لتقديم الملاحظات الميدانية الموثقة جغرافياً، واستكشاف خرائط توزيع الأنواع، وحماية بيانات المواقع الحساسة مع التحقق العلمي الصارم.',
    problem: 'Large areas of Morocco, particularly arid valleys, mountain passes, and desert plateaus, remain under-surveyed. Meanwhile, threatened species face poaching risks when exact locality coordinates are made public carelessly.',
    problemFr: 'De vastes régions du Maroc, notamment les vallées arides et les plateaux présahariens, restent sous-documentées. En parallèle, les espèces menacées sont vulnérables au braconnage si les localités exactes sont publiées sans filtrage.',
    problemAr: 'لا تزال مناطق شاسعة في المغرب تعاني من نقص التوثيق الميداني، بينما تواجه الأنواع المهددة خطر الصيد غير المشروع إذا نشرت الإحداثيات الدقيقة علناً.',
    geographicScope: 'National scope across all 12 administrative regions of Morocco, with priority focal areas in the Souss-Massa basin, High Atlas, Anti-Atlas, and Atlantic Sahara.',
    geographicScopeFr: 'Échelle nationale couvrant l\'ensemble des 12 régions du Maroc, avec une priorité pour le Souss-Massa, le Haut Atlas, l\'Anti-Atlas et le Sahara atlantique.',
    geographicScopeAr: 'نطاق وطني يشمل كافة جهات المملكة، مع التركيز على حوض سوس ماسة، والأطلس الكبير والصغير، والصحراء الأطلسية.',
    objectives: [
      'Build a verified centralized national biodiversity database for reptiles, amphibians, and scorpions.',
      'Engage naturalists, students, forest officers, and local residents in ethical wildlife recording.',
      'Protect endangered species by enforcing automatic coordinate obfuscation for sensitive taxa.',
      'Provide peer-reviewed data to support national red lists and protected area planning.'
    ],
    objectivesFr: [
      'Constituer une base de données nationale centralisée et validée pour les reptiles, amphibiens et scorpions.',
      'Impliquer les naturalistes, étudiants et gardes forestiers dans le recueil éthique des données.',
      'Protéger les espèces menacées grâce au floutage automatique des coordonnées sensibles.',
      'Fournir des données fiables pour les listes rouges nationales et la gestion des aires protégées.'
    ],
    objectivesAr: [
      'إنشاء قاعدة بيانات وطنية موحدة ومحققة علمياً للزواحف والبرمائيات والعقارب.',
      'إشراك المهتمين بالحياة البرية والطلبة في رصد التنوع البيولوجي بأمان.',
      'حماية الأنواع المهددة عبر تمويه الإحداثيات الجغرافية الحساسة.',
      'دعم برامج الحماية وإعداد القوائم الحمراء الوطنية بالبيانات الميدانية.'
    ],
    methods: [
      'Standardized photographic record submission protocol with GPS verification.',
      'Two-tier taxonomic validation workflow by herpetologists prior to catalog inclusion.',
      'Automated spatial precision buffering (10km+ grid) for CITES and IUCN threatened taxa.',
      'Exportable Darwin Core compliant records for global biodiversity repositories.'
    ],
    methodsFr: [
      'Protocole standardisé de soumission photographique avec géolocalisation.',
      'Validation taxonomique à double niveau par des herpétologistes qualifiés.',
      'Floutage spatial automatique (grille de 10 km) pour les taxons sensibles et menacés.',
      'Exportation compatible avec le standard Darwin Core.'
    ],
    methodsAr: [
      'بروتوكول موحد لإرسال الصور الميدانية مع التحقق من الموقع الجغرافي.',
      'مراجعة وتصنيف دقيق من قبل خبراء علم الزواحف قبل اعتماد السجل.',
      'حماية الإحداثيات عبر نطاق جغرافي عام للأنواع المهددة.',
      'توافق البيانات مع المعايير الدولية لتوثيق التنوع البيولوجي.'
    ],
    milestones: [
      'Over 2,100 historical and modern bibliographic records curated and connected.',
      'National checklist of 129 herpetofauna and 7+ scorpion taxa fully digitized.',
      'Validation pipeline established connecting researchers at Ibn Zohr University and international institutions.'
    ],
    milestonesFr: [
      'Plus de 2 100 références bibliographiques historiques et modernes indexées.',
      'Checklist nationale de 129 espèces d\'herpétofaune et scorpions numérisée.',
      'Réseau de validation scientifique établi avec l\'Université Ibn Zohr et des partenaires internationaux.'
    ],
    milestonesAr: [
      'فهرسة أكثر من 2100 مرجع علمي حول زواحف وبرمائيات المغرب.',
      'توثيق القائمة الوطنية لـ 129 نوعاً مع الأسماء العربية والفرنسية والإنجليزية.',
      'إرساء شبكة التحقق العلمي بالتعاون مع جامعة ابن زهر ومؤسسات دولية.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2024/08/Naja-haje-39.jpg',
    tags: ['Atlas', 'Citizen Science', 'Mapping', 'AI Identification', 'Data Protection'],
    partners: [
      { name: 'Université Ibn Zohr (UIZ Agadir)', role: 'Scientific Supervision & Taxonomic Research' },
      { name: 'Agence Nationale des Eaux et Forêts (ANEF)', role: 'Protected Areas & National Wildlife Governance' },
      { name: 'Fauna Morocco', role: 'Field Data Exchange & Verification' }
    ],
    leadResearchers: ['Abdellah Bouazza', 'Aziza Lansari', 'Zohayr Dibar']
  },
  {
    slug: 'from-traps-to-refugia',
    title: 'From Traps to Refugia',
    titleFr: 'Des Pièges aux Refuges',
    titleAr: 'من مصائد قاتلة إلى ملاذات آمنة',
    kicker: 'Wildlife Rescue · Applied Field Conservation',
    kickerFr: 'Sauvetage de Faune · Conservation Appliquée',
    kickerAr: 'إنقاذ الحياة البرية · حلول ميدانية تطبيقية',
    status: 'Active',
    category: 'Habitat Modification & Accidental Trapping Mitigation',
    categoryFr: 'Aménagement d\'Habitat & Réduction des Pièges Accidentels',
    categoryAr: 'تعديل الموائل والحد من حوادث الغرق والسقوط',
    overview: 'In arid and semi-arid Morocco, traditional underground cisterns (matfiyas), open concrete wells, and steep agricultural basins frequently trap wildlife. Animals seek moisture or accidentally fall in and drown or starve. This initiative tests and installs specialised wildlife escape ramps, float devices, and safety covers, converting lethal hazards into survival refugia.',
    overviewFr: 'Dans les régions arides du Maroc, les citernes traditionnelles (matfiyas), les bassins d\'irrigation et les puits ouverts constituent des pièges mortels pour la faune. Les animaux y tombent en quête d\'eau et périssent. Ce projet conçoit et installe des rampes d\'échappement, flotteurs et grillages pour transformer ces pièges en refuges vitaux.',
    overviewAr: 'في المناطق الجافة وشبه الجافة، تشكل المطفيات والآبار المكشوفة وأحواض الري مصائد مميتة للزواحف والحيوانات البرية. يهدف هذا المشروع إلى تركيب سلالم هروب وشبكات أمان لتحويلها إلى ملاذات آمنة للتزود بالماء دون الغرق.',
    problem: 'Thousands of reptiles (snakes, chameleons, tortoises, spiny-tailed lizards), amphibians, and small mammals drown each year in steep-walled agricultural basins and traditional rainwater reservoirs across southern Morocco.',
    problemFr: 'Des milliers de reptiles (vipères, caméléons, tortues, fouette-queues), amphibiens et petits mammifères se noient chaque année dans les bassins agricoles et réservoirs d\'eau traditionnels du Sud marocain.',
    problemAr: 'غرق آلاف الزواحف (الثعابين، الحرباء، السلاحف، الضبان) والبرمائيات سنوياً في الأحواض الزراعية والمطفيات ذات الجدران العمودية الزلقة.',
    geographicScope: 'Anti-Atlas valleys, Souss plain, Chtouka-Aït Baha, Tiznit, and pre-Saharan oases.',
    geographicScopeFr: 'Vallées de l\'Anti-Atlas, plaine du Souss, Chtouka-Aït Baha, Tiznit et oasis présahariennes.',
    geographicScopeAr: 'وديان الأطلس الصغير، سهل سوس، اشتوكة آيت باها، تزنيت، والواحات الصحراوية.',
    objectives: [
      'Design, prototype, and field-test low-cost, durable escape ramps manufactured from locally available materials.',
      'Deploy escape structures across high-risk cisterns and agricultural retention basins.',
      'Engage farmers, landowners, and rural communities in monitoring and maintaining installed escape devices.',
      'Measure reduction in wildlife mortality using motion cameras and systematic field inspections.'
    ],
    objectivesFr: [
      'Concevoir et tester des rampes d\'échappement durables et économiques avec des matériaux locaux.',
      'Équiper les citernes prioritaires et bassins d\'irrigation les plus dangereux.',
      'Sensibiliser les agriculteurs et propriétaires terriens à l\'entretien des dispositifs.',
      'Quantifier la baisse de mortalité à l\'aide de caméras pièges et de suivis réguliers.'
    ],
    objectivesAr: [
      'تصميم واختبار سلالم هروب متينة ومنخفضة التكلفة باستخدام مواد محلية متوفرة.',
      'تجهيز المطفيات والأحواض الزراعية ذات الخطورة العالية بأنظمة الإنقاذ.',
      'توعية المزارعين والسكان المحليين بأهمية صيانة هذه التجهيزات لحماية التنوع البيولوجي.',
      'قياس تراجع معدلات نفوق الحيوانات البرية عبر المراقبة الميدانية المستمرة.'
    ],
    methods: [
      'Installation of textured climbing ropes, ramp nets, and floating timber escape islands in deep basins.',
      'Periodic biometric recording and safe release of trapped individuals during inspections.',
      'Collaborative agreements with regional farming cooperatives and irrigation associations.',
      'Scientific data collection on species mortality rates and seasonal vulnerability.'
    ],
    methodsFr: [
      'Installation de cordages rugueux, rampes grillagées et îlots flottants dans les bassins profonds.',
      'Relevés biométriques et relâcher sécurisé des spécimens trouvés lors des tournées.',
      'Accords de partenariat avec les coopératives agricoles et associations d\'irrigants.',
      'Collecte de données scientifiques sur les taux de mortalité et la saisonnalité des chutes.'
    ],
    methodsAr: [
      'تثبيت حبال خشنة، وشبكات تسلق، وجزر عائمة داخل الأحواض المائية العميقة.',
      'تسجيل البيانات الحيوية وإطلاق سراح الكائنات التي يتم إنقاذها بأمان في بيئتها الطبيعية.',
      'عقد شراكات مع التعاونيات الفلاحية والجمعيات المحلية.',
      'دراسة وتوثيق نسب النفوق والأنواع الأكثر عرضة للسقوط على مدار فصول السنة.'
    ],
    milestones: [
      'Over 85 cisterns and agricultural ponds surveyed and classified by hazard level.',
      'First generation of climbing net ramps deployed in Aït Baha test sites, recording immediate successful escapes.',
      'Active partnership with local agrarian cooperatives in Souss-Massa.'
    ],
    milestonesFr: [
      'Plus de 85 citernes et bassins agricoles répertoriés et classés selon leur niveau de risque.',
      'Déploiement de la première génération de rampes dans la région d\'Aït Baha avec des échappées confirmées.',
      'Partenariat actif avec les coopératives agricoles de Souss-Massa.'
    ],
    milestonesAr: [
      'مسح أكثر من 85 مطفية وحوضاً زراعياً وتصنيفها حسب درجة الخطورة.',
      'تركيب الجيل الأول من سلالم وشبكات الهروب في منطقة آيت باها وتوثيق نجاح خروج الكائنات الحية.',
      'بناء شراكات فعالة مع التعاونيات الفلاحية في منطقة سوس ماسة.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/2.png',
    tags: ['Wildlife Rescue', 'Cisterns', 'Matfiya', 'Anti-Atlas', 'Applied Conservation'],
    partners: [
      { name: 'Chester Zoo', role: 'Conservation Engineering & Financial Support' },
      { name: 'Aquatis Aquarium-Vivarium Lausanne', role: 'Technical Advisory & Conservation Expertise' },
      { name: 'AMANAT', role: 'Local Community Coordination & Outreach' }
    ],
    leadResearchers: ['Soufiane Zaroual', 'Abdellah Bouazza', 'Mohamed Mousaid']
  },
  {
    slug: 'puff-adder-conservation',
    title: 'Puff Adder Conservation Project',
    titleFr: 'Projet de Conservation de la Vipère Heurtante',
    titleAr: 'مشروع حماية الأفعى النفاثة في المغرب',
    kicker: 'Threatened Species · Ex-Situ & In-Situ Research',
    kickerFr: 'Espèce Menacée · Recherche In-Situ & Ex-Situ',
    kickerAr: 'نوع مهدد · أبحاث ميدانية وتكاثر حمائي',
    status: 'Active',
    category: 'Viperid Ecology & Human-Snake Coexistence',
    categoryFr: 'Écologie des Vipéridés & Coexistence Humain-Serpent',
    categoryAr: 'بيئة الأفاعي السامة والتعايش البشري الآمن',
    overview: 'The Puff Adder (Bitis arietans) is one of Africa\'s most formidable vipers, yet its isolated relict populations in southwestern Morocco are critically endangered due to intense persecution, road mortality, agricultural expansion, and habitat fragmentation. This project combines rigorous ecological fieldwork, telemetry, ex-situ breeding protocols, and community education to secure its survival in North Africa.',
    overviewFr: 'La vipère heurtante (Bitis arietans) possède au Maroc des populations reliques isolées et hautement menacées par la persécution directe, la mortalité routière et la destruction d\'habitat. Ce projet associe étude de terrain, télémétrie, élevage conservatoire ex-situ et sensibilisation des populations locales pour assurer son maintien en Afrique du Nord.',
    overviewAr: 'تمتلك الأفعى النفاثة (Bitis arietans) في جنوب غرب المغرب مجموعات معزولة ونادرة جداً مهددة بالانقراض نتيجة القتل العمد وحوادث الطرق وتدهور الموائل. يجمع هذا المشروع بين الأبحاث الميدانية، والتكاثر الوقائي، والتوعية للحد من النزاع البشري مع الثعابين.',
    problem: 'Extremely high human persecution due to fear of venomous bites, combined with habitat destruction along coastal plains and intensive road traffic on southern transport axes.',
    problemFr: 'Persécution humaine intense liée à la peur des envenimations, associée à l\'urbanisation du littoral atlantique et au trafic routier élevé dans le Sud marocain.',
    problemAr: 'القتل العمد واسع النطاق بدافع الخوف من اللدغات السامة، بالإضافة إلى تدمير الموائل الطبيعية وحوادث الدهس على الطرق في الجنوب المغربي.',
    geographicScope: 'Coastal Argan woodlands and sub-Saharan ecotones of southwestern Morocco (Essaouira, Agadir, Tiznit, Guelmim, Tan-Tan).',
    geographicScopeFr: 'Zones arganières côtières et écotones présahariens du Sud-Ouest marocain (Essaouira, Agadir, Tiznit, Guelmim, Tan-Tan).',
    geographicScopeAr: 'غابات الأركان الساحلية ومناطق الانتقال الصحراوي جنوب غرب المغرب (الصويرة، أكادير، تزنيت، كلميم، طانطان).',
    objectives: [
      'Map remaining isolated relict populations of Bitis arietans across southwestern Morocco.',
      'Develop safe handling, rescue, and translocation protocols for snakes found in agricultural areas.',
      'Conduct hospital-linked venom research to improve regional antivenom efficacy and emergency treatment.',
      'Establish controlled conservation breeding to safeguard genetic diversity against regional extinction.'
    ],
    objectivesFr: [
      'Cartographier les populations reliques de Bitis arietans dans le Sud-Ouest marocain.',
      'Établir des protocoles de capture, sauvetage et translocation sécurisés dans les zones habitées.',
      'Collaborer avec les centres hospitaliers pour améliorer la prise en charge des morsures et l\'antivenin.',
      'Maintenir un programme de reproduction conservatoire garantissant la diversité génétique.'
    ],
    objectivesAr: [
      'تحديد ورسم خرائط تواجد التجمعات المتبقية من الأفعى النفاثة جنوب غرب المغرب.',
      'تطوير بروتوكولات آمنة للإنقاذ ونقل الأفاعي بعيداً عن التجمعات السكانية والمزارع.',
      'التعاون مع المؤسسات الصحية لتحسين بروتوكولات علاج اللدغات وتوفير الأمصال الفعالة.',
      'إدارة برنامج تكاثر حمائي للحفاظ على التنوع الجيني وتفادي الانقراض الإقليمي.'
    ],
    methods: [
      'Radio-telemetry monitoring of habitat utilization and thermal ecology in Argan woodlands.',
      'Rapid rescue hotline for rural communities discovering specimens in gardens and greenhouses.',
      'Distribution of educational posters and snakebite safety guides in Darija and Tamazight.',
      'Genetic sequencing comparing Moroccan populations with Sub-Saharan lineages.'
    ],
    methodsFr: [
      'Suivi télémétrique de l\'utilisation de l\'habitat et de l\'écologie thermique dans l\'arganeraie.',
      'Ligne d\'assistance pour le sauvetage rapide de spécimens signalés dans les serres et exploitations.',
      'Diffusion de guides de prévention des morsures en arabe dialectal (Darija) et amazigh.',
      'Analyses génétiques comparatives entre les spécimens marocains et les lignées subsahariennes.'
    ],
    methodsAr: [
      'تتبع الأفراد بأجهزة الإرسال اللاسلكية لدراسة السلوك واختيار الموائل في غابات الأركان.',
      'خط تواصل سريع للتدخل وإنقاذ الأفاعي المعثور عليها داخل الضيعات والمنازل.',
      'توزيع ملصقات ودلائل توعوية بالدارجة المغربية والأمازيغية حول الوقاية والإسعافات الأولية.',
      'تحليلات وراثية لمقارنة المجموعات المغربية المعزولة مع السلالات الإفريقية الأخرى.'
    ],
    milestones: [
      'Successful rescue and safe relocation of multiple wild specimens from agricultural greenhouses.',
      'Scientific assessment of thermal preferences published in peer-reviewed herpetological literature.',
      'Establishment of educational partnerships with Crocoparc and local environmental clubs.'
    ],
    milestonesFr: [
      'Sauvetage et relocalisation réussie de plusieurs spécimens sauvages trouvés dans des serres agricoles.',
      'Publication des données sur l\'écologie thermique dans des revues herpétologiques internationales.',
      'Partenariat éducatif et conservatoire établi avec Crocoparc Agadir et les clubs scolaires.'
    ],
    milestonesAr: [
      'إنقاذ ونقل العديد من العينات الحية من البيوت المغطاة والمزارع إلى مناطق برية محمية.',
      'نشر دراسات محكمة حول البيئة الحرارية وسلوك هذا النوع النادر في المجلات العلمية.',
      'إبرام شراكات تعليمية مع حديقة كروكوبارك والنوادي البيئية المحلية.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2024/07/Naja-scaled.jpg',
    tags: ['Bitis arietans', 'Viperidae', 'Snakebite Prevention', 'Conservation Breeding', 'Arganeraie'],
    partners: [
      { name: 'Crocoparc Agadir', role: 'Ex-situ Conservation Facilities & Public Education' },
      { name: 'HERP Belgium', role: 'Field Expedition & International Herpetology Collaboration' },
      { name: 'Université Ibn Zohr (UIZ)', role: 'Genetics & Ecological Research' }
    ],
    leadResearchers: ['Abdellah Bouazza', 'Soufiane Zaroual', 'Aziza Lansari']
  },
  {
    slug: 'biodiversity-in-action-ait-baha',
    title: 'Biodiversity in Action at Aït Baha',
    titleFr: 'Biodiversité en Action à Aït Baha',
    titleAr: 'التنوع البيولوجي في الميدان بآيت باها',
    kicker: 'Ecosystem Monitoring · Mountain Herpetofauna',
    kickerFr: 'Suivi Écosystémique · Herpétofaune de Montagne',
    kickerAr: 'رصد المنظومة البيئية · زواحف المناطق الجبلية',
    status: 'Active',
    category: 'Regional Biodiversity Conservation',
    categoryFr: 'Conservation Régionale de la Biodiversité',
    categoryAr: 'حماية التنوع البيولوجي الإقليمي',
    overview: 'The limestone ridges, terraced almond groves, and deep gorges of the western Anti-Atlas around Aït Baha harbor remarkable endemic reptiles and amphibians, including the Moroccan Day Gecko, Atlas mountain vipers, and relict amphibian breeding pools. This initiative establishes long-term ecological transects and community engagement in this critical ecological transition zone.',
    overviewFr: 'Les crêtes calcaires et vallées de l\'Anti-Atlas occidental autour d\'Aït Baha abritent une herpétofaune endémique remarquable. Cette initiative mène des suivis écologiques à long terme sur les geckos diurnes, vipères montagnardes et points d\'eau temporaires abritant des amphibiens en zone de transition écologique.',
    overviewAr: 'تتميز منطقة آيت باها بالأطلس الصغير بتنوع فريد يضم أنواعاً متوطنة نادرة من السحالي والثعابين والبرمائيات. يركز المشروع على إرساء محطات مراقبة بيئية طويلة الأمد وإشراك الساكنة المحلية في حماية هذه البيئة الهشة.',
    problem: 'Increasingly severe multi-year droughts dry out seasonal breeding gueltas, while road construction and stone quarrying disrupt rocky scree habitats.',
    problemFr: 'L\'intensification des sécheresses assèche prématurément les gueltas de reproduction, tandis que l\'ouverture de pistes et carrières fragilise les éboulis rocheux.',
    problemAr: 'توالي سنوات الجفاف يهدد بنضوب القلتات المائية الموسمية الضرورية لتكاثر البرمائيات، بالإضافة إلى تأثير المقالع وشق الطرق على المنحدرات الصخرية.',
    geographicScope: 'Western Anti-Atlas mountains, Chtouka-Aït Baha province, Ida Ougnidif, and Kasbah Tizourgane valleys.',
    geographicScopeFr: 'Anti-Atlas occidental, province de Chtouka-Aït Baha, Ida Ougnidif et gorges de Tizourgane.',
    geographicScopeAr: 'الأطلس الصغير الغربي، إقليم اشتوكة آيت باها، إيدا اوكنظيف، ومحيط قصبة تيزوركان.',
    objectives: [
      'Establish permanent seasonal monitoring transects across varied elevations (400m to 1,600m).',
      'Inventory temporary rock pools (gueltas) and assess breeding success of Moroccan amphibians (Bufotes boulengeri, Discoglossus scovazzi).',
      'Train local ecotourism guides in ethical wildlife spotting without disturbing stone refuges.',
      'Install protective fencing and small water retention basins near vulnerable communities.'
    ],
    objectivesFr: [
      'Mettre en place des transects de suivi saisonniers échelonnés entre 400 m et 1 600 m d\'altitude.',
      'Inventorier les gueltas rocheuses et évaluer la reproduction des amphibiens.',
      'Former les guides locaux d\'écotourisme à l\'observation responsable sans retournement destructeur de pierres.',
      'Aménager des points d\'eau protégés pour préserver les réserves hydriques vitales.'
    ],
    objectivesAr: [
      'إنشاء مسارات مراقبة موسمية دائمة على ارتفاعات تتراوح بين 400 و1600 متر.',
      'جرد القلتات الصخرية ومتابعة نجاح تكاثر البرمائيات المتوطنة.',
      'تدريب المرشدين السياحيين والشباب على المراقبة المسؤولة للحياة البرية دون تدمير المخابئ الصخرية.',
      'تهيئة وحماية نقاط مائية حيوية لدعم التوازن البيئي في المنطقة.'
    ],
    methods: [
      'Visual encounter surveys during crepuscular and nocturnal activity windows.',
      'Water quality monitoring and tadpole density surveys in rocky gueltas.',
      'Workshops with regional youth clubs in Aït Baha town and rural communes.',
      'Photographic cataloging of dorsal markings in Quedenfeldtia geckos to assess population densities.'
    ],
    methodsFr: [
      'Prospections visuelles systématiques lors des pics d\'activité crépusculaires et nocturnes.',
      'Analyses physico-chimiques de l\'eau et suivi des densités de têtards.',
      'Ateliers de sensibilisation avec les collèges et associations d\'Aït Baha.',
      'Photo-identification des motifs dorsaux pour l\'estimation des effectifs de Quedenfeldtia.'
    ],
    methodsAr: [
      'مسوحات بصرية منتظمة خلال فترات النشاط الغسقية والليلية.',
      'قياس جودة المياه ومتابعة كثافة شراغيف البرمائيات في القلتات.',
      'تنظيم ورشات تكوينية وتوعوية بالمدارس والجمعيات المحلية بإقليم آيت باها.',
      'استخدام تقنية التعرف بالصور لدراسة كثافة تجمعات الوزغ النهاري المتوطن.'
    ],
    milestones: [
      'Continuous 5-year monitoring dataset established for western Anti-Atlas herpetofauna.',
      'Discovery of previously unrecorded isolated populations of endemic lizards in high elevation gorges.',
      'Educational guide published highlighting the unique biodiversity of the Chtouka-Aït Baha mountains.'
    ],
    milestonesFr: [
      'Série temporelle de données continues sur 5 ans établie pour l\'herpétofaune de l\'Anti-Atlas.',
      'Identification de populations isolées inédites de sauriens endémiques en altitude.',
      'Publication d\'un guide pédagogique valorisant la richesse biologique des monts d\'Aït Baha.'
    ],
    milestonesAr: [
      'توثيق بيانات ميدانية مستمرة على مدى 5 سنوات حول زواحف الأطلس الصغير.',
      'تسجيل تجمعات نادرة وغير موثقة سابقاً من السحالي المتوطنة في المرتفعات.',
      'إصدار دليل تربوي يبرز التنوع البيولوجي الفريد لإقليم اشتوكة آيت باها.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/1.png',
    tags: ['Anti-Atlas', 'Aït Baha', 'Mountain Herpetofauna', 'Gueltas', 'Endemics'],
    partners: [
      { name: 'Université Ibn Zohr', role: 'Ecology Department Fieldwork & Student Training' },
      { name: 'AMANAT', role: 'Local Community Liaison' },
      { name: 'La Perle aux Oiseaux', role: 'Environmental Education Partner' }
    ],
    leadResearchers: ['Abdellah Bouazza', 'Aziza Lansari', 'Khaoula Aouallou']
  },
  {
    slug: 'serpentid',
    title: 'SERPENTID',
    titleFr: 'SERPENTID',
    titleAr: 'سيربنتيد — نظام التعرف على الثعابين وإدارة اللدغات',
    kicker: 'AI Assistance · Medical Herpetology',
    kickerFr: 'Assistance IA · Herpétologie Médicale',
    kickerAr: 'الذكاء الاصطناعي · علم الزواحف الطبي',
    status: 'Active',
    category: 'Computer Vision & Clinical Support Tool',
    categoryFr: 'Vision par Ordinateur & Outil d\'Aide Clinique',
    categoryAr: 'الرؤية الحاسوبية ودعم اتخاذ القرار السريري',
    overview: 'SERPENTID is a specialized research tool developed by Morocco Herpetology and computer engineering students to assist clinicians, first responders, and researchers in identifying Moroccan snake species from photographs. All AI suggestions are strictly advisory and followed by human expert review, preventing misidentification of dangerous species.',
    overviewFr: 'SERPENTID est un outil de recherche développé par Morocco Herpetology et des élèves-ingénieurs pour aider médecins, secouristes et chercheurs à identifier les serpents du Maroc à partir de photographies. Les prédictions sont strictement consultatives et adossées à une validation experte.',
    overviewAr: 'مشروع بحثي يجمع بين علم الزواحف وهندسة الذكاء الاصطناعي لمساعدة الأطقم الطبية وفرق الإنقاذ في التعرف الأولي على أنواع الثعابين المغربية من خلال الصور، مع التأكيد الصارم على المراجعة البشرية المتخصصة لتجنب أي تشخيص خاطئ.',
    problem: 'Bite victims or healthcare staff often cannot differentiate harmless colubrids from medically significant vipers and cobras, leading to either unnecessary antivenom administration or fatal delays.',
    problemFr: 'Les victimes de morsures et le personnel médical peinent souvent à distinguer les couleuvres inoffensives des vipères et cobras venimeux, causant des retards de soins ou des administrations inappropriées de sérum.',
    problemAr: 'صعوبة تمييز الطواقم الطبية والمصابين بين الثعابين غير السامة والأفاعي الخطيرة، مما قد يؤدي إما لهدر الأمصال النادرة أو التأخر في تقديم العلاج المنقذ للحياة.',
    geographicScope: 'National deployment with focus on emergency departments and poison control centers across rural Morocco.',
    geographicScopeFr: 'Déploiement national avec priorité pour les urgences hospitalières et centres antipoison des zones rurales.',
    geographicScopeAr: 'تطبيق على المستوى الوطني مع التركيز على أقسام المستعجلات والمراكز الصحية في العالم القروي.',
    objectives: [
      'Train neural network classifiers on thousands of verified field photographs of Moroccan snake species.',
      'Provide clear, immediate diagnostic character comparison (pupil shape, dorsal pattern, head scale arrangement).',
      'Deliver emergency clinical guidelines alongside identification results, emphasizing non-tourniquet protocol.',
      'Establish a 24/7 tele-herpetology expert consultation network for verified hospital cases.'
    ],
    objectivesFr: [
      'Entraîner des modèles de réseaux de neurones sur des milliers de photos vérifiées de serpents marocains.',
      'Fournir des critères diagnostiques visuels clairs (pupille, écaillure céphalique, motifs dorsaux).',
      'Rappeler les protocoles d\'urgence recommandés (proscription des garrots et incisions).',
      'Mettre en place un réseau d\'experts joignable en télé-herpétologie pour les cas hospitaliers urgents.'
    ],
    objectivesAr: [
      'تدريب خوارزميات التعلم العميق على آلاف الصور الميدانية المحققة للثعابين بالمغرب.',
      'توفير مقارنة بصرية سريعة للخصائص المميزة (شكل بؤبؤ العين، الحراشف، النقوش الظهرية).',
      'تضمين إرشادات الإسعاف الأولي الطبية الصحيحة والتحذير من الممارسات الخاطئة مثل الربط والكي.',
      'ربط شبكة من الخبراء لتقديم استشارات فورية للحالات الحرجة بالمستشفيات.'
    ],
    methods: [
      'Rigorous dataset curation ensuring diverse lighting, angles, color morphs, and juvenile variations.',
      'Clear user interface emphasizing that AI results are preliminary assistance, not medical diagnosis.',
      'Integrated direct WhatsApp link to verified on-call herpetologists for critical confirmation.',
      'Audit logging of all identifications to continually refine model precision.'
    ],
    methodsFr: [
      'Constitution d\'un jeu de données rigoureux couvrant variations de couleurs, stades juvéniles et angles de vue.',
      'Interface utilisateur claire précisant que l\'IA est une aide préliminaire et non un diagnostic médical.',
      'Lien WhatsApp direct avec les herpétologistes de garde pour confirmation immédiate en cas d\'urgence.',
      'Journalisation et audit de toutes les requêtes pour affiner continuellement la précision.'
    ],
    methodsAr: [
      'بناء قاعدة بيانات تدريبية متوازنة تغطي مختلف التلوينات والمراحل العمرية وزوايا التصوير.',
      'تصميم واجهة واضحة توضح أن نتائج الذكاء الاصطناعي هي مساعدة استرشادية وليست تشخيصاً طبياً نهائياً.',
      'توفير زر تواصل مباشر عبر واتساب مع خبراء الزواحف المعتمدين لتأكيد الهوية عند الطوارئ.',
      'سجل تدقيق لكافة العمليات لتحسين دقة النظام ومتابعة الأداء العلمي.'
    ],
    milestones: [
      'Classification architecture developed by engineering graduates from Ibn Zohr University computer science program.',
      'Curated dataset of all 26 Moroccan snake species cataloged with diagnostic key characters.',
      'Integration into the new Morocco Herpetology observation platform.'
    ],
    milestonesFr: [
      'Architecture logicielle développée par les élèves-ingénieurs en informatique de l\'Université Ibn Zohr.',
      'Banque d\'images de référence constituée pour les 26 espèces de serpents marocains.',
      'Intégration directe dans la nouvelle plateforme d\'observation de Morocco Herpetology.'
    ],
    milestonesAr: [
      'تطوير النموذج البرمجي بواسطة طلبة ومهندسي المعلوميات بجامعة ابن زهر.',
      'توثيق الخصائص التشخيصية الدقيقة لكافة أنواع الثعابين الـ 26 بالمغرب.',
      'دمج النظام ضمن منصة التوثيق الميداني الجديدة لموقع Morocco Herpetology.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Image2.png',
    tags: ['Artificial Intelligence', 'Snake Identification', 'Snakebite', 'Tele-Herpetology', 'Medical Safety'],
    partners: [
      { name: 'Université Ibn Zohr (Génie Informatique)', role: 'Machine Learning & Software Engineering' },
      { name: 'Société Marocaine de Toxicologie Clinique', role: 'Clinical Guidance & Antivenom Advisory' }
    ],
    leadResearchers: ['Abdellah Bouazza', 'Oumaima Hatim', 'Ghizlane Hadidi', 'Aicha El khddar']
  },
  {
    slug: 'chamaeleo-chamaeleon-conservation',
    title: 'Conservation of Chamaeleo chamaeleon',
    titleFr: 'Conservation de Chamaeleo chamaeleon au Maroc',
    titleAr: 'مشروع حماية الحرباء الشائعة في المغرب',
    kicker: 'Species Protection · Anti-Poaching & Habitat Defense',
    kickerFr: 'Protection d\'Espèce · Lutte Anti-Braconnage & Préservation',
    kickerAr: 'حماية الأنواع · مكافحة الصيد غير المشروع وحماية الموائل',
    status: 'Active',
    category: 'Trade Monitoring & Habitat Defense',
    categoryFr: 'Surveillance du Commerce & Protection des Habitats',
    categoryAr: 'مراقبة التجارة غير المشروعة وحماية الموائل الطبيعية',
    overview: 'The Mediterranean Chameleon (Chamaeleo chamaeleon) is legally protected under Moroccan wildlife laws and international conventions (CITES Appendix II), yet it continues to face illegal capture for traditional markets and pet trade, alongside habitat loss across coastal dunes and agricultural scrub. This project monitors market trade, protects coastal populations, and rehabilitates confiscated individuals.',
    overviewFr: 'Le Caméléon commun (Chamaeleo chamaeleon) est strictement protégé par la législation marocaine et la CITES (Annexe II). Pourtant, il subit des prélèvements illégaux pour les marchés traditionnels et le commerce d\'animaux, ainsi que la régression des dunes côtières. Ce projet documente le commerce illégal, protège les populations sauvages et réhabilite les individus saisis.',
    overviewAr: 'تحظى الحرباء الشائعة (Chamaeleo chamaeleon) بحماية قانونية كاملة بموجب القوانين المغربية واتفاقية سايتس، إلا أنها لا تزال تواجه الصيد غير المشروع لعرضها في الأسواق الشعبية أو بيعها، فضلاً عن تدهور بيئتها الطبيعية. يعمل هذا المشروع على رصد التجارة غير القانونية، وحماية الموائل الساحلية، وإعادة تأهيل الحيوانات المصادرة.',
    problem: 'Poaching for traditional folklore medicine and street tourist markets, compounded by intensive urban development on coastal sand dunes and scrublands.',
    problemFr: 'Braconnage récurrent pour les pratiques traditionnelles et la vente aux touristes, aggravé par l\'urbanisation des dunes côtières et des matorrals.',
    problemAr: 'الصيد غير القانوني للاستخدام في المعتقدات الشعبية والبيع في الأسواق، بالتزامن مع الزحف العمراني وتدمير الكثبان الرملية الساحلية.',
    geographicScope: 'Coastal belt from Tangier to Essaouira, Souss-Massa coastal plain, and Rif foothills.',
    geographicScopeFr: 'Bande côtière atlantique de Tanger à Essaouira, plaine littorale de Souss-Massa et piémonts rifains.',
    geographicScopeAr: 'الشريط الساحلي الأطلسي من طنجة إلى الصويرة، وسهل سوس ماسة، ومقدمة جبال الريف.',
    objectives: [
      'Document the scale and trade routes of illegal chameleon capture across Moroccan souks and coastal resorts.',
      'Provide training for forestry and customs officers on identification and legal status enforcement.',
      'Maintain an expert quarantine and rehabilitation protocol for seized individuals before release into protected wild habitats.',
      'Conduct public education campaigns dispelling superstitions and promoting respect for live chameleons.'
    ],
    objectivesFr: [
      'Quantifier l\'ampleur du commerce illégal des caméléons dans les souks et villes touristiques.',
      'Former les agents des Eaux et Forêts et douaniers sur la réglementation et l\'identification.',
      'Gérer un centre de quarantaine et de réhabilitation pour les spécimens saisis avant leur réintroduction sécurisée.',
      'Mener des campagnes de sensibilisation pour déconstruire les mythes et valoriser le rôle écologique du caméléon.'
    ],
    objectivesAr: [
      'توثيق حجم ومسارات التجارة غير القانونية في الأسواق الشعبية والمناطق السياحية.',
      'تدريب عناصر إدارة المياه والغابات والجمارك على تطبيق القوانين وحماية هذا النوع.',
      'تطبيق بروتوكول بيطري للحجر الصحي وإعادة تأهيل العينات المصادرة قبل إعادتها إلى المحميات الطبيعية.',
      'تنظيم حملات توعوية لمحاربة الخرافات وتوضيح الدور البيئي الحيوي للحرباء في التوازن الطبيعي.'
    ],
    methods: [
      'Yearly undercover market surveys documenting prices, specimen numbers, and mortality rates in transport.',
      'Telemetry tracking of released rehabilitated chameleons to measure post-release survival rates.',
      'School workshops in coastal provinces featuring live, rescued non-releasable ambassador animals.',
      'Formal cooperation with regional judicial and forestry authorities for wildlife seizure processing.'
    ],
    methodsFr: [
      'Enquêtes annuelles discrètes sur les marchés pour évaluer volumes et mortalités observées.',
      'Suivi télémétrique des individus réhabilités pour mesurer le taux de survie après réintroduction.',
      'Animations scolaires avec des animaux ambassadeurs rescapés dans les provinces côtières.',
      'Coopération formelle avec les autorités judiciaires et forestières pour la prise en charge des saisies.'
    ],
    methodsAr: [
      'إجراء مسوحات ميدانية دورية في الأسواق لتوثيق الأعداد ومعدلات النفوق أثناء النقل والتخزين.',
      'تتبع الأفراد بعد إعادة إطلاقها في المحميات لقياس نسبة التأقلم والبقاء على قيد الحياة.',
      'تنظيم ورشات للأطفال والتلاميذ لتعريفهم بأهمية الكائن البيئية وكيفية حمايته.',
      'التعاون المستمر مع السلطات القضائية والغابوية لاستلام ورعاية الحيوانات المصادرة.'
    ],
    milestones: [
      'Over 240 poached chameleons rehabilitated and successfully returned to verified protected wild habitats.',
      'Educational materials distributed to schools across Souss-Massa and Marrakech-Safi regions.',
      'Scientific study on trade impacts and morphometric health indicators prepared for publication.'
    ],
    milestonesFr: [
      'Plus de 240 caméléons saisis soignés et relâchés avec succès dans des réserves naturelles.',
      'Supports éducatifs largement distribués aux écoles du Souss-Massa et de Marrakech-Safi.',
      'Étude scientifique sur l\'impact du commerce et les indicateurs biométriques de santé en cours de publication.'
    ],
    milestonesAr: [
      'إعادة تأهيل وإطلاق أكثر من 240 حرباء مصادرة في محميات ومناطق برية آمنة.',
      'توزيع حقائب ومواد تعليمية على المدارس في جهتي سوس ماسة ومراكش آسفي.',
      'إعداد ورقة علمية حول التأثيرات البيولوجية للتجارة غير القانونية ومؤشرات صحة العينات.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/6.png',
    tags: ['Chamaeleo chamaeleon', 'CITES', 'Wildlife Trade', 'Rehabilitation', 'Public Awareness'],
    partners: [
      { name: 'Agence Nationale des Eaux et Forêts (ANEF)', role: 'Wildlife Law Enforcement & Confiscation Handoff' },
      { name: 'Crocoparc Agadir', role: 'Veterinary Quarantine & Rehabilitation Facilities' },
      { name: 'La Perle aux Oiseaux', role: 'Wildlife Care & Educational Outreach' }
    ],
    leadResearchers: ['Aziza Lansari', 'Abdellah Bouazza', 'Louis Gonin']
  }
];

export const PROJECTS: ConservationProject[] = PROJECTS_DATA.map(p => ({
  ...p,
  id: p.slug,
  heroImage: p.image,
  summary: p.overview,
  region: p.geographicScope,
  timeframe: '2024–2026'
}));
