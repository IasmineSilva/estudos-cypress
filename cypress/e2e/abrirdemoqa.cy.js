describe('Testando elementos na DemoQA', () => {
  it('Abrir o site', () => {
    cy.visit('https://demoqa.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
    /* ==== End Cypress Studio ==== */
  })
})