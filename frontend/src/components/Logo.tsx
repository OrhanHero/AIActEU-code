export function LogoMark({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      <line x1="12" y1="12" x2="12" y2="5" />
      <line x1="12" y1="12" x2="18" y2="15.5" />
      <line x1="12" y1="12" x2="6" y2="15.5" />
      <circle cx="12" cy="12" r="2.25" fill="currentColor" stroke="none" />
      <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="15.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="6" cy="15.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
