'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXPEDITIONS_DATA } from '@/data/expeditions';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { Users, ArrowRight, Mountain, Camera } from 'lucide-react';

export default function ExpeditionsPage() {
  const { locale, t, dir } = useLocale();
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const years = Array.from(new Set(EXPEDITIONS_DATA.map(e => e.year))).sort((a, b) => b - a);

  const filtered = EXPEDITIONS_DATA.filter(e => {
    if (selectedYear !== 'all' && e.year.toString() !== selectedYear) return false;
    return true;
  });

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={locale === 'ar' ? 'العمليات الميدانية · أرشيف البعثات الاستكشافية للزواحف' : locale === 'fr' ? 'Opérations de Terrain · Archives des Missions Herpétologiques' : 'Field Operations · Herpetological Expeditions Archive'}
        title={locale === 'ar' ? 'البعثات والمسوحات الميدانية' : locale === 'fr' ? 'Expéditions & Missions de Terrain' : 'Field Expeditions & Surveys'}
        description={
          locale === 'ar' ? (
            <>
              أرشيف زمني للبعثات الميدانية للزواحف والعنكبيات التي أجراها الفريق العلمي لموروكو هيربيتولوجي
              عبر الأطلس الكبير، الأطلس المتوسط، الأطلس الصغير، والصحراء الأطلسية.
            </>
          ) : locale === 'fr' ? (
            <>
              Archives chronologiques des expéditions de terrain menées par le groupe de recherche Morocco Herpetology
              à travers le Haut Atlas, le Moyen Atlas, l'Anti-Atlas et le Sahara atlantique.
            </>
          ) : (
            <>
              Chronological archive of herpetological and arachnological field expeditions conducted by the
              Morocco Herpetology research group across the High Atlas, Middle Atlas, Anti-Atlas, and Atlantic Sahara.
              Each survey documents altitudinal transects, habitat microclimates, and verified species inventories.
            </>
          )
        }
        stats={[
          { value: `${EXPEDITIONS_DATA.length}`, label: locale === 'ar' ? 'بعثة استكشافية موثقة' : locale === 'fr' ? 'Missions vérifiées' : 'Verified Expeditions' },
          { value: 'Atlas & Sahara', label: locale === 'ar' ? 'الأقاليم التي تم مسحها' : locale === 'fr' ? 'Écorégions prospectées' : 'Ecoregions Surveyed' },
          { value: 'GPS Verified', label: locale === 'ar' ? 'سجلات عينات موثقة' : locale === 'fr' ? 'Spécimens géoréférencés' : 'Voucher Records' },
        ]}
      />

      <div className="container-site" style={{ paddingTop: '2.5rem' }}>
        {/* Year Filter Toolbar */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(26, 43, 30, 0.1)',
            borderRadius: '4px',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
          }}
        >
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.8125rem', color: '#4A5E4E' }}>
            {locale === 'ar' ? 'عرض' : locale === 'fr' ? 'Affichage de' : 'Displaying'}{' '}
            <strong style={{ color: '#1A2B1E' }}>{filtered.length}</strong>{' '}
            {locale === 'ar' ? 'بعثة موثقة' : locale === 'fr' ? 'missions vérifiées' : 'verified expeditions'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflowX: 'auto' }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'rgba(26, 43, 30, 0.5)', textTransform: 'uppercase', letterSpacing: dir === 'rtl' ? '0' : '0.05em' }}>
              {locale === 'ar' ? 'السنة:' : locale === 'fr' ? 'Année :' : 'Year:'}
            </span>
            <button
              onClick={() => setSelectedYear('all')}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '2px',
                border: '1px solid',
                borderColor: selectedYear === 'all' ? '#1A2B1E' : 'rgba(26, 43, 30, 0.15)',
                background: selectedYear === 'all' ? '#1A2B1E' : '#FFFFFF',
                color: selectedYear === 'all' ? '#FFFFFF' : '#4A5E4E',
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontWeight: selectedYear === 'all' ? 600 : 400,
              }}
            >
              {t.common.all}
            </button>
            {years.map(y => (
              <button
                key={y}
                onClick={() => setSelectedYear(y.toString())}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '2px',
                  border: '1px solid',
                  borderColor: selectedYear === y.toString() ? '#1A2B1E' : 'rgba(26, 43, 30, 0.15)',
                  background: selectedYear === y.toString() ? '#1A2B1E' : '#FFFFFF',
                  color: selectedYear === y.toString() ? '#FFFFFF' : '#4A5E4E',
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  fontWeight: selectedYear === y.toString() ? 600 : 400,
                }}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Expedition Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filtered.map(exp => (
            <article
              key={exp.id}
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
              {/* Photo Showcase */}
              <div
                style={{
                  position: 'relative',
                  minHeight: '280px',
                  backgroundColor: '#EFECE6',
                  overflow: 'hidden',
                }}
              >
                {exp.photos[0] ? (
                  <img
                    src={exp.photos[0].url}
                    alt={exp.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mountain style={{ width: '48px', height: '48px', color: '#B38228', opacity: 0.3 }} />
                  </div>
                )}

                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: '#FEF9E7',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: '#8A5D00',
                    border: '1px solid rgba(179, 130, 40, 0.25)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  }}
                >
                  {exp.dates}
                </div>

                {exp.photos[0]?.credit && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(26, 43, 30, 0.75)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      fontSize: '0.625rem',
                      fontFamily: 'DM Mono, monospace',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Camera style={{ width: '10px', height: '10px', opacity: 0.8 }} />
                    <span>© {exp.photos[0].credit}</span>
                  </div>
                )}
              </div>

              {/* Expedition Details */}
              <div style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.75rem', color: '#8A5D00', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: locale === 'ar' ? 'normal' : '0.06em', fontWeight: 600 }}>
                      {locale === 'ar' && exp.regionAr ? exp.regionAr : locale === 'fr' && exp.regionFr ? exp.regionFr : exp.region}
                    </span>
                    <span style={{ color: 'rgba(26, 43, 30, 0.2)' }}>·</span>
                    <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.75rem', color: '#4A5E4E' }}>
                      {exp.bioclimaticZone}
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
                    {locale === 'ar' && exp.titleAr ? exp.titleAr : locale === 'fr' && exp.titleFr ? exp.titleFr : exp.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: '#4A5E4E',
                      lineHeight: 1.7,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {locale === 'ar' && exp.summaryAr ? exp.summaryAr : locale === 'fr' && exp.summaryFr ? exp.summaryFr : exp.summary}
                  </p>

                  {/* Species Observed */}
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(26, 43, 30, 0.08)' }}>
                    <span
                      style={{
                        display: 'block',
                        marginBottom: '0.6rem',
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                        fontSize: '0.6875rem',
                        letterSpacing: locale === 'ar' ? 'normal' : '0.1em',
                        textTransform: locale === 'ar' ? 'none' : 'uppercase',
                        color: 'rgba(26, 43, 30, 0.6)',
                        fontWeight: 600,
                      }}
                    >
                      {locale === 'ar' ? 'الأنواع الرئيسية الموثقة' : locale === 'fr' ? 'Principaux taxons documentés' : 'Key Taxa Documented'}
                    </span>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {exp.speciesObserved.map((sp, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            fontSize: '0.875rem',
                            color: '#1A2B1E',
                            background: '#F7F4EE',
                            border: '1px solid rgba(26, 43, 30, 0.1)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '2px',
                          }}
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: '1.25rem',
                    marginTop: '1.5rem',
                    borderTop: '1px solid rgba(26, 43, 30, 0.08)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4A5E4E' }}>
                    <Users style={{ width: '13px', height: '13px', color: '#8A5D00' }} />
                    <span>{locale === 'ar' ? 'الفريق الميداني:' : locale === 'fr' ? 'Équipe de prospection :' : 'Surveyors:'} {exp.contributors.join(', ')}</span>
                  </div>

                  <Link
                    href={`/checklist?q=${encodeURIComponent(exp.speciesObserved[0] || '')}`}
                    style={{
                      color: '#8A5D00',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      textDecoration: 'none',
                      textTransform: locale === 'ar' ? 'none' : 'uppercase',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                      fontWeight: 600,
                    }}
                  >
                    <span>{locale === 'ar' ? 'فحص بطاقات الأنواع' : locale === 'fr' ? 'Consulter les fiches espèces' : 'Inspect Species Records'}</span>
                    <ArrowRight style={{ width: '12px', height: '12px' }} className={dir === 'rtl' ? 'rtl-flip' : ''} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
