const url = {
  categories: 'http://localhost:3000/categories',
  userSimen: 'http://localhost:3000/users/?_fname=Simen',
  productsStoreId: 'http://localhost:3000/products?storeId=',
  orders: 'http://localhost:3000/order',
  postProduct: 'http://localhost:3000/products/'
}

function getProductLimit (limit) {
  return 'http://localhost:3000/products?_limit=' + limit
}

function getProductLimitCategory (limit, category) {
  return 'http://localhost:3000/products?_limit=' + limit + '&category=' + category
}

function getProductById (id) {
  return 'http://localhost:3000/products?id=' + id
}

function productAction (id) {
  return 'http://localhost:3000/products/' + id
}

function getStoreId (id) {
  return 'http://localhost:3000/store?id=' + id
}

function getOrder (id) {
  return 'http://localhost:3000/order/?id=' + id
}

export { url, getProductLimit, getProductLimitCategory, getProductById, productAction, getStoreId, getOrder }
