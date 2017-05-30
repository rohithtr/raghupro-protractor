/**
 * http://usejsdoc.org/
 */
/*
 * @fileoverview wait related Library
 * @author Rohith <rohith.tr@gmail.com>
 * @summary  Wrappers on Protractor expected conditions
 * @description Wrappers on Protractor expected conditions
 * @version 0.1
 */

/**
 * Wait
 * Protractor Wait related libraries
 **/
const Logger = require('./logger');
let instance = null;

class PtorWait {
  constructor(timeout = 10000) {
    if(!instance) {
      instance = this;
    }
           	this.waitTimeout = timeout;
        	this.expectedConditions = protractor.ExpectedConditions;
    this.logger = new Logger().winstonLogger;
    return instance;
  }

  /**
   * Wrapper for protractor getText
   * @public
   * @param {Object} ptorEle - Protractor Element
   * @example PtorElement.getText($('.username'))
   * @returns {Promise.<boolean, Error>} A promise that returns string if resolved,
   *     or an Error if rejected.
   */
  elementToBeVisible(ptorElement, timeout = this.waitTimeout) {
    return browser.wait(this.expectedConditions.visibilityOf(ptorElement), timeout, 'timedout')
		.then(success => {
  this.logger.debug(ptorElement.locator() + ' is visible');
  return success;
}).catch(error => {
  const locatorString = ptorElement.locator();
  this.logger.error('locator not visible: ' + locatorString + ' ' + error.message);
  throw error;
			// return new Error('locator not visible: ' + locatorString + ' ' + error.message);
			// this.stack = (new Error()).stack;
			// throw new Error('locator not visible: ' + locatorString + ' ' + error.message);
			// return error.message;
});
  }
 
 /**
 * Wrapper for protractor wait elementToBeClickable
 * @public
 * @param {Object} ptorElement - Protractor Element
 * @param {integer} timeout - in milliseconds - takes default timeout if not specified
 * @example PtorWait.elementToBeClickable($('.submit'))
 * @returns {Promise.<boolean, Error>} A promise that returns success if resolved,
 *     or an Error if rejected.
 */
  elementToBeClickable(ptorElement, timeout = this.timeout) {
    return browser.wait(this.expectedConditions.elementToBeClickable(ptorElement), timeout, 'timedout')
		.then(success => {
  this.logger.debug(ptorElement.locator() + ' is visible');
  return success;
}).catch(error => {
  const locatorString = ptorElement.locator();
  this.logger.error('locator not clickable: ' + locatorString + ' ' + error.message);
  throw error;
			// return new Error('locator not visible: ' + locatorString + ' ' + error.message);
			// this.stack = (new Error()).stack;
			// throw new Error('locator not visible: ' + locatorString + ' ' + error.message);
			// return error.message;
});
  }
}

module.exports = PtorWait;
