import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  trade: string;
  quote: string;
  rating: number;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-fixxer-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      <div
        className="flex gap-1 text-fixxer-orange"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 text-[15px] leading-body text-fixxer-text-primary">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-fixxer-border pt-5">
        <p className="font-semibold text-fixxer-text-primary">
          {testimonial.name}
        </p>
        <p className="mt-1 text-sm text-fixxer-text-muted">
          {testimonial.location} · {testimonial.trade}
        </p>
      </figcaption>
    </figure>
  );
}
