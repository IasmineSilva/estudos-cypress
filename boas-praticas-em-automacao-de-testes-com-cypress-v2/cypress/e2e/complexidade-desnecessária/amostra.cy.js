describe('Prática ruim de complexidade desnecessária', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
    cy.ativarAcordoAleatorio()
  })

  Cypress._.times(5, () => {
    it('verifica a caixa de seleção apenas se não estiver marcada', () => {
      cy.get('body', { log: false }).then($body => {
        if ($body.find('#agree:checked').length) {
          cy.log('caixa de seleção estava marcada')
          return
        }
        cy.log('caixa de seleção estava desmarcada')
        $body.find('#agree').click()
        return
      })

      cy.get('#agree', { log: false })
        .should('be.checked')
    })
  })
})