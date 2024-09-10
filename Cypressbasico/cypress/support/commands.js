Cypress.Commands.add('filMandatoryFieldAndSubmit', function(){
    cy.get('#firstName').type('Iasmine')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})