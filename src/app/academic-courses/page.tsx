'use client';

import React from 'react';
import { COURSES_DATA } from '@/data/courses';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CoursesPage() {
  const { locale, t, dir } = useLocale();

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={locale === 'ar' ? 'التدريب الأكاديمي والتعليم الميداني' : locale === 'fr' ? 'Formation Académique & Enseignement de Terrain' : 'Academic Training & Field Education'}
        title={locale === 'ar' ? 'الدورات الأكاديمية والتدريب المتخصص' : locale === 'fr' ? 'Cours Académiques & Formations Spécialisées' : 'Academic Courses & Specialized Training'}
        description={
          locale === 'ar' ? (
            <>
              دورات ميدانية جامعية معتمدة، ووحدات علاج وتدبير لدغات الثعابين ولدغات العقارب السريرية،
              وورش عمل المراقبة الحيوية المنظمة بالشراكة مع جامعة ابن زهر وكليات الطب في المغرب.
            </>
          ) : locale === 'fr' ? (
            <>
              Cours universitaires accrédités, modules cliniques de prise en charge des morsures de serpents et piqûres de scorpions,
              et ateliers professionnels de biosurveillance en partenariat avec l'Université Ibn Zohr (UIZ) et les facultés régionales de médecine.
            </>
          ) : (
            <>
              Accredited university field courses, clinical snakebite and scorpionism management modules,
              and professional biomonitoring workshops organized in partnership with Ibn Zohr University (UIZ)
              and regional medical faculties across Morocco.
            </>
          )
        }
        stats={[
          { value: `${COURSES_DATA.length}`, label: locale === 'ar' ? 'مناهج معتمدة' : locale === 'fr' ? 'Programmes accrédités' : 'Accredited Curricula' },
          { value: 'UIZ / FPT', label: locale === 'ar' ? 'الاعتماد الأكاديمي' : locale === 'fr' ? 'Accréditation académique' : 'Academic Accreditation' },
          { value: locale === 'ar' ? 'سريري وميداني' : locale === 'fr' ? 'Clinique & Terrain' : 'Clinical & Field', label: locale === 'ar' ? 'محاور التكوين' : locale === 'fr' ? 'Axes de formation' : 'Training Axes' },
        ]}
      />

      <div className="container-site" style={{ paddingTop: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {COURSES_DATA.map(course => {
            const title = locale === 'fr' ? course.titleFr : locale === 'ar' ? course.titleAr : course.title;
            const summary = locale === 'fr' ? course.summaryFr : locale === 'ar' ? course.summaryAr : course.summary;
            const institution = locale === 'fr' ? course.institutionFr : locale === 'ar' ? course.institutionAr : course.institution;
            const level = locale === 'fr' ? course.levelFr : locale === 'ar' ? course.levelAr : course.level;
            const duration = locale === 'fr' ? course.durationFr : locale === 'ar' ? course.durationAr : course.duration;
            const prerequisites = locale === 'fr' ? course.prerequisitesFr : locale === 'ar' ? course.prerequisitesAr : course.prerequisites;
            const instructors = locale === 'ar' && course.instructorsAr ? course.instructorsAr : locale === 'fr' && course.instructorsFr ? course.instructorsFr : course.instructors;

            return (
              <article
                key={course.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '4px',
                  border: '1px solid rgba(26, 43, 30, 0.1)',
                  padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem',
                  boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
                }}
              >
                {/* Course Header */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(26, 43, 30, 0.08)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.2rem 0.65rem',
                          borderRadius: '2px',
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                          fontSize: '0.6875rem',
                          textTransform: locale === 'ar' ? 'none' : 'uppercase',
                          letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                          fontWeight: 600,
                          background: '#FEF9E7',
                          color: '#8A5D00',
                          border: '1px solid rgba(179, 130, 40, 0.25)',
                        }}
                      >
                        {level}
                      </span>
                      <span style={{ color: 'rgba(26, 43, 30, 0.2)' }}>·</span>
                      <span
                        style={{
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                          fontSize: '0.75rem',
                          color: '#8A5D00',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <Clock style={{ width: '13px', height: '13px' }} />
                        {duration}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'Cormorant Garamond, serif',
                        fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                        fontWeight: 600,
                        color: '#1A2B1E',
                        lineHeight: 1.15,
                        marginBottom: '0.4rem',
                      }}
                    >
                      {title}
                    </h2>

                    <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace', fontSize: '0.75rem', color: '#4A5E4E' }}>
                      {institution}
                    </p>
                  </div>

                  <div>
                    <a
                      href={`mailto:info@moroccoherpetology.com?subject=Inquiry regarding course: ${encodeURIComponent(title)}`}
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
                        {locale === 'ar' ? 'طلب التسجيل في الدورة' : locale === 'fr' ? "Demande d'inscription" : 'Enrollment Request'}
                      </span>
                      <ArrowRight style={{ width: '13px', height: '13px' }} className={dir === 'rtl' ? 'rtl-flip' : ''} />
                    </a>
                  </div>
                </div>

                {/* Synopsis */}
                <div>
                  <span
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                      fontSize: '0.6875rem',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.1em',
                      textTransform: locale === 'ar' ? 'none' : 'uppercase',
                      color: '#8A5D00',
                      fontWeight: 600,
                    }}
                  >
                    {locale === 'ar' ? 'ملخص الدورة' : locale === 'fr' ? 'Synopsis du cours' : 'Course Synopsis'}
                  </span>
                  <p
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: '#4A5E4E',
                      lineHeight: 1.7,
                      maxWidth: '75ch',
                    }}
                  >
                    {summary}
                  </p>
                </div>

                {/* Modules */}
                <div>
                  <span
                    style={{
                      display: 'block',
                      marginBottom: '0.85rem',
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                      fontSize: '0.6875rem',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.1em',
                      textTransform: locale === 'ar' ? 'none' : 'uppercase',
                      color: '#8A5D00',
                      fontWeight: 600,
                    }}
                  >
                    {locale === 'ar' ? 'الوحدات والمحاور الدراسية' : locale === 'fr' ? 'Modules du programme' : 'Curriculum Modules'}
                  </span>
                  <div
                    className="course-syllabus-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                      gap: '1rem',
                    }}
                  >
                    {course.syllabus.map((mod, idx) => {
                      const modTitle = locale === 'fr' ? mod.titleFr : locale === 'ar' ? mod.titleAr : mod.title;
                      const modDesc = locale === 'fr' ? mod.descriptionFr : locale === 'ar' ? mod.descriptionAr : mod.description;

                      return (
                        <div
                          key={idx}
                          style={{
                            background: '#F7F4EE',
                            border: '1px solid rgba(26, 43, 30, 0.08)',
                            borderRadius: '3px',
                            padding: '1.25rem',
                          }}
                        >
                          <div
                            style={{
                              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                              fontWeight: 600,
                              fontSize: '0.875rem',
                              color: '#1A2B1E',
                              display: 'flex',
                              alignItems: 'baseline',
                              gap: '0.5rem',
                              marginBottom: '0.4rem',
                            }}
                          >
                            <CheckCircle2 style={{ width: '14px', height: '14px', color: '#8A5D00', flexShrink: 0 }} />
                            <span>{modTitle}</span>
                          </div>
                          <p
                            style={{
                              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                              fontSize: '0.8125rem',
                              color: '#4A5E4E',
                              lineHeight: 1.5,
                              paddingInlineStart: '1.4rem',
                            }}
                          >
                            {modDesc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Instructors & Prerequisites */}
                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(26, 43, 30, 0.08)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.75rem',
                    color: '#4A5E4E',
                  }}
                >
                  <div>
                    <strong style={{ color: '#1A2B1E' }}>
                      {locale === 'ar' ? 'الأساتذة والمؤطرون:' : locale === 'fr' ? 'Formateurs principaux :' : 'Lead Instructors:'}
                    </strong>{' '}
                    <span>{instructors.join(', ')}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#1A2B1E' }}>
                      {locale === 'ar' ? 'المتطلبات الأساسية:' : locale === 'fr' ? 'Prérequis :' : 'Prerequisites:'}
                    </strong>{' '}
                    <span>{prerequisites}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
