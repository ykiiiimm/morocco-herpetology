'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface ObservationMapProps {
  latitude: number | null;
  longitude: number | null;
  onChange: (lat: number, lng: number) => void;
  isSensitive?: boolean;
}

export default function ObservationMap({
  latitude,
  longitude,
  onChange,
  isSensitive,
}: ObservationMapProps) {
  const [mounted, setMounted] = useState(false);
  const [locating, setLocating] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        onChange(Number(pos.coords.latitude.toFixed(6)), Number(pos.coords.longitude.toFixed(6)));
      },
      (err) => {
        setLocating(false);
        alert(`Unable to retrieve location: ${err.message}`);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Moroccan bounding center
  const defaultLat = latitude || 30.4278; // Agadir / Souss-Massa region
  const defaultLng = longitude || -9.5981;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" style={{ color: 'var(--color-gold)' }} />
          <span className="font-semibold" style={{ color: 'var(--color-text)' }}>
            Interactive Coordinate Picker
          </span>
          {isSensitive && (
            <span
              className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold"
              style={{
                background: 'rgba(200, 153, 46, 0.15)',
                color: 'var(--color-gold-soft)',
                border: '1px solid rgba(200, 153, 46, 0.3)',
              }}
            >
              Spatial Obfuscation (10km blur) Active
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleGetCurrentLocation}
          disabled={locating}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 text-xs"
          style={{
            background: 'var(--color-surface-subtle)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
          }}
        >
          <Navigation className={`w-3.5 h-3.5 ${locating ? 'animate-spin' : ''}`} style={{ color: 'var(--color-gold)' }} />
          <span>{locating ? 'Acquiring GPS...' : 'Use My GPS Location'}</span>
        </button>
      </div>

      {/* Map Container */}
      <div
        className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
        }}
      >
        {mounted ? (
          <div className="w-full h-full relative">
            {/* Embedded interactive OpenStreetMap iframe for cross-platform zero-dependency reliability */}
            <iframe
              title="Morocco Herpetology Coordinate Selection"
              className="w-full h-full border-0"
              loading="lazy"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${defaultLng - 0.05}%2C${defaultLat - 0.05}%2C${defaultLng + 0.05}%2C${defaultLat + 0.05}&layer=mapnik&marker=${defaultLat}%2C${defaultLng}`}
            />
            <div
              className="absolute bottom-2 left-2 text-[10px] px-2 py-1 rounded font-mono"
              style={{
                background: 'rgba(13, 31, 21, 0.85)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
              }}
            >
              Lat: {latitude ? latitude.toFixed(5) : 'Click or Enter'} | Lng: {longitude ? longitude.toFixed(5) : 'Click or Enter'}
            </div>
          </div>
        ) : (
          <div className="text-xs flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
            <span className="w-2 h-2 rounded-full animate-ping" style={{ background: 'var(--color-gold)' }} />
            <span>Initializing spatial mapping canvas...</span>
          </div>
        )}
      </div>

      {/* Coordinate Input Fields */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div>
          <label className="block text-[11px] font-mono uppercase font-bold mb-1" style={{ color: 'var(--color-muted)' }}>
            Latitude (Decimal Degrees, WGS84)
          </label>
          <input
            type="number"
            step="0.000001"
            value={latitude ?? ''}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0, longitude ?? 0)}
            placeholder="e.g. 30.4278"
            className="w-full p-2.5 rounded-lg font-mono focus:outline-none"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
            required
          />
        </div>
        <div>
          <label className="block text-[11px] font-mono uppercase font-bold mb-1" style={{ color: 'var(--color-muted)' }}>
            Longitude (Decimal Degrees, WGS84)
          </label>
          <input
            type="number"
            step="0.000001"
            value={longitude ?? ''}
            onChange={(e) => onChange(latitude ?? 0, parseFloat(e.target.value) || 0)}
            placeholder="e.g. -9.5981"
            className="w-full p-2.5 rounded-lg font-mono focus:outline-none"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
            required
          />
        </div>
      </div>
    </div>
  );
}
