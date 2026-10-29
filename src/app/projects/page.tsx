'use client';

import React from 'react';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/data/projects';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { ArrowRight, MapPin } from 'lucide-react';

export default function ProjectsDirectoryPage() {
  const { locale, t, dir } = useLocale();

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={t.pages.projects.eyebrow}
        title={t.pages.projects.title}
        description={t.pages.projects.description}
        stats={[
          { value: `${PROJECTS_DATA.length}`, label: t.pages.projects.stat1 },
          { value: 'ANEF & UIZ', label: t.pages.projects.stat2 },
          { value: locale === 'ar' ? 'متعدد الأقاليم' : locale === 'fr' ? 'Multi-régions' : 'Multi-Region', label: t.pages.projects.stat3 },
        ]}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2.5rem clamp(1.25rem, 4vw, 2.5rem) 0' }}>
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {PROJECTS_DATA.map(project => {
            const title = locale === 'fr' ? project.titleFr : locale === 'ar' ? project.titleAr : project.title;
            const overview = locale === 'fr' ? project.overviewFr : locale === 'ar' ? project.overviewAr : project.overview;
            const category = locale === 'fr' ? project.categoryFr : locale === 'ar' ? project.categoryAr : project.category;
            const scope = locale === 'fr' ? project.geographicScopeFr : locale === 'ar' ? project.geographicScopeAr : project.geographicScope;

            return (
              <article
                key={project.slug}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(26,43,30,0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                className="group"
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
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '16/10',
                      width: '100%',
                      backgroundColor: '#EFECE6',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                      className="group-hover:scale-[1.03]"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        ...(dir === 'rtl' ? { right: '0.75rem' } : { left: '0.75rem' }),
                        background: 'rgba(26, 43, 30, 0.85)',
                        backdropFilter: 'blur(4px)',
                        padding: '0.2rem 0.55rem',
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {locale === 'ar' ? (project.status === 'Active' ? 'نشط ميدانياً' : 'مكتمل') : locale === 'fr' ? (project.status === 'Active' ? 'Actif sur le terrain' : 'Complété') : project.status}
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.625rem',
                        color: '#B38228',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        display: 'block',
                        marginBottom: '0.35rem',
                        fontWeight: 600,
                      }}
                    >
                      {category}
                    </span>

                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.375rem',
                        fontWeight: 600,
                        color: '#1A2B1E',
                        lineHeight: 1.25,
                        margin: '0 0 0.5rem',
                      }}
                    >
                      {title}
                    </h2>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: '#4A5E4E',
                        lineHeight: 1.6,
                        margin: '0 0 1rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {overview}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.75rem',
                        color: 'rgba(26,43,30,0.5)',
                      }}
                    >
                      <MapPin style={{ width: '12px', height: '12px', color: '#B38228', flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{scope}</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '1rem 1.5rem',
                    background: '#F7F4EE',
                    borderTop: '1px solid rgba(26,43,30,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {project.tags.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.625rem',
                          fontFamily: 'var(--font-meta)',
                          color: '#4A5E4E',
                          background: '#FFFFFF',
                          padding: '0.15rem 0.5rem',
                          border: '1px solid rgba(26,43,30,0.1)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    style={{
                      fontFamily: 'var(--font-meta)',
                      fontSize: '0.6875rem',
                      color: '#1A2B1E',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none',
                      letterSpacing: dir === 'rtl' ? '0' : '0.08em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    <span>{locale === 'ar' ? 'دراسة حالة' : locale === 'fr' ? 'Étude de cas' : 'Case Study'}</span>
                    <ArrowRight className="rtl-flip" style={{ width: '11px', height: '11px' }} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
