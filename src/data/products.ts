import { assetUrl } from '../config/site';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: 'Dairy Feed' | 'Cattle Fattening / Meat Feed';
  image: string;
  shortDescription: string;
  fullDescription: string;
  intendedAnimal: string;
  packageSizes: string[];
  pastoralFocus: string[];
  nutritionalNotes: string[];
  feedingGuidance?: string;
  storageGuidance?: string;
  specifications: Array<{ label: string; value: string }>;
};

export const products: Product[] = [
  {
    id: 'nfn-premium-dairy-43',
    slug: 'nfn-premium-dairy-43',
    name: 'NNF Premium Dairy Feed 43',
    category: 'Dairy Feed',
    image: assetUrl('images/36.png'),
    shortDescription: 'High milk formula for productive dairy animals and consistent herd nutrition.',
    fullDescription:
      'NNF Premium Dairy Feed 43 is designed for dairy cattle and milk-focused herds that need a practical, balanced ration. Its formulation supports everyday feeding routines and helps farmers manage consistent nutrition with a dependable feed profile.',
    intendedAnimal: 'Dairy cattle',
    packageSizes: ['40 kg'],
    pastoralFocus: ['Milk-producing cattle', 'Routine farm feeding', 'Balanced dairy ration'],
    nutritionalNotes: ['High milk formula', 'Balanced feed profile', 'Supportive dairy nutrition'],
    feedingGuidance:
      'Use as part of a planned feeding schedule appropriate to herd size, condition, and farm rationing practices.',
    storageGuidance: 'Store in a clean, dry area away from moisture, direct sunlight, and pests.',
    specifications: [
      { label: 'Category', value: 'Dairy Feed' },
      { label: 'Target stage', value: 'Lactating and productive dairy cattle' },
      { label: 'Form', value: 'Pelleted / mixed feed' },
      { label: 'Package', value: '40 kg bag' },
      { label: 'Details', value: 'Contact us for the latest specifications and bag availability.' },
    ],
  },
  {
    id: 'nnf-gold-42',
    slug: 'nnf-gold-42',
    name: 'NNF Gold 42',
    category: 'Dairy Feed',
    image: assetUrl('images/42.png'),
    shortDescription: 'Premium dairy formulation for farmers seeking dependable herd support and routine feed quality.',
    fullDescription:
      'NNF Gold 42 offers a nutrient-focused dairy feed profile intended for regular herd feeding and practical farm planning. It is presented for farmers looking for a dependable feed choice for productive cows and dairy operations.',
    intendedAnimal: 'Dairy herd',
    packageSizes: ['40 kg'],
    pastoralFocus: ['Routine dairy feeding', 'Productive cattle', 'Milk-focused nutrition'],
    nutritionalNotes: ['Premium nutrition strategy', 'Balanced dairy performance', 'Farming practicality'],
    feedingGuidance:
      'Introduce gradually and use according to herd condition, stage of production, and farm feeding plan.',
    storageGuidance: 'Keep bags sealed, dry, and protected from damp conditions.',
    specifications: [
      { label: 'Category', value: 'Dairy Feed' },
      { label: 'Target stage', value: 'Active dairy cattle' },
      { label: 'Form', value: 'Pelleted / mixed feed' },
      { label: 'Package', value: '40 kg bag' },
      { label: 'Details', value: 'Contact us for the latest specifications and dealer support.' },
    ],
  },
  {
    id: 'nnf-meat-ultra-36',
    slug: 'nnf-meat-ultra-36',
    name: 'NNF Meat Ultra 36',
    category: 'Cattle Fattening / Meat Feed',
    image: assetUrl('images/44.png'),
    shortDescription: 'A practical feed choice for cattle finishing and meat production programs.',
    fullDescription:
      'NNF Meat Ultra 36 is designed for cattle fattening and finishing routines. It supports farmers who need a functional feed option for cattle management and consistent feeding during growth and finish stages.',
    intendedAnimal: 'Fattening cattle / meat animals',
    packageSizes: ['40 kg'],
    pastoralFocus: ['Cattle finishers', 'Meat-focused feed program', 'Fattening support'],
    nutritionalNotes: ['Fattening feed purpose', 'Routine feed management', 'Growth support'],
    feedingGuidance:
      'Use as part of a structured fattening plan with attention to herd condition and farm requirements.',
    storageGuidance: 'Store in dry, clean conditions with proper stocking and bag protection.',
    specifications: [
      { label: 'Category', value: 'Cattle Fattening / Meat Feed' },
      { label: 'Target stage', value: 'Growing and finishing cattle' },
      { label: 'Form', value: 'Pelleted / mixed feed' },
      { label: 'Package', value: '40 kg bag' },
      { label: 'Details', value: 'Contact us for the latest formulation and stock information.' },
    ],
  },
  {
    id: 'nnf-premium-dairy-42',
    slug: 'nnf-premium-dairy-42',
    name: 'NNF Premium Dairy Feed 42',
    category: 'Dairy Feed',
    image: assetUrl('images/43.png'),
    shortDescription: 'A balanced dairy feed option aligned to productive herd management and daily routines.',
    fullDescription:
      'NNF Premium Dairy Feed 42 is a practical dairy ration for farms focused on consistent feeding and productive herd performance. It is presented as a dependable feed for regular cattle nutrition programs.',
    intendedAnimal: 'Dairy cattle',
    packageSizes: ['40 kg'],
    pastoralFocus: ['Daily herd nutrition', 'Dairy ration planning', 'Farm-friendly feed solution'],
    nutritionalNotes: ['Balanced everyday feed', 'Routine production support', 'Dependable dairy nutrition'],
    feedingGuidance:
      'Feed according to the farm’s ration plan, herd needs, and the prevailing stage of production.',
    storageGuidance: 'Keep feed dry, sealed, and away from pests and moisture exposure.',
    specifications: [
      { label: 'Category', value: 'Dairy Feed' },
      { label: 'Target stage', value: 'Productive dairy cattle' },
      { label: 'Form', value: 'Pelleted / mixed feed' },
      { label: 'Package', value: '40 kg bag' },
      { label: 'Details', value: 'Contact us for latest bag availability and technical details.' },
    ],
  },
];

export const productBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));
