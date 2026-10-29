'use client';

import React from 'react';
import { PARTNERS_DATA } from '@/data/partners';
import { Award } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

export function InstitutionalPartners() {
  const { t, locale } = useLocale();

  // 18 items per track (duplicated set) guarantees 4356px width, covering 4K UHD screens
  const trackItems = [...PARTNERS_DATA, ...PARTNERS_DATA];

  const getCategoryLabel = (cat: string) => {
    if (locale === 'ar') {
      switch (cat) {
        case 'government': return 'مؤسسة حكومية';
        case 'academic': return 'أكاديمي وبحثي';
        case 'conservation': return 'حماية بيئية';
        case 'international': return 'دولي';
        default: return cat;
      }
    }
    if (locale === 'fr') {
      switch (cat) {
        case 'government': return 'Gouvernemental';
        case 'academic': return 'Académique';
        case 'conservation': return 'Conservation';
        case 'international': return 'International';
        default: return cat;
      }
    }
    return cat.toUpperCase();
  };

  const renderCard = (partner: (typeof PARTNERS_DATA)[0], key: string) => {
    const partnerDisplayName = locale === 'ar' && partner.nameAr
      ? partner.nameAr
      : locale === 'fr' && partner.nameFr
      ? (partner.acronym || partner.nameFr)
      : (partner.acronym || partner.name);

    return (
      <a
        key={key}
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="partner-circle-card"
        title={`${partner.name} (${locale === 'ar' ? 'زيارة الموقع الرسمي' : locale === 'fr' ? 'Visiter le portail officiel' : 'Visit official portal'})`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '210px',
          height: '210px',
          borderRadius: '50%',
          flexShrink: 0,
          marginRight: '2rem',
          background: '#FFFFFF',
          border: '1.5px solid rgba(26,43,30,0.12)',
          textDecoration: 'none',
          boxShadow: '0 4px 18px rgba(19,35,23,0.05), inset 0 0 0 1px rgba(26,43,30,0.03)',
          transition: 'all 0.32s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
          padding: '1.25rem',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        {/* Top Category Badge */}
        <span
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          style={{
            fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
            fontSize: '0.5625rem',
            letterSpacing: locale === 'ar' ? 'normal' : '0.14em',
            textTransform: locale === 'ar' ? 'none' : 'uppercase',
            color: '#6E7D70',
            background: '#F0ECE3',
            padding: '0.2rem 0.55rem',
            borderRadius: '9999px',
            fontWeight: 600,
            marginBottom: '0.625rem',
            pointerEvents: 'none',
          }}
        >
          {getCategoryLabel(partner.category)}
        </span>

        {/* Logo Center Area */}
        <div
          style={{
            width: '140px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
            style={{
              maxHeight: '62px',
              maxWidth: '130px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>

        {/* Bottom Partner Acronym / Name */}
        <span
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          style={{
            fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
            fontSize: locale === 'ar' ? '0.8125rem' : '0.9375rem',
            fontWeight: 600,
            color: '#132317',
            lineHeight: 1.2,
            maxWidth: '160px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {partnerDisplayName}
        </span>
      </a>
    );
  };

  return (
    <section
      aria-label={t.home.partnersTitle}
      style={{
        width: '100%',
        background: '#F4EFE6',
        borderTop: '1px solid rgba(26,43,30,0.12)',
        borderBottom: '1px solid rgba(26,43,30,0.12)',
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Section Header ── */}
      <div
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 2.5rem',
          marginBottom: '3.5rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem',
            }}
          >
            <Award style={{ width: '1rem', height: '1rem', color: '#B38228' }} />
            <span
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.625rem',
                letterSpacing: locale === 'ar' ? 'normal' : '0.22em',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                color: '#8A6D3B',
                fontWeight: 600,
              }}
            >
              {t.home.partnersEyebrow}
            </span>
          </div>

          <h2
            style={{
              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
              fontWeight: locale === 'ar' ? 600 : 400,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#132317',
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: locale === 'ar' ? 'normal' : '-0.02em',
            }}
          >
            {t.home.partnersTitle}
          </h2>
        </div>

        <p
          style={{
            fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
            fontSize: '0.9375rem',
            color: '#435345',
            lineHeight: 1.7,
            maxWidth: '52ch',
            margin: 0,
          }}
        >
          {t.home.partnersDesc}
        </p>
      </div>

      {/* ── Seamless Dual-Track Infinite Marquee Container (forced LTR coordinate space) ── */}
      <div
        dir="ltr"
        className="partner-marquee-container"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          direction: 'ltr',
          display: 'flex',
          userSelect: 'none',
        }}
      >
        {/* Left Fade Gradient Mask */}
        <div
          className="partner-mask-left"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'clamp(2rem, 8vw, 9rem)',
            height: '100%',
            background: 'linear-gradient(90deg, #F4EFE6 0%, rgba(244,239,230,0) 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        {/* Right Fade Gradient Mask */}
        <div
          className="partner-mask-right"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'clamp(2rem, 8vw, 9rem)',
            height: '100%',
            background: 'linear-gradient(270deg, #F4EFE6 0%, rgba(244,239,230,0) 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* Primary Track */}
        <div
          dir="ltr"
          className="partner-marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            padding: '1.25rem 0',
            direction: 'ltr',
          }}
        >
          {trackItems.map((partner, idx) => renderCard(partner, `t1-${partner.id}-${idx}`))}
        </div>

        {/* Clone Track for 100% Mathematically Seamless Infinite Loop */}
        <div
          dir="ltr"
          aria-hidden="true"
          className="partner-marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            padding: '1.25rem 0',
            direction: 'ltr',
          }}
        >
          {trackItems.map((partner, idx) => renderCard(partner, `t2-${partner.id}-${idx}`))}
        </div>
      </div>

      <style>{`
        .partner-marquee-track {
          display: flex !important;
          flex-shrink: 0 !important;
          animation: partnerDualMarquee 45s linear infinite;
          will-change: transform;
        }
        .partner-marquee-container:hover .partner-marquee-track {
          animation-play-state: paused;
        }
        [dir='rtl'] .partner-marquee-container,
        [dir='rtl'] .partner-marquee-track {
          direction: ltr !important;
          text-align: left !important;
        }
        @keyframes partnerDualMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .partner-circle-card:hover {
          transform: translateY(-6px) scale(1.04);
          border-color: rgba(179,130,40,0.45) !important;
          box-shadow: 0 14px 32px rgba(19,35,23,0.12), 0 0 0 2px rgba(179,130,40,0.3) !important;
        }
        .partner-circle-card:hover img {
          transform: scale(1.08);
        }
        @media (max-width: 640px) {
          .partner-circle-card {
            width: 165px !important;
            height: 165px !important;
            margin-right: 1.25rem !important;
            padding: 0.85rem !important;
          }
          .partner-mask-left, .partner-mask-right {
            width: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
