export interface AcademicCourse {
  id: string;
  slug: string;
  title: string;
  titleFr: string;
  titleAr: string;
  institution: string;
  institutionFr: string;
  institutionAr: string;
  level: string;
  levelFr: string;
  levelAr: string;
  duration: string;
  durationFr: string;
  durationAr: string;
  summary: string;
  summaryFr: string;
  summaryAr: string;
  syllabus: {
    title: string;
    titleFr: string;
    titleAr: string;
    description: string;
    descriptionFr: string;
    descriptionAr: string;
  }[];
  instructors: string[];
  instructorsFr?: string[];
  instructorsAr?: string[];
  prerequisites: string;
  prerequisitesFr: string;
  prerequisitesAr: string;
}

export const COURSES_DATA: AcademicCourse[] = [
  {
    id: 'course-field-herpetology',
    slug: 'advanced-field-herpetology-morocco',
    title: 'Advanced Field Herpetology: Survey Techniques & Biomonitoring',
    titleFr: 'Herpétologie de Terrain : Techniques d\'Inventaire et Biosuivi',
    titleAr: 'علم الزواحف الميداني: تقنيات الجرد والرصد البيولوجي',
    institution: 'Université Ibn Zohr (Faculté des Sciences d\'Agadir) & Morocco Herpetology',
    institutionFr: 'Université Ibn Zohr (Faculté des Sciences d\'Agadir) & Morocco Herpetology',
    institutionAr: 'جامعة ابن زهر (كلية العلوم بأكادير) وجمعية Morocco Herpetology',
    level: 'Master / PhD / Professional Naturalists',
    levelFr: 'Master / Doctorat / Professionnels de la Nature',
    levelAr: 'ماستر / دكتوراه / المتخصصون والمهنيون',
    duration: '5 Days (Intensive Field Workshop, 40 hours)',
    durationFr: '5 Jours (Atelier de terrain intensif, 40 heures)',
    durationAr: '5 أيام (ورشة عمل ميدانية مكثفة، 40 ساعة)',
    summary: 'A rigorous hands-on field and laboratory masterclass focusing on standardized sampling protocols, non-destructive capture and handling of venomous and non-venomous taxa, acoustic monitoring of amphibians, GPS data logging, and biometric recording.',
    summaryFr: 'Une formation théorique et pratique intensive axée sur les protocoles d\'échantillonnage standardisés, la manipulation sécurisée et éthique des reptiles venimeux et inoffensifs, l\'enregistrement acoustique des amphibiens et la biométrie.',
    summaryAr: 'دورة تدريبية متقدمة تجمع بين الشق النظري والميداني، لتعلم بروتوكولات المسح القياسية، والتعامل الآمن والأخلاقي مع الزواحف السامة وغير السامة، والرصد الصوتي للبرمائيات.',
    syllabus: [
      {
        title: 'Module 1: Taxonomy & Morphological Identification',
        titleFr: 'Module 1 : Taxonomie et Identification Morphologique',
        titleAr: 'الوحدة 1: التصنيف العلمي والتشخيص المورفولوجي',
        description: 'Phylogenetics of North African squamates, diagnostic scalation keys, and differentiating cryptic species pairs.',
        descriptionFr: 'Phylogénie des squamates nord-africains, clés d\'écaillure et distinction des espèces cryptiques.',
        descriptionAr: 'السلالات التطورية لزواحف شمال إفريقيا، مفاتيح الحراشف التشخيصية، والتمييز بين الأنواع المتشابهة.'
      },
      {
        title: 'Module 2: Standardized Field Protocols & GPS Telemetry',
        titleFr: 'Module 2 : Protocoles de Terrain et Télémétrie GPS',
        titleAr: 'الوحدة 2: البروتوكولات الميدانية وتتبع نظام تحديد المواقع',
        description: 'Transect design, visual encounter surveys, environmental parameter logging (temperature, substrate, relative humidity).',
        descriptionFr: 'Méthodes de transects, prospections visuelles et mesure des paramètres microclimatiques.',
        descriptionAr: 'تصميم المسارات الميدانية، والمسوحات البصرية، وتسجيل المعايير البيئية الدقيقة.'
      },
      {
        title: 'Module 3: Ethical Handling & Venom Safety Protocols',
        titleFr: 'Module 3 : Manipulation Éthique et Sécurité face aux Venins',
        titleAr: 'الوحدة 3: التعامل الأخلاقي وإجراءات السلامة من السموم',
        description: 'Snake hook techniques, tube immobilization, bite prevention, emergency response, and cold chain handling.',
        descriptionFr: 'Techniques aux crochets, contention en tube transparent, prévention des morsures et premiers secours.',
        descriptionAr: 'تقنيات استخدام خطافات الثعابين، أنابيب الفحص الشفافة، الوقاية من اللدغات، وإجراءات الإسعاف الأولي السليم.'
      },
      {
        title: 'Module 4: Data Publishing & Darwin Core Compliance',
        titleFr: 'Module 4 : Publication des Données et Standards Darwin Core',
        titleAr: 'الوحدة 4: نشر البيانات والتوافق مع المعايير الدولية',
        description: 'Managing spatial uncertainty, coordinate blurring for threatened taxa, and formatting records for GBIF and HerpAtlas.',
        descriptionFr: 'Gestion de l\'incertitude spatiale, floutage des espèces menacées et formatage conforme au GBIF.',
        descriptionAr: 'إدارة دقة البيانات الجغرافية، وحماية مواقع الأنواع المهددة، والتوافق مع بنوك البيانات العالمية.'
      }
    ],
    instructors: ['Dr. Abdellah Bouazza', 'Dr. Aziza Lansari', 'Soufiane Zaroual'],
    instructorsFr: ['Dr. Abdellah Bouazza', 'Dr. Aziza Lansari', 'Soufiane Zaroual'],
    instructorsAr: ['د. عبد الله بوعزة', 'د. عزيزة عنصري', 'سفيان زروال'],
    prerequisites: 'Undergraduate background in biological sciences, ecology, veterinary medicine, or forestry.',
    prerequisitesFr: 'Formation universitaire en biologie, écologie, médecine vétérinaire ou sciences forestières.',
    prerequisitesAr: 'خلفية أكاديمية في العلوم البيولوجية، البيئة، الطب البيطري أو الغابات.'
  },
  {
    id: 'course-venom-medicine',
    slug: 'clinical-toxinology-snakebite-management',
    title: 'Clinical Toxinology & Snakebite Management in Morocco',
    titleFr: 'Toxinologie Clinique & Prise en Charge des Envenimations au Maroc',
    titleAr: 'علم السموم السريري وإدارة حالات لدغات الأفاعي بالمغرب',
    institution: 'Morocco Herpetology Medical Training Axis in partnership with Regional Health Directorates',
    institutionFr: 'Axe Médical Morocco Herpetology en partenariat avec les Directions Régionales de la Santé',
    institutionAr: 'المحور الطبي لـ Morocco Herpetology بالشراكة مع المديريات الجهوية للصحة',
    level: 'Emergency Physicians, Nurses, Toxicologists & Paramedics',
    levelFr: 'Médecins Urgentistes, Infirmiers, Toxicologues & Secouristes',
    levelAr: 'أطباء المستعجلات، الممرضون، أطباء السموم، والمسعفون',
    duration: '2 Days (Accredited CME Seminar, 16 hours)',
    durationFr: '2 Jours (Séminaire médical accrédité, 16 heures)',
    durationAr: 'يومان (ندوة تكوين طبي مستمر معتمدة، 16 ساعة)',
    summary: 'Essential training for healthcare workers on accurate identification of Moroccan venomous species, pathophysiology of VIPERIDAE (cytotoxic/hemotoxic) vs ELAPIDAE (neurotoxic) venoms, modern antivenom administration guidelines, and preventing harmful traditional folk practices.',
    summaryFr: 'Formation médicale essentielle sur l\'identification précise des espèces venimeuses marocaines, la physiopathologie des envenimations (Viperidae vs Elapidae), l\'administration rigoureuse des antivenins et la lutte contre les pratiques traditionnelles délétères.',
    summaryAr: 'دورة متخصصة للأطقم الصحية للتعرف الدقيق على الأنواع السامة بالمغرب، وفيزيولوجيا السموم وتأثيراتها الدموية والعصبية، وبروتوكولات استخدام مضادات السموم، ومحاربة الممارسات الشعبية الخاطئة.',
    syllabus: [
      {
        title: 'Venomous Fauna of Morocco: Medical Importance',
        titleFr: 'Faune Venimeuse du Maroc d\'Intérêt Médical',
        titleAr: 'الحيوانات السامة بالمغرب ذات الأهمية الطبية',
        description: 'Vipers (Daboia, Bitis, Cerastes, Echis) and Cobras (Naja haje legionis): distribution, behavior, and visual recognition.',
        descriptionFr: 'Vipères (Daboia, Bitis, Cerastes, Echis) et Cobras (Naja haje legionis) : répartition et reconnaissance visuelle.',
        descriptionAr: 'الأفاعي الحقيقية والكوبرا المغربية: مناطق التواجد، السلوك، والتمييز البصري السريع.'
      },
      {
        title: 'Clinical Syndrome & Antivenom Protocols',
        titleFr: 'Syndromes Cliniques & Protocoles d\'Antivenin',
        titleAr: 'المتلازمات السريرية وبروتوكولات الأمصال',
        description: 'Local swelling progression, coagulopathy assessment (20-minute whole blood clotting test), systemic toxicity, and antivenom dosage.',
        descriptionFr: 'Progression de l\'œdème, évaluation des troubles de coagulation (test WBCT20) et indications du sérum.',
        descriptionAr: 'متابعة تطور التورم، واختبار تخثر الدم في 20 دقيقة، وجرعات الأمصال المضادة للسم.'
      }
    ],
    instructors: ['Dr. Abdellah Bouazza', 'Medical Herpetology Clinical Collaborators'],
    instructorsFr: ['Dr. Abdellah Bouazza', 'Collaborateurs Cliniques en Herpétologie Médicale'],
    instructorsAr: ['د. عبد الله بوعزة', 'أطباء ومتعاونون سريريون في علم الزواحف الطبي'],
    prerequisites: 'Medical degree, nursing diploma, or clinical emergency accreditation.',
    prerequisitesFr: 'Diplôme de médecine, diplôme d\'infirmier d\'État ou accréditation en soins d\'urgence.',
    prerequisitesAr: 'شهادة في الطب أو التمريض أو ممارسة الإسعافات الطبية المستعجلة.'
  }
];
