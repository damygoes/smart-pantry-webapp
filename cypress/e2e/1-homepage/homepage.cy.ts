/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/') 
  })

  it('should display the home page content', () => {
    // Check if the title is visible
    cy.get('h1').should('be.visible').and('contain.text', 'Welcome to Smart Pantry')
  })
})
