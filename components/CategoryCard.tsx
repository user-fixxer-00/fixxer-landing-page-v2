import {
  Wrench,
  Zap,
  Sun,
  Paintbrush,
  Hammer,
  LayoutGrid,
  Layers,
  Leaf,
  Plug,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  wrench: Wrench,
  zap: Zap,
  sun: Sun,
  paintbrush: Paintbrush,
  hammer: Hammer,
  grid: LayoutGrid,
  layers: Layers,
  leaf: Leaf,
  plug: Plug,
};

export default function CategoryCard({
  icon,
  label,
  description,
}: {
  icon: string;
  label: string;
  description: string;
}) {
  const Icon = ICONS[icon] ?? Wrench;
  return (
    <div className="group rounded-card border border-fixxer-border bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-fixxer-orange/40 hover:shadow-card-hover">
      <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-fixxer-surface-light text-fixxer-charcoal transition-colors duration-200 group-hover:bg-fixxer-orange/10 group-hover:text-fixxer-orange">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-fixxer-text-primary">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-fixxer-text-muted">
        {description}
      </p>
    </div>
  );
}
