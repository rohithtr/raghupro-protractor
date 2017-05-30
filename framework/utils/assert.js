/**
 * http://usejsdoc.org/
 */
/*
 * @fileoverview Assertion related Library
 * @author Rohith <rohith.tr@gmail.com>
 * @summary  Assertion library - Chai
 * @description Assertion library - Chai
 * @version 0.1
 */

const chai = require('chai');
chai.config.includeStack = false;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
/**
 * assert
 **/
let instance = null;



/** Singleton assertion class.
 * @class Assert
 */
class Assert {
  /**
  * Singleton class for Assertion - [chai]
  * @constructor
  * @returns {Object} instance - Return ChaiExpect instance
  */
  constructor() {
    if(!instance) {
      instance = this;
    }

    this.chaiExpect = chai.expect;

    return instance;
  }
}

module.exports = Assert;
