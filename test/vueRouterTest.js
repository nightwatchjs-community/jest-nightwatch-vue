const timeout = 15000000

describe('Vue Router Tests', () => {
  let component;

  beforeAll(async () => {
    component = await browser.mountVueComponent('/src/components/Router/App.vue', {
      plugins: {
        router: '/src/components/Router/router.js'
      }
    });

  }, timeout);

  afterAll(async () => {
    await browser.quit()
  })

  it('can render with vue router', async () => {
    await browser.expect(component).to.be.visible;

    const links = await component.findAll('a');
    await browser.expect(links).to.have.length(2);

    await browser
      .click(component.find('a[href="/"]'))
      .assert.textEquals('#content', 'You are home');

    const locationPath = await browser.execute(function() {return document.location.pathname});
    await browser.expect(locationPath).to.equal('/');
  }, timeout);

});