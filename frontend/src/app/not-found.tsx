import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
        Seite nicht gefunden
      </h1>
      <p className="mt-3 text-muted leading-relaxed">
        Die gesuchte Seite existiert nicht (mehr). Vielleicht hilft dir die Startseite oder die
        Kategorien-Übersicht weiter.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Zur Startseite
        </Link>
        <Link
          href="/kategorien"
          className="rounded-md border border-border px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          Kategorien
        </Link>
      </div>
    </div>
  );
}
