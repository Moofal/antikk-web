import { flushPromises, mount } from '@vue/test-utils'
import RegisterProduct from '@/views/RegisterProduct.vue'
import router from '@/router'
require('jest-fetch-mock').enableMocks()

beforeEach(() => {
  fetch.resetMocks()
})

test('test register a auction product', async () => {
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
        {
          id: '21',
          storeId: '1',
          type: 'auction',
          name: 'Fantastic Frozen Towels',
          description: 'The Nagasaki Lander is the trademarked',
          category: 'Hobby',
          startingBid: '620.00',
          bidIncrements: '60',
          endDate: '2021-11-18T04:04:31.090Z'
        }
      )
    ]
  )
  const mockRoute = {
    params: {
      id: '1'
    }
  }
  const wrapper = mount(RegisterProduct, {
    global: {
      mocks: {
        $route: mockRoute
      },
      plugins: [router]
    }
  })
  await flushPromises()
  const prodName = wrapper.find('input.name')
  await prodName.setValue('Fantastic Frozen Towels')
  expect(wrapper.find('input.name').element.value).toBe('Fantastic Frozen Towels')
  const prodDesc = wrapper.find('textarea')
  await prodDesc.setValue('The Nagasaki Lander is the trademarked')
  expect(wrapper.find('textarea').element.value).toBe('The Nagasaki Lander is the trademarked')
  await wrapper.setData({ product: { category: 'Hobby' } })
  const type = wrapper.find('input[type="radio"].auction')
  await type.setChecked()
  expect(type.element.checked).toBeTruthy()
  const startingBid = wrapper.find('input.startingBid')
  await startingBid.setValue('620.00')
  expect(wrapper.find('input.startingBid').element.value).toBe('620.00')
  const bidIncrements = wrapper.find('input.bidIncrements')
  await bidIncrements.setValue('60')
  expect(wrapper.find('input.bidIncrements').element.value).toBe('60')
  await wrapper.setData({
    product: {
      endDate: '2021-11-18T04:04:31.090Z'
    }
  })
  expect(wrapper.vm.product.endDate).toBe('2021-11-18T04:04:31.090Z')
  await wrapper.find('button').trigger('click')
  expect(fetch.mock.calls.length).toEqual(2)
  expect(fetch.mock.calls[1][1].body).toEqual(JSON.stringify({
    id: '21',
    storeId: '1',
    type: 'auction',
    name: 'Fantastic Frozen Towels',
    description: 'The Nagasaki Lander is the trademarked',
    category: 'Hobby',
    startingBid: '620.00',
    bidIncrements: '60',
    endDate: '2021-11-18T04:04:31.090Z'
  }))
})
