export interface OutreachProgram {
  id: string;
  slug: string;
  title: string;
  titleFr: string;
  titleAr: string;
  category: 'youth' | 'community' | 'media';
  audience: string;
  audienceFr: string;
  audienceAr: string;
  description: string;
  descriptionFr: string;
  descriptionAr: string;
  highlights: string[];
  highlightsFr: string[];
  highlightsAr: string[];
  image: string;
  date?: string;
  mediaOutlet?: string;
  externalLink?: string;
  badge?: string;
  desc?: string;
}

export const OUTREACH_PROGRAMS: OutreachProgram[] = [
  {
    id: 'outreach-schools',
    slug: 'herpetology-in-classrooms',
    title: 'Herpetology in Moroccan Classrooms: Disarming Fear with Science',
    titleFr: 'L\'Herpétologie à l\'École : Vaincre la Peur par la Science',
    titleAr: 'علم الزواحف في الفصول الدراسية: تبديد الخوف بالمعرفة',
    category: 'youth',
    audience: 'Primary & Secondary School Pupils (Ages 7–16)',
    audienceFr: 'Élèves du primaire et du secondaire (7 à 16 ans)',
    audienceAr: 'تلاميذ المدارس الابتدائية والإعدادية (من 7 إلى 16 سنة)',
    description: 'An interactive environmental education initiative bringing Moroccan herpetologists directly into rural and urban classrooms across Souss-Massa, Marrakech-Safi, and Guelmim. Using shed skins, interactive 3D models, educational comics in Darija and Arabic, and safe observations, children discover the ecological role of snakes, toads, and chameleons.',
    descriptionFr: 'Une initiative éducative interactive animée par les herpétologistes dans les écoles rurales et urbaines. À travers des mues, des modèles 3D et des bandes dessinées pédagogiques en arabe et darija, les enfants découvrent le rôle bénéfique des reptiles et amphibiens.',
    descriptionAr: 'برنامج تربوي تفاعلي يحط الرحال في المدارس القروية والحضرية، لتعريف الناشئة بأهمية الزواحف والبرمائيات في الحفاظ على التوازن البيئي، ومكافحة القوارض والحشرات الضارة، وتصحيح المعتقدات الخاطئة.',
    highlights: [
      'Over 130 school workshops conducted reaching more than 4,200 students annually.',
      'Distribution of free bilingual educational booklets ("Reptiles of Morocco: Our Ecological Allies").',
      'Classroom safety rules on what to do when encountering a snake in a garden or courtyard.'
    ],
    highlightsFr: [
      'Plus de 130 ateliers scolaires animés touchant plus de 4 200 élèves chaque année.',
      'Distribution gratuite de livrets pédagogiques bilingues ("Les Reptiles du Maroc : Nos Alliés Écologiques").',
      'Apprentissage des gestes réflexes sécuritaires en cas de rencontre fortuite avec un serpent.'
    ],
    highlightsAr: [
      'تنظيم أكثر من 130 ورشة مدرسية تستفيد منها سنوياً ما يزيد عن 4200 تلميذ وتلميذة.',
      'توزيع كتيبات وقصص مصورة توعوية حول دور الزواحف في حماية البيئة والمحاصيل الفلاحية.',
      'تعليم الأطفال السلوكيات الوقائية الآمنة عند مصادفة ثعبان في الحقول أو المنازل.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Image2.png'
  },
  {
    id: 'outreach-farmer-dialogue',
    slug: 'coexistence-farmers-cooperatives',
    title: 'Agricultural Coexistence: Living Safely Alongside Moroccan Reptiles',
    titleFr: 'Coexistence Agricole : Travailler en Sécurité avec les Reptiles',
    titleAr: 'التعايش الزراعي: العمل بأمان إلى جانب الزواحف في الحقول',
    category: 'community',
    audience: 'Farmers, Agronomists & Rural Cooperative Members',
    audienceFr: 'Agriculteurs, Agronomes & Membres de Coopératives Rurales',
    audienceAr: 'الفلاحون، المهندسون الزراعيون، وأعضاء التعاونيات القروية',
    description: 'Field meetings organized with farmers in argan groves, olive orchards, and greenhouse valleys. Explaining how non-venomous snakes act as natural rodent control, saving tons of stored grain, while teaching practical bite prevention during harvest seasons.',
    descriptionFr: 'Rencontres de terrain avec les agriculteurs dans les arganeraies, oliveraies et zones de maraîchage. Présentation du rôle de régulation des rongeurs par les couleuvres et formation aux mesures de prévention lors des récoltes.',
    descriptionAr: 'لقاءات ميدانية مع الفلاحين في بساتين الزيتون وغابات الأركان، لتبيان دور الثعابين الطبيعي في افتراس القوارض وحماية المحاصيل، مع شرح سبل الوقاية وارتداء الأحذية الواقية أثناء الجني.',
    highlights: [
      'Collaborations with agrarian cooperatives across Taroudant, Tiznit, and Chtouka.',
      'Demonstration of escape ramps for agricultural basins and matfiyas.',
      'Emergency response contacts directly linked to regional hospital antivenom centers.'
    ],
    highlightsFr: [
      'Coopérations avec les coopératives agricoles de Taroudant, Tiznit et Chtouka.',
      'Démonstrations pratiques de rampes d\'échappement dans les bassins d\'irrigation.',
      'Remise de fiches de contacts directs pour l\'orientation vers les centres hospitaliers équipés.'
    ],
    highlightsAr: [
      'شراكات مستمرة مع تعاونيات فلاحية في أقاليم تارودانت، تزنيت، واشتوكة.',
      'تطبيق عملي لتركيب سلالم الإنقاذ في الأحواض المائية لإنهاء ظاهرة الغرق.',
      'تزويد الفلاحين بأرقام التواصل المباشر مع مراكز الإسعاف ومصالح طب السموم.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/2.png'
  },
  {
    id: 'media-report-snakes-conservation',
    slug: 'media-moroccan-herpetofauna-documentary',
    title: 'National Television Feature: Biodiversity and Conservation of Moroccan Herpetofauna',
    titleFr: 'Reportage Télévisé National : La Richesse Herpétologique du Maroc',
    titleAr: 'تغطية تلفزيونية وطنية: التنوع البيولوجي وحماية الزواحف في المغرب',
    category: 'media',
    audience: 'General Public & Moroccan Viewers',
    audienceFr: 'Grand Public & Téléspectateurs Marocains',
    audienceAr: 'عموم المواطنين والمشاهدين بالمغرب والخارج',
    description: 'In-depth televised reporting and field interview featuring Dr. Abdellah Bouazza and Morocco Herpetology researchers, highlighting the discovery of new scorpion species, rescue operations in cisterns, and scientific efforts to safeguard the Moroccan Cobra and Puff Adder.',
    descriptionFr: 'Grand reportage télévisé et interview sur le terrain avec les chercheurs de Morocco Herpetology, mettant en lumière la découverte de nouveaux scorpions, les sauvetages de faune et la protection des espèces emblématiques.',
    descriptionAr: 'برنامج وثائقي وتغطية إعلامية مسهبة استضافت باحثي Morocco Herpetology، لتسليط الضوء على الاكتشافات الجديدة للعقارب، وعمليات إنقاذ الكائنات البرية، وحماية الأنواع المهددة كالكوبرا المغربية والأفعى النفاثة.',
    highlights: [
      'Broadcast on national channels and viewed by hundreds of thousands of citizens.',
      'Public demonstration dispelling dangerous myths about snake breath and milk-drinking legends.',
      'Strong public call to action encouraging observation submissions to HerpAtlas Morocco.'
    ],
    highlightsFr: [
      'Diffusion sur les chaînes nationales auprès de centaines de milliers de téléspectateurs.',
      'Démystification scientifique des légendes populaires sur les serpents.',
      'Appel à la participation citoyenne pour alimenter l\'atlas national HerpAtlas.'
    ],
    highlightsAr: [
      'بث البرنامج عبر القنوات الوطنية ومتابعته من قبل مئات الآلاف من المواطنين.',
      'تفنيد علمي للخرافات المتداولة حول الثعابين وطرق الوقاية الحقيقية.',
      'دعوة مفتوحة للمواطنين للمساهمة في توثيق الأنواع عبر منصة HerpAtlas.'
    ],
    image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/6.png',
    date: '2025-11-20',
    mediaOutlet: 'Moroccan National Television (SNRT) & Scientific Press'
  }
];
