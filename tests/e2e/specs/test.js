// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('#search').should('have.value', '')
    cy.get('#search').type('game')
    
    cy.get('.btn-search').click()   
  })
})
