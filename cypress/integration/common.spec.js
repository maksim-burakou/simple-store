/* eslint-disable */
/// <reference types="cypress" />
/* eslint-enable */

describe('Common stuff functionallity', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays header', () => {
    cy.get('header').should('be.visible').should('include.text', 'Store')
  })
})
