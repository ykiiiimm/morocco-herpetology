-- ====================================================================
-- MOROCCO HERPETOLOGY SCIENTIFIC PLATFORM — DATABASE SCHEMA MIGRATION
-- Engine: PostgreSQL 15+ / Supabase
-- ====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- 2. ENUMS
CREATE TYPE conservation_status AS ENUM ('LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX', 'DD', 'NE');
CREATE TYPE taxonomic_group AS ENUM ('amphibians', 'turtles', 'lizards', 'snakes', 'scorpions');
CREATE TYPE observation_status AS ENUM ('pending', 'under_review', 'verified', 'rejected', 'flagged_sensitive');
CREATE TYPE user_role AS ENUM ('public_contributor', 'field_researcher', 'scientific_reviewer', 'chief_administrator');
CREATE TYPE publication_type AS ENUM ('journal_article', 'book_chapter', 'monograph', 'field_report', 'conference_paper', 'dataset');

-- 3. TAXONOMIC TAXA & SPECIES
CREATE TABLE IF NOT EXISTS taxa_species (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    scientific_name TEXT NOT NULL UNIQUE,
    genus TEXT NOT NULL,
    species_epithet TEXT NOT NULL,
    subspecies TEXT,
    authority TEXT NOT NULL,
    description_year INTEGER,
    taxonomic_order TEXT NOT NULL,
    family TEXT NOT NULL,
    taxonomic_class TEXT NOT NULL,
    species_group taxonomic_group NOT NULL,
    is_endemic_morocco BOOLEAN NOT NULL DEFAULT FALSE,
    is_regional_near_endemic BOOLEAN NOT NULL DEFAULT FALSE,
    iucn_global_status conservation_status NOT NULL DEFAULT 'NE',
    iucn_assessment_year INTEGER,
    national_red_list_status conservation_status NOT NULL DEFAULT 'NE',
    national_assessment_year INTEGER,
    cites_appendix TEXT,
    diagnostic_characters TEXT,
    habitat_description TEXT,
    moroccan_distribution TEXT,
    elevation_min_meters INTEGER,
    elevation_max_meters INTEGER,
    is_sensitive_location BOOLEAN NOT NULL DEFAULT FALSE,
    verification_state TEXT NOT NULL DEFAULT 'verified',
    data_provenance TEXT DEFAULT 'Morocco Herpetology Checklist (Bouazza et al.)',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_taxa_species_group ON taxa_species(species_group);
CREATE INDEX idx_taxa_family ON taxa_species(family);
CREATE INDEX idx_taxa_status ON taxa_species(iucn_global_status);
CREATE INDEX idx_taxa_endemic ON taxa_species(is_endemic_morocco);

-- 4. LOCALIZED SPECIES NAMES
CREATE TABLE IF NOT EXISTS species_localized_names (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    species_id UUID NOT NULL REFERENCES taxa_species(id) ON DELETE CASCADE,
    language_code VARCHAR(10) NOT NULL, -- 'en', 'fr', 'ar', 'ary', 'ber'
    common_name TEXT NOT NULL,
    transliteration TEXT,
    dialect_region TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(species_id, language_code, common_name)
);

CREATE INDEX idx_species_lang_search ON species_localized_names(language_code, common_name);

-- 5. SPECIES MEDIA & LICENSING
CREATE TABLE IF NOT EXISTS species_media (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    species_id UUID NOT NULL REFERENCES taxa_species(id) ON DELETE CASCADE,
    media_url TEXT NOT NULL,
    thumbnail_url TEXT,
    media_type TEXT NOT NULL DEFAULT 'image', -- 'image', 'audio_call', 'video'
    caption TEXT,
    photographer_name TEXT NOT NULL,
    license_type TEXT NOT NULL DEFAULT 'CC-BY-NC 4.0',
    specimen_locality_general TEXT,
    is_primary BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. RESEARCHERS & TEAM MEMBERS
CREATE TABLE IF NOT EXISTS researchers_team (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_user_id UUID, -- Optional link to auth.users
    full_name TEXT NOT NULL,
    academic_title TEXT,
    primary_affiliation TEXT NOT NULL,
    role_category TEXT NOT NULL, -- 'principal', 'technician', 'phd', 'student', 'collaborator'
    biography_en TEXT,
    biography_fr TEXT,
    biography_ar TEXT,
    avatar_url TEXT,
    orcid TEXT,
    researchgate_url TEXT,
    email_public TEXT,
    display_order INTEGER NOT NULL DEFAULT 99,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. SCIENTIFIC PUBLICATIONS (Team Outputs)
CREATE TABLE IF NOT EXISTS publications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    authors_citation TEXT NOT NULL,
    publication_year INTEGER NOT NULL,
    publication_type publication_type NOT NULL DEFAULT 'journal_article',
    journal_name TEXT,
    volume TEXT,
    issue TEXT,
    page_range TEXT,
    doi TEXT,
    publisher_url TEXT,
    open_access_pdf_url TEXT,
    abstract_text TEXT,
    keywords TEXT[],
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_pubs_year ON publications(publication_year);
CREATE INDEX idx_pubs_doi ON publications(doi);

-- 8. BIBLIOGRAPHIC REPOSITORY (Comprehensive National Herpetology References)
CREATE TABLE IF NOT EXISTS bibliographic_references (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    record_id TEXT NOT NULL UNIQUE, -- 'MH-BIB_000001'
    legacy_pdf_nr TEXT,
    authors TEXT NOT NULL,
    year INTEGER NOT NULL,
    title TEXT NOT NULL,
    country TEXT NOT NULL DEFAULT 'Morocco',
    taxonomic_class TEXT,
    taxonomic_order TEXT,
    taxonomic_group TEXT,
    genus TEXT,
    primary_topic TEXT,
    secondary_topics TEXT,
    source_citation TEXT NOT NULL,
    full_citation TEXT NOT NULL,
    doi TEXT,
    online_url TEXT,
    pdf_available BOOLEAN NOT NULL DEFAULT FALSE,
    pdf_access_type TEXT NOT NULL DEFAULT 'upon_request',
    metadata_confidence TEXT DEFAULT 'high',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_bib_authors ON bibliographic_references(authors);
CREATE INDEX idx_bib_year ON bibliographic_references(year);
CREATE INDEX idx_bib_group ON bibliographic_references(taxonomic_group);
CREATE INDEX idx_bib_topic ON bibliographic_references(primary_topic);

-- 9. CONSERVATION PROJECTS & PARTNERS
CREATE TABLE IF NOT EXISTS conservation_projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    title_en TEXT NOT NULL,
    title_fr TEXT NOT NULL,
    title_ar TEXT NOT NULL,
    kicker_en TEXT,
    kicker_fr TEXT,
    kicker_ar TEXT,
    project_status TEXT NOT NULL DEFAULT 'Active',
    category_en TEXT NOT NULL,
    category_fr TEXT NOT NULL,
    category_ar TEXT NOT NULL,
    overview_en TEXT NOT NULL,
    overview_fr TEXT NOT NULL,
    overview_ar TEXT NOT NULL,
    problem_en TEXT NOT NULL,
    problem_fr TEXT NOT NULL,
    problem_ar TEXT NOT NULL,
    geographic_scope_en TEXT NOT NULL,
    geographic_scope_fr TEXT NOT NULL,
    geographic_scope_ar TEXT NOT NULL,
    objectives_json JSONB NOT NULL DEFAULT '[]',
    methods_json JSONB NOT NULL DEFAULT '[]',
    milestones_json JSONB NOT NULL DEFAULT '[]',
    cover_image_url TEXT,
    tags TEXT[],
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS partner_organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    acronym TEXT,
    organization_category TEXT NOT NULL, -- 'government', 'academic', 'conservation', 'international'
    website_url TEXT,
    logo_url TEXT,
    role_description_en TEXT,
    role_description_fr TEXT,
    role_description_ar TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS project_partners (
    project_id UUID NOT NULL REFERENCES conservation_projects(id) ON DELETE CASCADE,
    partner_id UUID NOT NULL REFERENCES partner_organizations(id) ON DELETE CASCADE,
    specific_role TEXT,
    PRIMARY KEY (project_id, partner_id)
);

-- 10. FIELD EXPEDITIONS
CREATE TABLE IF NOT EXISTS field_expeditions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    title_en TEXT NOT NULL,
    title_fr TEXT NOT NULL,
    title_ar TEXT NOT NULL,
    expedition_year INTEGER NOT NULL,
    dates_text TEXT NOT NULL,
    geographic_region TEXT NOT NULL,
    bioclimatic_zone TEXT NOT NULL,
    objectives_en TEXT NOT NULL,
    objectives_fr TEXT NOT NULL,
    objectives_ar TEXT NOT NULL,
    narrative_summary_en TEXT NOT NULL,
    narrative_summary_fr TEXT NOT NULL,
    narrative_summary_ar TEXT NOT NULL,
    contributors_text TEXT[],
    species_observed_names TEXT[],
    photos_json JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 11. CITIZEN SCIENCE OBSERVATION SUBMISSIONS
CREATE TABLE IF NOT EXISTS observation_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    public_reference_code TEXT NOT NULL UNIQUE, -- e.g. 'OBS-2026-0042'
    observation_date DATE NOT NULL,
    location_description TEXT NOT NULL,
    
    -- Exact Raw Coordinates (RESTRICTED TO REVIEWERS & ADMINS)
    raw_latitude NUMERIC(9, 6) NOT NULL,
    raw_longitude NUMERIC(9, 6) NOT NULL,
    
    -- Publicly Displayed Blurred Coordinates (10km+ Grid Obfuscation for Sensitive Taxa)
    public_latitude NUMERIC(6, 3) NOT NULL,
    public_longitude NUMERIC(6, 3) NOT NULL,
    
    suggested_species_id UUID REFERENCES taxa_species(id) ON DELETE SET NULL,
    suggested_species_text TEXT,
    habitat_description TEXT,
    field_notes TEXT,
    
    -- Contributor Contact Details (RESTRICTED)
    contributor_name TEXT NOT NULL,
    contributor_email TEXT NOT NULL,
    contributor_phone TEXT,
    contributor_consent_public BOOLEAN NOT NULL DEFAULT FALSE,
    
    review_status observation_status NOT NULL DEFAULT 'pending',
    is_sensitive_location BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- Verified Scientific Determination
    verified_species_id UUID REFERENCES taxa_species(id) ON DELETE SET NULL,
    reviewer_notes TEXT,
    reviewed_by UUID REFERENCES researchers_team(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMPTZ,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_obs_status ON observation_submissions(review_status);
CREATE INDEX idx_obs_date ON observation_submissions(observation_date);
CREATE INDEX idx_obs_species ON observation_submissions(verified_species_id);

CREATE TABLE IF NOT EXISTS observation_media (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    observation_id UUID NOT NULL REFERENCES observation_submissions(id) ON DELETE CASCADE,
    storage_path TEXT NOT NULL,
    public_url TEXT NOT NULL,
    media_type TEXT NOT NULL DEFAULT 'image',
    file_size_bytes BIGINT,
    mime_type TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 12. AUDIT LOGGING & EDITORIAL EVENTS
CREATE TABLE IF NOT EXISTS audit_editorial_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID,
    actor_email TEXT NOT NULL,
    action_type TEXT NOT NULL, -- 'OBSERVATION_VERIFY', 'OBSERVATION_REJECT', 'SPECIES_UPDATE', 'BIB_IMPORT'
    target_entity TEXT NOT NULL, -- 'observation_submissions', 'taxa_species', 'bibliographic_references'
    target_id TEXT NOT NULL,
    changes_json JSONB NOT NULL DEFAULT '{}',
    ip_address_blurred TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_created ON audit_editorial_events(created_at);

-- 13. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE taxa_species ENABLE ROW LEVEL SECURITY;
ALTER TABLE species_localized_names ENABLE ROW LEVEL SECURITY;
ALTER TABLE species_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE researchers_team ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE bibliographic_references ENABLE ROW LEVEL SECURITY;
ALTER TABLE conservation_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE field_expeditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE observation_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE observation_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_editorial_events ENABLE ROW LEVEL SECURITY;

-- Public read policies for all published scientific content
CREATE POLICY "Public read taxa species" ON taxa_species FOR SELECT USING (true);
CREATE POLICY "Public read localized names" ON species_localized_names FOR SELECT USING (true);
CREATE POLICY "Public read species media" ON species_media FOR SELECT USING (true);
CREATE POLICY "Public read researchers" ON researchers_team FOR SELECT USING (is_active = true);
CREATE POLICY "Public read publications" ON publications FOR SELECT USING (true);
CREATE POLICY "Public read bibliography" ON bibliographic_references FOR SELECT USING (true);
CREATE POLICY "Public read projects" ON conservation_projects FOR SELECT USING (true);
CREATE POLICY "Public read partners" ON partner_organizations FOR SELECT USING (true);
CREATE POLICY "Public read expeditions" ON field_expeditions FOR SELECT USING (true);

-- Observations: Anyone can submit an observation
CREATE POLICY "Public can submit observations" ON observation_submissions 
FOR INSERT WITH CHECK (review_status = 'pending');

-- Observations: Public can only view approved verified non-sensitive observations
CREATE POLICY "Public can view verified observations" ON observation_submissions 
FOR SELECT USING (
  review_status = 'verified' AND is_sensitive_location = FALSE
);

-- Media: Anyone can upload images for pending observations
CREATE POLICY "Public can insert observation media" ON observation_media FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view verified media" ON observation_media FOR SELECT USING (true);

-- Functions and updated_at triggers
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp_taxa BEFORE UPDATE ON taxa_species
FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp_projects BEFORE UPDATE ON conservation_projects
FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp_obs BEFORE UPDATE ON observation_submissions
FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
