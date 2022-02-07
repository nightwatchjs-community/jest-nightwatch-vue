module.exports = {
  globalSetup: './lib/setup.js',
  globalTeardown: './lib/teardown.js',
  testEnvironment: 'jest-environment-nightwatch',
  testEnvironmentOptions: {
    capabilities: {},
    env: 'chrome',
    headless: true,
    devtools: false,
    debug: false,
    output: false,
    silent: false,
    parallel: true,
    timeout: 500,
    baseUrl: 'http://localhost:3005',
    async setup(browser) {
      if (global.viteServerUrl) {
        browser.baseUrl = global.viteServerUrl;
      }
    },

    teardown() {
      //console.log('Nightwatch teardown')
    }
  },
  testMatch: [
     "**/test/*.[jt]s?(x)"
  ],
  slowTestThreshold: 15000000
}