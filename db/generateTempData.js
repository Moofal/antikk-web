// This generates temp data to use with json-server
// to test api functions before the real api is finished
require('faker')
module.exports = function () {
  const faker = require('faker')
  const _ = require('lodash')
  return {
    product: _.times(10, function (n) {
      return {
        prodId: n + 1,
        businessId: _.sample([1, 2]),
        prodName: faker.commerce.productName(),
        prodDescription: faker.commerce.productDescription(),
        image: faker.image.food(),
        pris: faker.commerce.price()
      }
    })
  }
}
