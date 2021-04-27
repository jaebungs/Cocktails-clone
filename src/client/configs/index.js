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

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:4000' : 'deployed back-end site';
