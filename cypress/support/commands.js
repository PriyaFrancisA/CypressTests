Cypress.Commands.add('addItemsToCart', (itemUrl1,itemUrl2) => {
    cy.visit(itemUrl1)
    cy.get('.col-sm-12 > .btn').click();
    cy.visit(itemUrl2)
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click();
})
Cypress.Commands.add('purchase', () => {
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type('TestName');
    cy.get('#card').type('TestCreditcard');
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
})
