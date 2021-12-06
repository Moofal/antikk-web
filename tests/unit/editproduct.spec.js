import { flushPromises, mount } from '@vue/test-utils'
import EditProduct from '@/views/EditProduct.vue'
import router from '@/router'
require('jest-fetch-mock').enableMocks()

beforeEach(() => {
  fetch.resetMocks()
})

test('test edit a auction product to be a sale one', async () => {
  fetch.mockResponses(
    [
      JSON.stringify(
        [
          'Møbler',
          'Kjøkken',
          'Hobby',
          'Bøker'
        ]
      )
    ],
    [
      JSON.stringify(
        [{
          id: '21',
          storeId: '1',
          type: 'auction',
          name: 'Fantastic Frozen Towels',
          description: 'The Nagasaki Lander is the trademarked',
          category: 'Hobby',
          startingBid: '620.00',
          bidIncrements: '60',
          endDate: '2021-11-18T04:04:31.090Z'
        }]
      )
    ],
    [
      JSON.stringify(
        {
          id: '21',
          storeId: '1',
          type: 'sale',
          name: 'Fantastic Frozen Towels',
          description: 'The Nagasaki Lander is the trademarked',
          category: 'Kjøkken',
          price: '720.00'
        }
      )
    ]
  )
  const mockRoute = {
    params: {
      id: '21'
    }
  }
  const wrapper = mount(EditProduct, {
    global: {
      mocks: {
        $route: mockRoute
      },
      plugins: [router]
    }
  })
  await flushPromises()
  const category = wrapper.find('select').findAll('option')
  await category.at(1).setSelected()
  const type = wrapper.find('input[type="radio"].sale')
  await type.setChecked()
  expect(type.element.checked).toBeTruthy()
  const price = wrapper.find('input.price')
  await price.setValue('720.00')
  await wrapper.find('button').trigger('click')
  expect(fetch.mock.calls[2][1].body).toEqual(JSON.stringify(
    {
      id: '21',
      storeId: '1',
      type: 'sale',
      name: 'Fantastic Frozen Towels',
      description: 'The Nagasaki Lander is the trademarked',
      category: 'Kjøkken',
      price: '720.00'
    }
  ))
  expect(fetch.mock.calls.length).toEqual(3)
})
