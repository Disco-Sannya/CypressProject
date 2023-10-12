const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 100000,
    watchForFileChanges: false,
    viewportWidth: 1400,
    viewportHeight: 950,


    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
