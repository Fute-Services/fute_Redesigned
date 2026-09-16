/* Supplied FUTÉ image library, served locally from /public/images. */
export const IMAGES = {
  coast: {
    src: '/images/coast.webp',
    width: 1919,
    height: 1080,
    alt: 'Supplied visual reference of a coastal mixed-use development.',
  },
  hero: {
    src: '/images/hero.webp',
    width: 1919,
    height: 1080,
    alt: 'Supplied visual reference of a landscaped architectural arrival sequence at dusk.',
  },
  interior: {
    src: '/images/interior.webp',
    width: 1919,
    height: 1080,
    alt: 'Supplied visual reference of a premium hospitality interior.',
  },
  lifestyle: {
    src: '/images/lifestyle.webp',
    width: 1919,
    height: 1080,
    alt: 'Supplied visual reference of a premium outdoor hospitality space.',
  },
  aiArrival: {
    src: '/images/ai-arrival.webp',
    width: 1920,
    height: 1080,
    alt: 'Conceptual AI character in a light-filled architectural lobby.',
  },
  aiEvening: {
    src: '/images/ai-evening.webp',
    width: 1920,
    height: 1080,
    alt: 'Conceptual AI character in an evening hospitality setting.',
  },
  clientsA: {
    src: '/images/clients-a.webp',
    width: 807,
    height: 447,
    alt: 'Supplied client logo sheet including Hiranandani Communities, The Wadhwa Group, Shapoorji Pallonji, Brigade Group, CapitaLand, RSP and other collaborators.',
  },
  clientsB: {
    src: '/images/clients-b.webp',
    width: 808,
    height: 454,
    alt: 'Supplied client logo sheet including L&T Realty, Oberoi Realty, Godrej Properties, Phoenix, Embassy Group and other collaborators.',
  },
} as const

export const VOICEOVER_SRC = '/images/voiceover.mp3'

export const AGENT_ANSWERS: Record<string, string> = {
  location: 'Begin with context. Explore the location through the life it makes possible.',
  spaces: 'Move into what matters: approved spaces, plans and options.',
  next: 'Compare with clarity. Prepare the next useful sales conversation.',
}
