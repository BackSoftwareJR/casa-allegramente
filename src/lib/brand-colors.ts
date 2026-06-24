/**
 * Colori dal logo AllegraMente — versione pastello + accenti morbidi.
 * Usare `pastel` / `soft` per sfondi e box; `accent` per icone e testi; `vivid` solo per piccoli dettagli.
 */
export const brand = {
  orange: {
    pastel: '#FAEDE3',
    soft: '#F5D4BC',
    medium: '#EDB896',
    accent: '#E8956A',
    vivid: '#E8760A',
  },
  green: {
    pastel: '#EAF4E4',
    soft: '#D0E8C4',
    medium: '#A8D49A',
    accent: '#7FBE6E',
    vivid: '#5A8C3A',
  },
  yellow: {
    pastel: '#FDF8E3',
    soft: '#F9EDB8',
    medium: '#F5E08A',
    accent: '#E8CC5A',
    vivid: '#F5C518',
  },
  terracotta: {
    pastel: '#F9EAE6',
    soft: '#EFD0C8',
    medium: '#E4A898',
    accent: '#D48472',
    vivid: '#C94A2A',
  },
  brown: {
    pastel: '#F0E8E0',
    soft: '#D9C9BA',
    medium: '#B09A82',
    accent: '#8A7060',
    vivid: '#5C3A1E',
  },
} as const;

/** Ciclo accenti morbidi per icone, badge, checklist */
export const brandAccentCycle = [
  brand.orange.accent,
  brand.green.accent,
  brand.yellow.accent,
  brand.terracotta.accent,
  brand.green.accent,
  brand.orange.accent,
  brand.terracotta.accent,
  brand.green.accent,
  brand.orange.accent,
] as const;

/** Sfondi pastello per box e card */
export const brandPastelCycle = [
  brand.orange.pastel,
  brand.green.pastel,
  brand.yellow.pastel,
  brand.terracotta.pastel,
  brand.green.pastel,
] as const;

export type BrandHue = keyof typeof brand;
