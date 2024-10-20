
const elem = require('../elements/tela-Inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela-Inicial.elements').ITENS
const filtroItem = require('../elements/tela-Inicial.elements').FILTROS

class telaInicial {

    inputText(dado){
        console.log(dado);  // Verifica o valor de "dado"
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    concluirItem() {
        cy.get(concluirItem.buttonConcluirItem)
        .last()
        .click()
    }

    filtrarItem(menu) {
        cy.get(filtroItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
    }

    deletarItem() {
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')     // invoca o elemento que aparece apenas ao passar o mouse
        .click()
    }

}

export default new telaInicial();