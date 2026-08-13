// Einmaliges Hilfsskript: exportiert die Mock-Inhalte aus dem Frontend als
// JSON, damit sie ohne Abtippen ins Strapi-Backend geseedet werden können.
import { writeFileSync, mkdirSync } from "node:fs";
import { articles } from "../frontend/src/lib/articles.ts";
import { categories } from "../frontend/src/lib/categories.ts";

mkdirSync("output", { recursive: true });
writeFileSync("output/seed-articles.json", JSON.stringify(articles, null, 2));
writeFileSync("output/seed-categories.json", JSON.stringify(categories, null, 2));
console.log(`${articles.length} Artikel, ${categories.length} Kategorien exportiert.`);
