export interface TeamMember {
  id: string;
  name: string;
  nameAr?: string;
  role: string;
  roleFr: string;
  roleAr: string;
  bio: string;
  bioFr: string;
  bioAr: string;
  image: string;
  category: 'principal' | 'technician' | 'phd' | 'student' | 'collaborator';
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Abdellah Bouazza",
    nameAr: "عبد الله بوعزة",
    role: "Principal Researcher",
    roleFr: "Chercheur Principal",
    roleAr: "باحث رئيسي",
    bio: "Professor and Researcher in Conservation Biology and Herpetology at the Faculté Polydisciplinaire de Taroudant (Université Ibn Zohr). Co-founder and General Secretary of Morocco Herpetology.",
    bioFr: "Professeur et chercheur en biologie de la conservation et herpétologie à la Faculté Polydisciplinaire de Taroudant (Université Ibn Zohr). Co-fondateur et secrétaire général de Morocco Herpetology.",
    bioAr: "أستاذ وباحث في بيولوجيا الحفظ وعلم الزواحف والبرمائيات بالكلية المتعددة التخصصات بتارودانت (جامعة ابن زهر). مؤسس مشارك والكاتب العام لموروكو هيربيتولوجي.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2024/08/M.-Abdellah-Bouazza-Secretaire-General-2-2.jpg",
    category: "principal"
  },
  {
    id: "member-2",
    name: "Aziza Lansari",
    nameAr: "عزيزة عنصري",
    role: "Principal Researcher",
    roleFr: "Chercheuse Principale",
    roleAr: "باحثة رئيسية",
    bio: "Professor and Researcher in the Department of Sciences and Techniques at the Faculté Polydisciplinaire de Taroudant (Université Ibn Zohr). Specialist in herpetological thermal ecology and reproduction.",
    bioFr: "Professeure et chercheuse au Département des Sciences et Techniques de la Faculté Polydisciplinaire de Taroudant (Université Ibn Zohr). Spécialiste de l'écologie thermique et de la reproduction des reptiles.",
    bioAr: "أستاذة وباحثة في قسم العلوم والتقنيات بالكلية المتعددة التخصصات بتارودانت (جامعة ابن زهر). متخصصة في الإيكولوجيا الحرارية وتكاثر الزواحف.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2024/08/AL-e1723330712195.jpg",
    category: "principal"
  },
  {
    id: "member-3",
    name: "Soufiane Zaroual",
    nameAr: "سفيان زروال",
    role: "Research Technician",
    roleFr: "Technicien de Recherche",
    roleAr: "تقني أبحاث وميدان",
    bio: "Passionate Moroccan field herpetologist and active founding member of Morocco Herpetology. Expert in field surveys, photographic documentation, and anti-poaching monitoring.",
    bioFr: "Herpétologue de terrain passionné et membre actif de Morocco Herpetology. Spécialiste des prospections in situ, de la documentation photographique et du suivi anti-braconnage.",
    bioAr: "خبير ميداني شغوف بعلم الزواحف وعضو فاعل في موروكو هيربيتولوجي. متخصص في المسوحات الميدانية والتوثيق الفوتوغرافي ومكافحة الصيد غير المشروع.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2026/01/Zeroual-224x300.jpg",
    category: "technician"
  },
  {
    id: "member-4",
    name: "Mohamed Mousaid",
    nameAr: "محمد مساعيد",
    role: "PhD Fellow",
    roleFr: "Doctorant",
    roleAr: "طالب دكتوراه",
    bio: "PhD researcher at Morocco Herpetology specializing in arachnid systematics, scorpion venom epidemiology, and human–wildlife coexistence in southern Morocco.",
    bioFr: "Chercheur doctorant spécialisé en systématique des arachnides, épidémiologie des piqûres de scorpions et coexistence homme-faune dans le sud du Maroc.",
    bioAr: "باحث بسلك الدكتوراه متخصص في تصنيف العنكبيات، ووبائيات لسعات العقارب، والتعايش بين الإنسان والحياة البرية بالجنوب المغربي.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2024/11/sifaw1.jpg",
    category: "phd"
  },
  {
    id: "member-5",
    name: "Zohayr Dibar",
    nameAr: "زهير ديبار",
    role: "PhD Fellow",
    roleFr: "Doctorant",
    roleAr: "طالب دكتوراه",
    bio: "PhD researcher specializing in marine biodiversity, sea turtle strandings, GIS spatial modeling, and marine protected areas along the Atlantic and Mediterranean coasts.",
    bioFr: "Chercheur doctorant spécialisé en biodiversité marine, échouages de tortues marines, modélisation spatiale SIG et aires marines protégées.",
    bioAr: "باحث بسلك الدكتوراه متخصص في التنوع البيولوجي البحري، ورصد جنوح السلاحف البحرية، والنمذجة المكانية بنظم المعلومات الجغرافية.",
    image: "https://moroccoherpetology.com/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg",
    category: "phd"
  },
  {
    id: "member-6",
    name: "Oumaima Hatim",
    nameAr: "أميمة حاتم",
    role: "Software Engineering Student",
    roleFr: "Étudiante en Génie Informatique",
    roleAr: "طالبة في الهندسة المعلوماتية",
    bio: "Contributing to the Intelligent Geo-Digital HerpAtlas of Morocco, developing georeferenced spatial data pipelines and species occurrence database systems.",
    bioFr: "Contribue à l'Atlas Géo-Numérique Intelligent de l'herpétofaune du Maroc, développant des architectures de données géoréférencées et des bases d'occurrences.",
    bioAr: "تساهم في تطوير الأطلس الجغرافي الرقمي الذكي لزواحف المغرب، وبناء قواعد البيانات الجغرافية ونظم رصد التوزيع المكاني للأنواع.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2026/05/HATIM-Oumaima.jpg.jpeg",
    category: "student"
  },
  {
    id: "member-7",
    name: "Ghizlane Hadidi",
    nameAr: "غزلان حديدي",
    role: "Software Engineering Student",
    roleFr: "Étudiante en Génie Informatique",
    roleAr: "طالبة في الهندسة المعلوماتية",
    bio: "Working on the spatial analytics platform and data visualization for Moroccan biodiversity distribution records.",
    bioFr: "Travaille sur la plateforme d'analyse spatiale et la visualisation cartographique des données d'occurrences de l'herpétofaune marocaine.",
    bioAr: "تعمل على منصة التحليل المكاني والتمثيل البياني والخرائطي لسجلات التنوع البيولوجي للزواحف والبرمائيات بالمغرب.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2026/05/HADIDI-Ghizlane.jpg-1.jpeg",
    category: "student"
  },
  {
    id: "member-8",
    name: "Aicha El khddar",
    nameAr: "عائشة الخضار",
    role: "Software Engineering Student",
    roleFr: "Étudiante en Génie Informatique",
    roleAr: "طالبة في الهندسة المعلوماتية",
    bio: "Developing web and mobile database architectures for field submission validation and taxonomic cataloging.",
    bioFr: "Développe les architectures logicielles pour la validation des données d'observation de terrain et le catalogage taxonomique.",
    bioAr: "تطور البنية البرمجية لمنظومة التحقق من الملاحظات الميدانية والفهرسة التصنيفية للأنواع.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2026/05/Aicha-EL-KHDDAR.png",
    category: "student"
  },
  {
    id: "member-9",
    name: "Khaoula Aouallou",
    nameAr: "خولة أوعلو",
    role: "Master's Fellow - Coastal Ecology",
    roleFr: "Master Écologie Littorale & Aquaculture",
    roleAr: "طالبة باحثة في سلك الماستر",
    bio: "Morphometric and behavioral analysis of the North African Spiny-tailed Lizard (Uromastyx nigriventris) in captivity and thermal ecology in natural habitats.",
    bioFr: "Analyse morphométrique et comportementale du fouette-queue du Maroc (Uromastyx nigriventris) en captivité et écologie thermique en milieu naturel.",
    bioAr: "دراسة القياسات المورفولوجية والسلوكية لضب شمال إفريقيا (Uromastyx nigriventris) في الأسر وبيئته الحرارية في الموائل الطبيعية.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2026/05/Khaoula-Aouallo.jpeg",
    category: "student"
  },
  {
    id: "member-10",
    name: "Nada Ait Bouhmad",
    nameAr: "ندى أيت بوحماد",
    role: "Master's Fellow - Wildlife Management",
    roleFr: "Master Gestion de la Faune Sauvage",
    roleAr: "طالبة باحثة في سلك الماستر",
    bio: "Behavioral and thermal biology studies of the West African Crocodile (Crocodylus suchus) in captivity and wetland conservation programs in Morocco.",
    bioFr: "Études comportementales et thermiques du crocodile d'Afrique de l'Ouest (Crocodylus suchus) en captivité et programmes de conservation des zones humides.",
    bioAr: "دراسات السلوك والبيولوجيا الحرارية لتمساح غرب إفريقيا (Crocodylus suchus) في الأسر وبرامج صيانة المناطق الرطبة بالمغرب.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2026/05/Nada.jpeg",
    category: "student"
  },
  {
    id: "member-11",
    name: "Louis Gonin",
    nameAr: "لويس غونين",
    role: "Naturalist Field Specialist",
    roleFr: "Expert Naturaliste des Milieux",
    roleAr: "خبير بيئي ميداني في الموائل الطبيعية",
    bio: "Evaluating fauna escape ramp systems in traditional water reservoirs (metfias) in southern Morocco under the 'From Traps to Refugia' initiative.",
    bioFr: "Évaluation des dispositifs d'échappement pour la faune dans les citernes traditionnelles (metfias) du sud marocain dans le cadre du projet 'From Traps to Refugia'.",
    bioAr: "تقييم فعالية سلالم خروج الحيوانات البرية من خزانات المياه التقليدية (المطفيات) بالجنوب المغربي ضمن مشروع 'من مصائد إلى ملاجئ'.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2026/05/Louis.jpg",
    category: "collaborator"
  },
  {
    id: "member-12",
    name: "Maël Rufray",
    nameAr: "مايل روفري",
    role: "Conservation Specialist",
    roleFr: "Spécialiste de la Conservation",
    roleAr: "أخصائي في حفظ التنوع البيولوجي",
    bio: "Morphological diversity and conservation assessment of the Saurodactylus brosseti gecko species complex in southwestern Morocco.",
    bioFr: "Étude de la diversité morphologique et conservation du complexe d'espèces Saurodactylus brosseti dans le sud-ouest marocain.",
    bioAr: "دراسة التنوع المورفولوجي والحفاظ على مجمع أنواع وزغة ساروداكتيلوس (Saurodactylus brosseti) بالجنوب الغربي للمغرب.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2025/03/Capture-decran-2025-03-06-152408.png",
    category: "collaborator"
  },
  {
    id: "member-13",
    name: "Hafsa Mahmoudi",
    nameAr: "حفصة محمودي",
    role: "Master's Fellow - Biodiversity",
    roleFr: "Master Biodiversité & Climat",
    roleAr: "طالبة باحثة - التنوع البيولوجي والمناخ",
    bio: "Investigating growth patterns, reproductive strategies, and thermal requirements of Uromastyx nigriventris in response to climate change.",
    bioFr: "Recherche sur les patrons de croissance, stratégies reproductives et exigences thermiques d'Uromastyx nigriventris face au changement climatique.",
    bioAr: "بحث حول أنماط النمو، والاستراتيجيات التكاثرية، والمتطلبات الحرارية لضب شمال إفريقيا استجابة للتغيرات المناخية.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2025/03/image0-scaled.jpeg",
    category: "student"
  },
  {
    id: "member-14",
    name: "Sacha Facchini",
    nameAr: "ساشا فاكيني",
    role: "Field Ecologist",
    roleFr: "Écologue de Terrain",
    roleAr: "باحث إيكولوجي ميداني",
    bio: "Distribution, diversity, and abundance of herpetofauna across traditional and intensive agricultural landscapes in the Souss Valley.",
    bioFr: "Distribution et abondance de l'herpétofaune au sein des paysages agricoles traditionnels et intensifs de la vallée du Souss.",
    bioAr: "دراسة توزيع ووفرة الزواحف والبرمائيات عبر المناظر الطبيعية الزراعية في سهل سوس.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2024/08/IMG_20230402_111110-1-scaled.jpg",
    category: "student"
  },
  {
    id: "member-15",
    name: "Mourad Ouzziki",
    nameAr: "مراد أوزيكي",
    role: "PhD Candidate in Toxinology & AI",
    roleFr: "Doctorant en Toxinologie & IA",
    roleAr: "باحث دكتوراه في علم السموم والذكاء الاصطناعي",
    bio: "Developing and evaluating deep learning computer-vision models for instant identification of medically significant venomous snakes in Morocco.",
    bioFr: "Développement et évaluation d'algorithmes d'apprentissage profond pour l'identification rapide des serpents venimeux d'importance médicale au Maroc.",
    bioAr: "تطوير وتقييم نماذج الذكاء الاصطناعي والتعلم العميق للتعرف الآني على الأفاعي السامة ذات الأهمية الطبية بالمغرب.",
    image: "https://moroccoherpetology.com/wp-content/uploads/2024/08/Mourad.jpeg",
    category: "phd"
  }
];
