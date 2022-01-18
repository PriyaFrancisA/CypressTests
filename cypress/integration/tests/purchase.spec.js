/// <reference types="cypress" />

describe('register tests', () => {
  beforeEach(() => {
   cy.visit('https://www.demoblaze.com/')
  })

  it('should show added items in shopping cart', () => {
   cy.addItemsToCart()
   //assert
    cy.get('#tbodyid > :nth-child(2) > :nth-child(2)').invoke('text').should('match', /Sony vaio i7\n|ASUS Full HD/);
  })

  it('should able to purchase items from the website', () => {
    cy.addItemsToCart()
    cy.purchase()
    //assert
    cy.get('.sweet-alert > h2').should('contain.text', 'Thank you for your purchase!')
  })

})
