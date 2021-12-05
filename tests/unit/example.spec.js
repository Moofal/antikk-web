import { flushPromises, shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
require('jest-fetch-mock').enableMocks()

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('renders products', async () => {
    fetch.mockResponses(
      [
        JSON.stringify({
          categories: [
            'Møbler',
            'Kjøkken',
            'Hobby',
            'Bøker'
          ]
        })
      ],
      [
        JSON.stringify({
          products: [
            {
              id: '1',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'sale',
              name: 'Sleek Plastic Shoes',
              description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
              category: 'Møbler',
              price: '552.00'
            },
            {
              id: '2',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'sale',
              name: 'Unbranded Rubber Computer',
              description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
              category: 'Bøker',
              price: '615.00'
            },
            {
              id: '3',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'sale',
              name: 'Handcrafted Steel Chair',
              description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
              category: 'Møbler',
              price: '790.00'
            },
            {
              id: '4',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'sale',
              name: 'Handmade Fresh Hat',
              description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
              category: 'Bøker',
              price: '917.00'
            },
            {
              id: '5',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'sale',
              name: 'Generic Soft Table',
              description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
              category: 'Kjøkken',
              price: '320.00'
            },
            {
              id: '6',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'sale',
              name: 'Fantastic Plastic Hat',
              description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
              category: 'Kjøkken',
              price: '127.00'
            }
          ]
        })
      ]
    )
    shallowMount(Home)
    await flushPromises()
    expect(fetch.mock.calls.length).toEqual(2)
  })
})
