// Single source of truth for Tortollandia link-hub.
export const site = {
  name: 'Tortollandia',
  owner: 'Weronika Jenczelewska',
  city: 'Ełk',
  url: 'https://tortollandia.pl',
  tagline: 'Torty artystyczne na każdą okazję',
  description:
    'Tortollandia — pracownia tortów artystycznych z Ełku. Torty na urodziny, chrzciny, komunie, wesela i każdą wyjątkową okazję. Zadzwoń, napisz lub odwiedź nas w mediach społecznościowych.',
  phoneDisplay: '728 950 291',
  phoneE164: '+48728950291',
  email: 'tortollandiaelk@gmail.com',

  // Physical address of the studio (source: Google Business Profile / Maps place,
  // resolved from the map short-link). Used for the LocalBusiness/Bakery schema.
  address: {
    street: 'Generała Fieldorfa „Nila” 6',
    postalCode: '19-300',
    region: 'warmińsko-mazurskie',
  },
  // Geo coordinates of the address (geocoded, matches the Google Maps place pin).
  geo: { lat: 53.8412614, lng: 22.3592268 },

  // Opening hours for schema.org openingHoursSpecification. Tortollandia is a
  // by-order studio (no walk-in retail counter), so hours are left empty until the
  // owner confirms exact visiting hours — an empty array omits the field entirely
  // rather than publishing guessed hours. Format: { days:['Monday',…], opens:'09:00', closes:'17:00' }.
  openingHours: [] as { days: string[]; opens: string; closes: string }[],

  links: {
    facebook: 'https://www.facebook.com/Tortollandia',
    instagram: 'https://www.instagram.com/tortollandia_elk',
    googleReview: 'https://g.page/r/CROU7uTuqp8GEBI/review',
    googleMaps: 'https://maps.app.goo.gl/84samJv4SSBEMwDa7',
    whatsapp: 'https://wa.me/48728950291',
  },

  // "Jak dojechać" (/dojazd) — the owner's short film showing how to reach the
  // studio. Resolution order: self-hosted `file` (preferred: native player, fast,
  // no third-party chrome) → `youtubeId` (unlisted) → `driveId` (Google Drive
  // /preview iframe, requires the file be shared "anyone with the link"). Leave all
  // empty to hide the player and show the map/contact only.
  dojazdVideo: {
    file: '',
    poster: '',
    youtubeId: '',
    driveId: '1GneGP1_KAcNDu5D6W8v_1VTPyOd7qki8',
  },

  // Contact form — Web3Forms (static-friendly, free). Delivers to the email above.
  // TODO(owner): replace with the real access key generated for tortollandiaelk@gmail.com
  // at https://web3forms.com (enter the email, key is emailed instantly). Until then the
  // page falls back to the direct e-mail / WhatsApp / phone buttons, which work immediately.
  web3formsAccessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',

  // Cloudflare Web Analytics beacon token — optional alternative to GA4 (cookie-light).
  // Beacon only loads when a token is set. Left empty; owner chose GA4 (below).
  cloudflareToken: '',

  // Google Analytics 4 measurement ID (owner-supplied). Tracks page_view per path,
  // so banner scans land on /banner and are counted separately from organic "/".
  ga4Id: 'G-8XKX7V3GF4',
} as const;

export type Site = typeof site;
