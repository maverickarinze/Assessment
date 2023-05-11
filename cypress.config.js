/* const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c7khq4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}); */

/* module.exports = (on, config) => {
  on('task', {
    fileExists: (filePath) => {
      try {
        return fs.promises.access(filePath).then(() => true)
      } catch (_) {
        return false
      }
    }
  })
} */

/* const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = {
  ...lighthouse({
    e2e: {
      setupNodeEvents(on, config) {
        on("before:browser:launch", (browser = {}, launchOptions) => {
          prepareAudit(launchOptions);
        });

        on("task", {
          lighthouse: lighthouse(),
        });
      },
    },
  }),

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}; */

const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");

(module.exports = {
  ...lighthouse,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions); // Configures Chrome flags for Lighthouse

        // Modify browser launch options as needed
        if (browser.family === "chromium" && browser.name !== "electron") {
          launchOptions.args.push("--disable-dev-shm-usage");
        }

        return launchOptions;
      });

      on("task", {
        lighthouse: lighthouse(), // Register Lighthouse task
      });
    },
  },
}),
  pa11y({
    e2e: {
      setupNodeEvents(on, config) {
        on("before:browser:launch", (browser, launchOptions) => {
          prepareAudit(launchOptions); // Configures Chrome flags for Lighthouse

          // Modify browser launch options as needed
          if (browser.family === "chromium" && browser.name !== "electron") {
            launchOptions.args.push("--disable-dev-shm-usage");
          }

          return launchOptions;
        });

        on("task", {
          pa11y: pa11y(), // Register Pa11y (accessibility) task
        });
      },
    },
  });
