// Single source of truth for Tortollandia link-hub.
export const site = {
  name: 'Tortollandia',
  owner: 'Weronika Janczelewska',
  city: 'Ełk',
  url: 'https://tortollandia.pl',
  tagline: 'Torty artystyczne na każdą okazję',
  description:
    'Tortollandia — pracownia tortów artystycznych z Ełku. Torty na urodziny, chrzciny, komunie, wesela i każdą wyjątkową okazję. Zadzwoń, napisz lub odwiedź nas w mediach społecznościowych.',
  phoneDisplay: '728 950 291',
  phoneE164: '+48728950291',
  email: 'tortollandiaelk@gmail.com',

  links: {
    facebook: 'https://www.facebook.com/Tortollandia',
    instagram: 'https://www.instagram.com/tortollandia_elk',
    googleReview: 'https://g.page/r/CROU7uTuqp8GEBI/review',
    whatsapp: 'https://wa.me/48728950291',
  },

  // Contact form — Web3Forms (static-friendly, free). Delivers to the email above.
  // TODO(owner): replace with the real access key generated for tortollandiaelk@gmail.com
  // at https://web3forms.com (enter the email, key is emailed instantly). Until then the
  // page falls back to the direct e-mail / WhatsApp / phone buttons, which work immediately.
  web3formsAccessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',

  // Cloudflare Web Analytics beacon token — counts QR scans / visits (cookie-light).
  // TODO(owner): create a free site at https://dash.cloudflare.com → Web Analytics,
  // add tortollandia.pl, paste the token here. Beacon only loads when a token is set.
  cloudflareToken: '',
} as const;

export type Site = typeof site;
