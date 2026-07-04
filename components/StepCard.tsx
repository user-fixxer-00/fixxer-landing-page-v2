export default function StepCard({
  number,
  title,
  description,
  onDark = false,
}: {
  number: string;
  title: string;
  description: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`rounded-card p-8 ${
        onDark
          ? "bg-fixxer-surface"
          : "border border-fixxer-border bg-white shadow-card"
      }`}
    >
      <span className="text-5xl font-extrabold tracking-tight text-fixxer-orange">
        {number}
      </span>
      <h3
        className={`mt-5 text-xl font-semibold ${
          onDark ? "text-fixxer-text-on-dark" : "text-fixxer-text-primary"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-[15px] leading-body ${
          onDark ? "text-fixxer-text-on-dark/60" : "text-fixxer-text-muted"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
