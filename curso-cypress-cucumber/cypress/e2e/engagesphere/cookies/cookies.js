import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que acesso o app EngageSphare sem nenhum cookie definido', () => {
  cy.visit('https://engage-sphere.vercel.app/')
})

Given('vejo o banner de consentimento de cookies', () => {
  cy.get('[class^="CookieConsent_banner__"]').should('be.visible')
})

When('clico no botão Aceitar', () => {
  cy.contains('button', 'Accept').click()
})

When('clico no botão Recusar', () => {
  cy.contains('button', 'Decline').click()
})

Then('o banner de cookies é fechado', () => {
  cy.get('[class^="CookieConsent_banner__"]').should('not.exist')
})

Then('o cookie cookieConsent é definido com o valor accepted', () => {
  cy.getCookie('cookieConsent').should('have.property', 'value', 'accepted')
})

Then('o cookie cookieConsent é definido com o valor declined', () => {
  cy.getCookie('cookieConsent').should('have.property', 'value', 'declined')
})