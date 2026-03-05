// Dateipfad: frontend/keystatic.config.ts
import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'KRASSNIGG // CORE' } },
  singletons: {
    profile: singleton({
      label: 'Personen-Profil',
      path: 'src/content/settings/profile',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Voller Name' }),
        title: fields.text({ label: 'Titel (z.B. Dr. med. univ.)' }),
        bio: fields.text({ label: 'Kurz-Bio', multiline: true }),
        introStatement: fields.text({ label: 'Profil-Statement', multiline: true }),
        focusItems: fields.array(
          fields.text({ label: 'Fokuspunkt' }),
          { label: 'Hero Fokuspunkte' }
        ),
        discoverLabel: fields.text({ label: 'Scroll CTA Label', defaultValue: 'Entdecken' }),
        heroImage: fields.image({
          label: 'Hero Bild',
          directory: 'src/assets/images/profile',
          // FIX: Relativer Pfad von src/content/settings/ zu src/assets/images/profile/
          publicPath: '../../assets/images/profile/' 
        }),
        contactEmail: fields.text({ label: 'E-Mail Adresse' }),
        location: fields.text({ label: 'Standort/Kanzlei' }),
        socialLinks: fields.object(
          {
            linkedin: fields.url({ label: 'LinkedIn' }),
            facebook: fields.url({ label: 'Facebook' }),
            instagram: fields.url({ label: 'Instagram' }),
            x: fields.url({ label: 'X (Twitter)' }),
            bluesky: fields.url({ label: 'Bluesky' }),
            youtube: fields.url({ label: 'YouTube' }),
          },
          { label: 'Social Media (optional)' }
        ),
      },
    }),
  },
  collections: {
    expertise: collection({
      label: 'Tätigkeitsbereiche',
      slugField: 'title',
      path: 'src/content/expertise/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Bereich Bezeichnung' } }),
        description: fields.text({ label: 'Beschreibung', multiline: true }),
        order: fields.number({ label: 'Sortierung' }),
      },
    }),
    experience: collection({
      label: 'Berufserfahrung',
      slugField: 'title',
      path: 'src/content/experience/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Interner Titel' } }),
        period: fields.text({ label: 'Zeitraum' }),
        role: fields.text({ label: 'Rolle/Funktion' }),
        company: fields.text({ label: 'Organisation' }),
        companyUrl: fields.url({ label: 'Website (optional)' }),
        summary: fields.text({ label: 'Beschreibung', multiline: true }),
        category: fields.select({
          label: 'Kategorie',
          options: [
            { label: 'Berufserfahrung', value: 'berufserfahrung' },
            { label: 'Beruflicher Werdegang', value: 'werdegang' },
          ],
          defaultValue: 'berufserfahrung',
        }),
        order: fields.number({ label: 'Sortierung' }),
      },
    }),
    education: collection({
      label: 'Ausbildung',
      slugField: 'title',
      path: 'src/content/education/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Interner Titel' } }),
        year: fields.text({ label: 'Jahr' }),
        degree: fields.text({ label: 'Abschluss/Studium' }),
        institution: fields.text({ label: 'Institution' }),
        institutionUrl: fields.url({ label: 'Website (optional)' }),
        details: fields.text({ label: 'Details (optional)', multiline: true }),
        order: fields.number({ label: 'Sortierung' }),
      },
    }),
    certifications: collection({
      label: 'Zertifizierungen',
      slugField: 'title',
      path: 'src/content/certifications/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Zertifizierung' } }),
        order: fields.number({ label: 'Sortierung' }),
      },
    }),
    profileSections: collection({
      label: 'Profiltexte',
      slugField: 'title',
      path: 'src/content/profile-sections/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Interner Titel' } }),
        heading: fields.text({ label: 'Überschrift' }),
        content: fields.text({ label: 'Inhalt', multiline: true }),
        order: fields.number({ label: 'Sortierung' }),
      },
    }),
  },
});
