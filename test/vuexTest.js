const timeout = 15000000

describe('Vuex Tests', () => {
  let component;

  beforeEach(async () => {
    component = await browser.mountVueComponent('/src/components/Store/VuexTest.vue', {
      plugins: {
        store: '/src/components/Store/store.js'
      }
    });

  }, timeout);

  afterAll(async () => {
    await browser.quit()
  })

  test('can render with vuex with defaults', async () => {
    await browser
      .click('[data-testid="incrementer"]')
      .assert.textEquals('[data-testid="count-value"]', '1');
  }, timeout);
});