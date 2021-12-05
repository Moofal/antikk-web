const url = {
  categories: 'http://localhost:9090/product/categories',
  userSimen: 'http://localhost:3000/users/?_fname=Simen',
  productsStoreId: 'http://localhost:3000/products?storeId=',
  orders: 'http://localhost:3000/order',
  postProduct: 'http://localhost:9090/business/store/product/add',
  postAuction: '#'
}

function getProductLimit (limit) {
  return 'http://localhost:9090/products?_limit=' + limit + '&category=""'
}

function getProductLimitCategory (limit, category) {
  return 'http://localhost:9090/products?_limit=' + limit + '&category=' + category
}

function getProductsByStoreID (id) {
  return 'http://localhost:9090/client/store/' + id + '/products'
}

function getProductById (id) {
  return 'http://localhost:9090/client/product/' + id + '/details'
}

function productAction (id) {
  return 'http://localhost:3000/products/' + id
}

function getStoreId (id) {
  return 'http://localhost:9090/store/' + id + '/details'
}

function getOrder (id) {
  return 'http://localhost:3000/order/?id=' + id
}

export {
  url,
  getProductLimit,
  getProductLimitCategory,
  getProductById,
  productAction,
  getStoreId,
  getOrder,
  getProductsByStoreID
}
