const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  
  e2e: {
    baseUrl: "http://127.0.0.1:5500",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    setupNodeEvents(on, config) {
      // Implementar event listeners do Cypress aqui
    },
    
    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "js/cypress/e2e/**/*.cy.js"
    ]
  },
  
  reporter: "spec",
  reporterOptions: {
    mochaFile: "test-results/cypress-results.xml",
    toConsole: true
  }
});

