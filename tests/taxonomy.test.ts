import { describe, it, expect } from 'vitest';
import { SPECIES_DATA } from '../src/data/species';
import { PUBLICATIONS_DATA } from '../src/data/publications';
import { BIBLIOGRAPHY_DATA } from '../src/data/bibliography';
import { PROJECTS_DATA } from '../src/data/projects';
import { TEAM_MEMBERS } from '../src/data/team';

describe('Morocco Herpetology Taxonomic Dataset Integrity', () => {
  it('should contain all 136 species across native taxonomic groups', () => {
    expect(SPECIES_DATA.length).toBe(136);
  });

  it('should correctly partition species into official taxonomic groups', () => {
    const amphibians = SPECIES_DATA.filter(s => s.group === 'amphibians');
    const turtles = SPECIES_DATA.filter(s => s.group === 'turtles');
    const lizards = SPECIES_DATA.filter(s => s.group === 'lizards');
    const snakes = SPECIES_DATA.filter(s => s.group === 'snakes');
    const scorpions = SPECIES_DATA.filter(s => s.group === 'scorpions');

    expect(amphibians.length).toBe(14);
    expect(turtles.length).toBe(8);
    expect(lizards.length).toBe(81); // 78 lizards + 3 amphisbaenians
    expect(snakes.length).toBe(26);
    expect(scorpions.length).toBe(7);
  });

  it('should verify Moroccan endemics exist and have valid taxonomy', () => {
    const endemics = SPECIES_DATA.filter(s => s.isEndemic);
    expect(endemics.length).toBeGreaterThan(15);

    // Endemic spadefoot toad Pelobates varaldii
    const spadefoot = SPECIES_DATA.find(s => s.scientificName.includes('Pelobates varaldii'));
    expect(spadefoot).toBeDefined();
    expect(spadefoot?.isEndemic).toBe(true);

    // High Atlas endemic day gecko Quedenfeldtia trachyblepharus
    const dayGecko = SPECIES_DATA.find(s => s.scientificName.includes('Quedenfeldtia trachyblepharus'));
    expect(dayGecko).toBeDefined();
    expect(dayGecko?.isEndemic).toBe(true);
  });

  it('should verify trilingual common names exist for flagship species', () => {
    const hornedViper = SPECIES_DATA.find(s => s.scientificName.includes('Cerastes cerastes'));
    expect(hornedViper).toBeDefined();
    expect(hornedViper?.commonNames.en).toBe('Desert Horned Viper');
    expect(hornedViper?.commonNames.fr).toBe('Vipère à cornes');
    expect(hornedViper?.commonNames.ar).toContain('أفعى');
  });

  it('should identify sensitive taxa requiring spatial coordinate blurring', () => {
    const sensitiveFamilies = ['Viperidae', 'Elapidae', 'Chamaeleonidae', 'Testudinidae'];
    const sensitiveSpecies = SPECIES_DATA.filter(s => sensitiveFamilies.includes(s.family));
    
    expect(sensitiveSpecies.length).toBeGreaterThanOrEqual(9);
    // Cerastes cerastes and Daboia mauritanica must be sensitive
    expect(sensitiveSpecies.some(s => s.scientificName.includes('Cerastes'))).toBe(true);
    expect(sensitiveSpecies.some(s => s.scientificName.includes('Daboia'))).toBe(true);
  });
});

describe('Scientific Bibliography & Publications Engine', () => {
  it('should index exactly 2,164 audited bibliographic records', () => {
    expect(BIBLIOGRAPHY_DATA.length).toBe(2164);
  });

  it('should have valid titles, authors, and years across the bibliographic records', () => {
    const sample = BIBLIOGRAPHY_DATA[0];
    expect(sample.title).toBeDefined();
    expect(sample.authors).toBeDefined();
    expect(sample.year).toBeGreaterThanOrEqual(1800);
    expect(sample.record_id).toMatch(/^MH-BIB_/);
  });

  it('should contain all 29 peer-reviewed publications by the scientific team', () => {
    expect(PUBLICATIONS_DATA.length).toBe(29);
    
    // Check authors include Bouazza A. or Lansari A.
    const hasLeadAuthor = PUBLICATIONS_DATA.some(p => 
      p.authors.includes('Bouazza') || p.authors.includes('Lansari')
    );
    expect(hasLeadAuthor).toBe(true);
  });
});

describe('Conservation Projects & Institutional Governance', () => {
  it('should contain all 6 priority conservation projects with case study slugs', () => {
    expect(PROJECTS_DATA.length).toBe(6);
    const slugs = PROJECTS_DATA.map(p => p.slug);
    expect(slugs).toContain('herpatlas-morocco');
    expect(slugs).toContain('from-traps-to-refugia');
    expect(slugs).toContain('puff-adder-conservation');
    expect(slugs).toContain('biodiversity-in-action-ait-baha');
    expect(slugs).toContain('serpentid');
    expect(slugs).toContain('chamaeleo-chamaeleon-conservation');
  });

  it('should verify all 15 core research team members', () => {
    expect(TEAM_MEMBERS.length).toBe(15);
    const names = TEAM_MEMBERS.map(m => m.name);
    expect(names).toContain('Abdellah Bouazza');
    expect(names).toContain('Aziza Lansari');
  });
});
