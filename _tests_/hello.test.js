'use strict';

const hello = require('../lib/class1_hello');

describe('Testing my Hello Module', () => {
    it('Returns a string when used properly', () => {
        let message = hello.sayHello('Peter');
        let expectedOutput = 'Hello Peter'
        expect(message).toEqual(expectedOutput)
    })
    it('Returns fa;sey when given an array', () => {
        let message = hello.sayHello(['Peter']);
        let expectedOutput = null;
        expect(message).toEqual(expectedOutput)
    })
})