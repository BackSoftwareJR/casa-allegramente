import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import LaVilla from './pages/LaVilla'
import Servizi from './pages/Servizi'
import Laboratori from './pages/Laboratori'
import Contatti from './pages/Contatti'
import Privacy from './pages/Privacy'
import CookiePolicy from './pages/CookiePolicy'
import Termini from './pages/Termini'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/la-villa" element={<LaVilla />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/laboratori" element={<Laboratori />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        <Route path="/termini" element={<Termini />} />
      </Route>
    </Routes>
  )
}
