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
        heroImage: fields.image({
          label: 'Hero Bild',
          directory: 'src/assets/images/profile',
          // FIX: Relativer Pfad von src/content/settings/ zu src/assets/images/profile/
          publicPath: '../../assets/images/profile/' 
        }),
        contactEmail: fields.text({ label: 'E-Mail Adresse' }),
        location: fields.text({ label: 'Standort/Kanzlei' }),
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
  },
});