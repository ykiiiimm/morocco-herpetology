'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/context/LocaleContext';
import { Locale } from '@/data/translations';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Navigation Configuration
───────────────────────────────────────────────────────────── */
interface DropItem {
  label: string;
  sub: string;
  href: string;
}

interface NavGroup {
  id: string;
  label: string;
  href?: string;
  match: string[];
  items?: DropItem[];
}

const LANGS: { code: Locale; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'EN' },
  { code: 'fr', label: 'Français', native: 'FR' },
  { code: 'ar', label: 'العربية', native: 'AR' },
];

export default function Navbar() {
  const { locale, setLocale, t, dir } = useLocale();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const langContainerRef = useRef<HTMLDivElement>(null);

  const navGroups: NavGroup[] = useMemo(() => [
    {
      id: 'species',
      label: t.nav.species,
      match: ['checklist', 'amphibians', 'turtles', 'lizards', 'snakes', 'scorpions', 'species'],
      items: [
        { label: t.nav.checklist, sub: t.nav.checklistSub, href: '/checklist' },
        { label: t.nav.amphibians, sub: t.nav.amphibiansSub, href: '/amphibians-of-morocco' },
        { label: t.nav.turtles, sub: t.nav.turtlesSub, href: '/turtles-of-morocco' },
        { label: t.nav.lizards, sub: t.nav.lizardsSub, href: '/lizards-of-morocco' },
        { label: t.nav.snakes, sub: t.nav.snakesSub, href: '/snakes-of-morocco' },
        { label: t.nav.scorpions, sub: t.nav.scorpionsSub, href: '/scorpions' },
      ],
    },
    {
      id: 'research',
      label: t.nav.research,
      match: ['publications', 'bibliography', 'research-projects', 'distribution'],
      items: [
        { label: t.nav.publications, sub: t.nav.publicationsSub, href: '/list-of-publications' },
        { label: t.nav.bibliography, sub: t.nav.bibliographySub, href: '/bibliography' },
        { label: t.nav.researchProjects, sub: t.nav.researchProjectsSub, href: '/research-projects' },
        { label: t.nav.distributionAtlas, sub: t.nav.distributionAtlasSub, href: '/distribution-reptile-morocco' },
      ],
    },
    { id: 'projects', label: t.nav.projects, href: '/projects', match: ['projects'] },
    { id: 'expeditions', label: t.nav.expeditions, href: '/herping-morocco', match: ['herping-morocco'] },
    {
      id: 'about',
      label: t.nav.about,
      match: ['team', 'academic-courses', 'youth-outreach', 'media', 'contact'],
      items: [
        { label: t.nav.team, sub: t.nav.teamSub, href: '/team' },
        { label: t.nav.courses, sub: t.nav.coursesSub, href: '/academic-courses' },
        { label: t.nav.outreach, sub: t.nav.outreachSub, href: '/youth-outreach' },
        { label: t.nav.media, sub: t.nav.mediaSub, href: '/media' },
        { label: t.nav.contact, sub: t.nav.contactSub, href: '/contact' },
      ],
    },
  ], [t]);

  /* Close mobile drawer and lang popover on route change, plus lock body scroll on mobileOpen */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* Outside click listener for language popover */
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (langContainerRef.current && !langContainerRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  /* Accessible Escape key handler */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileOpen) {
          setMobileOpen(false);
          menuButtonRef.current?.focus();
        }
        setOpenDrop(null);
        setLangOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const enterDrop = useCallback((id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDrop(id);
  }, []);

  const leaveDrop = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpenDrop(null), 180);
  }, []);

  const isActive = (group: NavGroup) =>
    group.match.some(seg => pathname.includes(seg));

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 'var(--header-height)',
          background: 'rgba(247, 244, 238, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(26, 43, 30, 0.1)',
          display: 'flex',
          alignItems: 'center',
          paddingInline: 'var(--gutter)',
          width: '100%',
          boxShadow: '0 1px 4px rgba(26, 43, 30, 0.03)',
        }}
      >
        {/* Wordmark & New Logo */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            marginInlineEnd: 'clamp(0.5rem, 2.5vw, 2rem)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            minWidth: 0,
          }}
        >
          <img
            src="/logo.png"
            alt="Morocco Herpetology"
            style={{
              height: '40px',
              width: 'auto',
              maxHeight: '40px',
              objectFit: 'contain',
              display: 'block',
              flexShrink: 0,
            }}
          />
          <span
            className="nav-brand-label"
            style={{
              fontSize: 'clamp(0.725rem, 1.8vw, 0.8125rem)',
              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
              letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
              textTransform: locale === 'ar' ? 'none' : 'uppercase',
              color: '#1A2B1E',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: 'clamp(140px, 35vw, 280px)',
            }}
          >
            {t.brand.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 flex-1"
          aria-label="Main navigation"
        >
          {navGroups.map(group => (
            <React.Fragment key={group.id}>
              {group.items ? (
                <div
                  className="relative"
                  onMouseEnter={() => enterDrop(group.id)}
                  onMouseLeave={leaveDrop}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-2 rounded transition-colors"
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: isActive(group) ? 600 : 400,
                      color: isActive(group) ? '#1A2B1E' : '#4A5E4E',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      letterSpacing: locale === 'ar' ? 'normal' : '0.01em',
                    }}
                    aria-expanded={openDrop === group.id}
                    aria-haspopup="true"
                    onClick={() => setOpenDrop(v => v === group.id ? null : group.id)}
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDrop === group.id ? 'rotate-180' : ''
                      }`}
                      style={{ color: '#8A5D00' }}
                    />
                  </button>

                  {/* Dropdown Panel */}
                  {openDrop === group.id && group.items && (
                    <div
                      className="absolute top-full mt-2 py-2 rounded z-50"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(26, 43, 30, 0.12)',
                        minWidth: '270px',
                        boxShadow: '0 16px 40px rgba(26, 43, 30, 0.1)',
                        insetInlineStart: 0,
                      }}
                    >
                      {group.items.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex flex-col px-4 py-2.5 transition-colors"
                          style={{
                            textDecoration: 'none',
                            textAlign: dir === 'rtl' ? 'right' : 'left',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = '#F7F4EE';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                          }}
                        >
                          <span
                            style={{
                              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif',
                              fontSize: '0.875rem',
                              color: '#1A2B1E',
                              fontWeight: 600,
                            }}
                          >
                            {item.label}
                          </span>
                          <span
                            style={{
                              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                              fontSize: '0.6875rem',
                              color: '#4A5E4E',
                              letterSpacing: locale === 'ar' ? 'normal' : '0.02em',
                              marginTop: '2px',
                            }}
                          >
                            {item.sub}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={group.href!}
                  className="px-3 py-2 rounded transition-colors"
                  aria-current={isActive(group) ? 'page' : undefined}
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: isActive(group) ? 600 : 400,
                    color: isActive(group) ? '#1A2B1E' : '#4A5E4E',
                    textDecoration: 'none',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.01em',
                    borderBottom: isActive(group) ? '1px solid #1A2B1E' : '1px solid transparent',
                  }}
                >
                  {group.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-2 sm:gap-3 ms-auto">
          {/* Language Selector Popover - shown on desktop PC, hidden on mobile (accessible via mobile menu) */}
          <div ref={langContainerRef} className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: langOpen ? '#F0ECE3' : '#F7F5F0',
                border: '1px solid rgba(26, 43, 30, 0.12)',
                boxShadow: langOpen
                  ? '0 2px 8px rgba(26, 43, 30, 0.12)'
                  : '0 1px 3px rgba(26, 43, 30, 0.06)',
                cursor: 'pointer',
              }}
              aria-label="Select language"
              aria-expanded={langOpen}
              title="Select language"
            >
              <Languages className="w-[20px] h-[20px]" style={{ color: '#1A2B1E' }} />
            </button>

            {/* Dropdown card */}
            {langOpen && (
              <div
                className="absolute z-50"
                style={{
                  top: 'calc(100% + 10px)',
                  insetInlineEnd: 0,
                  minWidth: '170px',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(26, 43, 30, 0.08)',
                  padding: '6px',
                  overflow: 'hidden',
                }}
              >
                {/* Caret pointer */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    insetInlineEnd: '14px',
                    width: '11px',
                    height: '11px',
                    background: '#FFFFFF',
                    transform: 'rotate(45deg)',
                    borderTop: '1px solid rgba(26, 43, 30, 0.08)',
                    borderInlineStart: '1px solid rgba(26, 43, 30, 0.08)',
                    zIndex: 1,
                  }}
                />

                <div className="flex flex-col relative z-10" style={{ gap: '2px' }}>
                  {LANGS.map(l => {
                    const isSelected = locale === l.code;
                    return (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setLocale(l.code);
                          setLangOpen(false);
                        }}
                        className="w-full transition-colors"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          background: isSelected ? '#F5F1E8' : 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: l.code === 'ar' ? 'var(--font-arabic)' : 'var(--font-body, DM Sans, sans-serif)',
                          fontSize: '1rem',
                          fontWeight: isSelected ? 600 : 400,
                          color: isSelected ? '#1A2B1E' : '#6B7280',
                          textAlign: dir === 'rtl' ? 'right' : 'left',
                          letterSpacing: 'normal',
                        }}
                        onMouseEnter={e => {
                          if (!isSelected) (e.currentTarget as HTMLElement).style.background = '#FAFAF8';
                        }}
                        onMouseLeave={e => {
                          if (!isSelected) (e.currentTarget as HTMLElement).style.background = 'transparent';
                        }}
                      >
                        <span>{l.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <Link
            href="/observations/submit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#1A2B1E',
              color: '#FFFFFF',
              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: locale === 'ar' ? 'none' : 'uppercase',
              letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
              padding: '0.6rem 1.15rem',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'background 0.15s ease',
            }}
            className="hidden sm:inline-flex"
          >
            {t.nav.submitObservation}
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            ref={menuButtonRef}
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded transition-colors"
            style={{
              background: 'transparent',
              border: '1px solid rgba(26, 43, 30, 0.15)',
              color: '#1A2B1E',
              cursor: 'pointer',
            }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* ─── Mobile Drawer ─── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-[72px] lg:hidden"
          style={{
            background: '#F7F4EE',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="overflow-y-auto flex-1 px-6 py-6 space-y-2">
            {/* Language Selector in Mobile Drawer */}
            <div
              className="flex items-center justify-between p-1 rounded mb-4 shadow-sm"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(26, 43, 30, 0.15)',
              }}
            >
              {LANGS.map(l => {
                const isSelected = locale === l.code;
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLocale(l.code);
                    }}
                    style={{
                      flex: 1,
                      padding: '0.55rem 0.5rem',
                      borderRadius: '2px',
                      border: 'none',
                      background: isSelected ? '#1A2B1E' : 'transparent',
                      color: isSelected ? '#FFFFFF' : '#4A5E4E',
                      fontFamily: l.code === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                      fontSize: '0.8125rem',
                      cursor: 'pointer',
                      fontWeight: isSelected ? 700 : 500,
                      transition: 'all 0.15s ease',
                      textAlign: 'center',
                    }}
                  >
                    {l.label}
                  </button>
                );
              })}
            </div>

            {navGroups.map(group => (
              <div key={group.id} style={{ borderBottom: '1px solid rgba(26, 43, 30, 0.08)', paddingBottom: '0.5rem' }}>
                {group.items ? (
                  <>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-3"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'Cormorant Garamond, serif',
                        fontSize: '1.25rem',
                        color: '#1A2B1E',
                        fontWeight: 600,
                        textAlign: dir === 'rtl' ? 'right' : 'left',
                      }}
                      onClick={() => setOpenDrop(openDrop === group.id ? null : group.id)}
                      aria-expanded={openDrop === group.id}
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDrop === group.id ? 'rotate-180' : ''
                        }`}
                        style={{ color: '#8A5D00' }}
                      />
                    </button>
                    {openDrop === group.id && (
                      <div
                        className="space-y-2 pb-2"
                        style={{
                          borderInlineStart: '2px solid #B38228',
                          paddingInlineStart: '0.75rem',
                        }}
                      >
                        {group.items.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5"
                            style={{
                              textDecoration: 'none',
                              textAlign: dir === 'rtl' ? 'right' : 'left',
                            }}
                          >
                            <div style={{
                              fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif',
                              fontSize: '0.9375rem',
                              color: '#1A2B1E',
                              fontWeight: 600
                            }}>
                              {item.label}
                            </div>
                            <div
                              style={{
                                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                                fontSize: '0.6875rem',
                                color: '#4A5E4E',
                              }}
                            >
                              {item.sub}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={group.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3"
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'Cormorant Garamond, serif',
                      fontSize: '1.25rem',
                      color: '#1A2B1E',
                      fontWeight: 600,
                      textDecoration: 'none',
                      textAlign: dir === 'rtl' ? 'right' : 'left',
                    }}
                  >
                    {group.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA in Mobile */}
            <div style={{ paddingTop: '1.5rem', marginTop: '1rem' }}>
              <Link
                href="/observations/submit"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '0.85rem',
                  background: '#1A2B1E',
                  color: '#FFFFFF',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: locale === 'ar' ? 'none' : 'uppercase',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                {t.nav.submitObservation}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
