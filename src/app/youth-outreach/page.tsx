'use client';

import React from 'react';
import { OUTREACH_PROGRAMS } from '@/data/outreach';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function YouthOutreachPage() {
  const { locale, t, dir } = useLocale();

  const programs = OUTREACH_PROGRAMS.filter(p => p.category === 'youth' || p.category === 'community');

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={locale === 'ar' ? 'العلوم المجتمعية والتربية البيئية' : locale === 'fr' ? 'Science Communautaire & Éducation Environnementale' : 'Community Science & Public Environmental Education'}
        title={locale === 'ar' ? 'التوعية المدرسية والتعليم البيئي للشباب' : locale === 'fr' ? 'Sensibilisation des Jeunes & Éducation Communautaire' : 'Youth Outreach & Community Education'}
        description={
          locale === 'ar' ? (
            <>
              تحويل المخاوف الموروثة إلى احترام بيئي واعٍ من خلال زيارات مدرسية تفاعلية،
              وورش عمل مع التعاونيات الفلاحية، ومواد تعليمية بالدارجة المغربية والعربية الفصحى.
            </>
          ) : locale === 'fr' ? (
            <>
              Transformer les appréhensions traditionnelles en respect écologique éclairé via des visites scolaires interactives,
              des ateliers pour coopératives agricoles et des supports bilingues en darija marocaine et arabe standard.
            </>
          ) : (
            <>
              Transforming traditional fears into informed conservation respect through interactive school visits,
              agricultural cooperative workshops, and bilingual educational materials in Moroccan Darija and Standard Arabic.
            </>
          )
        }
        stats={[
          { value: '130+', label: locale === 'ar' ? 'ورشة عمل مدرسية' : locale === 'fr' ? 'Ateliers scolaires' : 'Classroom Workshops' },
          { value: '4,200+', label: locale === 'ar' ? 'تلميذ ومستفيد سنوياً' : locale === 'fr' ? 'Élèves sensibilisés par an' : 'Students Reached Annually' },
          { value: locale === 'ar' ? 'دارجة وعربية' : 'Darija & Arabe', label: locale === 'ar' ? 'مواد تعليمية مزدوجة' : locale === 'fr' ? 'Supports bilingues' : 'Bilingual Materials' },
        ]}
      />

      <div className="container-site" style={{ paddingTop: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {programs.map(program => {
            const title = locale === 'fr' ? program.titleFr : locale === 'ar' ? program.titleAr : program.title;
            const desc = locale === 'fr' ? program.descriptionFr : locale === 'ar' ? program.descriptionAr : program.description;
            const audience = locale === 'fr' ? program.audienceFr : locale === 'ar' ? program.audienceAr : program.audience;
            const highlights = locale === 'fr' ? program.highlightsFr : locale === 'ar' ? program.highlightsAr : program.highlights;

            return (
              <article
                key={program.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '4px',
                  border: '1px solid rgba(26, 43, 30, 0.1)',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 4.5fr) minmax(0, 7.5fr)',
                  boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: 'relative',
                    minHeight: '280px',
                    backgroundColor: '#EFECE6',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={program.image}
                    alt={title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#FEF9E7',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '2px',
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: '#8A5D00',
                      border: '1px solid rgba(179, 130, 40, 0.25)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                      textTransform: locale === 'ar' ? 'none' : 'uppercase',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.05em',
                    }}
                  >
                    {program.category === 'youth'
                      ? (locale === 'ar' ? 'المدارس والفصول' : locale === 'fr' ? 'Écoles & Classes' : 'Schools & Classrooms')
                      : (locale === 'ar' ? 'المجتمعات الريفية' : locale === 'fr' ? 'Communautés rurales' : 'Rural Communities')}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                        fontSize: '0.75rem',
                        color: '#8A5D00',
                        textTransform: locale === 'ar' ? 'none' : 'uppercase',
                        letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                        marginBottom: '0.6rem',
                        fontWeight: 600,
                      }}
                    >
                      <Users style={{ width: '13px', height: '13px' }} />
                      <span>
                        {locale === 'ar' ? `الجمهور: ${audience}` : locale === 'fr' ? `Public: ${audience}` : `Audience: ${audience}`}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 2.2vw, 1.875rem)',
                        fontWeight: 600,
                        color: '#1A2B1E',
                        lineHeight: 1.2,
                        marginBottom: '0.85rem',
                      }}
                    >
                      {title}
                    </h2>

                    <p
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                        fontSize: '0.9375rem',
                        color: '#4A5E4E',
                        lineHeight: 1.7,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {desc}
                    </p>

                    {/* Highlights */}
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(26, 43, 30, 0.08)' }}>
                      <span
                        style={{
                          display: 'block',
                          marginBottom: '0.75rem',
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                          fontSize: '0.6875rem',
                          letterSpacing: locale === 'ar' ? 'normal' : '0.1em',
                          textTransform: locale === 'ar' ? 'none' : 'uppercase',
                          color: '#8A5D00',
                          fontWeight: 600,
                        }}
                      >
                        {locale === 'ar' ? 'ركائز البرنامج' : locale === 'fr' ? 'Piliers du programme' : 'Program Pillars'}
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {highlights.map((h, i) => (
                          <li
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'baseline',
                              gap: '0.6rem',
                              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                              fontSize: '0.875rem',
                              color: '#1A2B1E',
                            }}
                          >
                            <CheckCircle2 style={{ width: '14px', height: '14px', color: '#8A5D00', flexShrink: 0 }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid rgba(26, 43, 30, 0.08)' }}>
                    <a
                      href={`mailto:info@moroccoherpetology.com?subject=School Workshop Inquiry: ${encodeURIComponent(title)}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.25rem',
                        background: '#1A2B1E',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: locale === 'ar' ? 'none' : 'uppercase',
                        letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                        borderRadius: '2px',
                      }}
                    >
                      <span>
                        {locale === 'ar'
                          ? 'طلب ورشة عمل لمدرستك أو جمعيتك'
                          : locale === 'fr'
                          ? 'Demander un atelier pour votre école ou communauté'
                          : 'Request a Workshop for Your School or Community'}
                      </span>
                      <ArrowRight style={{ width: '13px', height: '13px' }} className={dir === 'rtl' ? 'rtl-flip' : ''} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .container-site > div > article {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
