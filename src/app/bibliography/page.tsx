'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { BIBLIOGRAPHY_DATA, BibliographicRecord } from '@/data/bibliography';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { 
  Search, Copy, Check, Download, 
  ExternalLink, ChevronLeft, ChevronRight,
  Info, X
} from 'lucide-react';

function BibliographySearchContent() {
  const { locale, t, dir } = useLocale();
  const searchParams = useSearchParams();
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft;
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;
  
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [yearMin, setYearMin] = useState<number>(1800);
  const [yearMax, setYearMax] = useState<number>(2026);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 25;

  // Sync initial query if URL changes
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  // Extract filter options
  const filterOptions = useMemo(() => {
    const countries = new Set<string>();
    const classes = new Set<string>();
    const topics = new Set<string>();

    BIBLIOGRAPHY_DATA.forEach(r => {
      if (r.country) countries.add(r.country);
      if (r.class) classes.add(r.class);
      if (r.primary_topic) topics.add(r.primary_topic);
    });

    return {
      countries: Array.from(countries).sort(),
      classes: Array.from(classes).sort(),
      topics: Array.from(topics).sort(),
    };
  }, []);

  // Filtered dataset
  const filteredRecords = useMemo(() => {
    return BIBLIOGRAPHY_DATA.filter(r => {
      if (selectedCountry !== 'all' && r.country !== selectedCountry) return false;
      if (selectedClass !== 'all' && r.class !== selectedClass) return false;
      if (selectedTopic !== 'all' && r.primary_topic !== selectedTopic) return false;
      if (r.year && (r.year < yearMin || r.year > yearMax)) return false;

      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const matchesTitle = r.title?.toLowerCase().includes(q);
        const matchesAuthors = r.authors?.toLowerCase().includes(q);
        const matchesGenus = r.genus?.toLowerCase().includes(q);
        const matchesSource = r.source?.toLowerCase().includes(q);
        const matchesTopics = r.topics?.toLowerCase().includes(q);
        const matchesYear = r.year?.toString().includes(q);
        return matchesTitle || matchesAuthors || matchesGenus || matchesSource || matchesTopics || matchesYear;
      }

      return true;
    });
  }, [query, selectedCountry, selectedClass, selectedTopic, yearMin, yearMax]);

  // Reset page on filter changes
  useEffect(() => {
    setPage(1);
  }, [query, selectedCountry, selectedClass, selectedTopic, yearMin, yearMax]);

  // Pagination slice
  const paginatedRecords = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredRecords.slice(start, start + pageSize);
  }, [filteredRecords, page]);

  const totalPages = Math.ceil(filteredRecords.length / pageSize) || 1;

  // Copy citation helper
  const handleCopyCitation = (record: BibliographicRecord) => {
    const text = record.citation || `${record.authors} (${record.year}). ${record.title}. ${record.source || ''}`;
    navigator.clipboard.writeText(text);
    setCopiedId(record.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Export filtered bibliography to BibTeX
  const handleExportBibTeX = () => {
    const entries = filteredRecords.map(r => {
      const citeKey = `${(r.authors || 'anon').split(' ')[0].replace(/[^a-zA-Z]/g, '')}${r.year || 'nd'}_${r.id}`;
      return `@article{${citeKey},
  author = {${r.authors || 'Unknown'}},
  title = {${r.title || 'Untitled'}},
  journal = {${r.source || ''}},
  year = {${r.year || ''}},
  url = {${r.doi ? `https://doi.org/${r.doi}` : (r.online_url || '')}}
}`;
    }).join('\n\n');

    const blob = new Blob([entries], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `morocco-herpetology-bibliography-${new Date().toISOString().slice(0, 10)}.bib`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetFilters = () => {
    setSelectedCountry('all');
    setSelectedClass('all');
    setSelectedTopic('all');
    setYearMin(1800);
    setYearMax(2026);
    setQuery('');
  };

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={locale === 'ar' ? 'أرشيف الأبحاث التاريخية والحديثة · 1802–2026' : locale === 'fr' ? 'Archive de Recherche Historique & Moderne · 1802–2026' : 'Historical & Modern Research Archive · 1802–2026'}
        title={locale === 'ar' ? 'المراجع العلمية (2٬164 عمل)' : locale === 'fr' ? 'Bibliographie Scientifique (2 164 travaux)' : 'Scientific Bibliography (2,164 Works)'}
        description={
          locale === 'ar' ? (
            <>
              ابحث في الأدبيات العلمية التاريخية والحديثة الشاملة التي تغطي برمائيات المغرب وزواحفه وعقاربه وشمال غرب أفريقيا (1802–2026).
              يفهرس هذا المحرك المنتقى المراجعات التصنيفية، وسجلات التوزيع، والأطروحات البيئية، والأوصاف الأحفورية.
            </>
          ) : locale === 'fr' ? (
            <>
              Recherchez la littérature scientifique historique et moderne complète sur les amphibiens, reptiles
              et scorpions du Maroc et de l'Afrique du Nord-Ouest (1802–2026). Ce moteur indexe les révisions systématiques,
              les données de distribution, les monographies écologiques et les descriptions paléontologiques.
            </>
          ) : (
            <>
              Search the complete historical and modern scientific literature covering the amphibians, reptiles,
              and scorpions of Morocco and Northwest Africa (1802–2026). This curated engine indexes systematic revisions,
              distribution records, ecological monographs, and paleontological descriptions.
            </>
          )
        }
        stats={[
          { value: '2,164', label: locale === 'ar' ? 'مراجع موثقة' : locale === 'fr' ? 'Références auditées' : 'Audited References' },
          { value: locale === 'ar' ? '224 سنة' : '224 Years', label: locale === 'ar' ? 'النطاق الزمني' : locale === 'fr' ? 'Portée chronologique' : 'Chronological Scope' },
          { value: 'BibTeX', label: locale === 'ar' ? 'تصدير أكاديمي' : locale === 'fr' ? 'Interopérabilité académique' : 'Academic Interoperability' },
        ]}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2.5rem clamp(1.25rem, 4vw, 2.5rem) 0' }}>
        {/* Search & Filters Card */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(26,43,30,0.1)',
            padding: '1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {/* Top Search Input & Export */}
          <div className="bib-search-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: '1 1 340px' }}>
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
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={locale === 'ar' ? 'ابحث بالمؤلف أو العنوان أو الجنس أو المجلة...' : locale === 'fr' ? 'Rechercher par auteur, titre, genre ou journal...' : 'Search by author (e.g. Bons, Geniez, Pasteur), title, genus, or journal...'}
                style={{
                  width: '100%',
                  paddingInlineStart: '2.5rem',
                  paddingInlineEnd: query ? '2.5rem' : '1rem',
                  paddingBlock: '0.625rem',
                  background: '#F7F4EE',
                  border: '1px solid rgba(26,43,30,0.12)',
                  borderRadius: '9999px',
                  color: '#1A2B1E',
                  fontSize: '0.875rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  outline: 'none',
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
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
                  aria-label={locale === 'ar' ? 'مسح البحث' : locale === 'fr' ? 'Effacer la recherche' : 'Clear query'}
                >
                  <X style={{ width: '14px', height: '14px' }} />
                </button>
              )}
            </div>

            <button
              onClick={handleExportBibTeX}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                background: '#FFFFFF',
                border: '1px solid rgba(26,43,30,0.16)',
                borderRadius: '9999px',
                color: '#1A2B1E',
                fontFamily: 'var(--font-meta)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1A2B1E'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,43,30,0.16)'; }}
            >
              <Download style={{ width: '13px', height: '13px', color: '#B38228' }} />
              <span>
                {locale === 'ar' ? `تصدير BibTeX (${filteredRecords.length})` : locale === 'fr' ? `Exporter BibTeX (${filteredRecords.length})` : `Export BibTeX (${filteredRecords.length})`}
              </span>
            </button>
          </div>

          {/* Filter Dropdowns Grid */}
          <div
            className="bib-filter-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(26,43,30,0.08)',
            }}
          >
            {/* Country */}
            <div>
              <label style={{ display: 'block', fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: locale === 'ar' ? 'normal' : '0.08em', marginBottom: '0.35rem' }}>
                {locale === 'ar' ? 'النطاق الجغرافي' : locale === 'fr' ? 'Portée géographique' : 'Geographic Scope'}
              </label>
              <select
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.65rem',
                  background: '#F7F4EE',
                  border: '1px solid rgba(26,43,30,0.12)',
                  color: '#1A2B1E',
                  fontSize: '0.8125rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="all">{locale === 'ar' ? 'كل المناطق / الدول' : locale === 'fr' ? 'Toutes les régions / Pays' : 'All Regions / Countries'}</option>
                {filterOptions.countries.map(c => {
                  const countryLabel = locale === 'ar' ? ({
                    'Morocco': 'المغرب',
                    'Western Sahara': 'الصحراء المغربية',
                    'Algeria': 'الجزائر',
                    'Tunisia': 'تونس',
                    'Mauritania': 'موريتانيا',
                    'North Africa': 'شمال إفريقيا',
                    'Spain': 'إسبانيا',
                    'Portugal': 'البرتغال',
                  }[c] || c) : locale === 'fr' ? ({
                    'Morocco': 'Maroc',
                    'Western Sahara': 'Sahara Marocain',
                    'Algeria': 'Algérie',
                    'Tunisia': 'Tunisie',
                    'Mauritania': 'Mauritanie',
                    'North Africa': 'Afrique du Nord',
                    'Spain': 'Espagne',
                    'Portugal': 'Portugal',
                  }[c] || c) : c;

                  return <option key={c} value={c}>{countryLabel}</option>;
                })}
              </select>
            </div>

            {/* Class */}
            <div>
              <label style={{ display: 'block', fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: locale === 'ar' ? 'normal' : '0.08em', marginBottom: '0.35rem' }}>
                {locale === 'ar' ? 'المجموعة التصنيفية' : locale === 'fr' ? 'Groupe taxonomique' : 'Taxonomic Group'}
              </label>
              <select
                value={selectedClass}
                onChange={e => setSelectedClass(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.65rem',
                  background: '#F7F4EE',
                  border: '1px solid rgba(26,43,30,0.12)',
                  color: '#1A2B1E',
                  fontSize: '0.8125rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="all">{locale === 'ar' ? 'كل المجموعات' : locale === 'fr' ? 'Tous les groupes' : 'All Groups'}</option>
                {filterOptions.classes.map(cl => {
                  const classLabel = locale === 'ar' ? ({
                    'Reptilia': 'الزواحف (Reptilia)',
                    'Amphibia': 'البرمائيات (Amphibia)',
                    'Arachnida': 'العنكبيات (Arachnida)',
                  }[cl] || cl) : locale === 'fr' ? ({
                    'Reptilia': 'Reptiles (Reptilia)',
                    'Amphibia': 'Amphibiens (Amphibia)',
                    'Arachnida': 'Arachnides (Arachnida)',
                  }[cl] || cl) : cl;

                  return <option key={cl} value={cl}>{classLabel}</option>;
                })}
              </select>
            </div>

            {/* Topic */}
            <div>
              <label style={{ display: 'block', fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: locale === 'ar' ? 'normal' : '0.08em', marginBottom: '0.35rem' }}>
                {locale === 'ar' ? 'موضوع البحث' : locale === 'fr' ? 'Sujet de recherche' : 'Research Topic'}
              </label>
              <select
                value={selectedTopic}
                onChange={e => setSelectedTopic(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.65rem',
                  background: '#F7F4EE',
                  border: '1px solid rgba(26,43,30,0.12)',
                  color: '#1A2B1E',
                  fontSize: '0.8125rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="all">{locale === 'ar' ? 'كل المواضيع' : locale === 'fr' ? 'Tous les sujets' : 'All Topics'}</option>
                {filterOptions.topics.map(tp => {
                  const topicLabel = locale === 'ar' ? ({
                    'Taxonomy': 'علم التصنيف (Taxonomy)',
                    'Ecology': 'علم البيئة (Ecology)',
                    'Distribution': 'التوزيع الجغرافي (Distribution)',
                    'Conservation': 'المحافظة الحيوية (Conservation)',
                    'Toxinology': 'علم السموم (Toxinology)',
                    'Paleontology': 'علم الأحافير (Paleontology)',
                    'Reproduction': 'التكاثر (Reproduction)',
                    'Morphology': 'علم الشكل (Morphology)',
                    'Biogeography': 'الجغرافيا الحيوية (Biogeography)',
                    'Genetics': 'علم الوراثة (Genetics)',
                    'Ethology': 'علم السلوك (Ethology)',
                  }[tp] || tp) : locale === 'fr' ? ({
                    'Taxonomy': 'Taxonomie',
                    'Ecology': 'Écologie',
                    'Distribution': 'Distribution',
                    'Conservation': 'Conservation',
                    'Toxinology': 'Toxinologie',
                    'Paleontology': 'Paléontologie',
                    'Reproduction': 'Reproduction',
                    'Morphology': 'Morphologie',
                    'Biogeography': 'Biogéographie',
                    'Genetics': 'Génétique',
                    'Ethology': 'Éthologie',
                  }[tp] || tp) : tp;

                  return <option key={tp} value={tp}>{topicLabel}</option>;
                })}
              </select>
            </div>

            {/* Year Range */}
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: locale === 'ar' ? 'none' : 'uppercase', letterSpacing: locale === 'ar' ? 'normal' : '0.08em', marginBottom: '0.35rem' }}>
                {locale === 'ar' ? `السنوات: ${yearMin} – ${yearMax}` : locale === 'fr' ? `Années: ${yearMin} – ${yearMax}` : `Years: ${yearMin} – ${yearMax}`}
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="number"
                  min="1800"
                  max="2026"
                  value={yearMin}
                  onChange={e => setYearMin(Number(e.target.value))}
                  style={{
                    width: '50%',
                    padding: '0.4rem',
                    background: '#F7F4EE',
                    border: '1px solid rgba(26,43,30,0.12)',
                    color: '#1A2B1E',
                    fontSize: '0.8125rem',
                    textAlign: 'center',
                    outline: 'none',
                  }}
                />
                <span style={{ color: 'rgba(26,43,30,0.4)' }}>–</span>
                <input
                  type="number"
                  min="1800"
                  max="2026"
                  value={yearMax}
                  onChange={e => setYearMax(Number(e.target.value))}
                  style={{
                    width: '50%',
                    padding: '0.4rem',
                    background: '#F7F4EE',
                    border: '1px solid rgba(26,43,30,0.12)',
                    color: '#1A2B1E',
                    fontSize: '0.8125rem',
                    textAlign: 'center',
                    outline: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Quick Filter Reset */}
          {(selectedCountry !== 'all' || selectedClass !== 'all' || selectedTopic !== 'all' || query || yearMin !== 1800 || yearMax !== 2026) && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(26,43,30,0.08)',
                fontFamily: 'var(--font-meta)',
                fontSize: '0.75rem',
              }}
            >
              <span style={{ color: 'rgba(26,43,30,0.5)' }}>
                {locale === 'ar'
                  ? <><strong>2٬164</strong> مرجع إجمالي</>
                  : locale === 'fr'
                  ? <>Filtré depuis <strong>2 164</strong> références au total</>
                  : <>Filtered from <strong>2,164</strong> total references</>}
              </span>
              <button
                onClick={resetFilters}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1A2B1E',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.75rem',
                }}
              >
                {locale === 'ar' ? 'إعادة تعيين الفلاتر' : locale === 'fr' ? 'Réinitialiser les filtres' : 'Reset All Filters'}
              </button>
            </div>
          )}
        </div>

        {/* Results Count & Pagination Controls Top */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.25rem',
            fontFamily: 'var(--font-meta)',
            fontSize: '0.8125rem',
            color: 'rgba(26,43,30,0.5)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            {locale === 'ar' ? (
              <>عرض <strong style={{ color: '#1A2B1E' }}>{(page - 1) * pageSize + 1}</strong> إلى{' '}
              <strong style={{ color: '#1A2B1E' }}>{Math.min(page * pageSize, filteredRecords.length)}</strong> من{' '}
              <strong style={{ color: '#1A2B1E' }}>{filteredRecords.length}</strong> مرجع</>
            ) : locale === 'fr' ? (
              <>Affichage de <strong style={{ color: '#1A2B1E' }}>{(page - 1) * pageSize + 1}</strong> à{' '}
              <strong style={{ color: '#1A2B1E' }}>{Math.min(page * pageSize, filteredRecords.length)}</strong> sur{' '}
              <strong style={{ color: '#1A2B1E' }}>{filteredRecords.length}</strong> références</>
            ) : (
              <>Showing <strong style={{ color: '#1A2B1E' }}>{(page - 1) * pageSize + 1}</strong> to{' '}
              <strong style={{ color: '#1A2B1E' }}>{Math.min(page * pageSize, filteredRecords.length)}</strong> of{' '}
              <strong style={{ color: '#1A2B1E' }}>{filteredRecords.length}</strong> matching references</>
            )}
          </div>

          {totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  padding: '0.3rem 0.6rem',
                  background: '#FFFFFF',
                  border: '1px solid rgba(26,43,30,0.12)',
                  borderRadius: '4px',
                  color: '#1A2B1E',
                  opacity: page === 1 ? 0.35 : 1,
                  cursor: page === 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label={locale === 'ar' ? 'الصفحة السابقة' : locale === 'fr' ? 'Page précédente' : 'Previous page'}
              >
                <PrevIcon style={{ width: '14px', height: '14px' }} />
              </button>
              <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.75rem', color: '#1A2B1E' }}>
                {locale === 'ar' ? `صفحة ${page} من ${totalPages}` : locale === 'fr' ? `Page ${page} sur ${totalPages}` : `Page ${page} of ${totalPages}`}
              </span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{
                  padding: '0.3rem 0.6rem',
                  background: '#FFFFFF',
                  border: '1px solid rgba(26,43,30,0.12)',
                  borderRadius: '4px',
                  color: '#1A2B1E',
                  opacity: page === totalPages ? 0.35 : 1,
                  cursor: page === totalPages ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label={locale === 'ar' ? 'الصفحة التالية' : locale === 'fr' ? 'Page suivante' : 'Next page'}
              >
                <NextIcon style={{ width: '14px', height: '14px' }} />
              </button>
            </div>
          )}
        </div>

        {/* References List */}
        {filteredRecords.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {paginatedRecords.map(record => (
              <article
                key={record.id}
                style={{
                  padding: '1.5rem',
                  background: '#FFFFFF',
                  border: '1px solid rgba(26,43,30,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        background: '#FEF9E7',
                        color: '#B38228',
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.15rem 0.5rem',
                        border: '1px solid rgba(179, 130, 40, 0.3)',
                      }}
                    >
                      {record.year || 'N/A'}
                    </span>
                    {record.class && (
                      <span style={{ fontFamily: 'var(--font-meta)', fontSize: '0.75rem', color: '#1A2B1E', fontWeight: 600 }}>
                        {record.class}
                      </span>
                    )}
                    {record.genus && (
                      <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.9375rem', color: '#4A5E4E' }}>
                        {record.genus}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {record.country && (
                      <span style={{ fontFamily: 'var(--font-meta)', fontSize: '0.6875rem', color: 'rgba(26,43,30,0.45)' }}>
                        {record.country}
                      </span>
                    )}
                    {record.primary_topic && (
                      <span
                        style={{
                          fontSize: '0.625rem',
                          fontFamily: 'var(--font-meta)',
                          color: '#4A5E4E',
                          background: '#F7F4EE',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(26,43,30,0.08)',
                        }}
                      >
                        {record.primary_topic}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1875rem',
                    fontWeight: 600,
                    color: '#1A2B1E',
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {record.title}
                </h3>

                {/* Authors */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: '#4A5E4E',
                    margin: 0,
                  }}
                >
                  {record.authors}
                </p>

                {/* Source Journal */}
                {record.source && (
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '0.875rem',
                      color: 'rgba(26,43,30,0.5)',
                      margin: 0,
                    }}
                  >
                    {record.source}
                  </p>
                )}

                {/* Actions */}
                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(26,43,30,0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-meta)',
                    fontSize: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      onClick={() => handleCopyCitation(record)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: copiedId === record.id ? '#27AE60' : 'rgba(26,43,30,0.6)',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontFamily: 'var(--font-meta)',
                        fontSize: '0.75rem',
                        padding: 0,
                      }}
                    >
                      {copiedId === record.id ? (
                        <>
                          <Check style={{ width: '12px', height: '12px', color: '#27AE60' }} />
                          <span>{t.common.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy style={{ width: '12px', height: '12px' }} />
                          <span>{t.common.copyCitation}</span>
                        </>
                      )}
                    </button>

                    {record.doi && (
                      <a
                        href={`https://doi.org/${record.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#1A2B1E',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        <span>DOI: {record.doi}</span>
                        <ExternalLink style={{ width: '10px', height: '10px' }} />
                      </a>
                    )}

                    {!record.doi && record.online_url && (
                      <a
                        href={record.online_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#1A2B1E',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        <span>{locale === 'ar' ? 'رابط المقال' : locale === 'fr' ? "Lien de l'article" : 'Article Link'}</span>
                        <ExternalLink style={{ width: '10px', height: '10px' }} />
                      </a>
                    )}
                  </div>

                  <span style={{ color: 'rgba(26,43,30,0.4)', fontSize: '0.6875rem' }}>
                    ID: {record.record_id}
                  </span>
                </div>
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
            <Info style={{ width: '32px', height: '32px', color: '#B38228', marginInline: 'auto', marginBottom: '0.75rem', opacity: 0.6 }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#1A2B1E', marginBottom: '0.5rem' }}>
              {locale === 'ar' ? 'لا توجد مراجع' : locale === 'fr' ? 'Aucune référence trouvée' : 'No references found'}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#4A5E4E', marginBottom: '1.5rem' }}>
              {locale === 'ar'
                ? `لا توجد سجلات علمية تطابق استعلامك "${query}" مع الفلاتر النشطة.`
                : locale === 'fr'
                ? `Aucun enregistrement scientifique ne correspond à votre requête "${query}" avec les filtres actifs.`
                : `No scientific records match your query "${query}" with the active filters.`}
            </p>
            <button
              onClick={resetFilters}
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

        {/* Bottom Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '2.5rem' }}>
            <button
              onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
              disabled={page === 1}
              style={{
                padding: '0.45rem 0.85rem',
                background: '#FFFFFF',
                border: '1px solid rgba(26,43,30,0.12)',
                borderRadius: '4px',
                color: '#1A2B1E',
                opacity: page === 1 ? 0.35 : 1,
                cursor: page === 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.75rem',
              }}
              aria-label={locale === 'ar' ? 'الصفحة السابقة' : locale === 'fr' ? 'Page précédente' : 'Previous page'}
            >
              <PrevIcon style={{ width: '14px', height: '14px' }} />
              <span>{locale === 'ar' ? 'السابق' : locale === 'fr' ? 'Précédent' : 'Previous'}</span>
            </button>

            <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.75rem', color: '#1A2B1E', padding: '0 0.5rem' }}>
              {locale === 'ar' ? `صفحة ${page} من ${totalPages}` : locale === 'fr' ? `Page ${page} sur ${totalPages}` : `Page ${page} of ${totalPages}`}
            </span>

            <button
              onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
              disabled={page === totalPages}
              style={{
                padding: '0.45rem 0.85rem',
                background: '#FFFFFF',
                border: '1px solid rgba(26,43,30,0.12)',
                borderRadius: '4px',
                color: '#1A2B1E',
                opacity: page === totalPages ? 0.35 : 1,
                cursor: page === totalPages ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.75rem',
              }}
              aria-label={locale === 'ar' ? 'الصفحة التالية' : locale === 'fr' ? 'Page suivante' : 'Next page'}
            >
              <span>{locale === 'ar' ? 'التالي' : locale === 'fr' ? 'Suivant' : 'Next'}</span>
              <NextIcon style={{ width: '14px', height: '14px' }} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

function BibliographyFallback() {
  const { locale } = useLocale();
  return (
    <div style={{ padding: '6rem', textAlign: 'center', color: 'rgba(26,43,30,0.5)', background: '#F7F4EE', fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)' }}>
      {locale === 'ar' ? 'جاري تحميل المراجع العلمية...' : locale === 'fr' ? 'Chargement de la bibliographie scientifique...' : 'Loading Scientific Bibliography...'}
    </div>
  );
}

export default function BibliographyPage() {
  return (
    <Suspense fallback={<BibliographyFallback />}>
      <BibliographySearchContent />
    </Suspense>
  );
}
