import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

test('renders products', () => {
  const wrapper = mount(Home)
  const products = wrapper.vm.products
  console.log(products)
})
