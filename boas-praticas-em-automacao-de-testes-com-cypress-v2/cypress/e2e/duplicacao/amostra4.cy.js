describe('Prática ruim de duplicação de código - múltiplas verificações', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })

  it('marca todos os checkboxes de um fieldset específico', () => {
    cy.get('fieldset div input[type="checkbox"]')
      .check()
  })
})