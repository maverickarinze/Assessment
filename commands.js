// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const users = [
    {
      username: "student",
      password: "Password123",
    },
    {
      username: "Jane",
      password: "password123",
    },
  ]
  
  //cy.get("username").type(users[0].username)
  //cy.get("password").type(users[0].password)
  

Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#username').type(users[0].username)
    cy.get('#password').type(users[0].password)
    cy.get('#submit').click()
})
  