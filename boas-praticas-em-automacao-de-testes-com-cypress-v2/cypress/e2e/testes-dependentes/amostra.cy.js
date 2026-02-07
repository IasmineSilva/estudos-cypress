describe('Prática ruim de testes dependentes', () => {
  beforeEach(() => {
    cy.visit('http://notes-serverless-app.com')

    cy.get('.navbar-nav a:contains(Login)').click()

    cy.get('#email').type(Cypress.env('user_email'))
    cy.get('#password').type(Cypress.env('user_password'), { log: false })
    cy.get('button[type="submit"]').click()

    cy.contains('h1', 'Your Notes').should('be.visible')
  })

  it('cria uma nota', () => {
    cy.contains('Create a new note').click()

    cy.get('#content').type('Minha nota')
    cy.contains('Create').click()

    cy.get('.list-group').should('contain', 'Minha nota')
  })

  it('edita uma nota', () => {
    cy.get('.list-group').contains('Minha nota').click()
    cy.get('#content').type(' atualizada')
    cy.contains('Save').click()

    cy.get('.list-group').should('contain', 'Minha nota atualizada')
    cy.get('.list-group:contains(Minha nota atualizada)').should('be.visible')
  })

  it('deleta uma nota', () => {
    cy.get('.list-group').contains('Minha nota atualizada').click()
    cy.contains('Delete').click()

    cy.get('.list-group:contains(Minha nota atualizada)').should('not.exist')
  })
})
