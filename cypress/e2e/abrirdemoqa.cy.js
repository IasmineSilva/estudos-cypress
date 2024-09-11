describe('Testando elementos na DemoQA', () => {
  it('Abrir o site', () => {
    cy.visit('https://demoqa.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */

    cy.viewport(1920, 1300)
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').clear('I')
    cy.get('#userName').type('iasmine')
    cy.get('#userEmail').clear('te')
    cy.get('#userEmail').type('teste@teste.com.br')
    cy.get('#currentAddress').click()
    cy.get('#permanentAddress').click()
    cy.get('#submit').click()
  })
})