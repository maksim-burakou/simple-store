import {
  CHAT_BUTTON_ID,
  CHAT_MESSAGE_INPUT_ID,
  CHAT_SEND_MESSAGE_ID,
  CHAT_LIST_ID,
  CHAT_CLOSE_BUTTON_ID,
} from '../../src/constants'

Cypress.Commands.add('openChat', () => {
  cy.get(`#${CHAT_BUTTON_ID}`).click()
})

Cypress.Commands.add('closeChat', () => {
  cy.get(`#${CHAT_CLOSE_BUTTON_ID}`).click()
})

Cypress.Commands.add('sendMessage', (message, byEnter = true) => {
  cy.get(`#${CHAT_MESSAGE_INPUT_ID}`)
    .type(`${message}${byEnter ? '{enter}' : ''}`)
    .should('be.empty')
  if (!byEnter) {
    cy.get(`#${CHAT_SEND_MESSAGE_ID}`).click()
  }
})

Cypress.Commands.add('haveMessage', (message) => {
  cy.get(`#${CHAT_LIST_ID}`).should('include.text', message)
})
