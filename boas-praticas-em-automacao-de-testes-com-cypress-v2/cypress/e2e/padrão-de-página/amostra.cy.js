import { faker } from '@faker-js/faker'

const atualizarDestino = require('../../objetos-de-página/atualizarDestino')

describe('Prática ruim de padrão de página', () => {
  const randomDestination = Math.floor(Math.random() * 15) + 1

  beforeEach(() => {
    cy.visit(`https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}/edit`)
  })

  it('atualiza informações de destino', () => {
    const info = {
      name: faker.random.words(5),
      description: faker.random.words(5)
    }

    atualizarDestino.atualizarInfo(info)

    cy.url()
      .should(
        'be.equal',
        `https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}`
      )
    cy.contains('h2', info.name)
      .should('be.visible')
    cy.contains('p', info.description)
      .should('be.visible')
  })
})
