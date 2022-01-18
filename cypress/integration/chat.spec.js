/* eslint-disable */
/// <reference types="cypress" />
/* eslint-enable */

import { CHAT_BUTTON_ID, CHAT_ID } from '../../src/constants'

const MESSAGE_MOCK = 'Hello from e2e!'
const MESSAGE_FOR_CHATBOT_ANSWER_MOCK = 'How I can find potatos?'

describe('Chat functionallity', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays chat button', () => {
    cy.get(`#${CHAT_BUTTON_ID}`).should('be.visible')
    cy.get(`#${CHAT_ID}`).should('not.visible')
  })

  it('displays chat on button click', () => {
    cy.openChat()
    cy.get(`#${CHAT_ID}`).should('be.visible')
    cy.get(`#${CHAT_BUTTON_ID}`).should('not.visible')
  })

  it('close chat on button X click', () => {
    cy.openChat()
    cy.get(`#${CHAT_ID}`).should('be.visible')
    cy.get(`#${CHAT_BUTTON_ID}`).should('not.visible')

    cy.closeChat()
    cy.get(`#${CHAT_BUTTON_ID}`).should('be.visible')
    cy.get(`#${CHAT_ID}`).should('not.visible')
  })

  it('displays sent message by enter key', () => {
    cy.openChat()
    cy.sendMessage(MESSAGE_MOCK)
    cy.haveMessage(MESSAGE_MOCK)
  })

  it('displays sent message by send button', () => {
    cy.openChat()
    cy.sendMessage(MESSAGE_MOCK, false)
    cy.haveMessage(MESSAGE_MOCK)
  })

  it('displays chat bot answer', () => {
    cy.openChat()
    cy.sendMessage(MESSAGE_FOR_CHATBOT_ANSWER_MOCK)
    cy.haveMessage(MESSAGE_FOR_CHATBOT_ANSWER_MOCK)
    cy.haveMessage('FAQ')
  })

  it('keeps message history after page', () => {
    cy.openChat()
    cy.sendMessage(MESSAGE_FOR_CHATBOT_ANSWER_MOCK)
    cy.haveMessage(MESSAGE_FOR_CHATBOT_ANSWER_MOCK)

    cy.reload()
    cy.haveMessage(MESSAGE_FOR_CHATBOT_ANSWER_MOCK)
  })
})
