const {by, element} = require('nightwatch');
const timeout = 15000000

describe('Basic form component test', () => {
  let component;

  beforeAll(async () => {
    component = await browser.mountVueComponent('/src/components/Form.vue');
  });

  afterAll(async () => {
    await browser.quit()
  })

  it('should load without error', async () => {
    //console.log('component', component)

    await browser.assert.visible('#movie-input');

    //const inputEl = await component.get('#movie-input');
    //console.log('InPut', inputEl);

    expect(await component.isDisplayed()).toBe(true);
    expect(await component.property('recommend')).toBe(false)

  }, timeout);

});