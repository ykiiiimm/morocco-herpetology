'use client';

import React, { useState } from 'react';
import { SPECIES_DATA, Species } from '@/data/species';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { SpeciesCard } from '@/components/species/SpeciesCard';
import { SpeciesDetailModal } from '@/components/species/SpeciesDetailModal';
import { Search, X } from 'lucide-react';

export default function TurtlesPage() {
  const { locale, t, dir } = useLocale();
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [search, setSearch] = useState('');

  const turtles = SPECIES_DATA.filter(s => s.group === 'turtles');

  const filtered = turtles.filter(s => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      s.scientificName.toLowerCase().includes(q) ||
      s.family.toLowerCase().includes(q) ||
      s.commonNames.en?.toLowerCase().includes(q) ||
      s.commonNames.fr?.toLowerCase().includes(q) ||
      s.commonNames.ar?.toLowerCase().includes(q)
    );
  });

  // Group by ecological guild
  const terrestrial = filtered.filter(s => s.family === 'Testudinidae');
  const freshwater = filtered.filter(s => ['Geoemydidae', 'Emydidae'].includes(s.family));
  const marine = filtered.filter(s => ['Cheloniidae', 'Dermochelyidae'].includes(s.family));

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={t.pages.turtles.eyebrow}
        title={t.pages.turtles.title}
        description={t.pages.turtles.description}
        stats={[
          { value: '8', label: t.pages.turtles.stat1 },
          { value: '3', label: t.pages.turtles.stat2 },
          { value: 'CITES II', label: t.pages.turtles.stat3 },
        ]}
        notice={t.pages.turtles.notice}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2.5rem clamp(1.25rem, 4vw, 2.5rem) 0' }}>
        {/* Controls Toolbar */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(26,43,30,0.1)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', flex: '1 1 320px', maxWidth: '480px' }}>
            <Search
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: 'rgba(26,43,30,0.4)',
                ...(dir === 'rtl' ? { right: '1rem' } : { left: '1rem' }),
              }}
            />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t.common.searchPlaceholder}
              style={{
                width: '100%',
                paddingInlineStart: '2.5rem',
                paddingInlineEnd: search ? '2.5rem' : '1rem',
                paddingBlock: '0.625rem',
                background: '#F7F4EE',
                border: '1px solid rgba(26,43,30,0.12)',
                borderRadius: '9999px',
                color: '#1A2B1E',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-body)',
                outline: 'none',
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(26,43,30,0.4)',
                  cursor: 'pointer',
                  ...(dir === 'rtl' ? { left: '0.75rem' } : { right: '0.75rem' }),
                }}
                aria-label="Clear search"
              >
                <X style={{ width: '14px', height: '14px' }} />
              </button>
            )}
          </div>

          <div style={{ fontFamily: 'var(--font-meta)', fontSize: '0.8125rem', color: 'rgba(26,43,30,0.5)' }}>
            <strong style={{ color: '#1A2B1E' }}>{filtered.length}</strong> / {turtles.length}
          </div>
        </div>

        {/* Guild Sections */}
        {filtered.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {/* Terrestrial */}
            {terrestrial.length > 0 && (
              <section>
                <div style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(26,43,30,0.1)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-meta)',
                      fontSize: '0.625rem',
                      letterSpacing: dir === 'rtl' ? '0' : '0.14em',
                      textTransform: 'uppercase',
                      color: '#B38228',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {locale === 'ar' ? 'المجموعة 1 · السلاحف البرية' : locale === 'fr' ? 'Guilde I · Chéloniens terrestres' : 'Guild I · Terrestrial Chelonians'}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      color: '#1A2B1E',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {locale === 'ar' ? 'السلاحف البرية (Testudinidae)' : locale === 'fr' ? 'Tortues terrestres (Testudinidae)' : 'Land Tortoises (Testudinidae)'}
                  </h2>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                    gap: '1.5rem',
                  }}
                >
                  {terrestrial.map(species => (
                    <SpeciesCard
                      key={species.id}
                      species={species}
                      onSelect={s => setSelectedSpecies(s)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Freshwater */}
            {freshwater.length > 0 && (
              <section>
                <div style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(26,43,30,0.1)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-meta)',
                      fontSize: '0.625rem',
                      letterSpacing: dir === 'rtl' ? '0' : '0.14em',
                      textTransform: 'uppercase',
                      color: '#B38228',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {locale === 'ar' ? 'المجموعة 2 · سلاحف المياه العذبة' : locale === 'fr' ? "Guilde II · Chéloniens d'eau douce" : 'Guild II · Freshwater Chelonians'}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      color: '#1A2B1E',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {locale === 'ar' ? 'سلاحف المياه العذبة (Geoemydidae & Emydidae)' : locale === 'fr' ? "Tortues d'eau douce (Geoemydidae & Emydidae)" : 'Freshwater Terrapins (Geoemydidae & Emydidae)'}
                  </h2>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                    gap: '1.5rem',
                  }}
                >
                  {freshwater.map(species => (
                    <SpeciesCard
                      key={species.id}
                      species={species}
                      onSelect={s => setSelectedSpecies(s)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Marine */}
            {marine.length > 0 && (
              <section>
                <div style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(26,43,30,0.1)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-meta)',
                      fontSize: '0.625rem',
                      letterSpacing: dir === 'rtl' ? '0' : '0.14em',
                      textTransform: 'uppercase',
                      color: '#B38228',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {locale === 'ar' ? 'المجموعة 3 · السلاحف البحرية' : locale === 'fr' ? 'Guilde III · Chéloniens pélagiques' : 'Guild III · Pelagic Chelonians'}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      color: '#1A2B1E',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {locale === 'ar' ? 'السلاحف البحرية (Cheloniidae & Dermochelyidae)' : locale === 'fr' ? 'Tortues marines (Cheloniidae & Dermochelyidae)' : 'Marine Turtles (Cheloniidae & Dermochelyidae)'}
                  </h2>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                    gap: '1.5rem',
                  }}
                >
                  {marine.map(species => (
                    <SpeciesCard
                      key={species.id}
                      species={species}
                      onSelect={s => setSelectedSpecies(s)}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(26,43,30,0.1)',
              padding: '3rem 2rem',
              textAlign: 'center',
              maxWidth: '32rem',
              marginInline: 'auto',
            }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#1A2B1E', marginBottom: '1rem' }}>
              {t.common.noResults}
            </p>
            <button
              onClick={() => setSearch('')}
              style={{
                padding: '0.625rem 1.25rem',
                background: '#1A2B1E',
                color: '#F7F4EE',
                border: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              {t.common.resetFilters}
            </button>
          </div>
        )}
      </div>

      <SpeciesDetailModal
        species={selectedSpecies}
        onClose={() => setSelectedSpecies(null)}
      />
    </div>
  );
}
