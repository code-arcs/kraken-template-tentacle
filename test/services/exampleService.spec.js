var expect = require('expect.js');

var exampleService = require('../../services/exampleService');

describe('ExampleService', function () {
    it('responds correct value', () => {
        expect(exampleService.getResult()).to.be('a result');
    });
});