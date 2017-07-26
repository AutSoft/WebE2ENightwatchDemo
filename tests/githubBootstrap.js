module.exports = {
  'Look for Bootstrap repository' : function (browser) {
    browser
      .url('https://github.com')
      .waitForElementVisible('body', 1000)
      .setValue('.header-search input[type=text]', 'bootstrap')
      .pause(1000)
      .submitForm('.header-search form')
      .pause(1000)
      .assert.containsText('.repo-list .repo-list-item:nth-child(1)', 'twbs/bootstrap')
      .end();
  },
  'Open Bootstrap repository' : function (browser) {
    browser
      .url('https://github.com/search?utf8=%E2%9C%93&q=bootstrap&type=')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .useXpath()
      .assert.elementPresent('//*[contains(@class, "repo-list")]//*[contains(@class, "repo-list-item")]//*[contains(., "twbs/bootstrap")]')
      .click('//*[contains(@class, "repo-list")]//*[contains(@class, "repo-list-item")]//*[contains(., "twbs/bootstrap")]//a')
      .pause(2000)
      .useCss()
      .assert.containsText('.repohead-details-container', 'twbs/bootstrap')
      .end();
  }
};
