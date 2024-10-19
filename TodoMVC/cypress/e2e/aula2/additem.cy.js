
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista de ToDo', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Adicionar um item na lista', () =>{
        telaInicial.inputText()
    })
});