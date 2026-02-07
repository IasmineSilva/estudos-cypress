import { faker } from '@faker-js/faker'

describe('Prática ruim de testes instáveis - Exercício', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://wlsf82-hacker-stories.web.app')
    cy.wait('@getStories')
  })

  Cypress._.times(10, () => {
    it('mostra um máximo de 5 botões para os últimos termos pesquisados', () => {
      Cypress._.times(6, () => {
        cy.buscar(faker.random.word())
      })
      cy.wait('@getStories')

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})

describe('Prática ruim de testes instáveis - Exercício extra 1', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://wlsf82-hacker-stories.web.app')
    cy.wait('@getStories')
  })

  Cypress._.times(10, () => {
    it('mostra um máximo de 5 botões para os últimos termos pesquisados', () => {
      Cypress._.times(6, () => {
        cy.buscar(faker.random.word())
      })
      cy.wait('@getStories')

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})

describe('Prática ruim de testes instáveis - Exercício extra 2', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    )

    cy.visit('https://wlsf82-hacker-stories.web.app')
  })

  Cypress._.times(10, () => {
    it('mostra um máximo de 5 botões para os últimos termos pesquisados', () => {
      Cypress._.times(6, () => {
        cy.buscar(faker.random.word())
      })

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})