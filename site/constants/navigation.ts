const SUB_CATEGORIES = {
  womensSubCategories: [
    {
      name: 'High Heels',
      slug: 'high-heels',
    },
    {
      name: 'Pumps',
      slug: 'pumps',
    },
    {
      name: 'Sandals',
      slug: 'womens-sandals',
    },
    {
      name: 'Slippers',
      slug: 'womens-slippers',
    },
    {
      name: 'Trainers',
      slug: 'womens-trainers',
    },
  ],
  mensSubCategories: [
    {
      name: 'Sandals',
      slug: 'mens-sandals',
    },
    {
      name: 'Slippers',
      slug: 'mens-slippers',
    },
    {
      name: 'Trainers',
      slug: 'mens-trainers',
    },
  ],
  kidsSubCategories: [
    {
      name: 'Boots',
      slug: 'kids-sandals',
    },
    {
      name: 'Trainers',
      slug: 'kids-trainers',
    },
  ],
};

const NAVIGATION_DATA = [
  {
    name: "Women's",
    slug: 'womens',
    categories: SUB_CATEGORIES.womensSubCategories,
  },
  {
    name: "Men's",
    slug: 'mens',
    categories: SUB_CATEGORIES.mensSubCategories,
  },
  {
    name: 'Kids',
    slug: 'kids',
    categories: SUB_CATEGORIES.kidsSubCategories,
  },
  {
    name: 'Summer',
    slug: 'summer',
  },
  {
    name: 'Sale',
    slug: 'sale',
  },
];

export type NavData = typeof NAVIGATION_DATA;

export default NAVIGATION_DATA;
