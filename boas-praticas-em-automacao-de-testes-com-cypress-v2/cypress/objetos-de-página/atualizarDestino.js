const atualizarDestino = {
  atualizarInfo: dados => {
    cy.get('#destination_name')
      .clear()
      .type(dados.name)
    cy.get('#destination_description')
      .clear()
      .type(dados.description)
    cy.get('input[type="submit"]')
      .click()
  }
}

module.exports = atualizarDestino
