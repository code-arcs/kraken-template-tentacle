var request = require('supertest');
require = require('really-need');

describe('ExampleRoute', function () {
    var server;
    this.timeout(10000);

    before(() => {
        server = require('../../server', {bustCache: true});
    });

    after((done) => {
        server.close(done);
    });

    it('responds status 200', (done) => {
        request(server)
            .get('/example-service')
            .expect(200, "a result")
            .end(done);
    });

    it('responds status 404 when invalid route called', (done) => {
        request(server)
            .get('/i-am-invalid')
            .expect(404)
            .end(done);
    })
});