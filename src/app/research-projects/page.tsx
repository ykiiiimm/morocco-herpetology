'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { Compass, Microscope, Leaf, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';

export default function ResearchAxesPage() {
  const { locale, dir } = useLocale();

  const axes = [
    {
      num: '01',
      category: locale === 'ar' ? 'المعرفة والتصنيف' : locale === 'fr' ? 'Connaissance' : 'Knowledge',
      title: locale === 'ar' ? 'التنوع البيولوجي، التصنيف والجغرافيا الحيوية' : locale === 'fr' ? 'Biodiversité, Systématique & Biogéographie' : 'Biodiversity, Systematics & Biogeography',
      desc: locale === 'ar'
        ? 'جرد الأنواع، التصنيف التكاملي، دراسة المورفولوجيا، تدقيق الأدبيات التاريخية، أنماط التوطن المغربي، ونمذجة التوزيع البيئي عبر الأطلس والصحراء.'
        : locale === 'fr'
        ? 'Inventaires des espèces, taxonomie intégrative, morphologie, audit de la littérature historique, patrons d\'endémisme marocain et modélisation des niches écologiques (MaxEnt).'
        : 'Species inventories, integrative taxonomy, morphology, historical literature auditing, Moroccan endemism patterns, species distribution modelling (MaxEnt), and addressing spatial sampling gaps across the Atlas and Saharan domains.',
      icon: Compass,
      tags: locale === 'ar'
        ? ['التصنيف والتسمية', 'الجغرافيا الحيوية', 'جرد وتوثيق الأنواع']
        : locale === 'fr'
        ? ['Taxonomie', 'Biogéographie', 'Inventaires des espèces']
        : ['Taxonomy', 'Biogeography', 'Species Inventories'],
    },
    {
      num: '02',
      category: locale === 'ar' ? 'علم البيئة الفيزيولوجي' : locale === 'fr' ? 'Écologie' : 'Ecology',
      title: locale === 'ar' ? 'الفيزيولوجيا البيئية وسلوك الكائنات' : locale === 'fr' ? 'Écophysiologie & Écologie Comportementale' : 'Ecophysiology & Behavioural Ecology',
      desc: locale === 'ar'
        ? 'التنظيم الحراري والمائي في النظم البيئية القاحلة، اختيار الموائل الدقيقة، منحنيات الأداء الحراري، والتكيف مع الإجهادات المناخية في الأطلس والصحراء.'
        : locale === 'fr'
        ? 'Thermorégulation, régulation hydrique en milieu aride, sélection des microhabitats, courbes de performance thermique et réponses adaptatives au climat de l\'Atlas et du Sahara.'
        : 'Thermoregulation, hydroregulation in arid ecosystems, microhabitat selection, thermal performance curves, reproductive phenology, and adaptive responses to extreme climate constraints in the High Atlas and Sahara.',
      icon: Microscope,
      tags: locale === 'ar'
        ? ['البيولوجيا الحرارية', 'وزغ الأعالي الصخرية', 'التوازن المائي الجاف']
        : locale === 'fr'
        ? ['Biologie thermique', 'Geckos d\'altitude', 'Bilan hydrique']
        : ['Thermal Biology', 'High-Altitude Geckos', 'Water Balance'],
    },
    {
      num: '03',
      category: locale === 'ar' ? 'حماية وتأهيل' : locale === 'fr' ? 'Conservation' : 'Conservation',
      title: locale === 'ar' ? 'الحد من التهديدات وإعادة تأهيل الموائل' : locale === 'fr' ? 'Atténuation des Menaces & Restauration d\'Habitats' : 'Threat Mitigation & Habitat Restoration',
      desc: locale === 'ar'
        ? 'حلول هندسية تطبيقية للحد من المصائد القاتلة للحياة البرية (المطفيات المكشوفة والصهاريج)، واستعادة الموائل في المقالع النشطة وديناميكية الجماعات السكانية.'
        : locale === 'fr'
        ? 'Ingénierie écologique appliquée pour sécuriser les réservoirs agricoles (matfiyas), restauration écologique de carrières et suivi démographique des populations.'
        : 'Applied engineering solutions to mitigate anthropogenic death traps (e.g. unsealed agricultural matfiyas and concrete reservoirs), habitat restoration in active quarries (Aït Baha), and long-term population demography.',
      icon: Leaf,
      tags: locale === 'ar'
        ? ['فخاخ المطفيات المائية', 'تأهيل المقالع الصناعية', 'علم ديناميكية الجماعات']
        : locale === 'fr'
        ? ['Pièges des matfiyas', 'Restauration de carrières', 'Démographie']
        : ['Matfiya Wildlife Traps', 'Quarry Restoration', 'Demography'],
    },
    {
      num: '04',
      category: locale === 'ar' ? 'التعايش الإنساني-البيئي' : locale === 'fr' ? 'Coexistence' : 'Coexistence',
      title: locale === 'ar' ? 'التفاعل بين الإنسان والحياة البرية ولدغات الثعابين' : locale === 'fr' ? 'Interactions Homme-Faune & Morsures de Serpents' : 'Human–Wildlife Interactions & Snakebite',
      desc: locale === 'ar'
        ? 'بحوث متعددة التخصصات تجمع علم البيئة وعلم السموم السريري وعلم الاجتماع لتوثيق حوادث اللدغات، وبروتوكولات الإنقاذ وتوفر مضادات السموم في المناطق القروية.'
        : locale === 'fr'
        ? 'Recherche multidisciplinaire reliant écologie, toxinologie clinique et sociologie pour documenter les morsures de serpents, perceptions du risque et accès aux antivenins en milieu rural.'
        : 'Multidisciplinary research bridging ecology, clinical toxinology, and sociology to document human-snake encounters, local risk perceptions, rescue protocols, and anti-venom accessibility in high-incidence rural provinces.',
      icon: ShieldAlert,
      tags: locale === 'ar'
        ? ['الوقاية من اللدغات', 'علم السموم السريري', 'بروتوكولات الإنقاذ']
        : locale === 'fr'
        ? ['Prévention des morsures', 'Toxinologie clinique', 'Protocoles de secours']
        : ['Snakebite Prevention', 'Clinical Toxinology', 'Rescue Protocols'],
    },
    {
      num: '05',
      category: locale === 'ar' ? 'الابتكار الرقمي' : locale === 'fr' ? 'Innovation' : 'Innovation',
      title: locale === 'ar' ? 'علم البيئة الرقمي، الذكاء الاصطناعي والمجموعات المتحفية' : locale === 'fr' ? 'Écologie Numérique, IA & Collections Scientifiques' : 'Digital Ecology, AI & Scientific Collections',
      desc: locale === 'ar'
        ? 'منصات العلوم التشاركية (أطلس الزواحف)، تعتيم إحداثيات الأنواع المهددة، نماذج الذكاء الاصطناعي للتعرف الآلي على الزواحف، وإدارة مجموعة العينات المحفوظة UIZ-HC.'
        : locale === 'fr'
        ? 'Plateformes de sciences participatives (HerpAtlas), floutage automatique des données sensibles, modèles d\'intelligence artificielle pour l\'identification et gestion de la collection UIZ-HC.'
        : 'Citizen science platforms (HerpAtlas), automated spatial obfuscation for sensitive species, deep-learning models for automated reptile identification, and curator oversight of the UIZ-HC Herpetological Specimen & Tissue Collection.',
      icon: Cpu,
      tags: locale === 'ar'
        ? ['الرؤية الحاسوبية والذكاء الاصطناعي', 'أطلس الزواحف المغربي', 'أرشيف العينات UIZ-HC']
        : locale === 'fr'
        ? ['Vision par ordinateur', 'HerpAtlas Maroc', 'Collection UIZ-HC']
        : ['Computer Vision', 'HerpAtlas Morocco', 'UIZ-HC Specimen Archive'],
    },
  ];

  const studyProgrammes = [
    {
      category: locale === 'ar' ? 'إنعاش الأنواع' : locale === 'fr' ? 'Restauration d\'Espèce' : 'Species Recovery',
      title: locale === 'ar' ? 'تمساح غرب أفريقيا الصحراوي (Crocodylus suchus)' : locale === 'fr' ? 'Crocodile d\'Afrique de l\'Ouest (Crocodylus suchus)' : 'West African Crocodile (Crocodylus suchus)',
      desc: locale === 'ar'
        ? 'متابعة سلوكية، والتحقق من التواجد التاريخي في القلتات المائية الجنوبية، ودراسات الجدوى البيئية لإمكانية إعادة تأهيله في الجنوب المغربي.'
        : locale === 'fr'
        ? 'Suivi comportemental, vérification des occurrences historiques dans les gueltas sahariennes et études de faisabilité écologique pour la conservation et réintroduction potentielle au Maroc.'
        : 'Behavioural monitoring, historical occurrence verification in Moroccan gueltas, morphometrics, and ecological feasibility studies for the long-term conservation and potential restoration of Crocodylus suchus in southern Morocco.',
      link: '/projects',
      action: locale === 'ar' ? 'معرفة المزيد' : locale === 'fr' ? 'En savoir plus' : 'Learn More',
    },
    {
      category: locale === 'ar' ? 'فيزيولوجيا البيئة' : locale === 'fr' ? 'Écophysiologie' : 'Ecophysiology',
      title: locale === 'ar' ? 'الضب المغربي أسود البطن (Uromastyx nigriventris)' : locale === 'fr' ? 'Fouette-queue du Maroc (Uromastyx nigriventris)' : 'Moroccan Spiny-Tailed Lizard (Uromastyx nigriventris)',
      desc: locale === 'ar'
        ? 'البيولوجيا الحرارية الميدانية، مناخ الجحور الدقيق، استراتيجيات التغذية والتكيف التكاثري في أحواض سوس ودرعة.'
        : locale === 'fr'
        ? 'Écologie thermique de terrain, microclimats des terriers, stratégies alimentaires et adaptations reproductives dans les bassins du Souss et du Drâa.'
        : 'Field thermal ecology, burrow microclimates, dietary strategies, and reproductive adaptations of Uromastyx nigriventris across the Souss-Massa and Drâa basins.',
      link: '/checklist?q=Uromastyx',
      action: locale === 'ar' ? 'استكشاف بطاقة النوع' : locale === 'fr' ? 'Explorer le taxon' : 'Explore Taxon',
    },
    {
      category: locale === 'ar' ? 'مخططات الحماية' : locale === 'fr' ? 'Planification de la Conservation' : 'Conservation Planning',
      title: locale === 'ar' ? 'البرمائيات المغربية ذات الأولوية' : locale === 'fr' ? 'Amphibiens Prioritaires du Maroc' : 'Priority Moroccan Amphibians',
      desc: locale === 'ar'
        ? 'مراقبة موائل التكاثر الهشة لأنواع مثل ضفدع فارالدي والضفدع المرقط وسط الضغوط الفلاحية ودورات الجفاف.'
        : locale === 'fr'
        ? 'Surveillance des zones humides vulnérables pour Pelobates varaldii, Discoglossus scovazzi et Pleurodeles waltl face aux prélèvements agricoles et sécheresses.'
        : 'Monitoring vulnerable breeding wetlands for Pelobates varaldii, Discoglossus scovazzi, and Pleurodeles waltl amidst agricultural water abstraction and climate drought cycles.',
      link: '/amphibians-of-morocco',
      action: locale === 'ar' ? 'استكشاف البرمائيات' : locale === 'fr' ? 'Explorer les amphibiens' : 'Explore Amphibians',
    },
    {
      category: locale === 'ar' ? 'التعايش الإنساني' : locale === 'fr' ? 'Cohabitation Humaine' : 'Human–Wildlife Conflict',
      title: locale === 'ar' ? 'الأفاعي، الإنسان والتعايش الآمن' : locale === 'fr' ? 'Serpents, Humains & Coexistence Sûre' : 'Snakes, People & Safer Coexistence',
      desc: locale === 'ar'
        ? 'تحليل ديناميات المواجهات في القرى، وتصحيح المعتقدات الخاطئة، وتوفير بطاقات تعريفية للمراكز الصحية وعمال الفلاحة.'
        : locale === 'fr'
        ? 'Dynamique des rencontres en milieu rural, atténuation de la peur et diffusion de fiches d\'identification auprès des ouvriers agricoles et centres de santé.'
        : 'Investigating rural encounter dynamics, traditional beliefs, fear mitigation, and providing educational identification charts to agricultural workers and healthcare centers.',
      link: '/academic-courses',
      action: locale === 'ar' ? 'معاينة البروتوكولات' : locale === 'fr' ? 'Voir les protocoles' : 'View Protocols',
    },
    {
      category: locale === 'ar' ? 'الذكاء الاصطناعي' : locale === 'fr' ? 'Intelligence Artificielle' : 'Artificial Intelligence',
      title: locale === 'ar' ? 'مشروع SERPENTID: التعرف الآلي على الأفاعي' : locale === 'fr' ? 'SERPENTID : Identification des Serpents par IA' : 'SERPENTID: AI Snake Identification',
      desc: locale === 'ar'
        ? 'نموذج رؤية حاسوبية مدرب على آلاف الصور الحقلية الموثقة لمساعدة الأطباء في التشخيص العاجل بالمستشفيات.'
        : locale === 'fr'
        ? 'Classification par vision artificielle entraînée sur des photos certifiées pour assister les médecins urgentistes dans les hôpitaux marocains.'
        : 'Computer-vision classification trained on audited field photographs to provide healthcare workers with rapid identification assistance in Moroccan emergency departments.',
      link: '/list-of-publications',
      action: locale === 'ar' ? 'قراءة المنشورات' : locale === 'fr' ? 'Lire les publications' : 'Read Publications',
    },
    {
      category: locale === 'ar' ? 'الزواحف البحرية' : locale === 'fr' ? 'Herpétologie Marine' : 'Marine Herpetology',
      title: locale === 'ar' ? 'السلاحف البحرية وحالات الجنوح الشاطئي' : locale === 'fr' ? 'Tortues Marines & Échouages Côtiers' : 'Marine Turtles & Coastal Strandings',
      desc: locale === 'ar'
        ? 'تحليل مكاني وزماني لجنوح السلاحف البحرية ضخمة الرأس والجلدية على طول السواحل الأطلسية والمتوسطية للمغرب.'
        : locale === 'fr'
        ? 'Analyse spatiale et temporelle des échouages de Caretta caretta, Chelonia mydas et Dermochelys coriacea le long des côtes marocaines.'
        : 'Spatial and temporal analysis of Caretta caretta, Chelonia mydas, and Dermochelys coriacea strandings along the Atlantic and Mediterranean coastlines of Morocco.',
      link: '/turtles-of-morocco',
      action: locale === 'ar' ? 'استكشاف السلاحف' : locale === 'fr' ? 'Explorer les chéloniens' : 'Explore Chelonians',
    },
  ];

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={locale === 'ar' ? 'الإطار العلمي الأكاديمي · محاور البحث العلمي' : locale === 'fr' ? 'Cadre Scientifique · Axes de Recherche Académique' : 'Scientific Framework · Academic Research Axes'}
        title={locale === 'ar' ? 'محاور البحث والبرامج العلمية' : locale === 'fr' ? 'Axes de Recherche & Programmes d\'Études' : 'Research Axes & Study Programmes'}
        description={
          locale === 'ar' ? (
            <>
              يربط إطارنا البحثي متعدد التخصصات بين حصر التنوع الحيوي، وفيزيولوجيا البيئة، وهندسة الحماية الميدانية،
              وعلم السموم السريري لدعم سياسات بيئية قائمة على الأدلة وحماية الحياة البرية في المغرب.
            </>
          ) : locale === 'fr' ? (
            <>
              Notre cadre de recherche pluridisciplinaire relie l'inventaire de la biodiversité, l'écophysiologie,
              l'ingénierie conservatoire et la toxinologie clinique pour éclairer les politiques de protection faunique au Maroc.
            </>
          ) : (
            <>
              Our multidisciplinary research framework bridges foundational biodiversity inventories,
              organismal ecophysiology, applied conservation engineering, and clinical toxinology to inform
              evidence-based biodiversity policy and wildlife protection across Morocco.
            </>
          )
        }
        stats={[
          { value: '5', label: locale === 'ar' ? 'محاور بحثية متكاملة' : locale === 'fr' ? 'Axes de recherche connectés' : 'Connected Research Axes' },
          { value: 'UIZ / FPT', label: locale === 'ar' ? 'المقر الأكاديمي المؤسساتي' : locale === 'fr' ? 'Base institutionnelle' : 'Institutional Base' },
          { value: '29', label: locale === 'ar' ? 'أبحاث علمية محكّمة' : locale === 'fr' ? 'Publications scientifiques' : 'Peer-Reviewed Outputs' },
        ]}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2.5rem 2.5rem 0' }}>
        {/* Section 1: Five Axes */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.625rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: '#B38228',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              {locale === 'ar' ? 'الهندسة المنهجية' : locale === 'fr' ? 'Architecture méthodologique' : 'Methodological Architecture'}
            </span>
            <h2
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: '#1A2B1E',
                fontWeight: 600,
                margin: '0 0 0.5rem',
              }}
            >
              {locale === 'ar' ? 'خمسة محاور بحثية مترابطة' : locale === 'fr' ? 'Cinq axes de recherche complémentaires' : 'Five Connected Research Axes'}
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
              {locale === 'ar'
                ? 'تضمن هذه المحاور التكاملية أن تغذي المسوحات الميدانية النظرية الأكاديمية والمشاريع الميدانية لحماية الحياة الفطرية.'
                : locale === 'fr'
                ? 'Ces piliers complémentaires garantissent que les prospections de terrain nourrissent directement la recherche fondamentale et les actions de conservation concrètes.'
                : 'These complementary pillars ensure that field surveys directly inform theoretical science and practical conservation action on the ground.'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {axes.map(axis => {
              return (
                <div
                  key={axis.num}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(26,43,30,0.1)',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span
                        style={{
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                          fontSize: '2rem',
                          fontWeight: 600,
                          color: '#1A2B1E',
                        }}
                      >
                        {axis.num}
                      </span>
                      <span
                        style={{
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                          fontSize: '0.625rem',
                          fontWeight: 600,
                          textTransform: locale === 'ar' ? 'none' : 'uppercase',
                          letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                          color: '#B38228',
                          background: '#FEF9E7',
                          padding: '0.2rem 0.6rem',
                          border: '1px solid rgba(179,130,40,0.3)',
                        }}
                      >
                        {axis.category}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                        fontSize: '1.3125rem',
                        fontWeight: 600,
                        color: '#1A2B1E',
                        lineHeight: 1.25,
                        margin: '0 0 0.75rem',
                      }}
                    >
                      {axis.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: '#4A5E4E',
                        lineHeight: 1.6,
                        margin: '0 0 1.25rem',
                      }}
                    >
                      {axis.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(26,43,30,0.08)', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {axis.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                          fontSize: '0.6875rem',
                          color: 'rgba(26,43,30,0.55)',
                          background: '#F7F4EE',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(26,43,30,0.08)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Study Programmes */}
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <span
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.625rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: '#B38228',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              {locale === 'ar' ? 'الدراسات التطبيقية الميدانية' : locale === 'fr' ? 'Recherches appliquées' : 'Applied Investigations'}
            </span>
            <h2
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: '#1A2B1E',
                fontWeight: 600,
                margin: '0 0 0.5rem',
              }}
            >
              {locale === 'ar' ? 'برامج الدراسات والمشاريع النشطة' : locale === 'fr' ? 'Programmes d\'Études en Cours' : 'Current Study Programmes'}
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
              {locale === 'ar'
                ? 'دراسات موجهة تركز على الأنواع ذات الأولوية وتستجيب للتحديات الملحة لخطط الإنعاش وأطروحات البحث العلمي.'
                : locale === 'fr'
                ? 'Recherches ciblées répondant aux défis urgents de gestion, mémoires universitaires et plans de rétablissement des espèces.'
                : 'Targeted species investigations addressing urgent management challenges, graduate dissertations, and recovery plans.'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {studyProgrammes.map((prog, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(26,43,30,0.1)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
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
                  <span
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                      fontSize: '0.6875rem',
                      color: '#B38228',
                      textTransform: locale === 'ar' ? 'none' : 'uppercase',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                      display: 'block',
                      marginBottom: '0.35rem',
                      fontWeight: 600,
                    }}
                  >
                    {prog.category}
                  </span>

                  <h3
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#1A2B1E',
                      lineHeight: 1.25,
                      margin: '0 0 0.5rem',
                    }}
                  >
                    {prog.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: '#4A5E4E',
                      lineHeight: 1.6,
                      margin: '0 0 1.25rem',
                    }}
                  >
                    {prog.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(26,43,30,0.08)' }}>
                  <Link
                    href={prog.link}
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                      fontSize: '0.6875rem',
                      color: '#1A2B1E',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none',
                      textTransform: locale === 'ar' ? 'none' : 'uppercase',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                      fontWeight: 600,
                    }}
                  >
                    <span>{prog.action}</span>
                    <ArrowRight style={{ width: '11px', height: '11px' }} className={dir === 'rtl' ? 'rtl-flip' : ''} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
