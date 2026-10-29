'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Species, getSpeciesSlug } from '@/data/species';
import { useLocale } from '@/context/LocaleContext';
import { X, Camera, MapPin, ArrowRight } from 'lucide-react';

interface SpeciesDetailModalProps {
  species: Species | null;
  onClose: () => void;
}

export function SpeciesDetailModal({ species, onClose }: SpeciesDetailModalProps) {
  const { locale, t, dir } = useLocale();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (species) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [species, onClose]);

  if (!species) return null;

  const slug = getSpeciesSlug(species);
  const commonName = species.commonNames[locale] || species.commonNames.en;

  const statusColors: Record<string, { label: string; bg: string; color: string }> = {
    CR: { label: 'Critically Endangered (CR)', bg: '#FDECEB', color: '#C0392B' },
    EN: { label: 'Endangered (EN)', bg: '#FEF2E8', color: '#D35400' },
    VU: { label: 'Vulnerable (VU)', bg: '#FEF9E7', color: '#B38228' },
    NT: { label: 'Near Threatened (NT)', bg: '#EBF5EB', color: '#27AE60' },
    LC: { label: 'Least Concern (LC)', bg: '#EBF5EB', color: '#27AE60' },
    DD: { label: 'Data Deficient (DD)', bg: '#F2F2F2', color: '#7F8C8D' },
    NE: { label: 'Not Evaluated (NE)', bg: '#F2F2F2', color: '#7F8C8D' },
  };

  const statusInfo = statusColors[species.status] || statusColors.NE;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity"
      style={{
        background: 'rgba(26, 43, 30, 0.45)',
        backdropFilter: 'blur(6px)',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${species.scientificName} details`}
    >
      <div
        className="species-modal-inner"
        style={{
          width: '100%',
          maxWidth: '720px',
          background: '#FFFFFF',
          border: '1px solid rgba(26,43,30,0.14)',
          boxShadow: '0 24px 64px rgba(26,43,30,0.2)',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.75rem',
            borderBottom: '1px solid rgba(26,43,30,0.08)',
            background: '#F7F4EE',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-meta)',
              fontSize: '0.625rem',
              color: 'rgba(26,43,30,0.5)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span>{species.class}</span> · <span>{species.order}</span> · <span style={{ color: '#1A2B1E', fontWeight: 600 }}>{species.family}</span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(26,43,30,0.45)',
              cursor: 'pointer',
              padding: '0.35rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#1A2B1E'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(26,43,30,0.45)'; }}
            aria-label="Close dialog"
          >
            <X style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div style={{ overflowY: 'auto', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Identity */}
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  padding: '0.25rem 0.6rem',
                  background: statusInfo.bg,
                  color: statusInfo.color,
                  border: `1px solid ${statusInfo.color}33`,
                }}
              >
                {species.status} · {t.statusLabels[species.status as keyof typeof t.statusLabels] || species.status}
              </span>

              {species.isEndemic && (
                <span
                  style={{
                    fontFamily: 'var(--font-meta)',
                    fontSize: '0.625rem',
                    letterSpacing: dir === 'rtl' ? '0' : '0.08em',
                    fontWeight: 600,
                    padding: '0.25rem 0.6rem',
                    background: '#FEF9E7',
                    color: '#B38228',
                    border: '1px solid rgba(179,130,40,0.3)',
                  }}
                >
                  {t.common.endemicToMorocco}
                </span>
              )}
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 600,
                color: '#1A2B1E',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              <em>{species.genus} {species.speciesEpithet}</em>{' '}
              {species.authority && (
                <span style={{ fontSize: '0.9375rem', fontFamily: 'var(--font-meta)', color: 'rgba(26,43,30,0.4)', fontWeight: 400 }}>
                  {species.authority}
                </span>
              )}
            </h2>

            {commonName && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#4A5E4E',
                  marginTop: '0.35rem',
                  marginBottom: 0,
                }}
              >
                {commonName}
              </p>
            )}
          </div>

          {/* Photo */}
          {species.image && (
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '16/9',
                background: '#EFECE6',
                border: '1px solid rgba(26,43,30,0.08)',
              }}
            >
              <img
                src={species.image}
                alt={species.scientificName}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {species.imageCredit && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.625rem',
                    right: '0.625rem',
                    background: 'rgba(26, 43, 30, 0.75)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-meta)',
                    padding: '0.2rem 0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Camera style={{ width: '10px', height: '10px', opacity: 0.8 }} />
                  <span>Photo © {species.imageCredit}</span>
                </div>
              )}
            </div>
          )}

          {/* Sourced Data Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              padding: '1.25rem',
              background: '#F7F4EE',
              border: '1px solid rgba(26,43,30,0.08)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.625rem',
                  color: 'rgba(26,43,30,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {t.common.taxonomicGroup}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: '#1A2B1E',
                  fontWeight: 500,
                  marginTop: '0.25rem',
                  textTransform: 'capitalize',
                }}
              >
                {species.group} ({species.order})
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.625rem',
                  color: 'rgba(26,43,30,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {t.common.status}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: statusInfo.color,
                  fontWeight: 600,
                  marginTop: '0.25rem',
                }}
              >
                {species.status} · {t.common.globalAssessment}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.625rem',
                  color: 'rgba(26,43,30,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {t.common.filterByEndemicity}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: '#1A2B1E',
                  fontWeight: 500,
                  marginTop: '0.25rem',
                }}
              >
                {species.isEndemic
                  ? t.common.endemicToMorocco
                  : species.possibleEndemic
                  ? t.common.nearEndemic
                  : (locale === 'ar' ? 'نوع أصيل غير مستوطن' : locale === 'fr' ? 'Indigène non-endémique' : 'Non-endemic Native')}
              </div>
            </div>
          </div>

          {/* Distribution note */}
          {species.distributionNotes && (
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.6875rem',
                  color: 'rgba(26,43,30,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <MapPin style={{ width: '0.875rem', height: '0.875rem', color: '#B38228' }} />
                {t.common.distribution} &amp; {t.common.habitat}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: '#4A5E4E',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {species.distributionNotes}
              </p>
            </div>
          )}

          {/* Sensitive species note */}
          {(species.status === 'CR' || species.status === 'EN' || species.status === 'VU') && (
            <div
              style={{
                padding: '0.875rem 1rem',
                background: '#FEF9E7',
                borderInlineStart: '3px solid #B38228',
                fontSize: '0.75rem',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                color: '#8A6D3B',
                lineHeight: 1.5,
              }}
            >
              {locale === 'ar'
                ? 'سياسة حماية الأنواع الحساسة: يتم تعتيم الإحداثيات الدقيقة جغرافياً لمنع الجمع العشوائي وحماية التجمعات البرية.'
                : locale === 'fr'
                ? 'Politique des espèces sensibles : les coordonnées GPS précises sont floutées pour prévenir le braconnage et protéger les populations sauvages.'
                : 'Sensitive species policy: precise geographic coordinates are generalized to prevent illegal collection and preserve field populations.'}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderTop: '1px solid rgba(26,43,30,0.08)',
            background: '#F7F4EE',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link
            href={`/species/${slug}`}
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              background: '#1A2B1E',
              color: '#F7F4EE',
              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#28422F'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#1A2B1E'; }}
          >
            <span>{t.common.viewMonograph}</span>
            <ArrowRight className="rtl-flip" style={{ width: '0.875rem', height: '0.875rem' }} />
          </Link>

          <button
            onClick={onClose}
            style={{
              padding: '0.65rem 1.25rem',
              background: 'transparent',
              border: '1px solid rgba(26,43,30,0.18)',
              color: '#1A2B1E',
              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: '0.8125rem',
              cursor: 'pointer',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(26,43,30,0.05)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            {locale === 'ar' ? 'إغلاق' : locale === 'fr' ? 'Fermer' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
