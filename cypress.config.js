const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILOSAUR_API_KEY: "x76FxhhRQhrAQwGh",
  },
  projectId: "gx186g",
  e2e: {
    baseUrl: "https://storefrontsmes.amalitech-dev.net",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

