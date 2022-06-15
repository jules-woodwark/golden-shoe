const STORE_DATA = [
  {
    id: 'london',
    name: 'London Flagship Store',
    address: '12 Oxford St',
    number: '020 1234 5678',
    opening: '09:00 - 20:00',
    img: '/london.jpg',
    facilities: ['In-store shopping', 'In-store pick-up', 'Delivery'],
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh Frederick Street',
    address: '4A Frederick St',
    number: '0131 123 4567',
    opening: '09:00 - 18.30',
    img: '/edinburgh.jpg',
    facilities: ['In-store shopping', 'In-store pick-up', 'Delivery'],
  },
]

export type StoreData = typeof STORE_DATA[0]

export default STORE_DATA