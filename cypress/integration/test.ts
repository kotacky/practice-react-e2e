/// <reference types="cypress" />

describe('Cypressによる画面テスト', () => {
  const baseUrl = Cypress.env('baseUrl')

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('#developer-name').type('ほげ山ふが太郎')
    cy.screenshot()
    cy.get('#submit-button').click()
  })

  // テストケースを記述
  it('名前の入力確認テスト', () => {
    cy.get('#article-header').should('contain', 'Thank you, ほげ山ふが太郎!')
    cy.screenshot()
  })
})
