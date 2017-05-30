/**
 * http://usejsdoc.org/
 */
/*
 * @fileoverview Logger related Library
 * @author Rohith <rohith.tr@gmail.com>
 * @summary  Logger library - Winston
 * @description Logger library - Winston
 * @version 0.1
 */

const winston = require('winston');
const loggerOptions = require('./logger-options.json');

/**
 * logger
 * Return Winston Logger instance
 **/
let instance = null;

/** Singleton Logger class.
 * @class Logger
 */
class Logger {
  /**
  * Singleton class for Logger - [winston]
  * @constructor
  * @returns {Object} instance - Return winston instance
  */
   constructor() {
    if(!instance) {
      this.winstonLogger = new (winston.Logger)({
        transports: [
          new (winston.transports.Console)(loggerOptions.console),
          new (winston.transports.File)(loggerOptions.file[0]),
          new (winston.transports.File)(loggerOptions.file[1]),
        ],
      });

      instance = this;
    }   

    return instance;
  }

  getOptions() {

  }

  setOptions(options) {
    this.winstonLogger.info(options);
  }
}

module.exports = Logger;
