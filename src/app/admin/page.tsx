'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { 
  Check, X, AlertTriangle, Eye, EyeOff, 
  Lock, Unlock, Key
} from 'lucide-react';

interface MockObservation {
  id: string;
  speciesName: string;
  family: string;
  observer: string;
  email: string;
  date: string;
  region: string;
  rawLat: number;
  rawLng: number;
  blurredLat: number;
  blurredLng: number;
  isSensitive: boolean;
  status: 'pending' | 'verified' | 'rejected' | 'corrected';
  image: string;
  notes: string;
}

export default function AdminVerificationPage() {
  // Authentication simulation for demonstration
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authRole, setAuthRole] = useState<'reviewer' | 'anef' | 'curator'>('reviewer');
  const [showRawCoordinates, setShowRawCoordinates] = useState(false);

  // Review Queue State
  const [observations, setObservations] = useState<MockObservation[]>([
    {
      id: 'OBS-2026-9041',
      speciesName: 'Cerastes cerastes (Linnaeus, 1758)',
      family: 'Viperidae',
      observer: 'Karim Bennani (Naturalist)',
      email: 'karim.b@example.ma',
      date: '2026-04-18 19:45',
      region: 'Drâa-Tafilalet (M\'Hamid El Ghizlane)',
      rawLat: 29.828451,
      rawLng: -5.723149,
      blurredLat: 29.83,
      blurredLng: -5.72,
      isSensitive: true,
      status: 'pending',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Cerastes-cerastes.jpg',
      notes: 'Active sidewinding across sand dunes at dusk after high afternoon heat. Excellent photographic voucher of supraocular horns.'
    },
    {
      id: 'OBS-2026-9042',
      speciesName: 'Pelobates varaldii Pasteur & Bons, 1959',
      family: 'Pelobatidae',
      observer: 'Fatima Zahra (Master Student, UIZ)',
      email: 'f.zahra@uiz.ac.ma',
      date: '2026-04-15 22:15',
      region: 'Rabat-Salé-Kénitra (Mamora Forest)',
      rawLat: 34.258912,
      rawLng: -6.581293,
      blurredLat: 34.26,
      blurredLng: -6.58,
      isSensitive: true,
      status: 'pending',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Pelobates-varaldii.jpg',
      notes: 'Found in shallow temporary rainwater daya in cork oak grove during nocturnal survey. 3 calling males recorded.'
    },
    {
      id: 'OBS-2026-9043',
      speciesName: 'Quedenfeldtia moerens Chabanaud, 1916',
      family: 'Sphaerodactylidae',
      observer: 'Lucas Girard (Eco-traveler)',
      email: 'lucas.g@voyages.fr',
      date: '2026-04-12 11:30',
      region: 'Souss-Massa (Tafraoute Gorges)',
      rawLat: 29.721490,
      rawLng: -8.974512,
      blurredLat: 29.721490,
      blurredLng: -8.974512,
      isSensitive: false,
      status: 'pending',
      image: 'https://moroccoherpetology.com/wp-content/uploads/2026/08/Quedenfeldtia-moerens.jpg',
      notes: 'Basking on sunlit granite boulder near dried stream bed. No disturbance caused.'
    }
  ]);

  // Audit Log State
  const [auditLogs, setAuditLogs] = useState<Array<{
    timestamp: string;
    operator: string;
    action: string;
    recordId: string;
    notes: string;
  }>>([
    {
      timestamp: '2026-04-20 14:22:10',
      operator: 'Dr. Abdellah Bouazza (Curator)',
      action: 'RLS_SECURITY_AUDIT',
      recordId: 'GLOBAL_TAXA',
      notes: 'Checked spatial blurring triggers and RLS policies for Viperidae occurrence queries.'
    },
    {
      timestamp: '2026-04-20 11:05:34',
      operator: 'Aziza Lansari (Reviewer)',
      action: 'OBSERVATION_VERIFIED',
      recordId: 'OBS-2026-8994',
      notes: 'Validated high-resolution photo of Testudo graeca in Souss-Massa.'
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'herpetology2026' || password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid security key. For demo verification, use: herpetology2026 or admin');
    }
  };

  const handleApprove = (id: string) => {
    setObservations(prev => prev.map(obs => {
      if (obs.id === id) {
        return { ...obs, status: 'verified' };
      }
      return obs;
    }));

    setAuditLogs(prev => [
      {
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
        operator: `Admin (${authRole.toUpperCase()})`,
        action: 'OBSERVATION_VERIFIED',
        recordId: id,
        notes: 'Specimen morphology verified against diagnostic characters.'
      },
      ...prev
    ]);
  };

  const handleReject = (id: string) => {
    setObservations(prev => prev.map(obs => {
      if (obs.id === id) {
        return { ...obs, status: 'rejected' };
      }
      return obs;
    }));

    setAuditLogs(prev => [
      {
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
        operator: `Admin (${authRole.toUpperCase()})`,
        action: 'OBSERVATION_REJECTED',
        recordId: id,
        notes: 'Unverifiable image or captive individual.'
      },
      ...prev
    ]);
  };

  const handleToggleSensitive = (id: string) => {
    setObservations(prev => prev.map(obs => {
      if (obs.id === id) {
        return { ...obs, isSensitive: !obs.isSensitive };
      }
      return obs;
    }));

    setAuditLogs(prev => [
      {
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
        operator: `Admin (${authRole.toUpperCase()})`,
        action: 'SENSITIVE_FLAG_TOGGLED',
        recordId: id,
        notes: 'Spatial 10km grid blurring state updated for conservation compliance.'
      },
      ...prev
    ]);
  };

  return (
    <div style={{ background: '#F7F4EE', minHeight: '100vh', paddingBottom: '6rem' }}>
      <PageHeader
        eyebrow="HerpAtlas Morocco · Institutional Administration"
        title="Scientific Review &amp; Data Governance"
        description="Protected administrative portal for reviewing incoming citizen-science occurrences, verifying diagnostic morphology, enforcing spatial coordinate blurring for endangered taxa, and inspecting database audit logs."
        stats={[
          { value: 'Curatorial Tier', label: 'ANEF & UIZ-HC Access' },
          { value: '10km Blur', label: 'Spatial Protection Active' },
          { value: 'Audit Trail', label: 'RLS Logging Enforced' },
        ]}
      />

      <div className="container-site" style={{ paddingTop: '3rem', maxWidth: '72rem' }}>
        {!isAuthenticated ? (
          /* Login Card */
          <div
            style={{
              maxWidth: '30rem',
              margin: '0 auto',
              background: '#FFFFFF',
              border: '1px solid rgba(26, 43, 30, 0.1)',
              padding: 'clamp(2rem, 4vw, 2.75rem)',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              boxShadow: '0 4px 16px rgba(26, 43, 30, 0.05)',
            }}
          >
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: '#FEF9E7',
                  border: '1px solid rgba(179, 130, 40, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Lock style={{ width: '22px', height: '22px', color: '#8A5D00' }} />
              </div>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#1A2B1E',
                  lineHeight: 1.2,
                }}
              >
                Scientific Committee Login
              </h2>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.875rem',
                  color: '#4A5E4E',
                }}
              >
                Please enter your institutional passkey to access the validation queue.
              </p>
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'rgba(26, 43, 30, 0.6)',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                  }}
                >
                  Role Authority
                </label>
                <select
                  value={authRole}
                  onChange={(e) => setAuthRole(e.target.value as any)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.85rem',
                    background: '#F7F4EE',
                    border: '1px solid rgba(26, 43, 30, 0.12)',
                    borderRadius: '3px',
                    fontSize: '0.875rem',
                    color: '#1A2B1E',
                    fontFamily: 'DM Sans, sans-serif',
                    outline: 'none',
                  }}
                >
                  <option value="reviewer">Taxonomic Reviewer (Morocco Herpetology)</option>
                  <option value="anef">ANEF Wildlife Officer (National Forestry & Water)</option>
                  <option value="curator">UIZ-HC Database Curator (Ibn Zohr University)</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'rgba(26, 43, 30, 0.6)',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                  }}
                >
                  Access Passkey
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter passkey (e.g. herpetology2026)"
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.85rem',
                    background: '#F7F4EE',
                    border: '1px solid rgba(26, 43, 30, 0.12)',
                    borderRadius: '3px',
                    fontSize: '0.875rem',
                    color: '#1A2B1E',
                    fontFamily: 'DM Sans, sans-serif',
                    outline: 'none',
                  }}
                  required
                />
              </div>

              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '3px',
                  background: '#FEF9E7',
                  border: '1px solid rgba(179, 130, 40, 0.25)',
                  fontSize: '0.75rem',
                  color: '#8A5D00',
                  fontFamily: 'DM Mono, monospace',
                }}
              >
                <strong>Demo Hint:</strong> Use passkey <code style={{ fontWeight: 700 }}>herpetology2026</code> or <code style={{ fontWeight: 700 }}>admin</code>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.875rem 1.25rem',
                  background: '#1A2B1E',
                  color: '#FFFFFF',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  fontFamily: 'DM Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'opacity 0.2s',
                }}
              >
                <Key style={{ width: '16px', height: '16px' }} />
                <span>Unlock Verification Console</span>
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Dashboard */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Top Toolbar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                background: '#FFFFFF',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                padding: '1.25rem 1.75rem',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#FEF9E7',
                    border: '1px solid rgba(179, 130, 40, 0.3)',
                    color: '#8A5D00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Unlock style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.25rem', color: '#1A2B1E' }}>
                    Authenticated as {authRole === 'anef' ? 'ANEF Wildlife Officer' : authRole === 'curator' ? 'UIZ Curator' : 'Taxonomic Reviewer'}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#4A5E4E', fontFamily: 'DM Mono, monospace' }}>
                    Session active • RLS Admin Bypass Active
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* Raw coordinates toggle */}
                <button
                  type="button"
                  onClick={() => setShowRawCoordinates(!showRawCoordinates)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.875rem',
                    borderRadius: '2px',
                    fontSize: '0.75rem',
                    fontFamily: 'DM Mono, monospace',
                    fontWeight: 600,
                    background: showRawCoordinates ? '#FEF9E7' : '#FFFFFF',
                    border: `1px solid ${showRawCoordinates ? 'rgba(179, 130, 40, 0.4)' : 'rgba(26, 43, 30, 0.15)'}`,
                    color: showRawCoordinates ? '#8A5D00' : '#4A5E4E',
                    cursor: 'pointer',
                  }}
                  title="Toggle raw GPS vs 10km blurred coordinates"
                >
                  {showRawCoordinates ? <Eye style={{ width: '15px', height: '15px' }} /> : <EyeOff style={{ width: '15px', height: '15px' }} />}
                  <span>{showRawCoordinates ? 'Raw GPS Coordinates Visible' : 'Obfuscated 10km Grid Mode'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsAuthenticated(false)}
                  style={{
                    padding: '0.5rem 0.875rem',
                    borderRadius: '2px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(26, 43, 30, 0.15)',
                    fontSize: '0.75rem',
                    fontFamily: 'DM Mono, monospace',
                    color: '#4A5E4E',
                    cursor: 'pointer',
                  }}
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Pending Submissions Queue */}
            <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8A5D00',
                    fontWeight: 600,
                  }}
                >
                  Review Queue
                </span>
                <h2
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#1A2B1E',
                    margin: '0.25rem 0 0',
                  }}
                >
                  Pending Field Observations ({observations.filter(o => o.status === 'pending').length})
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {observations.map((obs) => (
                  <div
                    key={obs.id}
                    style={{
                      padding: 'clamp(1.5rem, 3vw, 2rem)',
                      background: '#FFFFFF',
                      border: '1px solid rgba(26, 43, 30, 0.1)',
                      borderRadius: '4px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '1.75rem',
                      alignItems: 'center',
                      boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
                    }}
                  >
                    {/* Media column */}
                    <div
                      style={{
                        position: 'relative',
                        aspectRatio: '4/3',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        background: '#EFECE6',
                        border: '1px solid rgba(26, 43, 30, 0.1)',
                      }}
                    >
                      <img
                        src={obs.image}
                        alt={obs.speciesName}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: '8px',
                          background: '#FEF9E7',
                          color: '#8A5D00',
                          fontSize: '0.6875rem',
                          fontFamily: 'DM Mono, monospace',
                          padding: '2px 8px',
                          borderRadius: '2px',
                          border: '1px solid rgba(179, 130, 40, 0.25)',
                          fontWeight: 600,
                        }}
                      >
                        {obs.id}
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          background: 'rgba(26, 43, 30, 0.85)',
                          color: '#FFFFFF',
                          fontSize: '0.625rem',
                          padding: '2px 8px',
                          borderRadius: '2px',
                          fontFamily: 'DM Mono, monospace',
                        }}
                      >
                        Status: <strong style={{ textTransform: 'uppercase', color: obs.status === 'verified' ? '#86efac' : '#FEF9E7' }}>{obs.status}</strong>
                      </div>
                    </div>

                    {/* Meta column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div>
                        <span style={{ fontSize: '0.6875rem', fontFamily: 'DM Mono, monospace', color: '#8A5D00', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                          {obs.family} • {obs.region}
                        </span>
                        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.45rem', fontWeight: 600, color: '#1A2B1E', margin: '0.25rem 0 0' }}>
                          {obs.speciesName}
                        </h3>
                      </div>

                      <div style={{ fontSize: '0.8125rem', color: '#4A5E4E', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div><strong style={{ color: '#1A2B1E' }}>Observer:</strong> {obs.observer} ({obs.email})</div>
                        <div><strong style={{ color: '#1A2B1E' }}>Date/Time:</strong> {obs.date}</div>
                        <div>
                          <strong style={{ color: '#1A2B1E' }}>Coordinates:</strong>{' '}
                          {showRawCoordinates ? (
                            <span style={{ fontFamily: 'DM Mono, monospace', color: '#166534', fontWeight: 600 }}>
                              {obs.rawLat}°N, {obs.rawLng}°W (Raw Precision)
                            </span>
                          ) : (
                            <span style={{ fontFamily: 'DM Mono, monospace', color: '#8A5D00' }}>
                              {obs.blurredLat}°N, {obs.blurredLng}°W (10km Blurred)
                            </span>
                          )}
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: '0.8125rem',
                          color: '#4A5E4E',
                          background: '#F7F4EE',
                          padding: '0.75rem 1rem',
                          borderRadius: '3px',
                          border: '1px solid rgba(26, 43, 30, 0.08)',
                          lineHeight: 1.6,
                          fontStyle: 'italic',
                        }}
                      >
                        "{obs.notes}"
                      </p>
                    </div>

                    {/* Actions column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      <button
                        type="button"
                        onClick={() => handleApprove(obs.id)}
                        disabled={obs.status === 'verified'}
                        style={{
                          width: '100%',
                          padding: '0.625rem 1rem',
                          borderRadius: '2px',
                          background: obs.status === 'verified' ? '#EFECE6' : '#1A2B1E',
                          color: obs.status === 'verified' ? '#4A5E4E' : '#FFFFFF',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          fontFamily: 'DM Mono, monospace',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          cursor: obs.status === 'verified' ? 'default' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          border: 'none',
                        }}
                      >
                        <Check style={{ width: '16px', height: '16px' }} />
                        <span>{obs.status === 'verified' ? 'Verified & Published' : 'Approve & Publish'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleToggleSensitive(obs.id)}
                        style={{
                          width: '100%',
                          padding: '0.625rem 1rem',
                          borderRadius: '2px',
                          fontSize: '0.75rem',
                          fontFamily: 'DM Mono, monospace',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          border: `1px solid ${obs.isSensitive ? 'rgba(179, 130, 40, 0.4)' : 'rgba(26, 43, 30, 0.15)'}`,
                          background: obs.isSensitive ? '#FEF9E7' : '#FFFFFF',
                          color: obs.isSensitive ? '#8A5D00' : '#4A5E4E',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <AlertTriangle style={{ width: '16px', height: '16px' }} />
                        <span>{obs.isSensitive ? 'Sensitive Flagged' : 'Flag as Sensitive'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleReject(obs.id)}
                        disabled={obs.status === 'rejected'}
                        style={{
                          width: '100%',
                          padding: '0.5rem 1rem',
                          borderRadius: '2px',
                          background: '#FFFFFF',
                          border: '1px solid rgba(220, 38, 38, 0.3)',
                          color: '#dc2626',
                          fontSize: '0.75rem',
                          fontFamily: 'DM Mono, monospace',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          cursor: obs.status === 'rejected' ? 'default' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <X style={{ width: '16px', height: '16px' }} />
                        <span>Reject Observation</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Audit Log Table */}
            <section
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(26, 43, 30, 0.1)',
                borderRadius: '4px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: '0 2px 8px rgba(26, 43, 30, 0.03)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(26, 43, 30, 0.08)',
                }}
              >
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.45rem', fontWeight: 600, color: '#1A2B1E' }}>
                  Database Audit Log &amp; Access Trail
                </h3>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'DM Mono, monospace', color: '#8A5D00', textTransform: 'uppercase' }}>
                  Supabase RLS Enforced
                </span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', textAlign: 'left', fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(26, 43, 30, 0.1)', color: '#8A5D00', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <th style={{ padding: '0.75rem' }}>Timestamp (UTC)</th>
                      <th style={{ padding: '0.75rem' }}>Operator</th>
                      <th style={{ padding: '0.75rem' }}>Action</th>
                      <th style={{ padding: '0.75rem' }}>Record ID</th>
                      <th style={{ padding: '0.75rem' }}>Audit Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.map((log, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(26, 43, 30, 0.06)' }}>
                        <td style={{ padding: '0.75rem', color: '#4A5E4E' }}>{log.timestamp}</td>
                        <td style={{ padding: '0.75rem', color: '#1A2B1E', fontWeight: 600 }}>{log.operator}</td>
                        <td style={{ padding: '0.75rem' }}>
                          <span
                            style={{
                              padding: '2px 8px',
                              borderRadius: '2px',
                              background: '#FEF9E7',
                              color: '#8A5D00',
                              border: '1px solid rgba(179, 130, 40, 0.25)',
                              fontSize: '0.6875rem',
                            }}
                          >
                            {log.action}
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem', color: '#8A5D00', fontWeight: 600 }}>{log.recordId}</td>
                        <td style={{ padding: '0.75rem', color: '#4A5E4E', fontFamily: 'DM Sans, sans-serif', fontSize: '0.8125rem' }}>{log.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
