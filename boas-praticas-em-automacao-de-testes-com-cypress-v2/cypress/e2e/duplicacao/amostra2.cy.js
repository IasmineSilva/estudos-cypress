describe('Prática ruim de duplicação de código - testes repetitivos', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()
  })

  context('Exercício extra 1', () => {
    it('busca por "reactjs"', () => {
      cy.buscar('reactjs')

      cy.wait('@getStories')

      cy.get('.table-row')
        .should('have.length', 100)
    })

    it('busca por "vuejs"', () => {
      cy.buscar('vuejs')

      cy.wait('@getStories')

      cy.get('.table-row')
        .should('have.length', 100)
    })
  })

  context('Exercício extra 2', () => {
    const termsToSearchFor = ['reactjs', 'vuejs', 'angularjs']

    termsToSearchFor.forEach(term => {
      it(`busca por "${term}"`, () => {
        cy.buscar(term)

        cy.wait('@getStories')

        cy.get('.table-row')
          .should('have.length', 100)
      })
    })
  })
})