'use client';

import React from 'react';
import Link from 'next/link';
import { ConservationProject } from '@/data/projects';
import { useLocale } from '@/context/LocaleContext';
import { 
  MapPin, CheckCircle2, ArrowRight, ArrowLeft, 
  Users, Target, Wrench, Award
} from 'lucide-react';

interface ProjectDetailViewProps {
  project: ConservationProject;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const { locale, dir } = useLocale();

  const title = locale === 'fr' ? project.titleFr : locale === 'ar' ? project.titleAr : project.title;
  const kicker = locale === 'fr' ? project.kickerFr : locale === 'ar' ? project.kickerAr : project.kicker;
  const overview = locale === 'fr' ? project.overviewFr : locale === 'ar' ? project.overviewAr : project.overview;
  const problem = locale === 'fr' ? project.problemFr : locale === 'ar' ? project.problemAr : project.problem;
  const scope = locale === 'fr' ? project.geographicScopeFr : locale === 'ar' ? project.geographicScopeAr : project.geographicScope;
  const objectives = locale === 'fr' ? project.objectivesFr : locale === 'ar' ? project.objectivesAr : project.objectives;
  const methods = locale === 'fr' ? project.methodsFr : locale === 'ar' ? project.methodsAr : project.methods;
  const milestones = locale === 'fr' ? project.milestonesFr : locale === 'ar' ? project.milestonesAr : project.milestones;

  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;
  const ForwardArrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Project Hero Header */}
      <header
        style={{
          background: '#F7F4EE',
          borderBottom: '1px solid rgba(26, 43, 30, 0.1)',
          paddingBlock: 'clamp(2.5rem, 5vw, 4rem)',
          position: 'relative',
        }}
      >
        <div className="container-site">
          <div style={{ marginBottom: '1.75rem' }}>
            <Link
              href="/projects"
              style={{
                fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                fontSize: '0.75rem',
                color: '#8A5D00',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                textTransform: locale === 'ar' ? 'none' : 'uppercase',
                letterSpacing: locale === 'ar' ? 'normal' : '0.08em',
                fontWeight: 600,
              }}
            >
              <BackArrow style={{ width: '13px', height: '13px' }} />
              <span>
                {locale === 'ar' ? 'العودة لمشاريع الحماية والتنوع' : locale === 'fr' ? 'Retour aux projets de conservation' : 'Back to conservation projects'}
              </span>
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 7fr) minmax(280px, 5fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '2px',
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    textTransform: locale === 'ar' ? 'none' : 'uppercase',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                    fontWeight: 600,
                    background: '#FEF9E7',
                    color: '#8A5D00',
                    border: '1px solid rgba(179, 130, 40, 0.25)',
                  }}
                >
                  {kicker}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '2px',
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    textTransform: locale === 'ar' ? 'none' : 'uppercase',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                    fontWeight: 600,
                    background: '#1A2B1E',
                    color: '#FFFFFF',
                  }}
                >
                  {project.status === 'Active'
                    ? (locale === 'ar' ? 'مشروع نشط' : locale === 'fr' ? 'Actif' : 'Active')
                    : project.status === 'Ongoing'
                    ? (locale === 'ar' ? 'مستمر' : locale === 'fr' ? 'En cours' : 'Ongoing')
                    : (locale === 'ar' ? 'مكتمل' : locale === 'fr' ? 'Terminé' : 'Completed')}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                  lineHeight: locale === 'ar' ? 1.25 : 1.08,
                  fontWeight: 600,
                  color: '#1A2B1E',
                  letterSpacing: locale === 'ar' ? 'normal' : '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                {title}
              </h1>

              <p
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '1.0625rem',
                  color: '#4A5E4E',
                  lineHeight: 1.7,
                  maxWidth: '56ch',
                  marginBottom: '1.5rem',
                }}
              >
                {overview}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.75rem',
                  color: '#8A5D00',
                  textTransform: locale === 'ar' ? 'none' : 'uppercase',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.05em',
                }}
              >
                <MapPin style={{ width: '14px', height: '14px' }} />
                <span>{scope}</span>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                aspectRatio: '16/11',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                backgroundColor: '#EFECE6',
                boxShadow: '0 8px 24px rgba(26, 43, 30, 0.08)',
              }}
            >
              <img
                src={project.image}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container-site" style={{ paddingTop: '3.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 8fr) minmax(280px, 4fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Narrative Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* 1. The Challenge */}
            <section
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Target style={{ width: '16px', height: '16px', color: '#B38228' }} />
                <span
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.12em',
                    textTransform: locale === 'ar' ? 'none' : 'uppercase',
                    color: '#8A5D00',
                    fontWeight: 600,
                  }}
                >
                  {locale === 'ar' ? 'تحديات الحماية البيئية' : locale === 'fr' ? 'Le Défi de Conservation' : 'The Conservation Challenge'}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#1A2B1E',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                {locale === 'ar' ? 'التهديدات القائمة والسياق الإيكولوجي' : locale === 'fr' ? 'Menaces Traitées & Contexte Écologique' : 'Threats Addressed & Ecological Context'}
              </h2>
              <p
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: '#4A5E4E',
                  lineHeight: 1.75,
                }}
              >
                {problem}
              </p>
            </section>

            {/* 2. Objectives */}
            <section
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <CheckCircle2 style={{ width: '16px', height: '16px', color: '#B38228' }} />
                <span
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.12em',
                    textTransform: locale === 'ar' ? 'none' : 'uppercase',
                    color: '#8A5D00',
                    fontWeight: 600,
                  }}
                >
                  {locale === 'ar' ? 'الأهداف الاستراتيجية' : locale === 'fr' ? 'Objectifs Stratégiques' : 'Strategic Objectives'}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#1A2B1E',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                {locale === 'ar' ? 'محاور العمليات الميدانية' : locale === 'fr' ? 'Objectifs Opérationnels Clés' : 'Core Operational Goals'}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {objectives.map((obj, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: '#4A5E4E',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#FEF9E7',
                        color: '#8A5D00',
                        border: '1px solid rgba(179, 130, 40, 0.25)',
                        fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {i + 1}
                    </span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Methodology */}
            <section
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Wrench style={{ width: '16px', height: '16px', color: '#B38228' }} />
                <span
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.12em',
                    textTransform: locale === 'ar' ? 'none' : 'uppercase',
                    color: '#8A5D00',
                    fontWeight: 600,
                  }}
                >
                  {locale === 'ar' ? 'المنهجية والتقنيات المتبعة' : locale === 'fr' ? 'Méthodologie & Technologies' : 'Methodology & Technology'}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#1A2B1E',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                {locale === 'ar' ? 'بروتوكول التنفيذ الميداني' : locale === 'fr' ? 'Protocole de Mise en Œuvre de Terrain' : 'Field Implementation Protocol'}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {methods.map((method, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: '#4A5E4E',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: '#8A5D00', fontWeight: 700, marginTop: '1px' }}>✓</span>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Milestones */}
            <section
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Award style={{ width: '16px', height: '16px', color: '#B38228' }} />
                <span
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.12em',
                    textTransform: locale === 'ar' ? 'none' : 'uppercase',
                    color: '#8A5D00',
                    fontWeight: 600,
                  }}
                >
                  {locale === 'ar' ? 'الأثر والنتائج المحققة' : locale === 'fr' ? 'Impact & Jalons Réalisés' : 'Impact & Milestones'}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#1A2B1E',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                {locale === 'ar' ? 'النتائج الميدانية الموثقة' : locale === 'fr' ? 'Résultats de Conservation Vérifiés' : 'Verified Conservation Results'}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '4px',
                      background: '#F7F4EE',
                      border: '1px solid rgba(26, 43, 30, 0.08)',
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: '#1A2B1E',
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '0.75rem',
                    }}
                  >
                    <CheckCircle2 style={{ width: '15px', height: '15px', color: '#8A5D00', flexShrink: 0 }} />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Partners, Team Leads, Meta */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Institutional Partners Panel */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(26, 43, 30, 0.08)' }}>
                <Users style={{ width: '15px', height: '15px', color: '#8A5D00' }} />
                <span
                  style={{
                    fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                    fontSize: '0.6875rem',
                    letterSpacing: locale === 'ar' ? 'normal' : '0.12em',
                    textTransform: locale === 'ar' ? 'none' : 'uppercase',
                    color: '#8A5D00',
                    fontWeight: 600,
                  }}
                >
                  {locale === 'ar' ? 'الشركاء المؤسساتيون' : locale === 'fr' ? 'Partenaires Institutionnels' : 'Institutional Partners'}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.partners.map((partner, i) => (
                  <div
                    key={i}
                    style={{
                      paddingInlineStart: '0.85rem',
                      borderInlineStart: '2px solid #B38228',
                    }}
                  >
                    <div style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', color: '#1A2B1E', lineHeight: 1.3 }}>
                      {partner.name}
                    </div>
                    <div style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)', fontSize: '0.6875rem', color: '#4A5E4E', marginTop: '0.25rem' }}>
                      {partner.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Team Leads */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  marginBottom: '1rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.6875rem',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.12em',
                  textTransform: locale === 'ar' ? 'none' : 'uppercase',
                  color: '#8A5D00',
                  fontWeight: 600,
                }}
              >
                {locale === 'ar' ? 'فريق الباحثين الرئيسيين' : locale === 'fr' ? 'Chercheurs Principaux' : 'Lead Investigators'}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.leadResearchers.map((lead, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1.0625rem',
                      color: '#1A2B1E',
                      padding: '0.6rem 0.85rem',
                      background: '#F7F4EE',
                      borderRadius: '3px',
                      border: '1px solid rgba(26, 43, 30, 0.05)',
                    }}
                  >
                    {lead}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  marginBottom: '1rem',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.6875rem',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.12em',
                  textTransform: locale === 'ar' ? 'none' : 'uppercase',
                  color: '#8A5D00',
                  fontWeight: 600,
                }}
              >
                {locale === 'ar' ? 'الكلمات المفتاحية والأنواع' : locale === 'fr' ? 'Mots-clés & Taxons' : 'Keywords & Taxa'}
              </span>
              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '2px',
                      fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                      fontSize: '0.6875rem',
                      background: '#FEF9E7',
                      color: '#8A5D00',
                      border: '1px solid rgba(179, 130, 40, 0.25)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div
              style={{
                background: '#1A2B1E',
                borderRadius: '4px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                color: '#FFFFFF',
              }}
            >
              <h3 style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-display)', fontSize: '1.4rem', color: '#FEF9E7', fontWeight: 600 }}>
                {locale === 'ar' ? 'المساهمة في هذا المشروع' : locale === 'fr' ? 'Contribuer à ce Projet' : 'Contribute to this Project'}
              </h3>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                {locale === 'ar'
                  ? 'هل رصدت أنواعاً ذات صلة بهذه الدراسة أو ترغب في اقتراح موقع ميداني للتدخل في المغرب؟'
                  : locale === 'fr'
                  ? 'Avez-vous observé des espèces pertinentes pour cette étude ou souhaitez-vous proposer un site d\'intervention ?'
                  : 'Have you observed species relevant to this study or wish to propose an intervention site in Morocco?'}
              </p>
              <Link
                href="/observations/submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  background: '#FEF9E7',
                  color: '#1A2B1E',
                  textDecoration: 'none',
                  fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'var(--font-meta)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: locale === 'ar' ? 'none' : 'uppercase',
                  letterSpacing: locale === 'ar' ? 'normal' : '0.06em',
                  borderRadius: '2px',
                  marginTop: '0.5rem',
                }}
              >
                <span>{locale === 'ar' ? 'تسجيل رصد ميداني' : locale === 'fr' ? 'Soumettre une observation' : 'Submit Field Record'}</span>
                <ForwardArrow style={{ width: '13px', height: '13px' }} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .container-site > div:first-of-type {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
