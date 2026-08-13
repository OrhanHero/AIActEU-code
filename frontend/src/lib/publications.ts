import publicationsData from "@/data/publications.json";

export type PublicationTopic = {
  slug: string;
  emoji: string;
  title: string;
  description: string;
};

export type Publication = {
  title: string;
  authors: string;
  url: string;
  publishedDate: string;
  topic: string;
  summary: string;
};

export const publicationTopics: PublicationTopic[] = publicationsData.topics;
export const publications: Publication[] = publicationsData.publications;

export function getPublicationsByTopic(topicSlug: string): Publication[] {
  return publications
    .filter((p) => p.topic === topicSlug)
    .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
}
