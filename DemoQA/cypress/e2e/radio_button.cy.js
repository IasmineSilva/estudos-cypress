describe('Testando elementos na DemoQA', () => {
    it('Abrir o site', () => {
      cy.visit('https://demoqa.com')

      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
      
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
      cy.get(':nth-child(2) > .custom-control-label').click();
      cy.get('#yesRadio').check();
      cy.get(':nth-child(3) > .custom-control-label').click();
      cy.get('#impressiveRadio').check();
      
    })
  })