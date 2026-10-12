export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const siteConfig = {
  brandName: 'Onesto Nutri Nova',
  brandShort: 'NNF',
  tagline: 'Better Nutrition. Stronger Herds. A Better Tomorrow.',
  description:
    'NutriNova Feed supports dairy farmers, cattle growers, and bulk buyers with practical feed solutions for healthier livestock and stronger farm performance.',
  announcementBarText: 'Dealer inquiries, product questions, and farm support are welcome via WhatsApp.',
  phone: '+92 348 4952348',
  whatsappNumber: '923484952348',
  landline: '+92 413 421103',
  address: 'Factory 1 km Gojra Road, Samundri, Faisalabad',
  googleMapsUrl: 'https://maps.google.com/?q=Factory+1+km+Gojra+Road+Samundri+Faisalabad',
  whatsappMessage: 'Assalam-o-Alaikum, I would like information about [Product Name] by NutriNova Feed (NNF). Please share the available specifications, bag sizes, pricing, and dealer information.',
  socialLinks: {
    facebook: '',
    instagram: '',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Dairy Feed', href: '/dairy-feed' },
    { label: 'Cattle Fattening', href: '/cattle-fattening' },
    { label: 'Quality & Manufacturing', href: '/quality-manufacturing' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const buildWhatsAppLink = (message = '') => {
  const text = message || 'Assalam-o-Alaikum, I would like to know more about NutriNova Feed (NNF).';
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const categoryDescriptions: Record<string, string> = {
  'Dairy Feed': 'Balanced nutrition for productive dairy cattle and milk-focused herds.',
  'Cattle Fattening / Meat Feed': 'Feed solutions designed to support cattle finishers and meat production goals.',
};
