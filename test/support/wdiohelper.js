module.exports = {
  waittillDisplayed: function (el) {
    el.waitForDisplayed()
  },
  waitandclick: function (el) {
    el.waitForDisplayed()
    el.click()
  },

  waitandtype: function (el, content) {
    el.waitForDisplayed()
    el.setValue(content)
  },
}
