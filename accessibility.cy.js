describe("Accessibility Test", () => {
    it("Should Perform Accessibility Check", () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.injectAxe() //Inject Axe Core Runtime
        cy.checkA11y() // Scan entire page for accessibility issues
    })

})