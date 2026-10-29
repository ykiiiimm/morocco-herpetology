'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SPECIES_DATA, Species, getSpeciesSlug } from '@/data/species';
import { useLocale } from '@/context/LocaleContext';
import { SpeciesCard } from '@/components/species/SpeciesCard';
import { SpeciesDetailModal } from '@/components/species/SpeciesDetailModal';
import {
  Search, LayoutGrid, Table, Download,
  Award, ArrowUpDown, Info, X, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

function ChecklistContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const { locale, t, dir } = useLocale();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [endemicOnly, setEndemicOnly] = useState<boolean>(false);
  const [selectedFamily, setSelectedFamily] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'family' | 'status'>('name');
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
    }
  }, [initialQuery]);

  // Unique families
  const allFamilies = useMemo(() => {
    const families = new Set(SPECIES_DATA.map(s => s.family));
    return Array.from(families).sort();
  }, []);

  // Filter & sort
  const filteredSpecies = useMemo(() => {
    return SPECIES_DATA.filter(s => {
      if (selectedGroup !== 'all' && s.group !== selectedGroup) return false;
      if (selectedStatus !== 'all' && s.status !== selectedStatus) return false;
      if (endemicOnly && !s.isEndemic && !s.possibleEndemic) return false;
      if (selectedFamily !== 'all' && s.family !== selectedFamily) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesSci = s.scientificName.toLowerCase().includes(q);
        const matchesFamily = s.family.toLowerCase().includes(q);
        const matchesEn = s.commonNames.en?.toLowerCase().includes(q);
        const matchesFr = s.commonNames.fr?.toLowerCase().includes(q);
        const matchesAr = s.commonNames.ar?.toLowerCase().includes(q);
        const matchesDist = s.distributionNotes?.toLowerCase().includes(q);
        return matchesSci || matchesFamily || matchesEn || matchesFr || matchesAr || matchesDist;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'family') {
        return a.family.localeCompare(b.family) || a.scientificName.localeCompare(b.scientificName);
      }
      if (sortBy === 'status') {
        const order: Record<string, number> = { CR: 1, EN: 2, VU: 3, NT: 4, LC: 5, DD: 6, NE: 7 };
        return (order[a.status] || 99) - (order[b.status] || 99);
      }
      return a.scientificName.localeCompare(b.scientificName);
    });
  }, [searchQuery, selectedGroup, selectedStatus, endemicOnly, selectedFamily, sortBy]);

  // CSV export
  const handleExportCSV = () => {
    const headers = ['Scientific Name', 'Authority', 'Class', 'Order', 'Family', 'Group', 'Common Name EN', 'Common Name FR', 'Common Name AR', 'IUCN Status', 'Endemic', 'Distribution'];
    const rows = filteredSpecies.map(s => [
      `"${s.scientificName}"`,
      `"${s.authority}"`,
      `"${s.class}"`,
      `"${s.order}"`,
      `"${s.family}"`,
      `"${s.group}"`,
      `"${s.commonNames.en || ''}"`,
      `"${s.commonNames.fr || ''}"`,
      `"${s.commonNames.ar || ''}"`,
      `"${s.status}"`,
      s.isEndemic ? 'Yes' : (s.possibleEndemic ? 'Potential' : 'No'),
      `"${(s.distributionNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `morocco-herpetology-checklist-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hasActiveFilters = selectedGroup !== 'all' || selectedStatus !== 'all' || endemicOnly || selectedFamily !== 'all' || searchQuery.trim().length > 0;

  const resetFilters = () => {
    setSelectedGroup('all');
    setSelectedStatus('all');
    setEndemicOnly(false);
    setSelectedFamily('all');
    setSearchQuery('');
  };

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingTop: '3rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2.5rem)' }}>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-meta)',
              fontSize: '0.625rem',
              letterSpacing: dir === 'rtl' ? '0' : '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(26,43,30,0.4)',
              marginBottom: '0.5rem',
            }}
          >
            {locale === 'ar' ? 'السجل التصنيفي الوطني' : locale === 'fr' ? 'Registre Taxonomique National' : 'National Taxonomic Registry'}
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h1
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 400,
                  color: '#1A2B1E',
                  margin: '0.25rem 0 0.75rem',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                {locale === 'ar' ? 'قائمة الزواحف والبرمائيات والعنكبيات في المغرب' : locale === 'fr' ? 'Checklist de l\'Herpétofaune & des Arachnides du Maroc' : 'Checklist of Moroccan Herpetofauna & Arachnida'}
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#4A5E4E',
                  maxWidth: '64ch',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {locale === 'ar'
                  ? 'فهرس مرجعي شامل يوثق 136 نوعاً أصيلاً في المغرب. تتبع جميع السجلات التسمية العلمية المحققة وتقييمات القائمة الحمراء لـ IUCN وبيانات العينات الميدانية.'
                  : locale === 'fr'
                  ? 'Index de référence exhaustif documentant 136 taxons indigènes du Maroc. Toutes les données reposent sur la nomenclature systématique vérifiée et les statuts UICN.'
                  : 'Comprehensive reference index documenting 136 native Moroccan taxa. All records follow verified systematic nomenclature, regional IUCN conservation assessments, and field voucher data.'}
              </p>
            </div>

            <div style={{ fontFamily: 'var(--font-meta)', fontSize: '0.8125rem', color: 'rgba(26,43,30,0.5)' }}>
              {locale === 'ar' ? 'عرض' : locale === 'fr' ? 'Affichage' : 'Showing'} <strong style={{ color: '#1A2B1E' }}>{filteredSpecies.length}</strong> {locale === 'ar' ? 'من أصل' : locale === 'fr' ? 'sur' : 'of'} {SPECIES_DATA.length} {locale === 'ar' ? 'نوعاً' : locale === 'fr' ? 'espèces' : 'species'}
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
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
          {/* Top Row: Search + Sort + Mode + Export */}
          <div className="checklist-topbar" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: '500px' }}>
              <Search
                style={{
                  position: 'absolute',
                  insetInlineStart: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  color: 'rgba(26,43,30,0.4)',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t.common.searchPlaceholder}
                style={{
                  width: '100%',
                  paddingInlineStart: '2.5rem',
                  paddingInlineEnd: searchQuery ? '2.5rem' : '1rem',
                  paddingBlock: '0.625rem',
                  background: '#F7F4EE',
                  border: '1px solid rgba(26,43,30,0.12)',
                  borderRadius: '9999px',
                  color: '#1A2B1E',
                  fontSize: '0.875rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  outline: 'none',
                  textAlign: dir === 'rtl' ? 'right' : 'left',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    insetInlineEnd: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(26,43,30,0.4)',
                    cursor: 'pointer',
                  }}
                  aria-label="Clear search query"
                >
                  <X style={{ width: '14px', height: '14px' }} />
                </button>
              )}
            </div>

            {/* View, Sort, Export Actions */}
            <div className="checklist-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              {/* Sort Selector */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#F7F4EE',
                  border: '1px solid rgba(26,43,30,0.12)',
                  borderRadius: '9999px',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-meta)',
                  color: '#4A5E4E',
                }}
              >
                <ArrowUpDown style={{ width: '13px', height: '13px', color: '#B38228' }} />
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#1A2B1E',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-meta)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="name">{locale === 'ar' ? 'أبجدياً (أ-ي)' : locale === 'fr' ? 'Alphabétique (A–Z)' : 'Alphabetical (A–Z)'}</option>
                  <option value="family">{locale === 'ar' ? 'حسب العائلة التصنيفية' : locale === 'fr' ? 'Famille taxonomique' : 'Taxonomic Family'}</option>
                  <option value="status">{locale === 'ar' ? 'درجة تهديد IUCN' : locale === 'fr' ? 'Niveau de menace UICN' : 'IUCN Threat Level'}</option>
                </select>
              </div>

              {/* View Switcher */}
              <div
                style={{
                  display: 'flex',
                  border: '1px solid rgba(26,43,30,0.14)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '0.45rem 0.75rem',
                    background: viewMode === 'grid' ? '#1A2B1E' : '#F7F4EE',
                    color: viewMode === 'grid' ? '#F7F4EE' : 'rgba(26,43,30,0.6)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  title="Grid view"
                  aria-label="Grid view"
                >
                  <LayoutGrid style={{ width: '15px', height: '15px' }} />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  style={{
                    padding: '0.45rem 0.75rem',
                    background: viewMode === 'table' ? '#1A2B1E' : '#F7F4EE',
                    color: viewMode === 'table' ? '#F7F4EE' : 'rgba(26,43,30,0.6)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  title="Table view"
                  aria-label="Table view"
                >
                  <Table style={{ width: '15px', height: '15px' }} />
                </button>
              </div>

              {/* Export CSV Button */}
              <button
                onClick={handleExportCSV}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 1rem',
                  background: '#FFFFFF',
                  border: '1px solid rgba(26,43,30,0.18)',
                  borderRadius: '9999px',
                  color: '#1A2B1E',
                  fontFamily: 'var(--font-meta)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1A2B1E'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,43,30,0.18)'; }}
                title="Download CSV for academic research"
              >
                <Download style={{ width: '13px', height: '13px', color: '#B38228' }} />
                <span>{locale === 'ar' ? `تصدير CSV (${filteredSpecies.length})` : locale === 'fr' ? `Exporter CSV (${filteredSpecies.length})` : `Export CSV (${filteredSpecies.length})`}</span>
              </button>
            </div>
          </div>

          {/* Group Filter Tabs */}
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
                marginInlineEnd: '0.5rem',
                whiteSpace: 'nowrap',
              }}
            >
              {t.common.filterByGroup}:
            </span>
            {[
              { id: 'all', label: `${t.common.all} (136)` },
              { id: 'lizards', label: `${t.nav.lizards} (81)` },
              { id: 'snakes', label: `${t.nav.snakes} (26)` },
              { id: 'amphibians', label: `${t.nav.amphibians} (14)` },
              { id: 'turtles', label: `${t.nav.turtles} (8)` },
              { id: 'scorpions', label: `${t.nav.scorpions} (7)` },
            ].map(grp => (
              <button
                key={grp.id}
                onClick={() => setSelectedGroup(grp.id)}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: selectedGroup === grp.id ? '#1A2B1E' : 'rgba(26,43,30,0.12)',
                  background: selectedGroup === grp.id ? '#1A2B1E' : '#F7F4EE',
                  color: selectedGroup === grp.id ? '#F7F4EE' : 'rgba(26,43,30,0.7)',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.75rem',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.04em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
                }}
              >
                {grp.label}
              </button>
            ))}
          </div>

          {/* Secondary Filters: IUCN, Endemism, Family */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', paddingTop: '0.5rem' }}>
            {/* Endemic Only Toggle */}
            <button
              onClick={() => setEndemicOnly(!endemicOnly)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: endemicOnly ? '#B38228' : 'rgba(26,43,30,0.12)',
                background: endemicOnly ? '#FEF9E7' : '#F7F4EE',
                color: endemicOnly ? '#B38228' : 'rgba(26,43,30,0.7)',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Award style={{ width: '13px', height: '13px' }} />
              <span>{t.common.endemicOnly} (38)</span>
            </button>

            {/* IUCN Status Dropdown */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#F7F4EE',
                border: '1px solid rgba(26,43,30,0.12)',
                borderRadius: '9999px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.75rem',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                color: '#4A5E4E',
              }}
            >
              <span>{t.common.status}:</span>
              <select
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1A2B1E',
                  fontSize: '0.75rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="all">{t.common.allStatuses}</option>
                <option value="CR">{locale === 'ar' ? 'CR · مهدد بالانقراض أقصى درجات الحرج' : locale === 'fr' ? 'CR · En danger critique' : 'CR · Critically Endangered'}</option>
                <option value="EN">{locale === 'ar' ? 'EN · مهدد بالانقراض' : locale === 'fr' ? 'EN · En danger' : 'EN · Endangered'}</option>
                <option value="VU">{locale === 'ar' ? 'VU · معرض لخطر الانقراض' : locale === 'fr' ? 'VU · Vulnérable' : 'VU · Vulnerable'}</option>
                <option value="NT">{locale === 'ar' ? 'NT · قريب من التهديد' : locale === 'fr' ? 'NT · Quasi menacé' : 'NT · Near Threatened'}</option>
                <option value="LC">{locale === 'ar' ? 'LC · قلق غير ملح' : locale === 'fr' ? 'LC · Préoccupation mineure' : 'LC · Least Concern'}</option>
                <option value="DD">{locale === 'ar' ? 'DD · نقص في البيانات' : locale === 'fr' ? 'DD · Données insuffisantes' : 'DD · Data Deficient'}</option>
              </select>
            </div>

            {/* Family Dropdown */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#F7F4EE',
                border: '1px solid rgba(26,43,30,0.12)',
                borderRadius: '9999px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.75rem',
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                color: '#4A5E4E',
              }}
            >
              <span>{t.common.family}:</span>
              <select
                value={selectedFamily}
                onChange={e => setSelectedFamily(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1A2B1E',
                  fontSize: '0.75rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="all">{t.common.allFamilies} ({allFamilies.length})</option>
                {allFamilies.map(fam => (
                  <option key={fam} value={fam}>{fam}</option>
                ))}
              </select>
            </div>

            {/* Reset Filters button */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1A2B1E',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  marginInlineStart: 'auto',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                {t.common.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Results Presentation — Grid */}
        {viewMode === 'grid' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredSpecies.map(sp => (
              <SpeciesCard
                key={sp.id}
                species={sp}
                onSelect={s => setSelectedSpecies(s)}
              />
            ))}
          </div>
        )}

        {/* Scientific Table View */}
        {viewMode === 'table' && (
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(26,43,30,0.1)',
              overflow: 'hidden',
            }}
          >
            <div className="checklist-table-wrap" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                <thead>
                  <tr
                    style={{
                      borderBottom: '1px solid rgba(26,43,30,0.1)',
                      background: '#F7F4EE',
                      fontFamily: 'var(--font-meta)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(26,43,30,0.5)',
                    }}
                  >
                    <th style={{ padding: '0.875rem 1rem' }}>{locale === 'ar' ? 'العائلة / المجموعة' : locale === 'fr' ? 'Famille / Groupe' : 'Family / Group'}</th>
                    <th style={{ padding: '0.875rem 1rem' }}>{locale === 'ar' ? 'الاسم العلمي والواضع' : locale === 'fr' ? 'Nom scientifique & Auteur' : 'Scientific Name & Authority'}</th>
                    <th style={{ padding: '0.875rem 1rem' }}>{locale === 'ar' ? 'الأسماء الشائعة' : locale === 'fr' ? 'Noms vernaculaires' : 'Common Names'}</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'center' }}>IUCN</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'center' }}>{locale === 'ar' ? 'التوطن' : locale === 'fr' ? 'Endémisme' : 'Endemism'}</th>
                    <th style={{ padding: '0.875rem 1rem' }}>{locale === 'ar' ? 'الانتشار' : locale === 'fr' ? 'Distribution' : 'Distribution'}</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>{locale === 'ar' ? 'بطاقة النوع' : locale === 'fr' ? 'Fiche taxon' : 'Taxon Sheet'}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSpecies.map(sp => (
                    <tr
                      key={sp.id}
                      onClick={() => setSelectedSpecies(sp)}
                      style={{
                        borderBottom: '1px solid rgba(26,43,30,0.06)',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F7F4EE'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                    >
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: 600, color: '#1A2B1E' }}>{sp.family}</div>
                        <div style={{ fontFamily: 'var(--font-meta)', fontSize: '0.625rem', color: 'rgba(26,43,30,0.45)', textTransform: 'capitalize' }}>{sp.group}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontStyle: 'italic', color: '#1A2B1E', fontWeight: 600 }}>
                          {sp.genus} {sp.speciesEpithet}
                        </div>
                        <div style={{ fontFamily: 'var(--font-meta)', fontSize: '0.6875rem', color: 'rgba(26,43,30,0.45)' }}>{sp.authority}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ color: '#1A2B1E' }}>{locale === 'ar' ? (sp.commonNames.ar || sp.commonNames.fr || sp.commonNames.en) : locale === 'fr' ? (sp.commonNames.fr || sp.commonNames.en) : (sp.commonNames.en || '—')}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(26,43,30,0.5)' }}>{locale === 'ar' ? sp.commonNames.en : sp.commonNames.fr}</div>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-meta)',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            padding: '0.2rem 0.5rem',
                            background: sp.status === 'CR' || sp.status === 'EN' ? '#FDECEB' : sp.status === 'VU' ? '#FEF9E7' : '#EBF5EB',
                            color: sp.status === 'CR' || sp.status === 'EN' ? '#C0392B' : sp.status === 'VU' ? '#B38228' : '#27AE60',
                            border: '1px solid rgba(26,43,30,0.1)',
                          }}
                        >
                          {sp.status}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        {sp.isEndemic ? (
                          <span
                            style={{
                              fontSize: '0.625rem',
                              fontFamily: 'var(--font-meta)',
                              fontWeight: 600,
                              color: '#B38228',
                              background: '#FEF9E7',
                              padding: '0.2rem 0.5rem',
                              border: '1px solid rgba(179,130,40,0.3)',
                            }}
                          >
                            {locale === 'ar' ? 'متوطن' : locale === 'fr' ? 'Endémique' : 'Endemic'}
                          </span>
                        ) : sp.possibleEndemic ? (
                          <span
                            style={{
                              fontSize: '0.625rem',
                              fontFamily: 'var(--font-meta)',
                              color: '#4A5E4E',
                              background: '#F7F4EE',
                              padding: '0.2rem 0.5rem',
                              border: '1px solid rgba(26,43,30,0.1)',
                            }}
                          >
                            {locale === 'ar' ? 'شبه متوطن' : locale === 'fr' ? 'Quasi-endémique' : 'Near-Endemic'}
                          </span>
                        ) : (
                          <span style={{ color: 'rgba(26,43,30,0.3)' }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: '1rem', maxWidth: '240px', color: '#4A5E4E', fontSize: '0.75rem' }}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {sp.distributionNotes || (locale === 'ar' ? 'المغرب' : locale === 'fr' ? 'Maroc' : 'Morocco')}
                        </div>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right' }}>
                        <Link
                          href={`/species/${getSpeciesSlug(sp)}`}
                          onClick={e => e.stopPropagation()}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontFamily: 'var(--font-meta)',
                            fontSize: '0.6875rem',
                            color: '#1A2B1E',
                            textTransform: locale === 'ar' ? 'none' : 'uppercase',
                            textDecoration: 'none',
                            fontWeight: 600,
                          }}
                        >
                          <span>{locale === 'ar' ? 'الملف' : locale === 'fr' ? 'Fiche' : 'Profile'}</span>
                          <ExternalLink style={{ width: '10px', height: '10px' }} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredSpecies.length === 0 && (
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
            <Info style={{ width: '32px', height: '32px', color: '#B38228', marginInline: 'auto', marginBottom: '1rem', opacity: 0.6 }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#1A2B1E', marginBottom: '0.5rem' }}>
              {locale === 'ar' ? 'لا توجد نتائج تطابق معايير البحث' : locale === 'fr' ? 'Aucune espèce ne correspond aux critères' : 'No species match active criteria'}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#4A5E4E', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {locale === 'ar'
                ? 'لم يتم العثور على أي نوع مغربي مسجل يطابق استعلام البحث أو تركيبة الفلاتر الحالية.'
                : locale === 'fr'
                ? 'Aucun taxon marocain enregistré ne correspond à la requête actuelle ou à la combinaison de filtres sélectionnés.'
                : 'No recorded Moroccan taxa match the current search query or combination of taxonomic, status, and family filters.'}
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

      </div>

      {/* Quick Modal Preview */}
      <SpeciesDetailModal
        species={selectedSpecies}
        onClose={() => setSelectedSpecies(null)}
      />
    </div>
  );
}

export default function ChecklistPage() {
  return (
    <Suspense fallback={<div style={{ padding: '6rem', textAlign: 'center', color: 'rgba(26,43,30,0.5)', background: '#F7F4EE' }}>Loading Checklist...</div>}>
      <ChecklistContent />
    </Suspense>
  );
}
