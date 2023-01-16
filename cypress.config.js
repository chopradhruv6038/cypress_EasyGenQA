const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f29rdt',

  
  e2e: {
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
     
      // implement node event listeners here
    },
  },
});
