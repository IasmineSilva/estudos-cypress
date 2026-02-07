describe('Prática ruim de abstração incorreta', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('usa comando personalizado para asserção apenas pela questão de reutilização', () => {
    cy.buscar('cypress')
    cy.wait('@getStories')

    cy.verificarResultados()
  })

  it('usa comando personalizado para asserção apenas pela questão de reutilização', () => {
    cy.buscar('selenium')
    cy.wait('@getStories')

    cy.verificarResultados()
  })

  it('usa comando personalizado para asserção apenas pela questão de reutilização', () => {
    cy.buscar('playwright')
    cy.wait('@getStories')

    cy.verificarResultados()
  })
})
