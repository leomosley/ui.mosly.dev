export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18V6l8 6 8-6v12" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M4 18h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
