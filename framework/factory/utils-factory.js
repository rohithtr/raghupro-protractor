/**
 * http://usejsdoc.org/
 */
/**
 * UtilsFactory
 *  @public
 * @class
 */
const path = require('path');
const Logger = require(path.join(browser.params.UTILS_ROOT_DIR, 'logger'));
const Assert = require(path.join(browser.params.UTILS_ROOT_DIR, 'assert'));
const PtorElement = require(path.join(browser.params.UTILS_ROOT_DIR, 'ptor-element'));
const PtorWait = require(path.join(browser.params.UTILS_ROOT_DIR, 'ptor-wait'));

class UtilsFactory {
  /**
   * @constructor
   */
  constructor() {

  }

/**
 * getAllUtils
 * Gets all necessary protractor framework (and more..) utils
 * @public
 * @returns {Object} utils - JSON object that holds all framework necessary instantiated modules
 */
  getAllUtils() {
    const utils = {};
    utils.logger = new Logger().winstonLogger;
    utils.assert = new Assert().chaiExpect;
    utils.ptorElement = new PtorElement();
    utils.ptorWait = new PtorWait();
    return utils;
  }

/**
 * getFrameworkUtils
 * Gets logger and assert utils
 * @public
 * @returns {Object} utils - JSON object that holds logger and assert modules
 */
  getFrameworkUtils() {
    const fwUtils = {};
    fwUtils.logger = new Logger();
    fwUtils.assert = new Assert();
    return fwUtils;
  }

}
module.exports = UtilsFactory;
