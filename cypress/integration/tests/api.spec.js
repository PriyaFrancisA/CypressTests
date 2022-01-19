/// <reference types="cypress" />

describe('api tests', () => {
  
    it.skip('should able to add item to cart', () => {
        cy.api({
              method: 'POST',
              url: '/addtocart',
              body: {
                id: '5cbdae6b-4281-8be7-f2a8-5e443e641dfa',
                cookie: 'user=864348e0-e2e0-e40a-d0cd-048de92e6380',
                prod_id: 1,
                flag: false
              },
            }).then((response) => {
              expect(response.status).to.equal(200);
            });
    })
  
    it.skip('should able to view cart', () => {
      cy.api({
        method: 'POST',
        url: '/viewcart',
        body: {
          cookie: 'user=864348e0-e2e0-e40a-d0cd-048de92e6380',
          flag: false
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    })

    it.skip('should able to purchase devices', () => {
     //test to see items can be posted success and see order id is generated
      })
  
  })