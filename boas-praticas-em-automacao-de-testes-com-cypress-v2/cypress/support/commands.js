Cypress.Commands.add('buscar', termo => {
  cy.get('input[type="text"]')
    .should('be.visible')
    .clear()
    .type(`${termo}{enter}`)
})

Cypress.Commands.add('verificarResultados', () => {
  cy.get('.table-row').then(linhas => {
    expect(linhas.length).to.be.at.least(1)
  })
})

Cypress.Commands.add('ativarAcordoAleatorio', () => {
  if (Math.random() > 0.5) {
    cy.get('#agree')
      .click()
  }
})
