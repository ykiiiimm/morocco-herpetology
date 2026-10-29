export interface BibliographicRecord {
  id: number;
  record_id: string;
  pdf_nr: string | null;
  authors: string;
  year: number | null;
  title: string;
  country: string | null;
  class: string | null;
  taxonomic_class: string | null;
  order: string | null;
  group: string | null;
  genus: string | null;
  topics: string | null;
  primary_topic: string | null;
  secondary_topics: string | null;
  topic_confidence: string | null;
  source: string | null;
  citation: string | null;
  doi: string | null;
  online_url: string | null;
  pdf_available: boolean;
  metadata_confidence: string | null;
}

import bibData from './bibliography.json';

export const BIBLIOGRAPHY_DATA: BibliographicRecord[] = bibData as unknown as BibliographicRecord[];
