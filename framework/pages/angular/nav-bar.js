/**
 * http://usejsdoc.org/
 */
/** Angular Site NavBar.
 * @class NavBar
 */
let instance = null;
class NavBar {
/**
 * Contains locators, elements and functions for Angular HomePage.
 * @constructor
 */
  constructor() {
    if(!instance) {
      instance = this;
    }

    this.ptorElement = utils.ptorElement;
    this.ptorWait = utils.ptorWait;
    this.pageElements = this._getPageElements();
    this.pageLocators = this._getPageLocators();

    return instance;

  }

 /**
 * Has all protractor locator strings.
 * @private
 * @return {Object} Protactor locator strings for this page.
 */
  _getPageLocators() {
    return {
      topLinks: 'ul.nav li.dropdown a.dropdown-toggle',
      subLinks: 'ul.nav li.dropdown.open ul.dropdown-menu li a',
    };
  }

 /**
 * Has all protractor Elements.
 * @private
 * @return {Object} Protactor Elements for this page.
 */
  _getPageElements() {
    return {
    };
  }
/**
 * Navigates through Angular Homepage navbar
 * @public
 * @param {string} topLink - toplink.
 * @param {string} subLink - sublink.
 * @example NavBar.goTo('Learn', 'Case Studies')
 * @returns {Promise.<boolean, Error>} A promise that returns booleans if resolved,
 *     or an Error if rejected.
 */
  goTo(topLink, subLink = null) {
    const topElement = element.all(by.cssContainingText(this.pageLocators.topLinks, topLink)).first();
    return this.ptorElement.click(topElement)
    .then(() => {
      const subElement = element.all(by.cssContainingText(this.pageLocators.subLinks, subLink)).first();
      return this.ptorElement.click(subElement);
    }).catch(error => {
      utils.logger.error('Nav-Bar GoTo failed : ' + error.message);
      throw error;
    });
  }
}

module.exports = NavBar;
