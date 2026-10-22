// First-pass VIF mark: three strokes of one weight on a shared baseline and cap height.
// Placeholder for the refined interlocking monogram.
export default function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="miter"
      strokeLinecap="square"
      role="img"
      aria-label="VIF"
      className={className}
    >
      <path d="M6 8 L22 56 L38 8" />
      <path d="M48 8 V56" />
      <path d="M60 56 V8 H76 M60 30 H73" />
    </svg>
  );
}
