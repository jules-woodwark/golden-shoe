export const NAVLINKS = [
  {
    label: 'Womens',
    href: 'search/womens',
  },
  {
    label: 'Mens',
    href: 'search/Mens',
  },
  {
    label: 'Kids',
    href: 'search/kids',
  },
  {
    label: 'Summer',
    href: 'search/summer',
  },
  {
    label: 'Sale',
    href: 'search/sale',
  },
]

const SUB_CATEGORIES = {
  womensSubCategories: [
    {
      name: 'All',
      href: 'womens',
    },
    {
      name: 'High Heels',
      href: 'high-heels',
    },
    {
      name: 'Pumps',
      href: 'pumps',
    },
    {
      name: 'Sandals',
      href: 'womens-sandals',
    },
    {
      name: 'Slippers',
      href: 'womens-slippers',
    },
    {
      name: 'Trainers',
      href: 'womens-trainers',
    },
  ],
  mensSubCategories: [
    {
      name: 'All',
      href: 'mens',
    },
    {
      name: 'Sandals',
      href: 'mens-sandals',
    },
    {
      name: 'Slippers',
      href: 'mens-slippers',
    },
    {
      name: 'Trainers',
      href: 'mens-trainers',
    },
  ],
  kidsSubCategories: [
    {
      name: 'All',
      href: 'kids',
    },
    {
      name: 'Boots',
      href: 'kids-sandals',
    },
    {
      name: 'Trainers',
      href: 'kids-trainers',
    },
  ],
}

const MEGA_MENU_DATA = [
  {
    ...NAVLINKS[0],
    categories: SUB_CATEGORIES.womensSubCategories,
  },
  {
    ...NAVLINKS[1],
    categories: SUB_CATEGORIES.mensSubCategories,
  },
  {
    ...NAVLINKS[2],
    categories: SUB_CATEGORIES.kidsSubCategories,
  },
  {
    ...NAVLINKS[3],
  },
  {
    ...NAVLINKS[4],
  },
]

export type NavData = typeof MEGA_MENU_DATA

export default MEGA_MENU_DATA
