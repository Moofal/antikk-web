const url = {
  productLimit: 'http://localhost:3000/products?_limit=',
  productLimitCategory: '',
  categories: 'http://localhost:3000/categories',
  productId: 'http://localhost:3000/products?id=',
  userSimen: 'http://localhost:3000/users/?_fname=Simen',
  storeId: 'http://localhost:3000/store?id=',
  productsStoreId: 'http://localhost:3000/products?storeId=',
  orders: 'http://localhost:3000/order',
  productAction: 'http://localhost:3000/products/',
  orderId: 'http://localhost:3000/order/?id='
}

function getProductLimit (limit) {
  return 'http://localhost:3000/products?_limit=' + limit
}

export { url, getProductLimit }
