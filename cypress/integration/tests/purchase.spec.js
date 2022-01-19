/// <reference types="cypress" />

describe('purchase tests', () => {
  const baseUrl = Cypress.env('baseUrl');
  const itemUrl1 = Cypress.env('itemUrl1');
  const itemUrl2 = Cypress.env('itemUrl2');
  
  beforeEach(() => {
   cy.visit(baseUrl)
  })

  it('should show added items in shopping cart', () => {
    cy.addItemsToCart(itemUrl1,itemUrl2)
    //assert
    cy.get('#tbodyid > :nth-child(2) > :nth-child(2)').invoke('text').should('match', /Sony vaio i7\n|ASUS Full HD/);
    cy.get('#tbodyid > :nth-child(1) > :nth-child(3)').invoke('text').should('match', /790|230/);
    cy.get('#tbodyid > :nth-child(2) > :nth-child(3)').invoke('text').should('match', /790|230/);
  })

  it('should able to purchase items from the website', () => {
    cy.addItemsToCart(itemUrl1,itemUrl2)
    cy.purchase()
    //assert
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!')
    cy.get('.lead').should('contain.text', 'Id: ');
  })

})
