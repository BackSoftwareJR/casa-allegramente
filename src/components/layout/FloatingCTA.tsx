import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { telHref, whatsappHref } from '@/lib/utils';

export function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 16 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 16 }}
          transition={{ duration: reduced ? 0.15 : 0.3 }}
          className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 md:right-6"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2"
              >
                <a
                  href={telHref(siteConfig.contact.phoneRaw)}
                  className="flex min-h-12 items-center gap-3 rounded-full bg-cedar px-5 py-3 font-sans text-sm font-semibold text-white-warm shadow-warm-lg transition-colors hover:bg-cedar-dark"
                  onClick={() => setOpen(false)}
                  aria-label="Chiama Casa Allegramente"
                >
                  <Phone size={16} />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={whatsappHref(
                    siteConfig.contact.whatsapp,
                    'Buongiorno, vorrei informazioni su Casa Allegramente',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 font-sans text-sm font-semibold text-white shadow-warm-lg transition-colors hover:bg-[#1ebe5d]"
                  onClick={() => setOpen(false)}
                  aria-label="Scrivi su WhatsApp"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            whileHover={reduced ? undefined : { scale: 1.05 }}
            whileTap={reduced ? undefined : { scale: 0.95 }}
            aria-label={open ? 'Chiudi menu contatti' : 'Apri menu contatti'}
            aria-expanded={open}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-white-warm shadow-terracotta-glow transition-colors hover:bg-terracotta-dark"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="phone"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Phone size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
