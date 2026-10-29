'use client';

import React from 'react';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function MediaPage() {
  const { locale, t, dir } = useLocale();

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const mediaItems = [
    {
      id: 'media-snrt-report',
      titleEn: 'SNRT Al Oula Feature: Preserving Morocco\'s Arid Herpetological Heritage',
      titleFr: 'Reportage SNRT Al Oula : Préserver le patrimoine herpétologique aride du Maroc',
      titleAr: 'تغطية القناة الأولى المغربية: صون التراث الزاحفي في المناطق الجافة بالمغرب',
      date: '2025-06-14',
      mediaOutlet: 'SNRT Al Oula (Société Nationale de Radiodiffusion et de Télévision)',
      descEn: 'Prime-time television documentary following our researchers during spring nocturnal surveys in the Anti-Atlas, explaining the role of scorpions in medical venom research and biodiversity monitoring.',
      descFr: 'Documentaire télévisé aux heures de grande écoute suivant nos chercheurs lors de prospections nocturnes printanières dans l\'Anti-Atlas, mettant en lumière le rôle des scorpions dans la recherche venimologique et le suivi écologique.',
      descAr: 'وثائقي تلفزيوني يرافق باحثينا في خرجات استكشافية ليلية في الأطلس الصغير، مسلطاً الضوء على دراسة العقارب ودور السموم في الأبحاث الصيدلانية ومراقبة التنوع البيولوجي.',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Pelobates-varaldii.jpg',
      badgeEn: 'National TV Broadcast',
      badgeFr: 'Diffusion Télévisuelle Nationale',
      badgeAr: 'بث تلفزيوني وطني',
    },
    {
      id: 'media-le-matin-interview',
      titleEn: 'Le Matin Daily: "Why Morocco\'s Endemic Reptiles Need Urgent Refuge Protection"',
      titleFr: 'Journal Le Matin : « Pourquoi les reptiles endémiques du Maroc requièrent une protection urgente »',
      titleAr: 'جريدة لوماتان: "لماذا تحتاج الزواحف المتوطنة بالمغرب إلى حماية عاجلة ضد المصائد العشوائية"',
      date: '2025-09-02',
      mediaOutlet: 'Le Matin du Sahara et du Maghreb',
      descEn: 'Extensive interview with Dr. Abdellah Bouazza on how unsealed water cisterns (matfiyas) trap thousands of amphibians and tortoises every year, and the engineering rollout of rescue escape ladders.',
      descFr: 'Entretien approfondi avec le Pr. Abdellah Bouazza sur le piégeage involontaire d\'amphibiens et de tortues dans les citernes d\'eau (matfiyas) et le déploiement de rampes de sauvetage écologiques.',
      descAr: 'حوار مفصل مع الأستاذ عبد الله بوعزة حول نفوق آلاف البرمائيات والسلاحف في مطفيات المياه التقليدية غير المحمية، وبرنامج تثبيت سلالم الإنقاذ الميدانية.',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Quedenfeldtia-moerens.jpg',
      badgeEn: 'National Press',
      badgeFr: 'Presse Écrite Nationale',
      badgeAr: 'صحافة وطنية مكتوبة',
    },
    {
      id: 'media-radio-atlantic',
      titleEn: 'Atlantic Radio Science Hour: Dispelling Myths on Moroccan Snakes & Snakebite Emergency Care',
      titleFr: 'Atlantic Radio - L\'Heure des Sciences : Démystifier les serpents du Maroc et prise en charge des morsures',
      titleAr: 'أطلنتيك راديو: تصحيح الخرافات الشائعة حول الثعابين المغربية والإسعافات الأولية للدغات',
      date: '2026-02-18',
      mediaOutlet: 'Atlantic Radio Morocco',
      descEn: 'Live broadcast addressing popular folk myths about snakes, educating rural populations on what to do in case of a viper bite, and promoting our hospital clinical training modules.',
      descFr: 'Émission en direct abordant les croyances populaires erronées sur les serpents, sensibilisant les populations rurales aux gestes d\'urgence face aux morsures de vipères et présentant nos formations hospitalières.',
      descAr: 'حلقة إذاعية مباشرة لتفكيك المعتقدات الخاطئة حول الأفاعي، وتوجيه ساكنة المناطق القروية حول التعامل الطبي الصحيح مع لدغات الأفاعي، وعرض جهودنا التدريبية للأطقم الطبية.',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Cerastes-cerastes-3-29.jpg',
      badgeEn: 'Radio Broadcast',
      badgeFr: 'Émission Radio',
      badgeAr: 'بث إذاعي مباشر',
    },
  ];

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={locale === 'ar' ? 'التغطية الصحفية والإعلامية الوطنية' : locale === 'fr' ? 'Couverture Médiatique & Presse Nationale' : 'Broadcasts & National Press Coverage'}
        title={locale === 'ar' ? 'الإعلام والتواصل العمومي' : locale === 'fr' ? 'Médias & Diffusions Publiques' : 'Media & Public Broadcasts'}
        description={
          locale === 'ar' ? (
            <>
              حوارات، وأفلام وثائقية متلفزة، وتغطيات في الصحف الوطنية تسلط الضوء على بعثاتنا الميدانية،
              وإنجازات الأطلس الرقمي التشاركي، وسياسات حماية الحياة البرية في المغرب.
            </>
          ) : locale === 'fr' ? (
            <>
              Entretiens, documentaires télévisés et articles de presse nationale mettant en lumière nos expéditions scientifiques,
              les avancées de l'atlas participatif et les actions de préservation de la faune marocaine.
            </>
          ) : (
            <>
              Interviews, television documentaries, and national newspaper features highlighting our research expeditions,
              citizen-science atlas milestones, and wildlife conservation policies in Morocco.
            </>
          )
        }
        stats={[
          { value: 'SNRT & 2M', label: locale === 'ar' ? 'القنوات الوطنية' : locale === 'fr' ? 'Chaînes TV' : 'Broadcast Networks' },
          { value: locale === 'ar' ? 'الصحافة الوطنية' : locale === 'fr' ? 'Presse Nationale' : 'National Press', label: locale === 'ar' ? 'تغطيات مميزة' : locale === 'fr' ? 'Couverture éditoriale' : 'Featured Coverage' },
          { value: locale === 'ar' ? 'توعية مجتمعية' : locale === 'fr' ? 'Médiation' : 'Public Science', label: locale === 'ar' ? 'التحسيس البيئي' : locale === 'fr' ? 'Sensibilisation' : 'Awareness Outreach' },
        ]}
      />

      <div className="container-site" style={{ paddingTop: '2.5rem' }}>
        <div
          className="media-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {mediaItems.map((item) => {
            const title = locale === 'ar' ? item.titleAr : locale === 'fr' ? item.titleFr : item.titleEn;
            const desc = locale === 'ar' ? item.descAr : locale === 'fr' ? item.descFr : item.descEn;
            const badge = locale === 'ar' ? item.badgeAr : locale === 'fr' ? item.badgeFr : item.badgeEn;

            return (
              <article
                key={item.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '4px',
                  border: '1px solid rgba(26, 43, 30, 0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
                }}
              >
                <div>
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      width: '100%',
                      backgroundColor: '#EFECE6',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        ...(dir === 'rtl' ? { right: '0.75rem' } : { left: '0.75rem' }),
                        background: '#FEF9E7',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '2px',
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: '#8A5D00',
                        border: '1px solid rgba(179, 130, 40, 0.25)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                      }}
                    >
                      {badge}
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.6875rem',
                        color: 'rgba(26, 43, 30, 0.5)',
                        marginBottom: '0.5rem',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: '#8A5D00', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                        {item.mediaOutlet}
                      </span>
                      <span>{item.date}</span>
                    </div>

                    <h2
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'Cormorant Garamond, serif',
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: '#1A2B1E',
                        lineHeight: 1.25,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {title}
                    </h2>

                    <p
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif',
                        fontSize: '0.875rem',
                        color: '#4A5E4E',
                        lineHeight: 1.6,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    padding: '0.875rem 1.5rem',
                    background: '#F7F4EE',
                    borderTop: '1px solid rgba(26, 43, 30, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace', fontSize: '0.6875rem', color: 'rgba(26, 43, 30, 0.5)', textTransform: locale === 'ar' ? 'none' : 'uppercase' }}>
                    {locale === 'ar' ? 'أرشيف التغطيات الميدانية' : locale === 'fr' ? 'Archive Médiatique Officielle' : 'Archived Broadcast Record'}
                  </span>

                  <a
                    href={`mailto:info@moroccoherpetology.com?subject=Press Inquiry: ${encodeURIComponent(title)}`}
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                      fontSize: '0.6875rem',
                      color: '#8A5D00',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                      textTransform: locale === 'ar' ? 'none' : 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    <span>{locale === 'ar' ? 'طلب استفسار صحفي' : locale === 'fr' ? 'Contact Presse' : 'Press Inquiry'}</span>
                    <ArrowIcon style={{ width: '11px', height: '11px' }} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
