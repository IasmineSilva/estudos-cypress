describe('Prática ruim de duplicação de código - passos repetitivos', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .as('searchField')
      .and('have.value', 'redux')
      .clear()
  })

  it('busca digitando e pressionando enter', () => {
    cy.get('@searchField')
      .type('teste de frontend{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })

  it('busca digitando e pressionando o botão de busca', () => {
    cy.get('@searchField')
      .type('teste de frontend')

    cy.contains('button', 'Search')
      .should('be.visible')
      .click()

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })
})