export const configs = {
  navs: [
    {
      name: 'Library',
      href: '/library',
    },
    {
      name: 'My Bar',
      href: '/mybar',
    },
  ],
};

export const alcoholTypes = [
  'Gin',
  'Whiskey',
  'Rum',
  'Brandy',
  'Cognac',
  'Vodka',
  'Tequila',
  'Mezcal',
  'Campari',
  'Maraschino',
  'Triple Sec',
  'Sweet Vermouth',
  'Dry Vermouth',
  'Red Wine',
  'White Wine',
  'Beer',
  'Coffee Liqueur',
  'Chocolate Liqueur',
  'Herbal Liqueur',
  'Absinthe',
  'Champagne',
  'Sake',
  'Soju',
  'Sambuca',
];

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:4000' : 'deployed back-end site';
