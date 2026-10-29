'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t, locale, dir } = useLocale();

  const navCols = [
    {
      title: t.footer.speciesDirectory,
      links: [
        { label: t.nav.checklist, href: '/checklist' },
        { label: t.nav.amphibians, href: '/amphibians-of-morocco' },
        { label: t.nav.lizards, href: '/lizards-of-morocco' },
        { label: t.nav.snakes, href: '/snakes-of-morocco' },
      ],
    },
    {
      title: t.footer.researchAndData,
      links: [
        { label: t.nav.publications, href: '/list-of-publications' },
        { label: t.nav.bibliography, href: '/bibliography' },
        { label: t.nav.distributionAtlas, href: '/distribution-reptile-morocco' },
        { label: t.nav.researchProjects, href: '/research-projects' },
      ],
    },
    {
      title: t.footer.getInvolved,
      links: [
        { label: t.nav.submitObservation, href: '/observations/submit' },
        { label: t.nav.team, href: '/team' },
        { label: t.nav.outreach, href: '/youth-outreach' },
        { label: t.nav.contact, href: '/contact' },
      ],
    },
  ];

  return (
    <footer
      style={{
        background: '#0D1F15',
        borderTop: '1px solid rgba(245,240,232,0.07)',
        textAlign: dir === 'rtl' ? 'right' : 'left',
      }}
    >
      {/* ── Main grid ── */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '4rem clamp(1.25rem, 4vw, 2.5rem) 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Logo mark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src="/logo.png"
              alt="Morocco Herpetology"
              style={{
                height: '46px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '4px',
              }}
            />
            <span
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.75rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.12em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: 'rgba(245,240,232,0.85)',
                fontWeight: 700,
              }}
            >
              {t.brand.title}
            </span>
          </div>

          {/* Bio */}
          <p
            style={{
              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'rgba(245,240,232,0.5)',
              lineHeight: 1.75,
              maxWidth: '32ch',
            }}
          >
            {t.footer.brandBio}
          </p>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a
              href="mailto:info@moroccoherpetology.com"
              style={{
                fontFamily: 'var(--font-meta)',
                fontSize: '0.6875rem',
                color: 'rgba(245,240,232,0.35)',
                letterSpacing: '0.03em',
                textDecoration: 'none',
              }}
            >
              info@moroccoherpetology.com
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=212634376778"
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              style={{
                fontFamily: 'var(--font-meta)',
                fontSize: '0.6875rem',
                color: 'rgba(245,240,232,0.35)',
                letterSpacing: '0.03em',
                textDecoration: 'none',
                width: 'fit-content',
              }}
            >
              +212 634 376 778
            </a>
          </div>
        </div>

        {/* Nav columns */}
        {navCols.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h5
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.625rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.18em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: 'rgba(200,153,46,0.75)',
                margin: 0,
                fontWeight: 600,
              }}
            >
              {col.title}
            </h5>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'rgba(245,240,232,0.45)',
                      textDecoration: 'none',
                      lineHeight: 1.4,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.85)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.45)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '1.75rem clamp(1.25rem, 4vw, 2.5rem)',
          marginTop: '3rem',
          borderTop: '1px solid rgba(245,240,232,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
            fontSize: '0.625rem',
            color: 'rgba(245,240,232,0.35)',
            letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
            margin: 0,
          }}
        >
          © 2026 Morocco Herpetology. {t.footer.copyright}
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
            fontSize: '0.625rem',
            color: 'rgba(245,240,232,0.35)',
            letterSpacing: locale === 'ar' ? 'normal' : '0.1em',
            textTransform: locale === 'ar' ? 'none' : 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(200,153,46,0.7)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.35)'; }}
        >
          {t.footer.backToTop}
          <ArrowUp style={{ width: '0.75rem', height: '0.75rem' }} />
        </button>
      </div>
    </footer>
  );
}
