import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function BlogImage({ src, alt, caption }: BlogImageProps) {
  return (
    <figure className="my-8 not-prose">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-warm-md">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-sans text-sm text-ink-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
