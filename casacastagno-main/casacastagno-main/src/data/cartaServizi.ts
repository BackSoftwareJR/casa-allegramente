/**
 * Testi strutturali allineati a una tipica Carta dei Servizi per struttura residenziale.
 * Sostituire o integrare con il testo ufficiale della vostra Carta quando disponibile.
 */
export const cartaServizi = {
  struttura:
    'Il Castagno è una casa famiglia per anziani nella Valcuvia: un contesto raccolto, riservato e curato nei dettagli, dove ogni ospite è seguito con continuità e rispetto dei tempi personali.',
  accoglienza:
    'Accoglienza in piccola struttura con massimo quattro posti letto: un modello esclusivo che permette relazioni autentiche, ascolto quotidiano e un ambiente familiare lontano dalla massificazione.',
  assistenza:
    'Assistenza e presenza h24 da personale formato, con monitoraggio delle esigenze di cura, collaborazione con il medico di medicina generale e percorsi condivisi con famiglia e professionisti.',
  cucina:
    'Cucina interna con preparazione dei pasti in struttura, attenzione alle indicazioni dietetiche e stagionalità degli ingredienti, nel rispetto delle abitudini e dei gusti di ciascun ospite.',
  territorio:
    'Posizione privilegiata in Valcuvia: aria buona, verde, quiete e possibilità di passeggiate assistite nel rispetto delle capacità motorie individuali.',
} as const

export const serviziInclusi = [
  {
    titolo: 'Assistenza sanitaria e gestione delle terapie',
    testo:
      'Garantiamo assistenza medica e infermieristica, collaboriamo con il medico curante e controlliamo la corretta auto somministrazione delle terapie farmacologiche per assicurarci il vostro benessere.',
  },
  {
    titolo: 'Lavanderia e stireria',
    testo:
      'Ritiro, lavaggio e riordino della biancheria personale con cicli regolari e cura nell\'attenzione ai tessuti.',
  },
  {
    titolo: 'Connettività',
    testo: 'Rete Wi‑Fi in struttura per restare in contatto con i familiari e usufruire di contenuti digitali in sicurezza.',
  },
  {
    titolo: 'Pulizie e sanificazione',
    testo: 'Ambienti curati quotidianamente con standard igienico-sanitari adeguati e materiali delicati.',
  },
] as const

export const serviziExtra = [
  {
    titolo: 'Fisioterapia in loco',
    sottotitolo:
      'Per la cura del corpo, articolazioni e malesseri vari: il benessere al primo posto.',
  },
  {
    titolo: 'Yoga / ginnastica dolce in loco',
    sottotitolo:
      'Cura del corpo e della mente: la ginnastica dolce previene diversi dolori e malesseri naturali dell’età, aiutando il corpo a tenersi forte e agile.',
  },
  {
    titolo: 'Parrucchiere / estetista in loco',
    sottotitolo: 'Per il piacere nella cura dell’aspetto.',
  },
  {
    titolo: 'Pet therapy',
    sottotitolo:
      'Promuove il benessere fisico e psicologico attraverso la cura e l’amore degli animali.',
  },
  {
    titolo: 'Servizio autista',
    sottotitolo: 'Per qualsiasi spostamento necessario.',
  },
  {
    titolo:
      'Per chi ama pescare: servizio di accompagnamento ai laghetti di pesca attrezzati a Rancio Valcuvia e in Valganna',
    sottotitolo:
      'Momenti di relax all’aperto, con accompagnamento verso i laghetti convenzionati.',
  },
] as const
