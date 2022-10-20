const percySnapshot = require('@percy/webdriverio');

describe('Browserstack Prod', () => {

    it('Correct Browserstack Production Homepage Title', async () => {
        await browser.url('https://www.browserstack.com ');
        await expect(browser).toHaveTitle('Most Reliable App &amp; Cross Browser Testing Platform | BrowserStack');
        await percySnapshot('Browserstack.com Production Homepage');
    });
    
});