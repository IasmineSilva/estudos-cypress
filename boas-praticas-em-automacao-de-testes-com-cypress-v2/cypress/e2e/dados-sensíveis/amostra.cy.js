describe('Prática ruim de dados sensíveis', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('preenche o formulário vazando dados sensíveis', () => {
    cy.get('#email').type('joe@example.com')
    cy.get('#password').type('s3Cr€7-p@s5w0rd')
  })
})
