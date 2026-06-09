import { motion, useReducedMotion } from 'framer-motion';

import { galleryImages } from '@/data/content';

import { SectionHeading } from '@/components/ui/SectionHeading';

import { cn } from '@/lib/utils';

import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';



export function GalleryPreview() {

  const reduced = useReducedMotion();



  return (

    <section id="galleria" className="section-bg-burgundy-light section-spacing" aria-labelledby="gallery-preview">

      <div className="container-site">

        <SectionHeading

          title="Gli ambienti in foto"

          subtitle="Luce naturale, spazi curati e dettagli caldi che fanno davvero casa"

          light

        />



        <motion.div

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true, margin: '-60px' }}

          className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"

        >

          {galleryImages.map((image, i) => (

            <motion.figure

              key={image.src}

              variants={reduced ? fadeOnly : fadeUp}

              className={cn(

                'group relative overflow-hidden rounded-2xl',

                i === 0 && 'col-span-2 aspect-[16/9] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[320px]',

                i !== 0 && 'aspect-square',

              )}

            >

              <img

                src={image.src}

                alt={image.alt}

                loading="lazy"

                className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-[1.02] motion-reduce:transform-none"

              />

              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cedar/80 to-transparent p-4 font-sans text-sm font-medium text-cream">

                {image.category}

              </figcaption>

            </motion.figure>

          ))}

        </motion.div>

      </div>

    </section>

  );

}

