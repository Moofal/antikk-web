// This generates temp data to use with json-server
// to test api functions before the real api is finished
require('faker')
require('lodash')
const _ = require('lodash')
const faker = require('faker')
module.exports = function () {
  const faker = require('faker')
  const _ = require('lodash')
  return {
    product: _.times(10, function (n) {
      return {
        id: (n + 1).toString(),
        storeId: _.sample(['1', '2']),
        storeName: _.sample(['Halden Antikvitet', 'Fredrikkstad Antikvitet']),
        type: _.sample(['sale']),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        category: _.sample(['Møbler', 'Kjøkken', 'Hobby', 'Bøker']),
        price: faker.commerce.price()
      }
    }),
    product_auction: _.times(10, function (n) {
      return {
        id: (n + 11).toString(),
        storeId: _.sample(['1', '2']),
        storeName: _.sample(['Halden Antikvitet', 'Fredrikkstad Antikvitet']),
        type: _.sample(['auction']),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        category: _.sample(['Møbler', 'Kjøkken', 'Hobby', 'Bøker']),
        startingBid: faker.commerce.price(),
        bidIncrements: faker.random.number(),
        endDate: faker.date.soon()
      }
    }),
    store: _.times(2, function (n) {
      return {
        id: (n + 1).toString(),
        storeName: _.sample(['Halden Antikvitet', 'Fredrikkstad Antikvitet']),
        description: faker.company.catchPhrase(),
        phone: faker.phone.phoneNumberFormat(),
        address: {
          streetAddress: faker.address.streetAddress(),
          postalCode: _.sample(['1820', '1818'])
        }
      }
    })
  }
}
