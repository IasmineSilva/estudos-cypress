
// / <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function () {
    const THREE_SECONDS_IN_MS = 3000
    beforeEach(function () {
        cy.visit('./src/index.html')
    })
    // it('Verifica o titulo da aplicação', function(){
    //     Cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    // })
    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'teste, teste, teste, teste'

        cy.clock()

        cy.get('#firstName').type('Iasmine')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('teste@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
    })
    it('Mensagem de erro ao submeter o formulário a um erro', function () {
        cy.clock()
        cy.get('#firstName').type('Iasmine')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('teste@gmail,com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })
    it('Campo telefone continua vazio quando preenchido com valor não numerico', function () {
        cy.get('#phone')
            .type('abcdefgih')
            .should('have.value', '')
    })
    it('telefone obigatorio, mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Iasmine')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('teste@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })
    it('Preenche e limpa os campos nome, sobrnome, e-mail e telefone', function () {
        cy.get('#firstName')
            .type('Sousa')
            .should('have.value', 'Sousa')
            .clear()
            .should('have.value', '')
    })
    it('envia o formulário com sucesso usando comando customizado', function () {
        cy.filMandatoryFieldAndSubmit()
        cy.get('.success').should('be.visible')
    })
    it('seleciona o produto (Youtube) pelo seu texto', function () {
        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
    })
    it('seleciona um produto (Mentoria) por seu valor', function () {
        cy.get('#product')
        .select('Mentoria')
        .should('have.value', 'mentoria')
    })
    it('seleciona um produto (Blog) por seu índice', function (){
        cy.get('#product')
        .select(1)
    })
    it('marca o tipo de atendimento "Feedback"', function (){
        cy.get('input[type="radio"][value=feedback]')
        .check()
        .should('have.value', 'feedback')
    })
    it('marca o tipo de atendimento', function (){
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })
    it('marca ambos checkbox, depois desmarca o ultimo', function(){
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
    })
   it('Seleciona um arquivo da pasta fixtures', function(){
    cy.get('#file-upload')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input){
    expect($input[0].files[0].name).to.equal('example.json')
    })
   }) 
   it('seleciona um arquivo simulando um drag-and-drop', function(){
    cy.get('#file-upload')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
    .should(function($input){
    expect($input[0].files[0].name).to.equal('example.json')
    })
   })
   it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',function(){
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
    .selectFile('@sampleFile')
   })
   it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',function(){
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
   })
   it('acessa a página da politica de privacidade removendo o target e então clicando no link',function(){
    cy.get('#privacy a')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('Talking About Testing')
    .should('be.visible')
   })
   it('seleciona o produto (Youtube) pelo seu texto', function () {
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
    })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
      })

    it('preenche a area de texto usando o comando invoke', function(){
        const longText = Cypress._.repeat('0123456789', 20)

        cy.get('#open-text-area')
        .invoke('val', longText)
        .should('have.value', longText) 
    })
    it('faz uma requisição HTTP', function(){
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should(function(response){
            const { status, statusText, body} = response
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
            expect(body).to.include('CAC TAT')
        })
    })
   it('Encontra o gato escondido', function(){
    cy.get('#cat')
    .invoke('show')
    .should('be.visible')
    cy.get('#title')
    .invoke('text', 'CAT TAT')
    cy.get('#subtitle')
    .invoke('text', 'Eu 💜 Gatos')
   })
})

