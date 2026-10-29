'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SPECIES_DATA, Species } from '@/data/species';
import { PUBLICATIONS_DATA } from '@/data/publications';
import { SpeciesDetailModal } from '@/components/species/SpeciesDetailModal';
import { useLocale } from '@/context/LocaleContext';
import { ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Data helpers
───────────────────────────────────────────────────────────── */
const findSpecies = (name: string) =>
  SPECIES_DATA.find(s => s.scientificName.toLowerCase().includes(name.toLowerCase()));

/* colour palette from design */
const C = {
  bg: '#F7F4EE',
  bgAlt: '#EFECE6',
  paper: '#F0ECE4',
  dark: '#1A2B1E',
  darkMid: '#243626',
  text: '#1A2B1E',
  textMid: '#4A5E4E',
  textMuted: '#7A8E7E',
  gold: '#8B7B4A',
  goldLight: '#B8A56A',
  border: 'rgba(26, 43, 30, 0.12)',
  borderMid: 'rgba(26, 43, 30, 0.2)',
};

export default function HomePage() {
  const { locale, t, dir } = useLocale();
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches && videoRef.current) videoRef.current.pause();
  }, []);

  const taxonomicGroups = useMemo(() => [
    {
      key: 'amphibians',
      label: t.nav.amphibians,
      count: 14,
      endemics: 3,
      href: '/amphibians-of-morocco',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Pelobates-varaldii.jpg',
    },
    {
      key: 'lizards',
      label: t.nav.lizards,
      count: 81,
      endemics: 23,
      href: '/lizards-of-morocco',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Quedenfeldtia-moerens.jpg',
    },
    {
      key: 'snakes',
      label: t.nav.snakes,
      count: 26,
      endemics: 4,
      href: '/snakes-of-morocco',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Cerastes-cerastes-3-29.jpg',
    },
    {
      key: 'turtles',
      label: t.nav.turtles,
      count: 8,
      endemics: 0,
      href: '/turtles-of-morocco',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Testudo-graeca.jpg',
    },
    {
      key: 'scorpions',
      label: t.nav.scorpions,
      count: 7,
      endemics: 4,
      href: '/scorpions',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/6.png',
    },
  ], [t]);

  const stats = useMemo(() => [
    { num: '136', label: t.home.statsSpecies },
    { num: '38', label: t.home.statsEndemics },
    { num: '29', label: t.home.statsPapers },
    { num: '2,164', label: t.home.statsCitations },
    { num: '15', label: t.home.statsContributors },
  ], [t]);

  const closerLookSpecies = useMemo(() => [
    findSpecies('Pelobates varaldii') || findSpecies('Pelobates'),
    findSpecies('Cerastes cerastes'),
    findSpecies('Quedenfeldtia trachyblepharus') || findSpecies('Quedenfeldtia'),
    findSpecies('Chamaeleo chamaeleon') || findSpecies('Chamaeleo'),
  ].filter(Boolean) as Species[], []);

  const recentPubs = useMemo(() => PUBLICATIONS_DATA.slice(0, 3), []);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const ChevronIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <>
      {selectedSpecies && (
        <SpeciesDetailModal species={selectedSpecies} onClose={() => setSelectedSpecies(null)} />
      )}

      {/* ══════════════════════════════════════
          GLOBAL PAGE STYLES
      ══════════════════════════════════════ */}
      <style>{`
        .hp-wrap {
          background: ${C.bg};
          color: ${C.text};
          font-family: var(--font-body);
        }
        .hp-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 4rem);
        }

        /* hero */
        .hp-hero-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: end;
          padding-top: clamp(2.5rem, 5vw, 4rem);
          padding-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
          .hp-hero-top {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .hp-hero-right {
            align-items: flex-start !important;
          }
          .hp-hero-desc {
            text-align: start !important;
            max-width: 100% !important;
          }
          .hp-stat-cell {
            padding: 1.25rem 1rem !important;
            border-bottom: 1px solid rgba(255,255,255,0.08) !important;
          }
          .hp-groups-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hp-group-cell {
            border-bottom: 1px solid ${C.border} !important;
          }
          .hp-closer-grid img {
            min-height: 240px !important;
            max-height: 320px !important;
          }
          .hp-field-science {
            grid-template-columns: 1fr !important;
          }
          .hp-field-science > div:first-child {
            border-inline-end: none !important;
            border-bottom: 1px solid ${C.border} !important;
          }
        }
        .hp-hero-video {
          width: 100%;
          aspect-ratio: 16/8;
          object-fit: cover;
          display: block;
          border-radius: 0;
        }
        @media (max-width: 480px) {
          .hp-hero-video {
            aspect-ratio: 16/10 !important;
          }
        }

        /* stats bar */
        .hp-stats-bar {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          background: ${C.dark};
        }
        @media (max-width: 900px) {
          .hp-stats-bar { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 560px) {
          .hp-stats-bar { grid-template-columns: repeat(2, 1fr); }
        }

        /* groups */
        .hp-groups-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }
        @media (max-width: 900px) {
          .hp-groups-row { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 560px) {
          .hp-groups-row { grid-template-columns: repeat(2, 1fr); }
        }

        /* closer look */
        .hp-closer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          min-height: 480px;
        }
        @media (max-width: 768px) {
          .hp-closer-grid { grid-template-columns: 1fr; }
        }

        /* field/science split */
        .hp-field-science {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 768px) {
          .hp-field-science { grid-template-columns: 1fr; }
        }

        .hp-stat-cell {
          padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 2.5vw, 2rem);
        }

        .hp-group-cell {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: background 0.2s;
        }
        .hp-group-cell:hover { background: ${C.bgAlt}; }

        .hp-species-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid ${C.border};
          cursor: pointer;
          transition: color 0.15s;
        }
        .hp-species-row:hover { color: ${C.gold}; }
        .hp-species-row:last-child { border-bottom: none; }

        .hp-herpatlas-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          cursor: pointer;
          transition: opacity 0.15s;
        }
        .hp-herpatlas-item:hover { opacity: 0.8; }
        .hp-herpatlas-item:last-child { border-bottom: none; }

        .hp-pub-row {
          padding: 1.25rem 0;
          border-bottom: 1px solid ${C.border};
        }
        .hp-pub-row:last-child { border-bottom: none; }

        .hp-observe-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid ${C.border};
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: ${C.text};
        }
        .hp-observe-item:last-child { border-bottom: none; }

        .hp-btn-dark {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: ${C.dark};
          color: #F7F4EE;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.15s;
        }
        .hp-btn-dark:hover { background: ${C.darkMid}; }

        .hp-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #F7F4EE;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 400;
          padding: 0.75rem 1.5rem;
          border-radius: 2px;
          border: 1px solid rgba(255,255,255,0.35);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.15s, background 0.15s;
        }
        .hp-btn-outline:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.06); }
      `}</style>

      <div className="hp-wrap">

        {/* ══════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════ */}
        <section>
          {/* Top row: title left/start, description+button right/end */}
          <div className="hp-container">
            <div className="hp-hero-top">
              {/* Headline */}
              <div>
                <p style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.6875rem',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                  textTransform: locale === 'ar' ? 'none' : 'uppercase',
                  color: C.textMuted,
                  marginBottom: '1rem',
                  fontWeight: 600,
                }}>
                  {t.home.heroEyebrow}
                </p>
                <h1 style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5.2vw, 4.75rem)',
                  fontWeight: 600,
                  lineHeight: locale === 'ar' ? 1.25 : 1.02,
                  letterSpacing: locale === 'ar' ? 'normal' : '-0.025em',
                  color: C.text,
                  maxWidth: '18ch',
                }}>
                  {t.home.heroTitle}
                </h1>
              </div>

              {/* Description + button */}
              <div
                className="hp-hero-right"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: dir === 'rtl' ? 'flex-start' : 'flex-end',
                  gap: '1.75rem',
                  paddingBottom: '0.5rem',
                }}
              >
                <p
                  className="hp-hero-desc"
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '1rem',
                    color: C.textMid,
                    lineHeight: 1.7,
                    maxWidth: '38ch',
                    textAlign: dir === 'rtl' ? 'left' : 'right',
                  }}
                >
                  {t.home.heroSubtitle}
                </p>
                <Link href="/checklist" className="hp-btn-dark">
                  <span>{t.home.heroCta}</span>
                  <ArrowIcon style={{ width: 14, height: 14 }} />
                </Link>
              </div>
            </div>
          </div>

          {/* Hero video — edge to edge */}
          <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0D1F15' }}>
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="hp-hero-video"
              style={{ width: '100%', aspectRatio: '16/8', objectFit: 'cover', display: 'block', backgroundColor: '#0D1F15' }}
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 2 — STATS BAR
        ══════════════════════════════════════ */}
        <section>
          <div className="hp-stats-bar">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="hp-stat-cell"
                style={{
                  borderInlineEnd: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 600,
                  color: '#F7F4EE',
                  lineHeight: 1,
                  letterSpacing: locale === 'ar' ? 'normal' : '-0.025em',
                  marginBottom: '0.35rem',
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'rgba(247,244,238,0.65)',
                  fontWeight: 400,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 3 — FIVE GROUPS
        ══════════════════════════════════════ */}
        <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
          <div className="hp-container" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <div>
                <p style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.6875rem',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                  textTransform: locale === 'ar' ? 'none' : 'uppercase',
                  color: C.textMuted,
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                }}>
                  {t.home.groupsEyebrow}
                </p>
                <h2 style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: 600,
                  letterSpacing: locale === 'ar' ? 'normal' : '-0.025em',
                  color: C.text,
                  lineHeight: 1.15,
                }}>
                  {t.home.groupsTitle}
                </h2>
              </div>
              <Link href="/checklist" style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '0.875rem',
                color: C.textMid,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                flexShrink: 0,
              }}>
                <span>{t.home.groupsViewAll}</span>
                <ChevronIcon style={{ width: 14, height: 14 }} />
              </Link>
            </div>
          </div>

          {/* Full-width group grid */}
          <div className="hp-groups-row" style={{
            borderTop: `1px solid ${C.border}`,
          }}>
            {taxonomicGroups.map((grp, i) => (
              <Link
                key={grp.key}
                href={grp.href}
                className="hp-group-cell"
                style={{
                  borderInlineEnd: i < taxonomicGroups.length - 1 ? `1px solid ${C.border}` : 'none',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#2A3A2E' }}>
                  <img
                    src={grp.image}
                    alt={grp.label}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    className="hover:scale-[1.04]"
                  />
                </div>

                {/* Label + count */}
                <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.35rem',
                  }}>
                    <span style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: C.text,
                    }}>
                      {grp.label}
                    </span>
                    <ChevronIcon style={{ width: 14, height: 14, color: C.textMuted }} />
                  </div>
                  <p style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    color: C.textMuted,
                    letterSpacing: locale === 'ar' ? 'normal' : '0.04em',
                  }}>
                    {grp.count} {t.home.speciesCountSuffix} · {grp.endemics > 0 ? `${grp.endemics} ${t.home.endemicsSuffix}` : t.home.nativeMarineSuffix}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 4 — A CLOSER LOOK
        ══════════════════════════════════════ */}
        <section style={{ background: C.bgAlt, borderBottom: `1px solid ${C.border}` }}>
          <div className="hp-container" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)', paddingBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            {/* Header */}
            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.6875rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: C.textMuted,
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}>
                {t.home.spotlightEyebrow}
              </p>
              <h2 style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 600,
                letterSpacing: locale === 'ar' ? 'normal' : '-0.025em',
                color: C.text,
                lineHeight: 1.15,
              }}>
                {t.home.spotlightTitle}
              </h2>
            </div>

            {/* Split: image left, list right */}
            <div className="hp-closer-grid" style={{ border: `1px solid ${C.border}` }}>
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
                <img
                  src={closerLookSpecies[0]?.image ?? 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Pelobates-varaldii.jpg'}
                  alt={closerLookSpecies[0]?.scientificName ?? 'Pelobates varaldii'}
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
                {/* Caption */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1rem 1.25rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    fontStyle: 'italic',
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    {closerLookSpecies[0]?.scientificName ?? 'Pelobates varaldii'}
                  </span>
                  <span style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.5875rem',
                    color: 'rgba(255,255,255,0.65)',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                  }}>
                    {t.home.spotlightPhotoBadge}
                  </span>
                </div>
              </div>

              {/* Species list */}
              <div style={{ padding: '2rem 2rem', backgroundColor: C.bg }}>
                {closerLookSpecies.map((sp) => {
                  const commonName = sp.commonNames[locale] || sp.commonNames.en || sp.family;
                  return (
                    <button
                      key={sp.id}
                      type="button"
                      onClick={() => setSelectedSpecies(sp)}
                      className="hp-species-row"
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        textAlign: dir === 'rtl' ? 'right' : 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.125rem',
                          fontStyle: 'italic',
                          fontWeight: 500,
                          color: C.text,
                          lineHeight: 1.2,
                          marginBottom: '0.2rem',
                        }}>
                          {sp.scientificName}
                        </div>
                        <div style={{
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                          fontSize: '0.6875rem',
                          color: C.textMuted,
                          letterSpacing: locale === 'ar' ? 'normal' : '0.04em',
                        }}>
                          {commonName}
                        </div>
                      </div>
                      <ChevronIcon style={{ width: 15, height: 15, color: C.textMuted, flexShrink: 0 }} />
                    </button>
                  );
                })}

                <div style={{ paddingTop: '1.5rem' }}>
                  <Link href="/checklist" style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: C.text,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    borderBottom: `1px solid ${C.text}`,
                    paddingBottom: '0.15rem',
                  }}>
                    <span>{t.home.spotlightCta}</span>
                    <ArrowIcon style={{ width: 13, height: 13 }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 5 — HERPATLAS MOROCCO (dark)
        ══════════════════════════════════════ */}
        <section style={{ background: C.dark, color: '#F7F4EE' }}>
          <div className="hp-container" style={{ paddingTop: 'clamp(3rem, 6vw, 5.5rem)', paddingBottom: 'clamp(3rem, 6vw, 5.5rem)' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(2rem, 5vw, 6rem)',
              alignItems: 'center',
            }}
            className="hp-herpatlas-grid">
              {/* Left / Start column */}
              <div>
                <p style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.6875rem',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                  textTransform: locale === 'ar' ? 'none' : 'uppercase',
                  color: 'rgba(247,244,238,0.45)',
                  marginBottom: '0.75rem',
                  fontWeight: 600,
                }}>
                  {t.home.herpatlasEyebrow}
                </p>
                <h2 style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  fontWeight: 600,
                  letterSpacing: locale === 'ar' ? 'normal' : '-0.025em',
                  color: '#F7F4EE',
                  lineHeight: locale === 'ar' ? 1.25 : 1.06,
                  marginBottom: '1.25rem',
                }}>
                  {t.home.herpatlasTitle}
                </h2>
                <p style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'rgba(247,244,238,0.7)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                  maxWidth: '38ch',
                }}>
                  {t.home.herpatlasSub}
                </p>
                <Link href="/distribution-reptile-morocco" className="hp-btn-outline">
                  <span>{t.home.herpatlasCta}</span>
                  <ArrowIcon style={{ width: 14, height: 14 }} />
                </Link>
              </div>

              {/* Right / End column — feature list */}
              <div>
                {[
                  { title: t.home.herpatlasRanges, sub: t.home.herpatlasRangesSub },
                  { title: t.home.herpatlasTransects, sub: t.home.herpatlasTransectsSub },
                  { title: t.home.herpatlasTrends, sub: t.home.herpatlasTrendsSub },
                ].map((item, i) => (
                  <div key={item.title} className="hp-herpatlas-item" style={{
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                  }}>
                    <div style={{
                      width: '20px',
                      height: '1px',
                      backgroundColor: 'rgba(247,244,238,0.35)',
                      flexShrink: 0,
                      marginTop: '0.7rem',
                    }} />
                    <div>
                      <div style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                        fontSize: '1.125rem',
                        fontWeight: 500,
                        color: '#F7F4EE',
                        marginBottom: '0.3rem',
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'rgba(247,244,238,0.6)',
                      }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .hp-herpatlas-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══════════════════════════════════════
            SECTION 6 — FROM FIELD TO LITERATURE / SCIENCE ON THE GROUND
        ══════════════════════════════════════ */}
        <section style={{ borderBottom: `1px solid ${C.border}` }}>
          <div className="hp-field-science">
            {/* Left / Publications */}
            <div style={{
              padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 4vw, 4rem)',
              borderInlineEnd: `1px solid ${C.border}`,
              background: C.bg,
            }}>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.6875rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: C.textMuted,
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}>
                {t.home.sciencePubsEyebrow}
              </p>
              <h2 style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 600,
                letterSpacing: locale === 'ar' ? 'normal' : '-0.02em',
                color: C.text,
                lineHeight: 1.15,
                marginBottom: '0.5rem',
              }}>
                {t.home.sciencePubsTitle}
              </h2>
              <div style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 600,
                letterSpacing: '-0.04em',
                color: C.text,
                lineHeight: 1,
                marginBottom: '1.5rem',
              }}>
                {t.home.sciencePubsCount}
              </div>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.6875rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.1em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: C.textMuted,
                marginBottom: '2.5rem',
              }}>
                {t.home.sciencePubsDesc}
              </p>

              {recentPubs.map(pub => (
                <div key={pub.id} className="hp-pub-row">
                  <div style={{
                    fontFamily: 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    color: C.gold,
                    marginBottom: '0.35rem',
                    letterSpacing: '0.04em',
                  }}>
                    {pub.year}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: C.text,
                    lineHeight: 1.35,
                    marginBottom: '0.25rem',
                  }}>
                    {pub.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: C.textMuted,
                  }}>
                    {pub.authors}
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link href="/list-of-publications" style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: C.text,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  borderBottom: `1px solid ${C.text}`,
                  paddingBottom: '0.15rem',
                }}>
                  <span>{t.home.sciencePubsBrowse}</span>
                  <ArrowIcon style={{ width: 13, height: 13 }} />
                </Link>
                <Link href="/bibliography" style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: C.textMid,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  borderBottom: `1px solid ${C.border}`,
                  paddingBottom: '0.15rem',
                }}>
                  <span>{t.home.sciencePubsCitations}</span>
                  <ArrowIcon style={{ width: 13, height: 13 }} />
                </Link>
              </div>
            </div>

            {/* Right / Field Science */}
            <div style={{
              padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 4vw, 4rem)',
              background: C.bgAlt,
            }}>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.6875rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: C.textMuted,
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}>
                {t.home.scienceFieldEyebrow}
              </p>
              <h2 style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 600,
                letterSpacing: locale === 'ar' ? 'normal' : '-0.02em',
                color: C.text,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                {t.home.scienceFieldTitle}
              </h2>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '0.9375rem',
                color: C.textMid,
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '44ch',
              }}>
                {t.home.scienceFieldDesc}
              </p>

              <div style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 600,
                letterSpacing: '-0.04em',
                color: C.text,
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                {t.home.scienceFieldCount}
              </div>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.6875rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.1em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: C.textMuted,
                marginBottom: '2.5rem',
              }}>
                {t.home.scienceFieldContributors}
              </p>

              <Link href="/team" style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '0.875rem',
                color: C.text,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                borderBottom: `1px solid ${C.text}`,
                paddingBottom: '0.15rem',
              }}>
                <span>{t.home.scienceFieldProjects}</span>
                <ArrowIcon style={{ width: 13, height: 13 }} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 7 — SEEN SOMETHING / CTA
        ══════════════════════════════════════ */}
        <section style={{ background: C.bg }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
          className="hp-observe-grid">
            {/* Left — CTA */}
            <div style={{
              padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 4vw, 4rem)',
              borderInlineEnd: `1px solid ${C.border}`,
            }}>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.6875rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: C.textMuted,
                marginBottom: '0.75rem',
                fontWeight: 600,
              }}>
                {t.home.observeEyebrow}
              </p>
              <h2 style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 600,
                letterSpacing: locale === 'ar' ? 'normal' : '-0.02em',
                color: C.text,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}>
                {t.home.observeTitle}
              </h2>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                fontSize: '0.9375rem',
                color: C.textMid,
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '44ch',
              }}>
                {t.home.observeDesc}
              </p>
              <Link href="/observations/submit" className="hp-btn-dark">
                <span>{t.home.observeCta}</span>
                <ArrowIcon style={{ width: 14, height: 14 }} />
              </Link>
            </div>

            {/* Right — observation requirements */}
            <div style={{
              padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 4vw, 4rem)',
              background: C.bgAlt,
            }}>
              <p style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.6875rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: C.textMuted,
                marginBottom: '1.5rem',
                fontWeight: 600,
              }}>
                {t.home.observePriorEyebrow}
              </p>
              {[
                t.home.observeRequirement1,
                t.home.observeRequirement2,
                t.home.observeRequirement3,
                t.home.observeRequirement4,
              ].map((item, i, arr) => (
                <div key={item} className="hp-observe-item" style={{
                  borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : 'none',
                }}>
                  <span style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: C.text
                  }}>
                    {item}
                  </span>
                  <ChevronIcon style={{ width: 14, height: 14, color: C.textMuted }} />
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .hp-observe-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

      </div>
    </>
  );
}
