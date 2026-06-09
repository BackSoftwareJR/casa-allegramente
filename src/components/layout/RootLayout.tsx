import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SkipLink } from './SkipLink';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingCTA } from './FloatingCTA';
import { JsonLd } from '@/components/JsonLd';
import PageMeta from '@/components/PageMeta';
import { homeMeta } from '@/data/content';

export function RootLayout() {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const isHome = pathname === '/';

  return (
    <>
      <SkipLink />
      <JsonLd />
      {isHome && <PageMeta title={homeMeta.title} description={homeMeta.description} path="/" />}
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          id="main-content"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: reduced ? 0.1 : 0.25 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingCTA />
    </>
  );
}
