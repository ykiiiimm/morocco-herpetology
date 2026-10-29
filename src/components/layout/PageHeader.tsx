'use client';

import React from 'react';

export interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  stats?: Array<{ label: string; value: string }>;
  notice?: string;
}

export function PageHeader({ eyebrow, title, description, stats, notice }: PageHeaderProps) {
  return (
    <header
      className="page-header-root"
      style={{
        background: '#F7F4EE',
        borderBottom: '1px solid rgba(26,43,30,0.1)',
        paddingBlock: 'clamp(3.5rem, 6vw, 5.5rem)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2.5rem)' }}>
        <div style={{ maxWidth: '52rem' }}>

          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'var(--font-meta)',
              fontSize: '0.625rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(26,43,30,0.4)',
              marginBottom: '1rem',
            }}
          >
            {eyebrow}
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 400,
              color: '#1A2B1E',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
              color: '#4A5E4E',
              lineHeight: 1.72,
              maxWidth: '64ch',
              marginBottom: stats || notice ? '2rem' : 0,
            }}
          >
            {typeof description === 'string' ? <p>{description}</p> : description}
          </div>

          {/* Stats row */}
          {stats && stats.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem 2rem',
                marginBottom: notice ? '1.5rem' : 0,
              }}
            >
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="hidden sm:inline"
                      style={{
                        color: 'rgba(26,43,30,0.2)',
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.875rem',
                        alignSelf: 'center',
                      }}
                    >
                      /
                    </span>
                  )}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'baseline',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontWeight: 600,
                        color: '#1A2B1E',
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {s.value}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.6875rem',
                        color: 'rgba(26,43,30,0.45)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Notice callout */}
          {notice && (
            <div
              role="note"
              style={{
                paddingInlineStart: '1rem',
                borderInlineStart: '2px solid #B38228',
                marginTop: '0.25rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.75rem',
                  color: 'rgba(26,43,30,0.5)',
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                }}
              >
                {notice}
              </p>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
