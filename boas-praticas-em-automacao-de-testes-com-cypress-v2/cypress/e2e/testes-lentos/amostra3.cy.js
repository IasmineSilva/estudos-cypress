describe('Prática ruim de espera desnecessária', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('busca uma refeição digitando e clicando no botão de envio', () => {
    cy.get('[data-test-id="search-field"]').type('Ramen')
    cy.get('[data-test-id="search-button"]')
      .click()
      .blur()
    cy.wait(10000)

    cy.contains('h2', 'Ramen (sopa)')
      .should('be.visible')
  })
})
