// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//These are now global hooks
before(function () {
    cy.log("Runs once at beginning of suite")
  });
  after(function () {
    cy.log('Runs once at the end of the suite')
  });
  beforeEach(function () {
    cy.log('Runs before each test in suite')
  });
  afterEach(function () {
    cy.log('Runs at the end of every test in suite')
  });