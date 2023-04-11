import {ThreadEntityUtil} from "./data/thread.entity.util";

export const config = {
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: 'tsconfig.json',
            transpileOnly: true
        }
    },
    
    specs: [
        'spec/*.ts'
    ],
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--test-type=browser',
                '--ignore-certificate-errors',
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log',
                '--start-maximized',
                '--disable-gpu',
                '--disable-dev-shm-usage',
            ],
            prefs: {
                directory_upgrade: true,
                prompt_for_download: false,
            },
        }
    }],
    logLevel: 'silent',
    waitforTimeout: 30000,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
        [
            'allure',
            {
                outputDir: 'dist/testing/e2e/reports/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
            },
        ],
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async () => {
        await browser.setWindowSize(1920, 1080);
    },

    onWorkerStart(cid: string, caps: any, specs: string[], args: any) {
        args.entity = ThreadEntityUtil.allocateEntity(cid);
    },

    onWorkerEnd(cid: string) {
        ThreadEntityUtil.releaseEntity(cid);
    },
}
