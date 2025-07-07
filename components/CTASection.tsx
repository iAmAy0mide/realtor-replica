import Link from "next/link";
import clsx from "clsx";

type Props = {
  title: string;
  subtitle?: string;
  cta: { label: string; href: string };
  dark?: boolean;
};

export default function CTASection({ title, subtitle, cta, dark = false }: Props) {
  return (
    <section className={clsx("text-center px-6 py-20", dark ? "bg-primary text-white" : "bg-surface text-base")}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">{title}</h2>
        {subtitle && <p className="text-muted mb-6">{subtitle}</p>}
        <Link
          href={cta.href}
          className={clsx(
            "inline-block px-6 py-3 rounded-xl font-medium transition shadow-sm",
            dark
              ? "bg-white text-primary hover:bg-gray-100"
              : "bg-primary text-white hover:bg-primary-hover"
          )}
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
