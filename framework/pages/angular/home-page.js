/**
 * http://usejsdoc.org/
 */
const BasePage = require('../base-page');
const NavBar = require('./nav-bar');
/** Angular Site HomePage representing BasePage.
 * @class HomePage
 * @extends BasePage
 */
class HomePage extends BasePage {
/**
 * Contains locators, elements and functions for Angular HomePage.
 * @constructor
 */
  constructor() {
    super();
    this.ptorElement = utils.ptorElement;
    this.ptorWait = utils.ptorWait;
    this.pageElements = this._getPtorElements();
    this.navBar = new NavBar();
  }

 /**
 * Has all protractor Elements.
 * @private
 * @return {Object} Protactor Elements for this page.
 */
  _getPtorElements() {
    return {

      nameInputField: $('body > div.container > div:nth-child(2) > div.span4 > div.well.ng-scope > div > input'),
      nameDisplayField: $('body > div.container > div:nth-child(2) > div.span4 > div.well.ng-scope > div > h1'),

    };
  }

  /**
   * Enters into Name field on Angular Home Page.
   * @public
   * @param {string} name - name to be entered.
   * @example HomePage.enterName(<name>)
   * @returns {Promise.<boolean, Error>} A promise that returns booleans if resolved,
   *     or an Error if rejected.
   */
  enterName(name) {
    return utils.ptorElement.inputText(this.pageElements.nameInputField, name);
  }

  /**
   * Gets text of name display fields.
   * @public
   * @example HomePage.getNameDisplay()
   * @returns {Promise.<string, Error>} A promise that returns string if resolved,
   *    or an Error if rejected.
   */
  getNameDisplay() {
    return this.ptorElement.getText(this.pageElements.nameDisplayField);
  }
}

module.exports = HomePage;
