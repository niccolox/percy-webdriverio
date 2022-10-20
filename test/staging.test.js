const percySnapshot = require('@percy/webdriverio');

describe('Browserstack Staging', () => {

    it('Correct Browserstack Staging Homepage Title', async () => {
        await browser.url('https://k8s.bsstag.com/');
        await expect(browser).toHaveTitle('Most Reliable App &amp; Cross Browser Testing Platform | BrowserStack');
        await percySnapshot('Browserstack.com Staging Homepage');
    });
    
});