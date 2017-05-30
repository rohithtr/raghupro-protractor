/**
 * http://usejsdoc.org/
 */
/*
 * @fileoverview ptor dom actions related Library
 * @author Rohith <rohith.tr@gmail.com>
 * @summary  Wrappers on Protractor element APIs
 * @description Wrappers on Protractor element APIs
 * @version 0.1
 */
const WinstonLogger = require('./logger');
const PtorWait = require('./ptor-wait');
/**
 * PtorElement
 * Protractor Wait related libraries
 **/
let instance = null;

class PtorElement {
  /**
  * Singleton class for Protractor Element API Wrappers
  * @constructor
  * @params {integer} - timeout - default timeout value to be used for functions
            unless otherwise specified in function param
  * @returns {Object} instance - Return ChaiExpect instance
  */
  constructor(timeout = 10000) {
    if(!instance) {
        	this.waitTimeout = timeout;
        	this.expectedConditions = protractor.ExpectedConditions;
      instance = this;
    }
    this.logger = new WinstonLogger().winstonLogger;
    this.wait = new PtorWait(browser.params.waitTimeout);
    return instance;
  }

 /**
 * Wrapper for protractor sendKeys
 * @public
 * @param {Object} ptorEle - Protractor Element
 * @param {string} text - text to input
 * @example PtorElement.inputText($('.username'), "raghupro")
 * @returns {Promise.<boolean, Error>} A promise that returns boolean if resolved,
 *     or an Error if rejected.
 */
  inputText(ptorEle, text) {
    return utils.ptorWait.elementToBeVisible(ptorEle)
      .then(() => {
        return ptorEle.sendKeys(text);
      }).then(() => {
        return true; //sendKeys worked fine
      }).catch(error => {
        throw error;
      });
  }
 /**
 * Wrapper for protractor getText
 * @public
 * @param {Object} ptorEle - Protractor Element
 * @example PtorElement.getText($('.username'))
 * @returns {Promise.<string, Error>} A promise that returns string if resolved,
 *     or an Error if rejected.
 */
  getText(ptorEle) {
    return utils.ptorWait.elementToBeVisible(ptorEle)
    .then(() => {
      return ptorEle.getText();
    }).catch(error => {
      this.logger.error('getText for : ' + ptorEle.locator().toString() + ' ' + error.message);
      throw error;
    });
  }
   /**
 * Wrapper for protractor click
 * @public
 * @param {Object} ptorEle - Protractor Element
 * @example PtorElement.getText($('.username'))
 * @returns {Promise.<boolean, Error>} A promise that returns string if resolved,
 *     or an Error if rejected.
 */
  click(ptorEle) {
    return utils.ptorWait.elementToBeVisible(ptorEle)
    .then(() => {
      return ptorEle.click();
    }).catch(error => {
      this.logger.error('click for : ' + ptorEle.locator().toString() + ' ' + error.message);
      throw error;
    });
  }

}

module.exports = PtorElement;
