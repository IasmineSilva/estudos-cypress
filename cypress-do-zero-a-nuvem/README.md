# 🚀 Meus Estudos: Cypress do Zero à Nuvem

[![Cypress](https://img.shields.io/badge/Cypress-13.12.0-green.svg)](https://cypress.io)
[![Node.js](https://img.shields.io/badge/Node.js-v20.13.1-blue.svg)](https://nodejs.org)
[![Status](https://img.shields.io/badge/Status-Em%20Andamento-orange.svg)]()

> Projeto pessoal de estudos em automação de testes com Cypress, desde o básico até integração com Cypress Cloud e CI/CD.

## 📋 Sobre o Projeto

Este repositório contém meus estudos práticos de **Cypress**, uma ferramenta poderosa para automação de testes end-to-end. O objetivo é dominar desde os conceitos básicos até configurações avançadas como integração contínua e Cypress Cloud.

### 🎯 Objetivos dos Estudos

- [x] Configurar ambiente de desenvolvimento Cypress
- [x] Aprender comandos básicos e seletores
- [ ] Dominar testes de formulários e validações
- [ ] Implementar testes de upload de arquivos
- [ ] Criar custom commands e Page Objects
- [ ] Configurar integração contínua com GitHub Actions
- [ ] Integrar com Cypress Cloud
- [ ] Aplicar boas práticas de automação

## 🏗️ Estrutura do Projeto

```
cypress-do-zero-a-nuvem/
├── cypress/                    # Configurações e testes Cypress
│   ├── e2e/                   # Testes end-to-end
│   │   └── spec.cy.js        # Meus primeiros testes
│   ├── fixtures/              # Dados de teste
│   └── support/               # Arquivos de suporte
├── lessons/                   # Material de referência
├── src/                       # Aplicação para praticar
│   ├── index.html            # Formulário de contato
│   ├── privacy.html          # Página de privacidade
│   ├── script.js             # JavaScript da aplicação
│   └── style.css             # Estilos CSS
├── package.json              # Dependências do projeto
└── cypress.config.js         # Configuração do Cypress
```

## 🎮 Aplicação de Estudo: CAC TAT

Para praticar, estou usando a aplicação **Central de Atendimento ao Cliente TAT** que simula um formulário de contato com:

### Campos para Testar
- **Obrigatórios**: Nome, Sobrenome, E-mail, Mensagem
- **Opcionais**: Telefone, Produto, Tipo de Atendimento
- **Interativos**: Checkboxes, Radio buttons, Upload de arquivo
- **Validações**: E-mail, campos obrigatórios, regras dinâmicas

### Funcionalidades de Estudo
- ✅ Validação de formulários
- ✅ Interações com elementos
- ✅ Upload de arquivos
- ✅ Testes de interface
- ✅ Navegação entre páginas

## 🛠️ Ambiente de Desenvolvimento

### Ferramentas Utilizadas
- **Node.js** v20.13.1
- **npm** v10.8.1
- **Cypress** v13.12.0
- **Visual Studio Code**
- **Git** para controle de versão

### Conhecimentos Aplicados
- JavaScript ES6+
- Seletores CSS
- Linha de comando
- Git básico
- HTML/CSS

## 🚀 Como Executar

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/cypress-do-zero-a-nuvem.git
cd cypress-do-zero-a-nuvem
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Execute os Testes

**Modo interativo (recomendado para estudos):**
```bash
npm run cy:open
```

**Modo headless (para CI/CD):**
```bash
npm test
```

## 📚 Progresso dos Estudos

### ✅ Concluído
- [x] Configuração inicial do Cypress
- [x] Primeiro teste básico
- [x] Compreensão da estrutura do projeto

### 🔄 Em Andamento
- [ ] Testes de formulários
- [ ] Validações e assertions
- [ ] Interações com elementos

### 📋 Próximos Passos
- [ ] Upload de arquivos
- [ ] Custom commands
- [ ] Page Objects
- [ ] Testes de API
- [ ] Integração contínua
- [ ] Cypress Cloud

## 🧪 Exemplos de Testes

### Teste Básico (Concluído)
```javascript
describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    cy.visit('./src/index.html')
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
})
```

### Próximos Testes a Implementar
```javascript
// Teste de preenchimento de formulário
// Teste de validação de campos obrigatórios
// Teste de upload de arquivo
// Teste de navegação entre páginas
```

## 📖 Recursos de Estudo

### Documentação Oficial
- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress API Reference](https://docs.cypress.io/api/table-of-contents)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

### Materiais de Referência
- [Escola Talking About Testing](https://talkingabouttesting.com/)
- [Canal TAT no YouTube](https://youtube.com/@talkingabouttesting)
- [Comunidade Cypress](https://github.com/cypress-io/cypress)

## 🎯 Metas de Aprendizado

### Curto Prazo
- Dominar comandos básicos do Cypress
- Implementar testes de formulários
- Aprender boas práticas de seletores

### Médio Prazo
- Criar custom commands
- Implementar Page Objects
- Configurar CI/CD básico

### Longo Prazo
- Integrar com Cypress Cloud
- Implementar testes de API
- Criar framework de testes robusto

## 📝 Anotações Pessoais

### Dicas Aprendidas
- Sempre usar seletores estáveis
- Preferir `data-testid` para seletores
- Usar `cy.get()` com cuidado
- Implementar waits inteligentes

### Desafios Encontrados
- Configuração inicial do ambiente
- Compreensão da sintaxe do Cypress
- Debugging de testes

## 🤝 Contribuições

Este é um projeto pessoal de estudos, mas sugestões e dicas são sempre bem-vindas!

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

⭐ **Projeto em constante evolução - sempre aprendendo!**

---

*Desenvolvido com ❤️ para estudos de automação de testes*
