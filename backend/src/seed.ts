import type { Core } from '@strapi/strapi';
import seedCategories from '../data/seed-categories.json';
import seedArticles from '../data/seed-articles.json';

// Einmaliges, idempotentes Seeding der Mock-Inhalte aus dem Frontend
// (frontend/src/lib/articles.ts + categories.ts, exportiert über
// scripts/dump-content.ts). Läuft nur, wenn noch keine Kategorien existieren,
// damit lokale Änderungen im Admin-Panel bei jedem Neustart erhalten bleiben.
export async function seedIfEmpty(strapi: Core.Strapi) {
  const existingCategories = await strapi.documents('api::category.category').count({});
  if (existingCategories > 0) return;

  strapi.log.info('[seed] Keine Kategorien vorhanden – seede Mock-Inhalte aus dem Frontend …');

  const slugToDocumentId: Record<string, string> = {};

  for (const category of seedCategories as Array<{
    slug: string;
    emoji: string;
    title: string;
    description: string;
  }>) {
    const created = await strapi.documents('api::category.category').create({
      data: {
        title: category.title,
        slug: category.slug,
        emoji: category.emoji,
        description: category.description,
      },
    });
    slugToDocumentId[category.slug] = created.documentId;
  }

  let created = 0;
  for (const article of seedArticles as Array<{
    slug: string;
    title: string;
    summary: string;
    categorySlug: string;
    tags: string[];
    sourceName: string;
    sourceUrl: string;
    publishedAt: string;
    aiGenerated: boolean;
    humanReviewed: boolean;
    breaking?: boolean;
    editorsPick?: boolean;
    editorsNote?: string;
  }>) {
    const categoryDocumentId = slugToDocumentId[article.categorySlug];
    if (!categoryDocumentId) {
      strapi.log.warn(`[seed] Keine Kategorie für Slug "${article.categorySlug}" gefunden, überspringe "${article.title}".`);
      continue;
    }

    await strapi.documents('api::article.article').create({
      data: {
        title: article.title,
        slug: article.slug,
        summary: article.summary,
        sourceName: article.sourceName,
        sourceUrl: article.sourceUrl,
        category: categoryDocumentId,
        tags: article.tags,
        publishedDate: article.publishedAt,
        aiGenerated: article.aiGenerated,
        humanReviewed: article.humanReviewed,
        breaking: article.breaking ?? false,
        editorsPick: article.editorsPick ?? false,
        editorsNote: article.editorsNote,
      },
      status: 'published',
    });
    created += 1;
  }

  strapi.log.info(`[seed] ${Object.keys(slugToDocumentId).length} Kategorien, ${created} Artikel angelegt.`);
}
