// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "login test": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL + "login")
      .waitForElementVisible("#app", 500)
      .assert.containsText("h1", "TaskAgile")
      .end();
  },

};
