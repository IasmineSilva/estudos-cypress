describe('Prática ruim de testes lentos - clicar em um link para visitar uma página', () => {
  it('não ativa o botão de signup quando as senhas não correspondem', () => {
    cy.visit('https://notes-serverless-app.com')

    cy.contains('.btn', 'Signup')
      .click()

    cy.get('#email').type('joe@example.com')
    cy.get('#password').type('foobarbaz')
    cy.get('#confirmPassword').type('foobahbaz')

    cy.contains('button', 'Signup')
      .should('be.disabled')
  })
})
