export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-sm font-semibold uppercase tracking-caps text-fixxer-orange">
      {children}
    </p>
  );
}
