require('babel-core/register');
const path = require('path');
const fs = require('fs');
const specFolder = path.join(path.dirname(fs.realpathSync(__filename)), '../../spec');

exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [specFolder + '/angular/*-spec.js'],
  baseUrl: 'https://angularjs.org/',
  framework: 'mocha',
  ignoreSynchronization: true,
  mochaOpts: {
    'slow': 3000,
    'timeout': 900000,
    'reporter': 'mocha-junit-reporter',
    'reporterOptions': {
      mochaFile: 'reports/raghupro-protractor.[hash].xml'
    },
    ui: 'bdd',
  },
  params: {
    FACTORY_DIR: path.join(path.dirname(fs.realpathSync(__filename)), '../../framework/factory'),
    PAGES_ROOT_DIR: path.join(path.dirname(fs.realpathSync(__filename)), '../../framework/pages'),
    UTILS_ROOT_DIR: path.join(path.dirname(fs.realpathSync(__filename)), '../../framework/utils'),
    waitTimeout: 10000,
  },
  onPrepare: function onPrepare() {
    const UtilsFactory = require(path.join(browser.params.FACTORY_DIR, 'utils-factory'));
    const utilsFactory = new UtilsFactory();
    utils = utilsFactory.getAllUtils();

    setTimeout(() => {
      browser.driver.executeScript(() => {
        return {
          width: window.screen.availWidth,
          height: window.screen.availHeight,
        };
      }).then((result) => {
        browser.driver.manage().window().setSize(result.width, result.height);
      });
    });
    browser.driver.ignoreSynchronization = false;

    browser.driver.get(browser.baseUrl);
    return browser.driver.wait(() => {
      return browser.driver.getCurrentUrl().then((url) => {
        return url;
      });
    }, 10000);
  },
};
