import { faker } from '@faker-js/faker'

describe('Prática ruim de testes instáveis', () => {
  beforeEach(() => {
    cy.visit('https://wlsf82-hacker-stories.web.app')

    cy.contains('p', 'Carregando ...')
      .should('be.visible')
    cy.contains('p', 'Carregando ...')
      .should('not.exist')
  })

  Cypress._.times(10, () => {
    it('mostra um máximo de 5 botões para os últimos termos pesquisados', () => {
      Cypress._.times(6, () => {
        cy.buscar(faker.random.word())
      })

      cy.contains('p', 'Carregando ...')
        .should('be.visible')
      cy.contains('p', 'Carregando ...')
        .should('not.exist')

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})
