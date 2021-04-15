describe('WebdriverIO Tests Demo Suit', function () {
    it('should have the right title', function () {
        browser.url('https://zilu.dev')
        expect(browser).toHaveTitle('Zilu Rane')
    })
})