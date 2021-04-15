const timeout = 10000
exports.config = {
    runner: 'local',
    specs: [
        './wdio-tests/**/*.js'
    ],
    maxInstances: 3,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://react-dva-starter.surge.sh',
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
