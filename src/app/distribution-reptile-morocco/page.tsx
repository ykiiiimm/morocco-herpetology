'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { Mountain, Sun, CloudRain, Compass, ArrowRight, ArrowLeft } from 'lucide-react';

export default function DistributionPage() {
  const { locale, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const biogeographicZones = [
    {
      nameEn: 'Rif & Mediterranean Coastal Belt',
      nameFr: 'Rif & Littoral Méditerranéen',
      nameAr: 'الريف والشريط الساحلي المتوسطي',
      climateEn: 'Humid to Sub-humid Mediterranean (800–1800 mm rainfall)',
      climateFr: 'Méditerranéen humide à sub-humide (800–1800 mm de précipitations)',
      climateAr: 'متوسطي رطب إلى شبه رطب (800–1800 ملم من التساقطات)',
      habitatsEn: 'Cork oak (Quercus suber), green oak, and cedar montane forests; coastal wetlands.',
      habitatsFr: 'Forêts de chêne-liège (Quercus suber), chêne vert et cèdre montagnard ; zones humides côtières.',
      habitatsAr: 'غابات الفلين (Quercus suber) والبلوط الأخضر والأرز الجبلي؛ الأراضي الرطبة الساحلية.',
      keyTaxa: ['Salamandra algira tingitana', 'Pleurodeles waltl', 'Emys orbicularis', 'Natrix maura', 'Coronella girondica'],
      keyTaxaFr: ['Salamandra algira tingitana', 'Pleurodeles waltl', 'Emys orbicularis', 'Natrix maura', 'Coronella girondica'],
      keyTaxaAr: ['سلمندر شمال إفريقيا الطنجي (Salamandra algira tingitana)', 'سير أندلسي (Pleurodeles waltl)', 'سلحفاة البرك الأوروبية (Emys orbicularis)', 'ثعبان الماء الماروني (Natrix maura)', 'الكورونيلا الجيروندية (Coronella girondica)'],
      elevation: 'Sea level to 2,456 m (Jbel Tidiquin)',
      elevationAr: 'من مستوى سطح البحر إلى 2456 م (جبل تيديكين)',
      elevationFr: 'Du niveau de la mer à 2 456 m (Jbel Tidiquin)',
      icon: CloudRain,
    },
    {
      nameEn: 'Atlantic Coastal Plains & Mamora / Souss',
      nameFr: 'Plaines Côtières Atlantiques & Mamora / Souss',
      nameAr: 'السهول الساحلية الأطلسية والمامورة / سوس',
      climateEn: 'Thermo-Mediterranean to Semi-Arid (300–600 mm rainfall)',
      climateFr: 'Thermo-méditerranéen à semi-aride (300–600 mm)',
      climateAr: 'حار متوسطي إلى شبه جاف (300–600 ملم)',
      habitatsEn: 'Sandy coastal dunes, temporary dayas (rainwater ponds), cork oak forests, and Argania spinosa open woodlands.',
      habitatsFr: 'Dunes côtières sableuses, dayas temporaires, forêts de chêne-liège et arganiers ouverts (Argania spinosa).',
      habitatsAr: 'كثبان رملية ساحلية، وداية مؤقتة، غابات الفلين، والغابات المفتوحة من أشجار الأرغان.',
      keyTaxa: ['Pelobates varaldii (Moroccan Spadefoot)', 'Testudo graeca', 'Chamaeleo chamaeleon', 'Bitis arietans (Souss relict)', 'Malpolon monspessulanus'],
      keyTaxaFr: ['Pelobates varaldii (Pélobate marocain)', 'Testudo graeca (Tortue mauresque)', 'Chamaeleo chamaeleon', 'Bitis arietans (Relique du Souss)', 'Malpolon monspessulanus'],
      keyTaxaAr: ['ضفدع المجرفة المغربي (Pelobates varaldii)', 'السلحفاة المهموزة (Testudo graeca)', 'الحرباء الشائعة (Chamaeleo chamaeleon)', 'الأفعى النفاثة بسوس (Bitis arietans)', 'الثعبان الخبيث المونتبيلي (Malpolon monspessulanus)'],
      elevation: '0 to 300 m',
      elevationAr: 'من 0 إلى 300 م',
      elevationFr: '0 à 300 m',
      icon: Sun,
    },
    {
      nameEn: 'High Atlas & Middle Atlas Montane Domain',
      nameFr: 'Domaine Montagnard du Haut-Atlas & du Moyen-Atlas',
      nameAr: 'الأطلس الكبير والأطلس المتوسط الجبلي',
      climateEn: 'High-Altitude Alpine to Sub-Alpine (Cold winters with persistent snow cover)',
      climateFr: 'Alpin à sub-alpin d\'altitude (hivers rigoureux avec enneigement persistant)',
      climateAr: 'جبلي عالٍ إلى شبه جبلي (شتاء قارس مع تساقط ثلجي دائم)',
      habitatsEn: 'Limestone cliffs, volcanic screes, poa grasslands, juniper scrub (Juniperus thurifera).',
      habitatsFr: 'Falaises calcaires, éboulis volcaniques, pelouses à poa, maquis de genévriers (Juniperus thurifera).',
      habitatsAr: 'جروف كلسية، تلال بركانية حجرية، مروج عشبية، وغطاء الأعرعار (Juniperus thurifera).',
      keyTaxa: ['Quedenfeldtia trachyblepharus (Atlas Day Gecko up to 4,000m)', 'Atlantolacerta andreanskyi', 'Vipera monticola (Mountain Viper)', 'Discoglossus scovazzi'],
      keyTaxaFr: ['Quedenfeldtia trachyblepharus (Gecko diurne de l\'Atlas jusqu\'à 4 000 m)', 'Atlantolacerta andreanskyi', 'Vipera monticola (Vipère de montagne)', 'Discoglossus scovazzi'],
      keyTaxaAr: ['وزغة الأطلس النهارية حتى 4,000 م (Quedenfeldtia trachyblepharus)', 'سحلية أطلنتولاسيرتا أندرينسكي (Atlantolacerta andreanskyi)', 'أفعى الجبل الأطلسية (Vipera monticola)', 'ضفدع ديسكوغلوسوس سكوفاتسي (Discoglossus scovazzi)'],
      elevation: '1,500 to 4,167 m (Toubkal summit)',
      elevationAr: 'من 1500 إلى 4167 م (قمة جبل توبقال)',
      elevationFr: '1 500 à 4 167 m (sommet Toubkal)',
      icon: Mountain,
    },
    {
      nameEn: 'Anti-Atlas & Souss-Massa Transition Basin',
      nameFr: 'Anti-Atlas & Bassin de Transition Souss-Massa',
      nameAr: 'الأطلس الصغير وحوض الانتقال سوس-ماسة',
      climateEn: 'Arid to Saharan Mediterranean with ocean maritime moderation',
      climateFr: 'Aride à sahélo-méditerranéen avec influence maritime océanique',
      climateAr: 'جاف إلى صحراوي متوسطي بتعديل بحري محيطي',
      habitatsEn: 'Argan savannas, quartzite ravines, ancient stepped agricultural terraces, rocky reg slopes.',
      habitatsFr: 'Savanes à arganiers, ravins de quartzite, terrasses agricoles anciennes en gradins, versants rocailleux.',
      habitatsAr: 'سافانا أشجار الأرغان، وديان الكوارتز، مدرجات زراعية قديمة، ومنحدرات صخرية.',
      keyTaxa: ['Quedenfeldtia moerens', 'Agama bibronii', 'Acanthodactylus busacki', 'Daboia mauritanica', 'Chalcides ocellatus'],
      keyTaxaFr: ['Quedenfeldtia moerens', 'Agama bibronii', 'Acanthodactylus busacki', 'Daboia mauritanica (Vipère lébétine mauritanienne)', 'Chalcides ocellatus'],
      keyTaxaAr: ['وزغة الأطلس الصغير (Quedenfeldtia moerens)', 'عظاية ببرون (Agama bibronii)', 'أكانثوداكتيلوس بوزاكي (Acanthodactylus busacki)', 'الأفعى الموريتانية (Daboia mauritanica)', 'السقنقور الدساس المخطط (Chalcides ocellatus)'],
      elevation: '200 to 2,360 m (Jbel Sirwa / Kest)',
      elevationAr: 'من 200 إلى 2360 م (جبل سيروا / كيست)',
      elevationFr: '200 à 2 360 m (Jbel Sirwa / Kest)',
      icon: Compass,
    },
    {
      nameEn: 'Pre-Saharan & Saharan Ecoregion (Drâa, Tafilalet & Dakhla)',
      nameFr: 'Écorégion Présaharienne & Saharienne (Drâa, Tafilalet & Dakhla)',
      nameAr: 'المنطقة الإيكولوجية قبل الصحراوية والصحراوية (درعة، تافيلالت وداخلة)',
      climateEn: 'Hyper-arid Desert (< 100 mm irregular rainfall)',
      climateFr: 'Désert hyperaride (< 100 mm de précipitations irrégulières)',
      climateAr: 'صحراء جافة للغاية (< 100 ملم من الأمطار غير المنتظمة)',
      habitatsEn: 'Sand dunes (Erg Chebbi, Erg Chigaga), hamadas (stone plateaus), dry acacia riverbeds (oueds).',
      habitatsFr: 'Dunes de sable (Erg Chebbi, Erg Chigaga), hamadas (plateaux pierreux), lits de rivières sèches à acacias (oueds).',
      habitatsAr: 'كثبان رملية (عرق الشبي، عرق شقاقة)، حمادات حجرية، أودية جافة بأشجار السنط.',
      keyTaxa: ['Cerastes cerastes (Horned Viper)', 'Cerastes vipera (Sahara Sand Viper)', 'Uromastyx nigriventris', 'Stenodactylus petrii', 'Varanus griseus', 'Androctonus amoreuxi'],
      keyTaxaFr: ['Cerastes cerastes (Vipère à cornes)', 'Cerastes vipera (Vipère des sables)', 'Uromastyx nigriventris (Fouette-queue)', 'Stenodactylus petrii', 'Varanus griseus (Varan du désert)', 'Androctonus amoreuxi'],
      keyTaxaAr: ['الأفعى المقرنة (Cerastes cerastes)', 'أفعى الرمال (Cerastes vipera)', 'ضب شمال إفريقيا (Uromastyx nigriventris)', 'وزغة الرمال البترية (Stenodactylus petrii)', 'ورل الصحراء (Varanus griseus)', 'عقرب أموروكسي الصحراوي (Androctonus amoreuxi)'],
      elevation: 'Sea level to 1,200 m',
      elevationAr: 'من مستوى البحر إلى 1200 م',
      elevationFr: 'Du niveau de la mer à 1 200 m',
      icon: Sun,
    },
  ];

  // Locale-aware text helpers
  const distEyebrow = locale === 'ar'
    ? 'علم الزواحف المكاني · المناطق البيوكليماتية وأطلس الزواحف'
    : locale === 'fr'
    ? 'Herpétologie Spatiale · Domaines Bioclimatiques & HerpAtlas'
    : 'Spatial Herpetology · Bioclimatic Domains & HerpAtlas';

  const distTitle = locale === 'ar'
    ? 'التوزيع الجغرافي والبيوجغرافيا'
    : locale === 'fr'
    ? 'Distribution & Biogéographie'
    : 'Distribution & Biogeography';

  const distDesc = locale === 'ar'
    ? 'يمثل المغرب جسراً بيوجغرافياً رئيسياً بين المنطقة القطبية الشمالية الغربية والمنطقة الأفريقية الاستوائية. يخلق تضاريسه المعقدة — الذي يهيمن عليه الريف والأطلس المتوسط والأطلس الكبير والأطلس الصغير — تدرجات مناخية حادة تعزل الأنواع وتقود إلى تطور خاص واسع النطاق.'
    : locale === 'fr'
    ? "Le Maroc constitue un pont biogéographique majeur entre les royaumes paléarctique occidental et afrotropique. Son orographie complexe — dominée par le Rif, le Moyen Atlas, le Haut Atlas et l'Anti-Atlas — crée des gradients climatiques saisissants qui isolent les espèces et favorisent l'endémisme localisé."
    : 'Morocco constitutes a major biogeographical bridge between the Western Palearctic and Afrotropical realms. Its complex orography—dominated by the Rif, Middle Atlas, High Atlas, and Anti-Atlas ranges—creates dramatic climatic gradients that isolate species and drive extensive localized endemism.';

  const stat1Label = locale === 'ar' ? 'مناطق بيوكليماتية' : locale === 'fr' ? 'Écorégions Bioclimatiques' : 'Bioclimatic Ecoregions';
  const stat2Label = locale === 'ar' ? 'دقة شبكة التربيع' : locale === 'fr' ? 'Résolution Grille Quadrat' : 'Quadrate Grid Resolution';
  const stat3Label = locale === 'ar' ? 'معيار رسم خرائط GBIF' : locale === 'fr' ? 'Standard Cartographique GBIF' : 'GBIF Mapping Standard';

  const ecoSynthLabel = locale === 'ar' ? 'التوليف الإيكولوجي الإقليمي' : locale === 'fr' ? 'Synthèse Écorégionale' : 'Ecoregional Synthesis';
  const fiveDomTitle = locale === 'ar'
    ? 'المناطق البيوكليماتية الخمس للزواحف والبرمائيات في المغرب'
    : locale === 'fr'
    ? "Les Cinq Domaines Bioclimatiques Herpétologiques du Maroc"
    : "Morocco's Five Bioclimatic Herpetological Domains";
  const distBodyText = locale === 'ar'
    ? 'يتحدد توزيع الزواحف والبرمائيات والعقارب المغربية بواسطة خطوط الأمطار المتساوية، والحرارة الدنيا الشتوية، والركائز الجيولوجية.'
    : locale === 'fr'
    ? "La distribution des reptiles, amphibiens et scorpions marocains est dictée par les isohyètes pluviométriques, les températures minimales hivernales et les substrats géologiques."
    : 'The distribution of Moroccan reptiles, amphibians, and scorpions is dictated by precipitation isohyets, winter minimum temperatures, and geological substrates.';

  const domainLabel = locale === 'ar' ? 'النطاق' : locale === 'fr' ? 'Domaine' : 'Domain';
  const bioclimLabel = locale === 'ar' ? 'المناخ الحيوي:' : locale === 'fr' ? 'Bioclimat :' : 'Bioclimate:';
  const ecosysLabel = locale === 'ar' ? 'النظم البيئية:' : locale === 'fr' ? 'Écosystèmes :' : 'Ecosystems:';
  const diagTaxaLabel = locale === 'ar' ? 'أنواع تشخيصية ومؤشرة' : locale === 'fr' ? 'Taxa Diagnostiques & Indicateurs' : 'Diagnostic & Indicator Taxa';

  // Atlas methodology section
  const atlasEyebrow = locale === 'ar'
    ? 'منهجية الأطلس ومعايير الدقة'
    : locale === 'fr'
    ? 'Méthodologie de l\'Atlas & Standards de Précision'
    : 'Atlas Methodology & Precision Standards';
  const atlasTitle = locale === 'ar'
    ? 'معايير تسجيل مربعات أطلس زواحف المغرب'
    : locale === 'fr'
    ? 'Standards d\'Enregistrement par Quadrats — HerpAtlas Maroc'
    : 'HerpAtlas Morocco Quadrate Recording Standards';
  const atlasBody = locale === 'ar'
    ? 'تُوحَّد سجلات التوزيع التي يجمعها مبادرة علم الزواحف في المغرب وفق مربعات UTM بأبعاد 10×10 كيلومتر. يتم التحقق من كل سجل بالأدلة الفوتوغرافية أو عينات المتاحف قبل إدراجه في خرائط النطاق الوطنية الرسمية.'
    : locale === 'fr'
    ? "Les données de répartition collectées via l'initiative Morocco Herpetology sont standardisées sur des quadrats UTM de 10×10 km. Chaque enregistrement est vérifié par des preuves photographiques ou un spécimen de voucher muséal avant intégration dans les cartes d'aires officielles."
    : 'Distribution records gathered through the Morocco Herpetology initiative are standardized to 10×10 km UTM quadrates. Each record is verified by photographic evidence or museum voucher specimen before inclusion in official national range maps.';

  const tier1Label = locale === 'ar' ? 'طبقة التحقق 1' : locale === 'fr' ? 'Niveau de Validation 1' : 'Validation Tier 1';
  const tier1Body = locale === 'ar'
    ? 'التحقق من الشخصيات التشخيصية المورفولوجية من الصور التوثيقية عالية الدقة.'
    : locale === 'fr'
    ? 'Vérification experte des caractères morphologiques diagnostiques à partir d\'imagerie de voucher haute résolution.'
    : 'Expert verification of morphological diagnostic characters from high-resolution voucher imagery.';

  const obfLabel = locale === 'ar' ? 'الإخفاء المكاني' : locale === 'fr' ? 'Occultation Spatiale' : 'Spatial Obfuscation';
  const obfBody = locale === 'ar'
    ? 'يتم تمويه الأنواع الحساسة (الأفاعي، الحرباء، السلاحف) إلى شبكة 10 كم لمنع الجمع التجاري.'
    : locale === 'fr'
    ? 'Les taxons sensibles (vipères, caméléons, tortues) sont masqués à la grille de 10 km pour prévenir la collecte commerciale.'
    : 'Sensitive taxa (vipers, chameleons, tortoises) are buffered to 10km grid to stop commercial collection.';

  const interopLabel = locale === 'ar' ? 'إمكانية التشغيل البيني الأكاديمي' : locale === 'fr' ? 'Interopérabilité Académique' : 'Academic Interoperability';
  const interopBody = locale === 'ar'
    ? 'بيانات وصفية متوافقة مع Darwin Core يتم تصديرها إلى GBIF وإدارة المناطق المحمية الوطنية (ANEF).'
    : locale === 'fr'
    ? 'Métadonnées conformes Darwin Core exportées vers GBIF et la gestion nationale des aires protégées (ANEF).'
    : 'Darwin Core compliant metadata exported to GBIF and national protected areas management (ANEF).';

  const ctaFieldOccurrence = locale === 'ar' ? 'المساهمة بسجل ميداني' : locale === 'fr' ? 'Soumettre une Occurrence de Terrain' : 'Contribute a Field Occurrence';
  const ctaChecklist = locale === 'ar' ? 'استكشاف القائمة الشاملة' : locale === 'fr' ? 'Explorer la Checklist Complète' : 'Explore Complete Checklist';

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={distEyebrow}
        title={distTitle}
        description={<>{distDesc}</>}
        stats={[
          { value: locale === 'ar' ? '5 مناطق' : locale === 'fr' ? '5 Domaines' : '5 Domains', label: stat1Label },
          { value: '10×10 km', label: stat2Label },
          { value: 'Darwin Core', label: stat3Label },
        ]}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2.5rem clamp(1.25rem, 4vw, 2.5rem) 0' }}>
        {/* Biogeographical Domains */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-meta)',
                fontSize: '0.625rem',
                letterSpacing: locale === 'ar' ? '0' : '0.14em',
                textTransform: 'uppercase',
                color: '#B38228',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              {ecoSynthLabel}
            </span>
            <h2
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: '#1A2B1E',
                fontWeight: 400,
                margin: '0 0 0.5rem',
              }}
            >
              {fiveDomTitle}
            </h2>
            <p
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '0.9375rem',
                color: '#4A5E4E',
                maxWidth: '65ch',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {distBodyText}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {biogeographicZones.map((zone, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    padding: '2rem',
                    background: '#FFFFFF',
                    border: '1px solid rgba(26,43,30,0.1)',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 5fr) minmax(0, 7fr)',
                    gap: '2rem',
                    alignItems: 'center',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  className="biogeo-domain-row"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,43,30,0.22)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(26,43,30,0.06)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,43,30,0.1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          background: '#FEF9E7',
                          color: '#B38228',
                          fontFamily: 'var(--font-meta)',
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          padding: '0.15rem 0.5rem',
                          border: '1px solid rgba(179,130,40,0.3)',
                        }}
                      >
                        {domainLabel} 0{idx + 1}
                      </span>
                      <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.75rem', color: 'rgba(26,43,30,0.45)', letterSpacing: locale === 'ar' ? 'normal' : undefined }}>
                        {locale === 'ar' ? zone.elevationAr : locale === 'fr' ? zone.elevationFr : zone.elevation}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1A2B1E',
                        lineHeight: 1.2,
                        margin: '0 0 0.75rem',
                        letterSpacing: locale === 'ar' ? 'normal' : undefined,
                      }}
                    >
                      {locale === 'ar' ? zone.nameAr : locale === 'fr' ? zone.nameFr : zone.nameEn}
                    </h3>

                    <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.875rem', color: '#4A5E4E', lineHeight: 1.6, margin: '0 0 0.5rem', letterSpacing: locale === 'ar' ? 'normal' : undefined }}>
                      <strong style={{ color: '#1A2B1E' }}>{bioclimLabel}</strong> {locale === 'ar' ? zone.climateAr : locale === 'fr' ? zone.climateFr : zone.climateEn}
                    </p>

                    <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.875rem', color: '#4A5E4E', lineHeight: 1.6, margin: 0, letterSpacing: locale === 'ar' ? 'normal' : undefined }}>
                      <strong style={{ color: '#1A2B1E' }}>{ecosysLabel}</strong> {locale === 'ar' ? zone.habitatsAr : locale === 'fr' ? zone.habitatsFr : zone.habitatsEn}
                    </p>
                  </div>

                  <div
                    style={{
                      background: '#F7F4EE',
                      padding: '1.5rem',
                      border: '1px solid rgba(26,43,30,0.08)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                        fontSize: '0.625rem',
                        letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                        textTransform: locale === 'ar' ? 'none' : 'uppercase',
                        color: '#B38228',
                        display: 'block',
                        marginBottom: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {diagTaxaLabel}
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {(locale === 'ar' ? (zone.keyTaxaAr || zone.keyTaxa) : locale === 'fr' ? (zone.keyTaxaFr || zone.keyTaxa) : zone.keyTaxa).map((tax, i) => (
                        <span
                          key={i}
                          style={{
                            fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                            fontStyle: locale === 'ar' ? 'normal' : 'italic',
                            fontSize: '0.875rem',
                            color: '#1A2B1E',
                            background: '#FFFFFF',
                            border: '1px solid rgba(26,43,30,0.1)',
                            padding: '0.25rem 0.65rem',
                          }}
                        >
                          {tax}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <style>{`
            @media (max-width: 900px) {
              .biogeo-domain-row {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
              }
            }
          `}</style>
        </div>

        {/* Section 2: Atlas Mapping Methodology Card */}
        <div
          style={{
            background: '#1A2B1E',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '4rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-meta)',
              fontSize: '0.625rem',
              letterSpacing: locale === 'ar' ? '0' : '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(247,244,238,0.5)',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            {atlasEyebrow}
          </span>

          <h2
            style={{
              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: '#F7F4EE',
              fontWeight: 400,
              margin: '0 0 1rem',
              lineHeight: 1.15,
              letterSpacing: locale === 'ar' ? 'normal' : undefined,
            }}
          >
            {atlasTitle}
          </h2>

          <p
            style={{
              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(247,244,238,0.7)',
              lineHeight: 1.7,
              maxWidth: '65ch',
              margin: '0 0 2.5rem',
              letterSpacing: locale === 'ar' ? 'normal' : undefined,
            }}
          >
            {atlasBody}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}
          >
            <div
              style={{
                background: 'rgba(247,244,238,0.06)',
                border: '1px solid rgba(247,244,238,0.1)',
                padding: '1.5rem',
              }}
            >
              <span style={{ fontFamily: 'var(--font-meta)', fontSize: '0.75rem', fontWeight: 600, color: '#E8C97A', textTransform: 'uppercase', letterSpacing: locale === 'ar' ? '0' : '0.08em', display: 'block', marginBottom: '0.35rem' }}>
                {tier1Label}
              </span>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(247,244,238,0.7)', lineHeight: 1.6, margin: 0, letterSpacing: locale === 'ar' ? 'normal' : undefined }}>
                {tier1Body}
              </p>
            </div>

            <div
              style={{
                background: 'rgba(247,244,238,0.06)',
                border: '1px solid rgba(247,244,238,0.1)',
                padding: '1.5rem',
              }}
            >
              <span style={{ fontFamily: 'var(--font-meta)', fontSize: '0.75rem', fontWeight: 600, color: '#E8C97A', textTransform: 'uppercase', letterSpacing: locale === 'ar' ? '0' : '0.08em', display: 'block', marginBottom: '0.35rem' }}>
                {obfLabel}
              </span>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(247,244,238,0.7)', lineHeight: 1.6, margin: 0, letterSpacing: locale === 'ar' ? 'normal' : undefined }}>
                {obfBody}
              </p>
            </div>

            <div
              style={{
                background: 'rgba(247,244,238,0.06)',
                border: '1px solid rgba(247,244,238,0.1)',
                padding: '1.5rem',
              }}
            >
              <span style={{ fontFamily: 'var(--font-meta)', fontSize: '0.75rem', fontWeight: 600, color: '#E8C97A', textTransform: 'uppercase', letterSpacing: locale === 'ar' ? '0' : '0.08em', display: 'block', marginBottom: '0.35rem' }}>
                {interopLabel}
              </span>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(247,244,238,0.7)', lineHeight: 1.6, margin: 0, letterSpacing: locale === 'ar' ? 'normal' : undefined }}>
                {interopBody}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/observations/submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#F7F4EE',
                color: '#1A2B1E',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span>{ctaFieldOccurrence}</span>
              <ArrowIcon style={{ width: '14px', height: '14px' }} />
            </Link>
            <Link
              href="/checklist"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                border: '1px solid rgba(247,244,238,0.3)',
                color: '#F7F4EE',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
            >
              {ctaChecklist}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .biogeo-domain-row {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}
