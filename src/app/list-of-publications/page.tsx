'use client';

import React, { useState } from 'react';
import { PUBLICATIONS_DATA, Publication } from '@/data/publications';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { Search, ExternalLink, Copy, Check, X } from 'lucide-react';

export default function PublicationsPage() {
  const { locale, t, dir } = useLocale();
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const years = Array.from(new Set(PUBLICATIONS_DATA.map(p => p.year))).sort((a, b) => b - a);

  const filtered = PUBLICATIONS_DATA.filter(p => {
    if (selectedYear !== 'all' && p.year.toString() !== selectedYear) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.authors.toLowerCase().includes(q) ||
      p.journal.toLowerCase().includes(q) ||
      p.keywords?.some(k => k.toLowerCase().includes(q))
    );
  });

  const handleCopyCitation = (pub: Publication) => {
    const cite = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}${pub.volume ? `, ${pub.volume}` : ''}${pub.pages ? `: ${pub.pages}` : ''}.${pub.doi ? ` https://doi.org/${pub.doi}` : ''}`;
    navigator.clipboard.writeText(cite);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={locale === 'ar' ? 'الإنتاج الأكاديمي · أرشيف الأبحاث المحكمة' : locale === 'fr' ? 'Production Académique · Archives de Recherche à Comité de Lecture' : 'Academic Output · Peer-Reviewed Research Archive'}
        title={t.nav.publications}
        description={
          locale === 'ar' ? (
            <>
              المقالات المحكمة، والدراسات التصنيفية، والملاحظات الحقلية المنشورة في المجلات العلمية الدولية
              المتخصصة والمؤلفة بشكل فردي أو مشترك من طرف الفريق العلمي لموروكو هيربيتولوجي.
            </>
          ) : locale === 'fr' ? (
            <>
              Articles évalués par des pairs, monographies et notes systématiques publiés dans des revues internationales de zoologie
              rédigés ou co-rédigés par l'équipe scientifique de Morocco Herpetology.
            </>
          ) : (
            <>
              Peer-reviewed articles, monographs, and systematic notes published in international zoological journals
              (including <em>Amphibia-Reptilia</em>, <em>Herpetozoa</em>, <em>Salamandra</em>, <em>Zootaxa</em>, and{' '}
              <em>African Journal of Herpetology</em>) authored or co-authored by the Morocco Herpetology scientific team.
            </>
          )
        }
        stats={[
          { value: '29', label: locale === 'ar' ? 'بحثاً علمياً محكّماً' : locale === 'fr' ? 'Articles évalués par des pairs' : 'Peer-Reviewed Works' },
          { value: `${years.length}`, label: locale === 'ar' ? 'سنوات النشر الأكاديمي' : locale === 'fr' ? 'Années de publication' : 'Active Publication Years' },
          { value: '100%', label: locale === 'ar' ? 'معرفات DOI واستشهادات موثقة' : locale === 'fr' ? 'DOIs et citations vérifiés' : 'Verified DOIs & Citations' },
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
          <div className="pub-filter-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
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
                  aria-label={locale === 'ar' ? 'مسح البحث' : locale === 'fr' ? 'Effacer la recherche' : 'Clear search'}
                >
                  <X style={{ width: '14px', height: '14px' }} />
                </button>
              )}
            </div>

            <div style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.8125rem', color: 'rgba(26,43,30,0.5)' }}>
              {locale === 'ar' ? (
                <>عرض <strong style={{ color: '#1A2B1E' }}>{filtered.length}</strong> من إجمالي {PUBLICATIONS_DATA.length} منشورات علمية</>
              ) : locale === 'fr' ? (
                <>Affichage de <strong style={{ color: '#1A2B1E' }}>{filtered.length}</strong> sur {PUBLICATIONS_DATA.length} publications</>
              ) : (
                <>Showing <strong style={{ color: '#1A2B1E' }}>{filtered.length}</strong> of {PUBLICATIONS_DATA.length} publications</>
              )}
            </div>
          </div>

          {/* Year Filter Tabs */}
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
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.6875rem',
                color: 'rgba(26,43,30,0.45)',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                marginInlineEnd: '0.25rem',
                whiteSpace: 'nowrap',
              }}
            >
              {locale === 'ar' ? 'السنة:' : locale === 'fr' ? 'Année :' : 'Year:'}
            </span>
            <button
              onClick={() => setSelectedYear('all')}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: selectedYear === 'all' ? '#1A2B1E' : 'rgba(26,43,30,0.12)',
                background: selectedYear === 'all' ? '#1A2B1E' : '#F7F4EE',
                color: selectedYear === 'all' ? '#F7F4EE' : 'rgba(26,43,30,0.7)',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {locale === 'ar' ? `جميع السنوات (${PUBLICATIONS_DATA.length})` : locale === 'fr' ? `Toutes les années (${PUBLICATIONS_DATA.length})` : `All Years (${PUBLICATIONS_DATA.length})`}
            </button>
            {years.map(y => (
              <button
                key={y}
                onClick={() => setSelectedYear(y.toString())}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: selectedYear === y.toString() ? '#1A2B1E' : 'rgba(26,43,30,0.12)',
                  background: selectedYear === y.toString() ? '#1A2B1E' : '#F7F4EE',
                  color: selectedYear === y.toString() ? '#F7F4EE' : 'rgba(26,43,30,0.7)',
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
                }}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        {filtered.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map(pub => (
              <article
                key={pub.id}
                style={{
                  padding: '1.75rem',
                  background: '#FFFFFF',
                  border: '1px solid rgba(26,43,30,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,43,30,0.22)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(26,43,30,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,43,30,0.1)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        background: '#FEF9E7',
                        color: '#B38228',
                        border: '1px solid rgba(179,130,40,0.3)',
                      }}
                    >
                      {pub.year}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.6875rem',
                        color: 'rgba(26,43,30,0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {pub.journal}
                    </span>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      onClick={() => handleCopyCitation(pub)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.35rem 0.75rem',
                        background: '#F7F4EE',
                        border: '1px solid rgba(26,43,30,0.12)',
                        borderRadius: '9999px',
                        color: '#1A2B1E',
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.6875rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      title={locale === 'ar' ? 'نسخ المرجع البيبليوغرافي الكامل' : locale === 'fr' ? 'Copier la référence bibliographique complète' : 'Copy full bibliographic citation'}
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check style={{ width: '11px', height: '11px', color: '#27AE60' }} />
                          <span style={{ color: '#27AE60' }}>{t.common.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy style={{ width: '11px', height: '11px', color: 'rgba(26,43,30,0.45)' }} />
                          <span>{t.common.copyCitation}</span>
                        </>
                      )}
                    </button>

                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.35rem 0.75rem',
                          background: '#1A2B1E',
                          borderRadius: '9999px',
                          color: '#F7F4EE',
                          fontFamily: 'var(--font-meta)',
                          fontSize: '0.6875rem',
                          textDecoration: 'none',
                          fontWeight: 500,
                          transition: 'background 0.15s ease',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#28422F'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#1A2B1E'; }}
                      >
                        <span>{locale === 'ar' ? 'رابط المقال DOI' : locale === 'fr' ? 'Article DOI' : 'DOI Paper'}</span>
                        <ExternalLink style={{ width: '10px', height: '10px' }} />
                      </a>
                    )}
                  </div>
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1A2B1E',
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {pub.title}
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: '#4A5E4E',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {pub.authors}
                </p>

                {pub.abstract && (
                  <p
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'rgba(26,43,30,0.6)',
                      lineHeight: 1.6,
                      margin: 0,
                      borderInlineStart: '2px solid rgba(26,43,30,0.12)',
                      paddingInlineStart: '0.75rem',
                    }}
                  >
                    {pub.abstract}
                  </p>
                )}

                {pub.keywords && pub.keywords.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.25rem' }}>
                    {pub.keywords.map(kw => {
                      const displayKw = locale === 'ar' ? ({
                        'Atlas Day Gecko': 'وزغة الأطلس النهارية',
                        'Reproduction': 'التكاثر',
                        'Egg size': 'حجم البيض',
                        'High Atlas': 'الأطلس الكبير',
                        'Morocco': 'المغرب',
                        'Sea turtles': 'السلاحف البحرية',
                        'Strandings': 'الجنوح البحري',
                        'Marine biodiversity': 'التنوع البيولوجي البحري',
                        'Conservation': 'المحافظة الحيوية',
                        'Scorpiones': 'العقارب',
                        'Systematics': 'التصنيف الحيوي',
                        'Taxonomy': 'التصنيف العلمي',
                        'Ecology': 'علم البيئة',
                        'Biogeography': 'البيوجغرافيا',
                        'Distribution': 'التوزيع الجغرافي',
                        'Viperidae': 'الأفاعي الحقيقية',
                        'Snakebite': 'لدغات الأفاعي',
                        'Envenomation': 'التسمم السريري',
                        'Amphibians': 'البرمائيات',
                        'Reptiles': 'الزواحف',
                      }[kw] || kw) : locale === 'fr' ? ({
                        'Atlas Day Gecko': 'Gecko diurne de l\'Atlas',
                        'Reproduction': 'Reproduction',
                        'Egg size': 'Taille des œufs',
                        'High Atlas': 'Haut Atlas',
                        'Morocco': 'Maroc',
                        'Sea turtles': 'Tortues marines',
                        'Strandings': 'Échouages',
                        'Marine biodiversity': 'Biodiversité marine',
                        'Conservation': 'Conservation',
                        'Scorpiones': 'Scorpions',
                        'Systematics': 'Systématique',
                        'Taxonomy': 'Taxonomie',
                        'Ecology': 'Écologie',
                        'Biogeography': 'Biogéographie',
                        'Distribution': 'Distribution',
                        'Viperidae': 'Vipéridés',
                        'Snakebite': 'Morsures de serpents',
                        'Envenomation': 'Envenimation',
                        'Amphibians': 'Amphibiens',
                        'Reptiles': 'Reptiles',
                      }[kw] || kw) : kw;

                      return (
                        <span
                          key={kw}
                          style={{
                            fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                            fontSize: '0.625rem',
                            color: 'rgba(26,43,30,0.5)',
                            background: '#F7F4EE',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                          }}
                        >
                          {displayKw}
                        </span>
                      );
                    })}
                  </div>
                )}
              </article>
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
            <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: '1.25rem', color: '#1A2B1E', marginBottom: '1rem' }}>
              {locale === 'ar' ? 'لم يتم العثور على منشورات تطابق بحثك' : locale === 'fr' ? 'Aucune publication trouvée correspondant à votre recherche' : 'No publications found matching your search'}
            </p>
            <button
              onClick={() => { setSearch(''); setSelectedYear('all'); }}
              style={{
                padding: '0.625rem 1.25rem',
                background: '#1A2B1E',
                color: '#F7F4EE',
                border: 'none',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
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
    </div>
  );
}
