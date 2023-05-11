describe("Login and Accessibility Test", () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })


    it("Should Login with Valid Credentials", () => {
      cy.get('#username').type('student')
      cy.get('#password').type('Password123')
      cy.get('#submit').click()

      //Assert that user logs in successfully
      cy.get('.post-title', {timeout: 10000})
      .contains('Logged In Successfully')
      .should('be.visible')

      //Click Logout Button to Sign out
      cy.wait(2000)
      cy.get('.wp-block-button__link')
        .should('be.visible')
        .click()
    })

    it("Should Not Login with Invalid Credentials", () => {
        cy.get('#username').type('Students')
        cy.get('#password').type('Passwords1234')
        cy.get('#submit').click()

        //Assert user is not logged in and Error message is displayed
        cy.wait(2000)
        cy.get('#error')
          .contains('Your username is invalid!')
          .should('be.visible')
    })

    it("Should Not Login With No Credentials Entered", () => {
        cy.wait(2000)
        cy.get('#submit').click()

        //Assert user is not logged in and Error message is displayed
        cy.wait(2000)
        cy.get('#error')
          .contains('Your username is invalid!')
          .should('be.visible')
    })


    // Accessibility testing using Axe
    it("Should Pass Accessibility Checks", () => {
        cy.injectAxe() //Inject Axe Core Runtime
        cy.checkA11y() // Scan entire page for accessibility issues
    })

  })
  