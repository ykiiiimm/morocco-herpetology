'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Species, getSpeciesSlug } from '@/data/species';
import { useLocale } from '@/context/LocaleContext';
import { ArrowRight } from 'lucide-react';

interface SpeciesCardProps {
  species: Species;
  onSelect?: (species: Species) => void;
  showLinkOnly?: boolean;
}

export function SpeciesCard({ species, onSelect }: SpeciesCardProps) {
  const { locale, t, dir } = useLocale();
  const [imgError, setImgError] = useState(false);

  const statusColors: Record<string, string> = {
    CR: '#C0392B',
    EN: '#D35400',
    VU: '#B38228',
    NT: '#5B8C5A',
    LC: '#5B8C5A',
    DD: '#7A8B7E',
    NE: '#7A8B7E',
  };

  const statusColor = statusColors[species.status] || statusColors.NE;
  const commonName = species.commonNames[locale] || species.commonNames.en;
  const slug = getSpeciesSlug(species);

  const handleClick = (e: React.MouseEvent) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(species);
    }
  };

  return (
    <article
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(26,43,30,0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      className="group"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,43,30,0.22)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(26,43,30,0.07)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,43,30,0.1)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <Link
        href={`/species/${slug}`}
        onClick={handleClick}
        style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none' }}
      >
        {/* Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/10',
            backgroundColor: '#EFECE6',
            overflow: 'hidden',
          }}
        >
          {!imgError && species.image ? (
            <img
              src={species.image}
              alt={`${species.scientificName} (${commonName || 'Taxon'})`}
              onError={() => setImgError(true)}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.4s ease',
              }}
              className="group-hover:scale-[1.03]"
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '0.9375rem',
                  color: '#1A2B1E',
                }}
              >
                {species.genus} {species.speciesEpithet}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.5625rem',
                  color: 'rgba(26,43,30,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '0.375rem',
                }}
              >
                {t.common.noPhoto}
              </span>
            </div>
          )}

          {/* Status + Endemic badges */}
          <div
            style={{
              position: 'absolute',
              top: '0.625rem',
              left: '0.625rem',
              right: '0.625rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              pointerEvents: 'none',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-meta)',
                fontSize: '0.5625rem',
                letterSpacing: '0.1em',
                fontWeight: 600,
                color: '#FFFFFF',
                background: statusColor,
                padding: '0.2rem 0.5rem',
              }}
            >
              {species.status}
            </span>

            {species.isEndemic && (
              <span
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.5625rem',
                  letterSpacing: dir === 'rtl' ? '0' : '0.08em',
                  fontWeight: 500,
                  color: '#B38228',
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.2rem 0.5rem',
                }}
              >
                {t.common.endemicBadge}
              </span>
            )}
          </div>

          {/* Photo credit */}
          {species.imageCredit && (
            <div
              style={{
                position: 'absolute',
                bottom: '0.5rem',
                right: '0.5rem',
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(4px)',
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.5625rem',
                fontFamily: 'var(--font-meta)',
                padding: '0.15rem 0.4rem',
              }}
            >
              © {species.imageCredit}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '1.125rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
          <div>
            {/* Family */}
            <div
              style={{
                fontFamily: 'var(--font-meta)',
                fontSize: '0.625rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(26,43,30,0.4)',
                marginBottom: '0.35rem',
              }}
            >
              {species.family}
            </div>

            {/* Scientific name */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1875rem',
                fontWeight: 600,
                color: '#1A2B1E',
                lineHeight: 1.2,
                marginBottom: '0.2rem',
              }}
            >
              <em>{species.genus} {species.speciesEpithet}</em>
            </h3>

            {/* Common name */}
            {commonName && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: '#4A5E4E',
                  lineHeight: 1.35,
                }}
              >
                {commonName}
              </p>
            )}
          </div>

          {/* Bottom row */}
          <div
            style={{
              paddingTop: '0.75rem',
              marginTop: '0.875rem',
              borderTop: '1px solid rgba(26,43,30,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-meta)',
                fontSize: '0.625rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(26,43,30,0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <ArrowRight className="rtl-flip" style={{ width: '11px', height: '11px' }} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
