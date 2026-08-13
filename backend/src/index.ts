import type { Core } from '@strapi/strapi';
import { seedIfEmpty } from './seed';

// Artikel/Kategorien sollen ohne Login lesbar sein (öffentliche News-API),
// Quellen bleiben admin-only (Konfigurationsdaten). Wird bei jedem Start
// idempotent gesetzt, statt die Public-Role manuell im Admin-Panel zu
// konfigurieren - reproduzierbar über Environments hinweg.
const PUBLIC_READ_PERMISSIONS = [
  'api::article.article.find',
  'api::article.article.findOne',
  'api::category.category.find',
  'api::category.category.findOne',
];

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await seedIfEmpty(strapi);

    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) return;

    for (const action of PUBLIC_READ_PERMISSIONS) {
      const existing = await strapi.query('plugin::users-permissions.permission').findOne({
        where: { action, role: publicRole.id },
      });
      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: { action, role: publicRole.id },
        });
      }
    }
  },
};
