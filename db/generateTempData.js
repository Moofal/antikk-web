// This generates temp data to use with json-server
// to test api functions before the real api is finished
require('faker')
require('lodash')
module.exports = function () {
  const faker = require('faker')
  const _ = require('lodash')
  return {
    product: _.times(10, function (n) {
      return {
        storeId: _.sample([1, 2]),
        prodId: n + 1,
        storeName: _.sample([1, 2]),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.food(),
        pris: faker.commerce.price(),
        type: _.sample(['action', 'sale'])
      }
    })
  }
}
