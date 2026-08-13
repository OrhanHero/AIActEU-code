import type { Metadata } from "next";
import { publicationTopics, getPublicationsByTopic } from "@/lib/publications";
import { PublicationCard } from "@/components/PublicationCard";

export const metadata: Metadata = {
  title: "Publikationen",
  description:
    "Kuratierte Forschungsberichte und Papers zu KI: Umwelt-/Ressourcenfußabdruck sowie allgemeinere Einordnungen zu Fähigkeiten, Verbreitung und Sicherheit von KI.",
};

export default function PublikationenPage() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Publikationen</h1>
      <p className="mb-10 max-w-2xl text-muted leading-relaxed">
        Ausgewählte Forschungsberichte und Papers – als Nachschlagewerk, nicht als Newsfeed. Fokus
        auf den ökologischen Fußabdruck von KI (Energie, Wasser, Land) sowie breiter angelegte
        Einordnungen zu Fähigkeiten, Verbreitung und Sicherheit. Jede Karte verlinkt direkt zur
        Originalpublikation.
      </p>

      <div className="flex flex-col gap-12">
        {publicationTopics.map((topic) => {
          const topicPublications = getPublicationsByTopic(topic.slug);
          if (topicPublications.length === 0) return null;
          return (
            <section key={topic.slug}>
              <div className="mb-4 flex items-start gap-3">
                <span className="text-2xl" aria-hidden>
                  {topic.emoji}
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {topic.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{topic.description}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {topicPublications.map((publication) => (
                  <PublicationCard key={publication.url} publication={publication} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
