/* eslint-disable */
/// <reference types="cypress" />
/* eslint-enable */

import {
  LOADER_ID,
  PRODUCT_LIST_ID,
  PRODUCT_SEARCH_INPUT_ID,
} from '../../src/constants'

const UNKNOWN_PRODUCT_MOCK = 'unknown-product'

describe('Product list functionallity', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays list of products', () => {
    cy.get(`#${PRODUCT_LIST_ID}`).should('be.visible')
    cy.get(`#${PRODUCT_LIST_ID}>a`).should('have.length.gte', 20)
  })

  it('displays search input', () => {
    cy.get(`#${PRODUCT_SEARCH_INPUT_ID}`).should('be.visible')
  })

  it('displays empty list for unknown search value', () => {
    cy.get(`#${PRODUCT_SEARCH_INPUT_ID}`)
      .type(UNKNOWN_PRODUCT_MOCK)
      .should('have.value', UNKNOWN_PRODUCT_MOCK)
    cy.get(`#${PRODUCT_LIST_ID}>a`).should('have.length', 0)
  })

  it('displays not empty list for search value is "a"', () => {
    cy.get(`#${PRODUCT_SEARCH_INPUT_ID}`).type('a')
    cy.get(`#${PRODUCT_LIST_ID}>a`).should('have.length.gt', 0)
  })

  it('displays loading, has lazy loading for list', () => {
    cy.get(`#${PRODUCT_LIST_ID}>a`).should('have.length', 20)
    cy.scrollTo('bottom', { duration: 500, easing: 'swing' })
    cy.get(`#${LOADER_ID}`).should('exist')
    cy.get(`#${PRODUCT_LIST_ID}>a`).should('have.length.gt', 20)
  })
})
