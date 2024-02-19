/// <reference types="cypress" />

describe('Just visit e2e test', () => {
  it('should visit', () => {
    cy.visit('/')
  })
})

describe('Search', () => {
  it('error on load', () => {
    //load the app
    cy.visit('/')
    //display the popup box
    cy.get('[data-testid="popuperror"]').should('be.visible')

    //click ok button after error is displayed
    cy.findByRole('button', {
      name: /ok/i,
    }).click()

    //popup box should now be hidden
    cy.get('[data-testid="popuperror"]').should('not.exist')

    // search false input
    cy.findByRole('textbox').type('yxcvbnmxcvbn')

    // the popup box should now be visible
    cy.get('[data-testid="popuperror"]').should('be.visible')

    //click ok button after error is displayed
    cy.findByRole('button', {
      name: /ok/i,
    }).click()

    //popup box should now be hidden
    cy.get('[data-testid="popuperror"]').should('not.exist')
  })

  it('search by domain', () => {
    //load the app
    cy.visit('/')
    // search google.com
    cy.findByRole('textbox').type('google.com')

    //clicks the button
    cy.get('.bg-black').click()

    // check if the data loads correctly
    cy.findByText(/142\.250\.217\.142/i)
    cy.findByText(/little tokyo,california/i)
    cy.findByText(/utc \-08:00/i)
    cy.findByText(/google llc/i)
  })
})
