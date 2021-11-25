const host = 'http://localhost'
const port = ':9090'

const url = {
  productLimit: 'http://localhost:9090/products?_limit=',
  productLimitCategory: '',
  categories: 'http://localhost:9090/product/categories',
  productId: 'http://localhost:3000/products?id=',
  userSimen: 'http://localhost:3000/users/?_fname=Simen',
  storeId: 'http://localhost:9090/store/',
  productsStoreId: 'http://localhost:9090/client/store/',
  orders: 'http://localhost:3000/order',
  putProduct: 'http://localhost:3000/products/',
  orderId: 'http://localhost:3000/order/?id=',

  addNewProduct: 'http://localhost:9090/business/store/product/add',
  addNewAuction: '#',

  getProductDetails: function (storeID) {
    return host + port + '/client/product/' + storeID + '/details'
  }
}

export default url
