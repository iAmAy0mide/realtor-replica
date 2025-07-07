import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ImageCard({ title, description, image, href }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm bg-surface border border-border hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-heading text-base mb-2">{title}</h3>
        <p className="text-muted text-sm mb-4">{description}</p>
        <Link
          href={href}
          className="text-primary hover:text-primary-hover font-medium text-sm"
        >
          View Availability →
        </Link>
      </div>
    </div>
  );
}
