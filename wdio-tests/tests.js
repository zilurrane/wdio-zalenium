describe('WebdriverIO Tests Demo Suit', function () {
    it('should have the right title', function () {
        browser.url('http://react-dva-starter.surge.sh')
        expect(browser).toHaveTitle('React Dva Starter')
    })
})