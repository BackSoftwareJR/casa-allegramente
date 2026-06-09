import { Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';
import { HomePage } from '@/pages/HomePage';
import { ChiSiamoPage } from '@/pages/ChiSiamoPage';
import { ServiziPage } from '@/pages/ServiziPage';
import { VitaQuotidianaPage } from '@/pages/VitaQuotidianaPage';
import { DoveSiamoPage } from '@/pages/DoveSiamoPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="chi-siamo" element={<ChiSiamoPage />} />
        <Route path="servizi" element={<ServiziPage />} />
        <Route path="la-vita-in-casa" element={<VitaQuotidianaPage />} />
        <Route path="dove-siamo" element={<DoveSiamoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
