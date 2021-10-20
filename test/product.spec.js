const chai = require('chai')
const chaiHttp = require('chai-http')

chai.should()

chai.use(chaiHttp)

// eslint-disable-next-line no-undef
describe('Product API', () => {
  /**
   * Test GET Route
   */
  // eslint-disable-next-line no-undef
  describe('GET products', () => {
    // eslint-disable-next-line no-undef
    it('it should GET all products', (done) => {
      chai.request('http://localhost:3000')
        .get('/products')
        // eslint-disable-next-line handle-callback-err
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.be.a('array')
          done()
        })
    })
  })
})
