const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: 'f29rdt',

  
  e2e: {
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
     
      // implement node event listeners here
    },
  },
});
