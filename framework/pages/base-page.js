/**
 * http://usejsdoc.org/
 */
/** RaghuPro Angular BasePage.
 * @class BasePage
 */
class BasePage {

 /**
  * Contains locators, elements and functions common to angular pages extending BasePage.
  * @constructor
  * @param {string} relativeURL - Relative URL, if not specified defaults to /
  */
  constructor(relativeURL = '/') {
    this.relativeURL = relativeURL;
  }

  loadPage() {

  }
  waitForPageToLoad() {

  }
  isAt() {

  }
}

module.exports = BasePage;
