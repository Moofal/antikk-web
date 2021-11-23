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
            {
              category: 'Møbler'
            },
            {
              category: 'Kjøkken'
            },
            {
              category: 'Hobby'
            },
            {
              category: 'Bøker'
            }
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
            },
            {
              id: '7',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'sale',
              name: 'Ergonomic Soft Bacon',
              description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
              category: 'Hobby',
              price: '309.00'
            },
            {
              id: '8',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'sale',
              name: 'Awesome Rubber Mouse',
              description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
              category: 'Hobby',
              price: '891.00'
            },
            {
              id: '9',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'sale',
              name: 'Incredible Rubber Bike',
              description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
              category: 'Hobby',
              price: '611.00'
            },
            {
              id: '10',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'sale',
              name: 'Practical Steel Car',
              description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
              category: 'Hobby',
              price: '720.00'
            },
            {
              id: '11',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'auction',
              name: 'Sleek Wooden Gloves',
              description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
              category: 'Hobby',
              startingBid: '942.00',
              bidIncrements: '90',
              endDate: '2021-11-18T02:42:48.664Z'
            },
            {
              id: '12',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'auction',
              name: 'Awesome Granite Pants',
              description: 'The Football Is Good For Training And Recreational Purposes',
              category: 'Hobby',
              startingBid: '867.00',
              bidIncrements: '80',
              endDate: '2021-11-18T03:08:50.723Z'
            },
            {
              id: '13',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'auction',
              name: 'Refined Frozen Bike',
              description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
              category: 'Møbler',
              startingBid: '201.00',
              bidIncrements: '20',
              endDate: '2021-11-17T17:25:14.073Z'
            },
            {
              id: '14',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'auction',
              name: 'Intelligent Soft Mouse',
              description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
              category: 'Bøker',
              startingBid: '284.00',
              bidIncrements: '20',
              endDate: '2021-11-17T17:56:22.776Z'
            },
            {
              id: '15',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'auction',
              name: 'Tasty Cotton Ball',
              description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
              category: 'Hobby',
              startingBid: '865.00',
              bidIncrements: '80',
              endDate: '2021-11-17T15:33:18.618Z'
            },
            {
              id: '16',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'auction',
              name: 'Licensed Plastic Sausages',
              description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
              category: 'Hobby',
              startingBid: '697.00',
              bidIncrements: '60',
              endDate: '2021-11-18T05:19:51.213Z'
            },
            {
              id: '17',
              storeId: '1',
              storeName: 'Fredrikkstad Antikvitet',
              type: 'auction',
              name: 'Awesome Rubber Tuna',
              description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
              category: 'Bøker',
              startingBid: '761.00',
              bidIncrements: '70',
              endDate: '2021-11-18T00:25:32.198Z'
            },
            {
              id: '18',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'auction',
              name: 'Handmade Metal Bacon',
              description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
              category: 'Bøker',
              startingBid: '723.00',
              bidIncrements: '70',
              endDate: '2021-11-17T16:43:26.838Z'
            },
            {
              id: '19',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'auction',
              name: 'Ergonomic Frozen Bike',
              description: 'The Football Is Good For Training And Recreational Purposes',
              category: 'Møbler',
              startingBid: '343.00',
              bidIncrements: '30',
              endDate: '2021-11-17T20:39:25.015Z'
            },
            {
              id: '20',
              storeId: '2',
              storeName: 'Halden Antikvitet',
              type: 'auction',
              name: 'Fantastic Frozen Towels',
              description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
              category: 'Hobby',
              startingBid: '620.00',
              bidIncrements: '60',
              endDate: '2021-11-18T04:04:31.090Z'
            }
          ]
        })
      ]
    )
    const wrapper = shallowMount(Home)
    await flushPromises()
    const categories = wrapper.vm.categories
    console.log(categories)
    expect(fetch.mock.calls.length).toEqual(2)
  })
})
