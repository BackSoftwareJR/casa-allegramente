'use client';

import Image from 'next/image';

const ROW_ONE = [
  { src: '/images/villa-esterno-giardino-hero-allegramente.avif', alt: 'Facciata e giardino Villa AllegraMente' },
  { src: '/images/soggiorno-luminoso-stufa-casa-famiglia-anziani.avif', alt: 'Soggiorno luminoso Casa AllegraMente' },
  { src: '/images/porticato-tavola-apparecchiata-giardino-allegramente.avif', alt: 'Tavola apparecchiata sotto il porticato' },
  { src: '/images/giardino-verde-estate-rivarolo-canavese.avif', alt: 'Giardino verde in estate' },
  { src: '/images/villa-esterno-pergola-prato-rivarolo-canavese.avif', alt: 'Villa con pergola e prato verde' },
];

const ROW_TWO = [
  { src: '/images/sala-pranzo-conviviale-allegramente.avif', alt: 'Sala pranzo conviviale' },
  { src: '/images/giardino-relax-sdraio-ombra-rivarolo.avif', alt: 'Giardino relax con sdraio' },
  { src: '/images/salotto-tv-poltrona-casa-famiglia-anziani.avif', alt: 'Salotto accogliente con TV' },
  { src: '/images/ingresso-accogliente-scala-giardino-rivarolo.avif', alt: 'Ingresso accogliente con scala' },
  { src: '/images/cucina-pranzo-vista-giardino-casa-famiglia.avif', alt: 'Cucina con vista giardino' },
];

function SliderRow({
  images,
  direction = 'left',
  duration = 55,
}: {
  images: typeof ROW_ONE;
  direction?: 'left' | 'right';
  duration?: number;
}) {
  const doubled = [...images, ...images];
  const animName = direction === 'left' ? 'slide-left' : 'slide-right';

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12"
        style={{ background: 'linear-gradient(to right, #f0ebe4 0%, transparent 100%)' }}
        aria-hidden="true"
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12"
        style={{ background: 'linear-gradient(to left, #f0ebe4 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div
        className="flex gap-4 w-max"
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 h-80 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(45,58,46,0.10)] transition-transform duration-500 hover:scale-[1.03]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={288}
              height={320}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImageAutoSlider() {
  return (
    <>
      <style>{`
        @keyframes slide-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="flex flex-col gap-4 w-full">
        <SliderRow images={ROW_ONE} direction="left"  duration={55} />
        <SliderRow images={ROW_TWO} direction="right" duration={50} />
      </div>
    </>
  );
}
