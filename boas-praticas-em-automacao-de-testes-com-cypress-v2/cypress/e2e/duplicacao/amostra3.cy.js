describe('Prática ruim de duplicação de código - ações e asserções repetitivas', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('busca o mesmo termo 3 vezes', () => {
    Cypress._.times(3, () => {
      cy.buscar('cypress.io')

      cy.get('.table-row')
        .its('length')
        .should('be.at.least', 1)
    })
  })
})