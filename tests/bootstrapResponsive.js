module.exports = {
  'Bootstrap Dashboard Large' : function (browser) {
    browser
      .resizeWindow(1980, 1000)
      .url('https://v4-alpha.getbootstrap.com/examples/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('main h1', 'Dashboard')
      .saveScreenshot('./screenshots/dashboard-lg.png')
      .end();
  },
  'Bootstrap Dashboard Medium' : function (browser) {
    browser
      .resizeWindow(1300, 700)
      .url('https://v4-alpha.getbootstrap.com/examples/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('main h1', 'Dashboard')
      .saveScreenshot('./screenshots/dashboard-md.png')
      .end();
  },
  'Bootstrap Dashboard Small' : function (browser) {
    browser
      .resizeWindow(900, 600)
      .url('https://v4-alpha.getbootstrap.com/examples/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('main h1', 'Dashboard')
      .saveScreenshot('./screenshots/dashboard-sm.png')
      .end();
  },
  'Bootstrap Dashboard Extra Small' : function (browser) {
    browser
      .resizeWindow(400, 800)
      .url('https://v4-alpha.getbootstrap.com/examples/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.containsText('main h1', 'Dashboard')
      .saveScreenshot('./screenshots/dashboard-xs.png')
      .end();
  }
};
