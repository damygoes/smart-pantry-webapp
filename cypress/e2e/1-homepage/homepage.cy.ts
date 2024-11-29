/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/')
    cy.url().should('include', 'smart-pantry-webapp.vercel.app');
  })

  it('should display the home page content', () => {
    // Check if the title is visible
    cy.get('h1', {timeout: 10000}).should('be.visible').and('contain.text', 'Welcome to Smart Pantry')
  })
})
