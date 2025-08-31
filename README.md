# 🚀 Estudos Cypress - Repositório de Aprendizado

[![Cypress](https://img.shields.io/badge/Cypress-13.12.0-green.svg)](https://cypress.io)
[![Node.js](https://img.shields.io/badge/Node.js-v20.13.1-blue.svg)](https://nodejs.org)
[![Status](https://img.shields.io/badge/Status-Em%20Andamento-orange.svg)]()

> Repositório pessoal dedicado aos estudos de automação de testes com Cypress, desde conceitos básicos até técnicas avançadas.

## 📋 Sobre o Projeto

Este repositório contém minha jornada de aprendizado em **automação de testes com Cypress**, organizada em diferentes módulos que cobrem desde os fundamentos até técnicas intermediárias e avançadas. Cada pasta representa um curso ou estudo específico, permitindo uma evolução estruturada dos conhecimentos.

### 🎯 Objetivos dos Estudos

- ✅ Dominar conceitos básicos do Cypress
- ✅ Implementar testes de interface gráfica (GUI)
- ✅ Criar testes de API com Cypress
- ✅ Aplicar Page Objects e Custom Commands
- ✅ Configurar integração contínua
- ✅ Praticar com diferentes aplicações de teste
- ✅ Implementar boas práticas de automação

## 🏗️ Estrutura do Projeto

```
estudos-cypress/
├── 📁 alura-cypress/           # Curso Alura - Testes com Cypress
├── 📁 cypress-do-zero-a-nuvem/ # Curso TAT - Do Zero à Nuvem
├── 📁 Cypressbasico/           # Curso Básico de Cypress
├── 📁 Cypress-intermediario/   # Curso Intermediário de Cypress
├── 📁 DemoQA/                  # Práticas com DemoQA
└── 📁 TodoMVC/                 # Práticas com TodoMVC
```

## 📚 Módulos de Estudo

### 1. 🎓 **Alura Cypress**
**Localização:** `alura-cypress/`

**Foco:** Testes de login e cadastro
- Testes de login correto e incorreto
- Testes de cadastro com validações
- Aplicação de conceitos básicos do Cypress

**Arquivos de Teste:**
- `login-correto.cy.js` - Teste de login válido
- `login-incorreto.cy.js` - Teste de login inválido
- `cadastro-correto.cy.js` - Teste de cadastro válido
- `cadastro-incorreto.cy.js` - Teste de cadastro inválido

### 2. 🚀 **Cypress do Zero à Nuvem**
**Localização:** `cypress-do-zero-a-nuvem/`

**Foco:** Jornada completa do básico ao avançado
- Configuração inicial do ambiente
- Testes básicos com aplicação CAC TAT
- Preparação para integração contínua
- Integração com Cypress Cloud

**Aplicação de Estudo:** Central de Atendimento ao Cliente TAT
- Formulários com validações
- Upload de arquivos
- Navegação entre páginas
- Elementos interativos

### 3. 📖 **Cypress Básico**
**Localização:** `Cypressbasico/`

**Foco:** Fundamentos do Cypress
- Primeiros passos com Cypress
- Comandos básicos e seletores
- Testes de interface simples
- Download de arquivos

**Arquivos de Teste:**
- `CAC-TAT.cy.js` - Testes da aplicação CAC TAT
- `privacy.cy.js` - Testes de página de privacidade

### 4. 🔧 **Cypress Intermediário**
**Localização:** `Cypress-intermediario/`

**Foco:** Técnicas intermediárias e avançadas
- Testes de API com feedback visual
- Autenticação e tokens
- Custom commands organizados por camadas
- Gerenciamento de sessão
- Geração de dados aleatórios
- Testes de leitura de arquivos

**Estrutura de Testes:**
- `api/` - Testes de API
- `gui/` - Testes de interface gráfica
- `support/` - Custom commands organizados

### 5 🎯 **DemoQA**
**Localização:** `DemoQA/`

**Foco:** Práticas com elementos específicos
- Testes de radio buttons
- Interações com elementos da DemoQA
- Exploração da aplicação DemoQA

**Arquivos de Teste:**
- `radio_button.cy.js` - Testes de radio buttons
- `abrirdemoqa.cy.js` - Navegação na DemoQA
- `teste.cy.js` - Testes básicos

### 6. ✅ **TodoMVC**
**Localização:** `TodoMVC/`

**Foco:** Testes de aplicação Todo List
- Testes organizados por aulas
- Page Objects e Elements
- Testes de funcionalidades CRUD
- Testes regressivos

**Estrutura:**
- `aula1/` - Testes da tela inicial
- `aula2/` - Testes de adicionar, concluir, deletar e filtrar itens
- `aula3/` - Testes regressivos completos

## 🛠️ Tecnologias Utilizadas

### Ferramentas Principais
- **Cypress** v13.12.0 - Framework de automação
- **Node.js** v20.13.1 - Runtime JavaScript
- **npm** - Gerenciador de pacotes
- **Git** - Controle de versão

### Conhecimentos Aplicados
- **JavaScript ES6+** - Linguagem de programação
- **CSS Selectors** - Seletores para elementos
- **HTML** - Estrutura das páginas
- **API Testing** - Testes de APIs REST
- **Page Object Model** - Padrão de organização
- **Custom Commands** - Comandos personalizados

## 🚀 Como Executar os Projetos

### Pré-requisitos
```bash
# Node.js instalado (versão 20.13.1 ou superior)
node --version

# npm instalado
npm --version
```

### Executando um Projeto Específico

1. **Navegue para o projeto desejado:**
```bash
cd nome-do-projeto
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute os testes:**

**Modo interativo (recomendado para estudos):**
```bash
npm run cy:open
# ou
npx cypress open
```

**Modo headless (para CI/CD):**
```bash
npm test
# ou
npx cypress run
```

## 📊 Progresso dos Estudos

### ✅ Concluído
- [x] Configuração de ambiente Cypress
- [x] Testes básicos de interface
- [x] Testes de formulários e validações
- [x] Testes de login e cadastro
- [x] Testes de API básicos
- [x] Custom commands simples
- [x] Page Objects básicos

### 🔄 Em Andamento
- [ ] Testes avançados de API
- [ ] Integração contínua completa
- [ ] Cypress Cloud
- [ ] Testes de performance
- [ ] Relatórios avançados

### 📋 Próximos Passos
- [ ] Testes de acessibilidade
- [ ] Testes de visual regression
- [ ] Testes de segurança
- [ ] Otimização de performance
- [ ] Framework de testes robusto

## 🧪 Exemplos de Testes

### Teste Básico de Interface
```javascript
describe('Aplicação de Teste', () => {
  it('deve carregar a página corretamente', () => {
    cy.visit('/')
    cy.title().should('eq', 'Título Esperado')
  })
})
```

### Teste de Formulário
```javascript
describe('Formulário de Login', () => {
  it('deve fazer login com credenciais válidas', () => {
    cy.visit('/login')
    cy.get('[data-testid=email]').type('usuario@teste.com')
    cy.get('[data-testid=password]').type('senha123')
    cy.get('[data-testid=submit]').click()
    cy.url().should('include', '/dashboard')
  })
})
```

### Teste de API
```javascript
describe('API de Usuários', () => {
  it('deve criar um novo usuário', () => {
    cy.request('POST', '/api/users', {
      name: 'Junior Silva',
      email: 'joao@teste.com'
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
    })
  })
})
```

## 📖 Recursos de Estudo

### Cursos e Materiais
- **Escola Talking About Testing (TAT)** - Cursos básico e intermediário
- **Alura** - Curso de Cypress
- **DemoQA** - Práticas com elementos específicos
- **TodoMVC** - Aplicação para práticas

### Documentação Oficial
- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress API Reference](https://docs.cypress.io/api/table-of-contents)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

### Comunidades
- [Cypress Community](https://github.com/cypress-io/cypress)
- [Talking About Testing](https://talkingabouttesting.com/)
- [Cypress Discord](https://discord.gg/cypress)

## 🎯 Metas de Aprendizado

### Curto Prazo (1-3 meses)
- [x] Dominar comandos básicos do Cypress
- [x] Implementar testes de formulários
- [ ] Configurar CI/CD básico
- [ ] Criar custom commands avançados

### Médio Prazo (3-6 meses)
- [ ] Integrar com Cypress Cloud
- [ ] Implementar testes de API complexos
- [ ] Criar framework de testes robusto
- [ ] Otimizar performance dos testes

### Longo Prazo (6+ meses)
- [ ] Testes de acessibilidade
- [ ] Testes de visual regression
- [ ] Testes de segurança
- [ ] Mentoria e compartilhamento de conhecimento

## 📝 Anotações Pessoais

### Dicas Aprendidas
- Sempre usar seletores estáveis (`data-testid`)
- Implementar waits inteligentes
- Organizar testes por funcionalidade
- Usar Page Objects para reutilização
- Manter testes independentes

### Desafios Encontrados
- Configuração inicial do ambiente
- Debugging de testes flaky
- Otimização de performance
- Integração com CI/CD

### Conquistas
- Primeiro teste automatizado ✅
- Testes de API funcionando ✅
- Custom commands implementados ✅
- Page Objects aplicados ✅

## 🤝 Contribuições

Este é um projeto pessoal de estudos, mas sugestões e dicas são sempre bem-vindas! Se você encontrar algo que pode ser melhorado ou tiver alguma dica, sinta-se à vontade para compartilhar.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

⭐ **Projeto em constante evolução - sempre aprendendo e evoluindo!**

---

*Desenvolvido com ❤️ para estudos de automação de testes com Cypress*

*Última atualização: Dezembro 2024*
