'use client';

import React, { useState } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { PageHeader } from '@/components/layout/PageHeader';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const { locale, t, dir } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Scientific Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow={locale === 'ar' ? 'استفسارات علمية ومؤسساتية' : locale === 'fr' ? 'Demandes Institutionnelles & Scientifiques' : 'Institutional & Scientific Inquiries'}
        title={locale === 'ar' ? 'تواصل مع فريقنا البحثي' : locale === 'fr' ? 'Contacter Notre Groupe de Recherche' : 'Contact Our Research Group'}
        description={
          locale === 'ar' ? (
            <>
              سواء كنت تمثل قسماً جامعياً، أو منظمة بيئية غير حكومية، أو ناشراً علمياً،
              أو تحتاج إلى دعم في التعرف السريري على لسعات ولدغات الزواحف، فإن فريقنا في خدمتكم.
            </>
          ) : locale === 'fr' ? (
            <>
              Que vous représentiez un département universitaire, une ONG de conservation, un éditeur académique,
              ou ayez besoin d'un support d'identification clinique lors d'une envenimation, notre équipe est à votre disposition.
            </>
          ) : (
            <>
              Whether you represent a university research department, a conservation NGO, an academic publisher,
              or need clinical identification support for a snakebite incident, our team is at your disposal.
            </>
          )
        }
        stats={[
          { value: 'FPT / UIZ', label: locale === 'ar' ? 'المقر المؤسساتي' : locale === 'fr' ? 'Base institutionnelle' : 'Institutional Base' },
          { value: '< 24h', label: locale === 'ar' ? 'زمن الاستجابة السريرية' : locale === 'fr' ? 'Délai réponse clinique' : 'Clinical Response Time' },
          { value: 'Agadir / Taroudant', label: locale === 'ar' ? 'المختبرات الميدانية' : locale === 'fr' ? 'Laboratoires principaux' : 'Primary Labs' },
        ]}
      />

      <div className="container-site" style={{ paddingTop: '3rem', maxWidth: '68rem' }}>
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Contact Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Direct Email */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#FEF9E7',
                    border: '1px solid rgba(179, 130, 40, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail style={{ width: '18px', height: '18px', color: '#8A5D00' }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, color: '#1A2B1E', margin: 0 }}>
                    {locale === 'ar' ? 'استفسارات علمية وإعلامية' : locale === 'fr' ? 'Recherche & Relations Presse' : 'Scientific Inquiries & Press'}
                  </h2>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace', fontSize: '0.6875rem', color: '#8A5D00', textTransform: locale === 'ar' ? 'none' : 'uppercase' }}>
                    {locale === 'ar' ? 'المراسلات الرسمية' : locale === 'fr' ? 'Correspondance Officielle' : 'Official Correspondence'}
                  </span>
                </div>
              </div>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#4A5E4E', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                {locale === 'ar'
                  ? 'لترخيص البيانات، والتعاون البحثي، وطلبات النشر العلمي، والمقابلات الصحفية.'
                  : locale === 'fr'
                  ? 'Pour les licences de données, collaborations de recherche, publications et entretiens de presse.'
                  : 'For data licensing, research collaborations, publication requests, and press interviews.'}
              </p>
              <a
                href="mailto:info@moroccoherpetology.com"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.8125rem',
                  color: '#1A2B1E',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                info@moroccoherpetology.com
              </a>
            </div>

            {/* Emergency Clinical Hotline */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#FEF9E7',
                    border: '1px solid rgba(179, 130, 40, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone style={{ width: '18px', height: '18px', color: '#8A5D00' }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, color: '#1A2B1E', margin: 0 }}>
                    {locale === 'ar' ? 'التعرف الطارئ على العينات' : locale === 'fr' ? 'Identification d’Urgence' : 'Emergency Identification'}
                  </h2>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace', fontSize: '0.6875rem', color: '#8A5D00', textTransform: locale === 'ar' ? 'none' : 'uppercase' }}>
                    {locale === 'ar' ? 'دعم حالات اللدغات والتسمم' : locale === 'fr' ? 'Support Envenimations & Morsures' : 'Snakebite & Scorpionism Support'}
                  </span>
                </div>
              </div>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#4A5E4E', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                {locale === 'ar'
                  ? 'التعرف السريع عبر الصور لصالح أطباء المستشفيات، ومراكز محاربة التسمم، والأطباء البيطريين.'
                  : locale === 'fr'
                  ? 'Identification photo urgente pour médecins hospitaliers, centres antipoison et vétérinaires.'
                  : 'Urgent photo identification for hospital physicians, poison control centers, and veterinarians.'}
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=212634376778"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.8125rem',
                  color: '#1A2B1E',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                +212 634 376 778 ({locale === 'ar' ? 'واتساب طوارئ' : locale === 'fr' ? 'WhatsApp Urgence' : 'WhatsApp Emergency'})
              </a>
            </div>

            {/* Institutional Base */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: '1.75rem',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#FEF9E7',
                    border: '1px solid rgba(179, 130, 40, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin style={{ width: '18px', height: '18px', color: '#8A5D00' }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, color: '#1A2B1E', margin: 0 }}>
                    {locale === 'ar' ? 'المختبر الجامعي' : locale === 'fr' ? 'Laboratoire Universitaire' : 'Faculty Laboratory'}
                  </h2>
                  <span style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Mono, monospace', fontSize: '0.6875rem', color: '#8A5D00', textTransform: locale === 'ar' ? 'none' : 'uppercase' }}>
                    {locale === 'ar' ? 'الانتماء الأكاديمي' : locale === 'fr' ? 'Affiliation Institutionnelle' : 'University Affiliation'}
                  </span>
                </div>
              </div>
              <p style={{ fontFamily: locale === 'ar' ? 'var(--font-arabic)' : 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#4A5E4E', lineHeight: 1.6 }}>
                {locale === 'ar' ? (
                  <>
                    الكلية المتعددة التخصصات بتارودانت (FPT)<br />
                    جامعة ابن زهر (UIZ)، ص.ب 271، تارودانت 83000، المملكة المغربية
                  </>
                ) : locale === 'fr' ? (
                  <>
                    Faculté Polydisciplinaire de Taroudant (FPT)<br />
                    Université Ibn Zohr (UIZ), BP 271, Taroudant 83000, Maroc
                  </>
                ) : (
                  <>
                    Faculty of Polydisciplinary Taroudant (FPT)<br />
                    Ibn Zohr University (UIZ), BP 271, Taroudant 83000, Morocco
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '4px',
              border: '1px solid rgba(26, 43, 30, 0.1)',
              padding: 'clamp(2rem, 4vw, 2.75rem)',
              boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: '#FEF9E7',
                    border: '1px solid rgba(179, 130, 40, 0.3)',
                    color: '#8A5D00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginInline: 'auto',
                    marginBottom: '1rem',
                  }}
                >
                  <CheckCircle2 style={{ width: '28px', height: '28px' }} />
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 600, color: '#1A2B1E', marginBottom: '0.5rem' }}>
                  {locale === 'ar' ? 'تم إرسال الرسالة بنجاح' : locale === 'fr' ? 'Message Transmis' : 'Message Transmitted'}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9375rem', color: '#4A5E4E', lineHeight: 1.6, maxWidth: '42ch', marginInline: 'auto' }}>
                  {locale === 'ar'
                    ? 'شكراً لتواصلك مع المغرب هيربيتولوجي. ستقوم لجنتنا العلمية بمراجعة طلبك والرد عليك في أقرب وقت.'
                    : locale === 'fr'
                    ? 'Merci d’avoir contacté Morocco Herpetology. Notre comité scientifique examinera votre demande et vous répondra rapidement.'
                    : 'Thank you for contacting Morocco Herpetology. Our scientific committee will review your inquiry and follow up shortly.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.65rem 1.25rem',
                    background: '#1A2B1E',
                    color: '#FFFFFF',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: dir === 'rtl' ? '0' : '0.06em',
                    borderRadius: '2px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {locale === 'ar' ? 'إرسال استفسار آخر' : locale === 'fr' ? 'Envoyer une autre demande' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 600, color: '#1A2B1E', marginBottom: '0.35rem' }}>
                    {locale === 'ar' ? 'إرسال استفسار' : locale === 'fr' ? 'Envoyer une demande' : 'Send an Inquiry'}
                  </h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#4A5E4E' }}>
                    {locale === 'ar' ? 'توجيه مباشر إلى الباحث أو عضو اللجنة المعني.' : locale === 'fr' ? 'Transmission directe au chercheur ou membre du comité concerné.' : 'Direct dispatch to the relevant investigator or committee member.'}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'DM Mono, monospace', fontSize: '0.6875rem', color: 'rgba(26, 43, 30, 0.6)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                      {locale === 'ar' ? 'الاسم الكامل *' : locale === 'fr' ? 'Nom complet *' : 'Your Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Jane Doe"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#F7F4EE',
                        border: '1px solid rgba(26, 43, 30, 0.12)',
                        borderRadius: '3px',
                        color: '#1A2B1E',
                        fontSize: '0.875rem',
                        fontFamily: 'DM Sans, sans-serif',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'DM Mono, monospace', fontSize: '0.6875rem', color: 'rgba(26, 43, 30, 0.6)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                      {locale === 'ar' ? 'البريد الإلكتروني *' : locale === 'fr' ? 'Email *' : 'Your Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@institution.edu"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#F7F4EE',
                        border: '1px solid rgba(26, 43, 30, 0.12)',
                        borderRadius: '3px',
                        color: '#1A2B1E',
                        fontSize: '0.875rem',
                        fontFamily: 'DM Sans, sans-serif',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'DM Mono, monospace', fontSize: '0.6875rem', color: 'rgba(26, 43, 30, 0.6)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {locale === 'ar' ? 'موضوع الاستفسار' : locale === 'fr' ? 'Objet de la demande' : 'Inquiry Topic'}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: '#F7F4EE',
                      border: '1px solid rgba(26, 43, 30, 0.12)',
                      borderRadius: '3px',
                      color: '#1A2B1E',
                      fontSize: '0.875rem',
                      fontFamily: 'DM Sans, sans-serif',
                      outline: 'none',
                    }}
                  >
                    <option value="General Scientific Inquiry">{locale === 'ar' ? 'استفسار علمي عام' : locale === 'fr' ? 'Demande scientifique générale' : 'General Scientific Inquiry'}</option>
                    <option value="Research & Academic Collaboration">{locale === 'ar' ? 'تعاون بحثي وأكاديمي' : locale === 'fr' ? 'Collaboration recherche & académique' : 'Research & Academic Collaboration'}</option>
                    <option value="Atlas Occurrence Data Licensing">{locale === 'ar' ? 'ترخيص بيانات الأطلس' : locale === 'fr' ? 'Licence de données Atlas' : 'Atlas Occurrence Data Licensing'}</option>
                    <option value="School / University Workshop Request">{locale === 'ar' ? 'طلب ورشة عمل مدرسية / جامعية' : locale === 'fr' ? 'Atelier scolaire ou universitaire' : 'School / University Workshop Request'}</option>
                    <option value="Press & Documentary Interview">{locale === 'ar' ? 'مقابلة صحفية أو وثائقية' : locale === 'fr' ? 'Presse & reportage documentaire' : 'Press & Documentary Interview'}</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'DM Mono, monospace', fontSize: '0.6875rem', color: 'rgba(26, 43, 30, 0.6)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {locale === 'ar' ? 'تفاصيل الرسالة *' : locale === 'fr' ? 'Détails du message *' : 'Message Details *'}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder={locale === 'ar' ? 'قدم تفاصيل حول مؤسستك أو مقترحك أو سؤالك...' : locale === 'fr' ? 'Fournissez des détails sur votre institution, proposition ou question...' : 'Provide details about your academic institution, proposal, or question...'}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      background: '#F7F4EE',
                      border: '1px solid rgba(26, 43, 30, 0.12)',
                      borderRadius: '3px',
                      color: '#1A2B1E',
                      fontSize: '0.875rem',
                      fontFamily: 'DM Sans, sans-serif',
                      outline: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '0.875rem 1.5rem',
                    background: '#1A2B1E',
                    color: '#FFFFFF',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: dir === 'rtl' ? '0' : '0.08em',
                    borderRadius: '2px',
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                  }}
                >
                  <Send className="rtl-flip" style={{ width: '14px', height: '14px' }} />
                  <span>{locale === 'ar' ? 'إرسال الرسالة' : locale === 'fr' ? 'Transmettre la demande' : 'Transmit Inquiry'}</span>
                </button>
              </form>
            )}
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

