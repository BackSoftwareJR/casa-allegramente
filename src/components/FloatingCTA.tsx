'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 md:right-6"
        >
          {/* Expanded menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2"
              >
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-3 rounded-full bg-primary px-4 py-2.5 font-sans text-sm font-semibold text-white shadow-warm-lg transition-all hover:bg-primary-dark"
                  onClick={() => setOpen(false)}
                >
                  <Phone size={15} />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Buongiorno, vorrei informazioni su ${siteConfig.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-2.5 font-sans text-sm font-semibold text-white shadow-warm-lg transition-all hover:bg-[#1ebe5d]"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main toggle button — arancione primario */}
          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={open ? 'Chiudi menu contatti' : 'Apri menu contatti'}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary-dark"
            style={{ boxShadow: '0 4px 20px rgba(232,118,10,0.5)' }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="phone" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
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
