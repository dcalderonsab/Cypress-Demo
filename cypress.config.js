const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Code Challenge',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: "cypress/reports",
    overwrite: true,
  },
  screenshotsFolder:"cypress/screenshots",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    API_URL: 'https://reqres.in/api/users/',
    WEB_PAGE_URL: 'http://automationpractice.com/index.php'
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout:30000
});
