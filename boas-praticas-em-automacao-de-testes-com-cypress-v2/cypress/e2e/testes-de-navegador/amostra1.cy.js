describe('Prática ruim de teste de navegador - href de âncora', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('direciona o usuário para a página de login ao clicar no link de login', () => {
    cy.contains('.nav a', 'Login')
      .should('have.attr', 'href', '/login')
      .should('not.have.attr', 'target', '_blank')

  })
})
