/**
 * http://usejsdoc.org/
 */
/**
 * Angular Page Factory
 *  @public
 * @class
 */
const path = require('path');
const HomePage = require(path.join(browser.params.PAGES_ROOT_DIR, 'angular', 'home-page'));
class AngularPageFactory {
  /**
   * Provides functions that the return appropriate page objects related to angular site
   * @constructor
   */
  constructor() {
    console.log("instantiating angular page factory.");
  }

  /**
   * Returns angular homepage object
   * @public
   */
    homePage() {
    return new HomePage();
  }

}
module.exports = AngularPageFactory;
