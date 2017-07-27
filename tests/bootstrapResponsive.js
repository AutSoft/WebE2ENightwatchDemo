const format = require('string-template');
const now = Math.floor(Date.now()/1000);

module.exports = {
  'Bootstrap Dashboard Large' : function (browser) {
    browser
      .resizeWindow(1980, 1000)
      .url('https://v4-alpha.getbootstrap.com/examples/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('main h1', 'Dashboard')
      .saveScreenshot(format('./screenshots/{0}-{1}-dashboard-lg.png', [now, browser.options.desiredCapabilities.browserName]))
      .end();
  },
  'Bootstrap Dashboard Medium' : function (browser) {
    browser
      .resizeWindow(1300, 700)
      .url('https://v4-alpha.getbootstrap.com/examples/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('main h1', 'Dashboard')
      .saveScreenshot(format('./screenshots/{0}-{1}-dashboard-md.png', [now, browser.options.desiredCapabilities.browserName]))
      .end();
  },
  'Bootstrap Dashboard Small' : function (browser) {
    browser
      .resizeWindow(900, 600)
      .url('https://v4-alpha.getbootstrap.com/examples/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('main h1', 'Dashboard')
      .saveScreenshot(format('./screenshots/{0}-{1}-dashboard-sm.png', [now, browser.options.desiredCapabilities.browserName]))
      .end();
  },
  'Bootstrap Dashboard Extra Small' : function (browser) {
    browser
      .resizeWindow(400, 800)
      .url('https://v4-alpha.getbootstrap.com/examples/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('main h1', 'Dashboard')
      .saveScreenshot(format('./screenshots/{0}-{1}-dashboard-xs.png', [now, browser.options.desiredCapabilities.browserName]))
      .end();
  }
};
