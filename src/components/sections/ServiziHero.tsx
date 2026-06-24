"use client";

import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { visitCta } from "@/data/content";

const SERVIZI_HERO_IMAGES = [
  "/images/villa-esterno-giardino-hero-allegramente.avif",
  "/images/soggiorno-luminoso-stufa-casa-famiglia-anziani.avif",
  "/images/porticato-tavola-apparecchiata-giardino-allegramente.avif",
  "/images/giardino-verde-estate-rivarolo-canavese.avif",
  "/images/villa-esterno-pergola-prato-rivarolo-canavese.avif",
  "/images/sala-pranzo-conviviale-allegramente.avif",
  "/images/giardino-relax-sdraio-ombra-rivarolo.avif",
  "/images/salotto-tv-poltrona-casa-famiglia-anziani.avif",
];

export default function ServiziHero() {
  return (
    <AnimatedMarqueeHero
      className="pt-24"
      tagline="Carta dei servizi AllegraMente 2.0"
      title={
        <>
          I nostri servizi
          <br />
          compresi nella retta
        </>
      }
      ctaText={visitCta.label}
      ctaHref="/contatti"
      images={SERVIZI_HERO_IMAGES}
    />
  );
}
