'use client';

import React, { useState } from 'react';
import { SPECIES_DATA, Species } from '@/data/species';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { SpeciesCard } from '@/components/species/SpeciesCard';
import { SpeciesDetailModal } from '@/components/species/SpeciesDetailModal';
import { Search, X } from 'lucide-react';

export default function LizardsPage() {
  const { locale, t, dir } = useLocale();
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [search, setSearch] = useState('');
  const [familyFilter, setFamilyFilter] = useState('all');

  const lizards = SPECIES_DATA.filter(s => s.group === 'lizards');
  const families = Array.from(new Set(lizards.map(l => l.family))).sort();

  const filtered = lizards.filter(s => {
    if (familyFilter !== 'all' && s.family !== familyFilter) return false;
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

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={t.pages.lizards.eyebrow}
        title={t.pages.lizards.title}
        description={t.pages.lizards.description}
        stats={[
          { value: `${lizards.length}`, label: t.pages.lizards.stat1 },
          { value: '23', label: t.pages.lizards.stat2 },
          { value: `${families.length}`, label: t.pages.lizards.stat3 },
        ]}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2.5rem clamp(1.25rem, 4vw, 2.5rem) 0' }}>
        {/* Controls Toolbar */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(26,43,30,0.1)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
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
              <strong style={{ color: '#1A2B1E' }}>{filtered.length}</strong> / {lizards.length}
            </div>
          </div>

          {/* Family Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(26,43,30,0.08)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-meta)',
                fontSize: '0.6875rem',
                color: 'rgba(26,43,30,0.45)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginInlineEnd: '0.25rem',
                whiteSpace: 'nowrap',
              }}
            >
              {t.common.family}:
            </span>
            <button
              onClick={() => setFamilyFilter('all')}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: familyFilter === 'all' ? '#1A2B1E' : 'rgba(26,43,30,0.14)',
                background: familyFilter === 'all' ? '#1A2B1E' : '#F7F4EE',
                color: familyFilter === 'all' ? '#F7F4EE' : 'rgba(26,43,30,0.7)',
                fontFamily: 'var(--font-meta)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {t.common.all} ({families.length})
            </button>
            {families.map(f => (
              <button
                key={f}
                onClick={() => setFamilyFilter(f)}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: familyFilter === f ? '#1A2B1E' : 'rgba(26,43,30,0.14)',
                  background: familyFilter === f ? '#1A2B1E' : '#F7F4EE',
                  color: familyFilter === f ? '#F7F4EE' : 'rgba(26,43,30,0.7)',
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
                }}
              >
                {f} ({lizards.filter(l => l.family === f).length})
              </button>
            ))}
          </div>
        </div>

        {/* Species Grid */}
        {filtered.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filtered.map(species => (
              <SpeciesCard
                key={species.id}
                species={species}
                onSelect={s => setSelectedSpecies(s)}
              />
            ))}
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
              onClick={() => { setSearch(''); setFamilyFilter('all'); }}
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
