import telaInicialPageObjects from "../../support/pageObjects/tela-inicial.pageObjects";

describe ('Regressivo ToDo App',() => {

    context('Validar a tela inicial', ()=> {
        beforeEach(() => {
            cy.visit('/')
        })
        it('Validar área label de input de dados', () => {
           telaInicialPageObjects.validarInput("What needs to be done?") 
        })
    })

    context('Validar a adição de itens', ()=> {
        
    })

    context('Validar conclusão de itens', ()=> {
        
    })

    context('Validar o filtro da aplicação', ()=> {
        
    })

    context('Validar a remoção de itens', ()=> {
        
    })


})