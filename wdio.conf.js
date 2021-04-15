const timeout = 10000
exports.config = {
    runner: 'local',
    specs: [
        './wdio-tests/**/*.js'
    ],
    maxInstances: 2,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },{
        maxInstances: 1,
        browserName: 'firefox',
        acceptInsecureCerts: true
    }],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'https://zilu.dev',
    waitforTimeout: timeout,
    connectionRetryTimeout: 12 * timeout,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 6 * timeout
    },
    onPrepare: function () {
        console.log('<<< BROWSER TESTS STARTED >>>');
    },

    onComplete: function () {
        console.log('<<< BROWSER TESTS FINISHED >>>');
    }
}
