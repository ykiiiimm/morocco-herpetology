'use client';

import React, { useState } from 'react';
import { TEAM_MEMBERS } from '@/data/team';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { ExternalLink, User } from 'lucide-react';
import Link from 'next/link';

export default function TeamPage() {
  const { locale, t, dir } = useLocale();
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredMembers = TEAM_MEMBERS.filter(m => {
    if (activeTab === 'all') return true;
    return m.category === activeTab;
  });

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={t.pages.team.eyebrow}
        title={t.pages.team.title}
        description={t.pages.team.description}
        stats={[
          { value: `${TEAM_MEMBERS.length}`, label: t.pages.team.stat1 },
          { value: 'FPT / UIZ', label: t.pages.team.stat2 },
          { value: '100%', label: t.pages.team.stat3 },
        ]}
      />

      <div className="container-site" style={{ paddingTop: '2.5rem' }}>
        {/* Category Tabs Toolbar */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(26, 43, 30, 0.1)',
            borderRadius: '4px',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
          }}
        >
          {[
            { id: 'all', label: t.pages.team.allMembers, count: TEAM_MEMBERS.length },
            { id: 'principal', label: t.pages.team.principal, count: TEAM_MEMBERS.filter(m => m.category === 'principal').length },
            { id: 'phd', label: t.pages.team.phd, count: TEAM_MEMBERS.filter(m => m.category === 'phd').length },
            { id: 'technician', label: t.pages.team.technician, count: TEAM_MEMBERS.filter(m => m.category === 'technician').length },
            { id: 'student', label: t.pages.team.student, count: TEAM_MEMBERS.filter(m => m.category === 'student').length },
            { id: 'collaborator', label: t.pages.team.collaborator, count: TEAM_MEMBERS.filter(m => m.category === 'collaborator').length },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '2px',
                border: '1px solid',
                borderColor: activeTab === tab.id ? '#1A2B1E' : 'rgba(26, 43, 30, 0.15)',
                background: activeTab === tab.id ? '#1A2B1E' : '#FFFFFF',
                color: activeTab === tab.id ? '#FFFFFF' : '#4A5E4E',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontWeight: activeTab === tab.id ? 600 : 400,
                transition: 'all 0.15s ease',
              }}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredMembers.map(member => {
            const name = locale === 'ar' && member.nameAr ? member.nameAr : member.name;
            const role = locale === 'fr' ? member.roleFr : locale === 'ar' ? member.roleAr : member.role;
            const bio = locale === 'fr' ? member.bioFr : locale === 'ar' ? member.bioAr : member.bio;

            return (
              <article
                key={member.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '4px',
                  border: '1px solid rgba(26, 43, 30, 0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
                }}
              >
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        background: '#F7F4EE',
                        border: '1px solid rgba(26, 43, 30, 0.12)',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={e => {
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <User style={{ width: '28px', height: '28px', color: '#B38228', opacity: 0.6 }} />
                      )}
                    </div>

                    <div>
                      <h2
                        style={{
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'Cormorant Garamond, serif',
                          fontSize: '1.35rem',
                          fontWeight: 600,
                          color: '#1A2B1E',
                          lineHeight: 1.2,
                        }}
                      >
                        {name}
                      </h2>
                      <span
                        style={{
                          fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                          fontSize: '0.6875rem',
                          color: '#8A5D00',
                          display: 'block',
                          marginTop: '0.25rem',
                          letterSpacing: locale === 'ar' ? 'normal' : '0.04em',
                          textTransform: locale === 'ar' ? 'none' : 'uppercase',
                        }}
                      >
                        {role}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif',
                      fontSize: '0.875rem',
                      color: '#4A5E4E',
                      lineHeight: 1.65,
                    }}
                  >
                    {bio}
                  </p>
                </div>

                <div
                  style={{
                    padding: '0.875rem 1.75rem',
                    background: '#F7F4EE',
                    borderTop: '1px solid rgba(26, 43, 30, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                    fontSize: '0.6875rem',
                  }}
                >
                  <span style={{ color: 'rgba(26, 43, 30, 0.5)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: locale === 'ar' ? 'normal' : '0.06em' }}>
                    {locale === 'ar' ? 'جامعة ابن زهر' : locale === 'fr' ? 'Université Ibn Zohr' : 'Ibn Zohr University'}
                  </span>

                  <Link
                    href={`/list-of-publications?q=${encodeURIComponent(member.name.split(' ')[1] || member.name)}`}
                    style={{
                      color: '#8A5D00',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                      textTransform: locale === 'ar' ? 'none' : 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    <span>{locale === 'ar' ? 'المنشورات' : locale === 'fr' ? 'Publications' : 'Publications'}</span>
                    <ExternalLink className="rtl-flip" style={{ width: '10px', height: '10px' }} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
