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
    slug: 'search/womens',
    categories: SUB_CATEGORIES.womensSubCategories,
  },
  {
    name: "Men's",
    slug: 'search/mens',
    categories: SUB_CATEGORIES.mensSubCategories,
  },
  {
    name: 'Kids',
    slug: 'search/kids',
    categories: SUB_CATEGORIES.kidsSubCategories,
  },
  {
    name: 'Summer',
    slug: 'search/summer',
  },
  {
    name: 'Sale',
    slug: 'search/sale',
  },
];

export type NavData = typeof NAVIGATION_DATA;

export default NAVIGATION_DATA;
