'use client';

import React from 'react';
import Link from 'next/link';
import { Species, getSpeciesSlug } from '@/data/species';
import { Publication } from '@/data/publications';
import { useLocale } from '@/context/LocaleContext';
import {
  ChevronLeft, Award, MapPin, Camera, ExternalLink, ArrowRight, ArrowLeft
} from 'lucide-react';

interface SpeciesDetailViewProps {
  species: Species;
  relatedPubs: Publication[];
  relatedTaxa: Species[];
}

export default function SpeciesDetailView({ species, relatedPubs, relatedTaxa }: SpeciesDetailViewProps) {
  const { locale, t, dir } = useLocale();

  const statusColors: Record<string, { label: string; bg: string; color: string }> = {
    CR: { label: t.statusLabels.CR || 'Critically Endangered (CR)', bg: '#FDECEB', color: '#C0392B' },
    EN: { label: t.statusLabels.EN || 'Endangered (EN)', bg: '#FEF2E8', color: '#D35400' },
    VU: { label: t.statusLabels.VU || 'Vulnerable (VU)', bg: '#FEF9E7', color: '#B38228' },
    NT: { label: t.statusLabels.NT || 'Near Threatened (NT)', bg: '#EBF5EB', color: '#27AE60' },
    LC: { label: t.statusLabels.LC || 'Least Concern (LC)', bg: '#EBF5EB', color: '#27AE60' },
    DD: { label: t.statusLabels.DD || 'Data Deficient (DD)', bg: '#F2F2F2', color: '#7F8C8D' },
    NE: { label: 'Not Evaluated (NE)', bg: '#F2F2F2', color: '#7F8C8D' },
  };

  const statusMeta = statusColors[species.status] || statusColors.NE;
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingTop: '2.5rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2.5rem)' }}>

        {/* Breadcrumb Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
            fontSize: '0.75rem',
            color: 'rgba(26,43,30,0.5)',
            letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
            textTransform: locale === 'ar' ? 'none' : 'uppercase',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
          aria-label="Taxon hierarchy"
        >
          <Link
            href="/checklist"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: '#1A2B1E',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            <ChevronLeft style={{ width: '14px', height: '14px' }} className={dir === 'rtl' ? 'rtl-flip' : ''} />
            <span>{t.nav.checklist}</span>
          </Link>
          <span>/</span>
          <Link
            href={`/${species.group}-of-morocco`}
            style={{
              color: 'rgba(26,43,30,0.6)',
              textDecoration: 'none',
              textTransform: 'capitalize',
            }}
          >
            {t.nav[species.group as keyof typeof t.nav] || species.group}
          </Link>
          <span>/</span>
          <span>{species.family}</span>
          <span>/</span>
          <span style={{ color: '#1A2B1E', fontWeight: 600 }}>{species.genus} {species.speciesEpithet}</span>
        </nav>

        {/* 1. Header Section: Identity */}
        <div
          className="species-detail-header"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto',
            gap: '2rem',
            alignItems: 'flex-start',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
              <span
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.6875rem',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                  padding: '0.25rem 0.625rem',
                  background: statusMeta.bg,
                  color: statusMeta.color,
                  border: `1px solid ${statusMeta.color}33`,
                  fontWeight: 600,
                }}
              >
                IUCN · {statusMeta.label}
              </span>

              {species.isEndemic && (
                <span
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                    padding: '0.25rem 0.625rem',
                    background: '#FEF9E7',
                    color: '#B38228',
                    border: '1px solid rgba(179,130,40,0.3)',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Award style={{ width: '12px', height: '12px' }} />
                  <span>{t.common.endemicToMorocco}</span>
                </span>
              )}

              {species.possibleEndemic && (
                <span
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                    padding: '0.25rem 0.625rem',
                    background: '#F7F4EE',
                    color: '#4A5E4E',
                    border: '1px solid rgba(26,43,30,0.14)',
                  }}
                >
                  <span>{t.common.nearEndemic}</span>
                </span>
              )}

              <span
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.6875rem',
                  color: 'rgba(26,43,30,0.4)',
                  marginInlineStart: '0.5rem',
                }}
              >
                ID: {species.id}
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: '#1A2B1E',
                margin: '0 0 0.5rem',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              <em>{species.genus} {species.speciesEpithet}</em>
            </h1>

            <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.875rem', color: 'rgba(26,43,30,0.5)', margin: '0 0 1.25rem' }}>
              {locale === 'ar' ? 'واضع التسمية العلمية:' : locale === 'fr' ? 'Auteur de la description :' : 'Authority:'} {species.authority}
            </p>

            {/* Common names row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(26,43,30,0.08)' }}>
              {species.commonNames.en && (
                <div>
                  <div style={{ fontFamily: 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>English</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1A2B1E', fontWeight: 500, marginTop: '0.15rem' }}>{species.commonNames.en}</div>
                </div>
              )}
              {species.commonNames.fr && (
                <div>
                  <div style={{ fontFamily: 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Français</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1A2B1E', fontWeight: 500, marginTop: '0.15rem' }}>{species.commonNames.fr}</div>
                </div>
              )}
              {species.commonNames.ar && (
                <div>
                  <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: 'uppercase' }}>العربية</div>
                  <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.0625rem', color: '#1A2B1E', fontWeight: 600, marginTop: '0.15rem' }} dir="rtl">{species.commonNames.ar}</div>
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link
              href="/observations/submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#1A2B1E',
                color: '#F7F4EE',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '2px',
              }}
            >
              <span>{locale === 'ar' ? 'تسجيل رصد ميداني' : locale === 'fr' ? 'Soumettre une observation' : 'Submit Field Record'}</span>
              <ArrowIcon style={{ width: '14px', height: '14px' }} />
            </Link>
          </div>
        </div>

        {/* 2. Hero Photograph */}
        {species.image && (
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              maxHeight: '620px',
              border: '1px solid rgba(26,43,30,0.12)',
              background: '#EFECE6',
              marginBottom: '3.5rem',
            }}
          >
            <img
              src={species.image}
              alt={`${species.scientificName} in Morocco`}
              style={{
                width: '100%',
                maxHeight: '620px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {species.imageCredit && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  insetInlineEnd: '1rem',
                  background: 'rgba(26, 43, 30, 0.8)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  padding: '0.35rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Camera style={{ width: '13px', height: '13px', color: '#E8C97A' }} />
                <span>© {species.imageCredit} · Morocco Herpetology Archive</span>
              </div>
            )}
          </div>
        )}

        {/* 3. Editorial Two-Column Information Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="species-detail-columns"
        >

          {/* Left Column: Classification, Distribution & Literature */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* At-a-glance facts */}
            <section>
              <div style={{ marginBottom: '1.25rem' }}>
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
                  {locale === 'ar' ? 'التصنيف البيولوجي' : locale === 'fr' ? 'Classification Taxonomique' : 'Taxonomic Classification'}
                </span>
                <h2
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: '#1A2B1E',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {locale === 'ar' ? 'التصنيف والنسب التطوري' : locale === 'fr' ? 'Systématique & Lignée' : 'Systematics & Lineage'}
                </h2>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  background: '#FFFFFF',
                  padding: '1.5rem',
                  border: '1px solid rgba(26,43,30,0.1)',
                }}
              >
                <div>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: '0.08em' }}>{t.common.classTaxon}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1A2B1E', fontWeight: 500, margin: '0.2rem 0 0' }}>{species.class}</p>
                </div>
                <div>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: '0.08em' }}>{t.common.order}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1A2B1E', fontWeight: 500, margin: '0.2rem 0 0' }}>{species.order}</p>
                </div>
                <div>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: '0.08em' }}>{t.common.family}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1A2B1E', fontWeight: 500, margin: '0.2rem 0 0' }}>{species.family}</p>
                </div>
                <div>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: '0.08em' }}>{locale === 'ar' ? 'الجنس' : locale === 'fr' ? 'Genre' : 'Genus'}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1A2B1E', fontWeight: 500, margin: '0.2rem 0 0' }}><em>{species.genus}</em></p>
                </div>
                <div>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: '0.08em' }}>{locale === 'ar' ? 'نعت النوع' : locale === 'fr' ? 'Épithète spécifique' : 'Species Epithet'}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1A2B1E', fontWeight: 500, margin: '0.2rem 0 0' }}><em>{species.speciesEpithet}</em></p>
                </div>
                <div>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: '0.08em' }}>{locale === 'ar' ? 'واضع الوصف' : locale === 'fr' ? 'Auteur' : 'Authority'}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1A2B1E', fontWeight: 500, margin: '0.2rem 0 0' }}>{species.authority}</p>
                </div>
              </div>
            </section>

            {/* Distribution & Occurrence in Morocco */}
            <section>
              <div style={{ marginBottom: '1.25rem' }}>
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
                  {locale === 'ar' ? 'التوزيع الميداني' : locale === 'fr' ? 'Distribution de Terrain' : 'Field Distribution'}
                </span>
                <h2
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: '#1A2B1E',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {t.common.distribution} &amp; {t.common.habitat}
                </h2>
              </div>

              <div
                style={{
                  background: '#FFFFFF',
                  padding: '1.75rem',
                  border: '1px solid rgba(26,43,30,0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                  <MapPin style={{ width: '20px', height: '20px', color: '#B38228', flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h3
                      style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                        fontSize: '1.125rem',
                        color: '#1A2B1E',
                        fontWeight: 600,
                        margin: '0 0 0.5rem',
                      }}
                    >
                      {locale === 'ar' ? 'النطاق الجغرافي الموثق بالمغرب' : locale === 'fr' ? 'Aire de répartition marocaine documentée' : 'Documented Moroccan Range'}
                    </h3>
                    <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.9375rem', color: '#4A5E4E', lineHeight: 1.7, margin: 0 }}>
                      {species.distributionNotes || (locale === 'ar' ? 'ملاحظات التوزيع مستخلصة من الأدبيات العلمية المحكمة، والمسوحات الحقلية، وعينات المتاحف الموثقة بالمغرب.' : locale === 'fr' ? 'Données de distribution issues de la littérature scientifique, des prospections de terrain et des collections muséales.' : 'Distribution notes compiled from peer-reviewed literature, field surveys, and historical museum specimens across Morocco.')}
                    </p>
                  </div>
                </div>

                {/* Sensitive taxon notice */}
                {(species.status === 'CR' || species.status === 'EN' || species.status === 'VU') && (
                  <div
                    style={{
                      marginTop: '1.25rem',
                      padding: '1rem',
                      background: '#FEF9E7',
                      borderInlineStart: '3px solid #B38228',
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                      fontSize: '0.75rem',
                      color: '#8A6D3B',
                      lineHeight: 1.5,
                    }}
                  >
                    <strong>{locale === 'ar' ? 'سياسة حماية المواقع الحساسة:' : locale === 'fr' ? 'Politique de confidentialité des stations :' : 'Sensitive Location Policy:'}</strong>{' '}
                    {locale === 'ar'
                      ? 'بموجب توجيهات حماية التنوع الحيوي بالمغرب، يتم حجب الإحداثيات الجغرافية الدقيقة للزواحف والبرمائيات المهددة لمنع الصيد غير القانوني والاتجار في الحيوانات البرية.'
                      : locale === 'fr'
                      ? 'Conformément aux directives de conservation marocaines, les coordonnées GPS précises des taxons menacés sont occultées pour prévenir le braconnage.'
                      : 'Under Moroccan conservation guidelines, precise GPS coordinates for threatened herpetofauna are withheld from public display to prevent illegal pet trade poaching and habitat disruption.'}
                  </div>
                )}
              </div>
            </section>

            {/* Related Research */}
            {relatedPubs.length > 0 && (
              <section>
                <div style={{ marginBottom: '1.25rem' }}>
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
                    {locale === 'ar' ? 'الأدبيات والأبحاث' : locale === 'fr' ? 'Littérature Scientifique' : 'Scientific Literature'}
                  </span>
                  <h2
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                      fontSize: '1.75rem',
                      color: '#1A2B1E',
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    {locale === 'ar' ? 'المنشورات والأبحاث المرتبطة' : locale === 'fr' ? 'Publications & Citations Associées' : 'Related Publications & Citations'}
                  </h2>
                </div>

                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(26,43,30,0.1)',
                    padding: '0 1.5rem',
                  }}
                >
                  {relatedPubs.map((pub, idx) => (
                    <div
                      key={pub.id}
                      style={{
                        padding: '1.25rem 0',
                        borderBottom: idx === relatedPubs.length - 1 ? 'none' : '1px solid rgba(26,43,30,0.08)',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                        <span style={{ fontFamily: 'var(--font-meta)', fontSize: '0.75rem', color: '#B38228', fontWeight: 600, flexShrink: 0 }}>
                          {pub.year}
                        </span>
                        <div>
                          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 600, color: '#1A2B1E', lineHeight: 1.35, margin: '0 0 0.35rem' }}>
                            {pub.title}
                          </p>
                          <p style={{ fontFamily: 'var(--font-meta)', fontSize: '0.6875rem', color: 'rgba(26,43,30,0.5)', margin: 0 }}>
                            {pub.authors} · <em>{pub.journal}</em>
                          </p>
                          {pub.doi && (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.35rem',
                                marginTop: '0.5rem',
                                fontFamily: 'var(--font-meta)',
                                fontSize: '0.6875rem',
                                color: '#1A2B1E',
                                textDecoration: 'none',
                                fontWeight: 500,
                              }}
                            >
                              <span>DOI: {pub.doi}</span>
                              <ExternalLink style={{ width: '10px', height: '10px' }} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Conservation Status & Navigation */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Conservation Status Card */}
            <div
              style={{
                background: '#FFFFFF',
                padding: '1.75rem',
                border: '1px solid rgba(26,43,30,0.1)',
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
                }}
              >
                {t.common.status}
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: statusMeta.color,
                    lineHeight: 1,
                  }}
                >
                  {species.status}
                </span>
                <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.8125rem', color: '#4A5E4E' }}>
                  {statusMeta.label.replace(/\(.*?\)/g, '').trim()}
                </span>
              </div>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(26,43,30,0.6)', lineHeight: 1.55, margin: '0.5rem 0 0' }}>
                {locale === 'ar'
                  ? 'تم تقييم حالة الحماية وفق معايير القائمة الحمراء الإقليمية للاتحاد الدولي لحفظ الطبيعة (IUCN).'
                  : locale === 'fr'
                  ? 'Évalué selon les critères régionaux de la Liste rouge de l\'UICN des espèces menacées.'
                  : 'Evaluated against IUCN Red List of Threatened Species regional criteria. Subject to ongoing assessment by the Moroccan Herpetological Committee.'}
              </p>
            </div>

            {/* Endemicity Card */}
            <div
              style={{
                background: '#FFFFFF',
                padding: '1.75rem',
                border: '1px solid rgba(26,43,30,0.1)',
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
                }}
              >
                {locale === 'ar' ? 'الانتماء الجغرافي الحيوي' : locale === 'fr' ? 'Affinité Biogéographique' : 'Biogeographic Affinity'}
              </span>
              <h3 style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: '1.25rem', color: '#1A2B1E', fontWeight: 600, margin: '0 0 0.5rem' }}>
                {species.isEndemic
                  ? t.common.endemicToMorocco
                  : species.possibleEndemic
                  ? t.common.nearEndemic
                  : (locale === 'ar' ? 'نوع أصيل بالمنطقة' : locale === 'fr' ? 'Indigène régional' : 'Regional Native')}
              </h3>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.8125rem', color: '#4A5E4E', lineHeight: 1.6, margin: 0 }}>
                {species.isEndemic
                  ? (locale === 'ar' ? 'يتواجد طبيعياً وحصرياً داخل حدود المغرب. يمثل أولوية قصوى لمخططات العمل الوطنية للتنوع البيولوجي.' : locale === 'fr' ? 'Présent naturellement et exclusivement à l\'intérieur des frontières du Maroc.' : 'Naturally occurs exclusively within the borders of Morocco. Represents high conservation priority for national biodiversity action plans.')
                  : species.possibleEndemic
                  ? (locale === 'ar' ? 'ينحصر انتشاره أساساً في المغرب مع امتدادات محتملة في النظم البيئية المجاورة بشمال غرب أفريقيا.' : locale === 'fr' ? 'Principalement inféodé au Maroc avec de potentielles populations marginales adjacentes.' : 'Primarily restricted to Morocco, with potential marginal populations in adjacent Northwest African bioclimatic zones.')
                  : (locale === 'ar' ? 'نوع أصيل في المغرب ضمن التركيبة الحيوانية المتوسطية أو المغاربية الصحراوية.' : locale === 'fr' ? 'Indigène au Maroc, élément du complexe herpétofaunique méditerranéen ou maghrébin/saharien.' : 'Native to Morocco as part of the broader Mediterranean or Maghrebi/Saharan herpetofaunal complex.')}
              </p>
            </div>

            {/* Related Family Taxa */}
            {relatedTaxa.length > 0 && (
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '1.75rem',
                  border: '1px solid rgba(26,43,30,0.1)',
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
                    marginBottom: '1rem',
                  }}
                >
                  {locale === 'ar' ? `أنواع أخرى من فصيلة ${species.family}` : locale === 'fr' ? `Autres taxons de la famille des ${species.family}` : `Other ${species.family} Taxa`}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {relatedTaxa.map((rel, idx) => (
                    <Link
                      key={rel.id}
                      href={`/species/${getSpeciesSlug(rel)}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        textDecoration: 'none',
                        padding: '0.75rem 0',
                        borderBottom: idx === relatedTaxa.length - 1 ? 'none' : '1px solid rgba(26,43,30,0.06)',
                        transition: 'opacity 0.15s ease',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontStyle: 'italic', color: '#1A2B1E', fontWeight: 500 }}>
                        {rel.genus} {rel.speciesEpithet}
                      </span>
                      <span style={{ fontFamily: 'var(--font-meta)', fontSize: '0.6875rem', color: '#B38228', fontWeight: 600 }}>
                        {rel.status}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .species-detail-columns {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .species-detail-header {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
