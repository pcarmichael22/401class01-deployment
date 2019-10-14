'use strict';

/**
 * @module Hello
 */
/**
 * Method: sayHello()
 * @pararm {string} greeting - the greeting preceding hello
 * @return {string}
 */
/**
 * Method: goodBye()
 * @return {string}
 */

exports.sayHello = (greeting) => {
  return (`Hello ${greeting}`);
};

exports.goodBye = () => {
  return ('Goodbye');
};