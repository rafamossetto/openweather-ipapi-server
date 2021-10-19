const request = require('supertest');
const app = require('../app');

/** 
 *  Testing /location
 */

describe('GET /location', () => {
    it('deberia responder con los datos de mi ubicacion actual segun ip-api', done => {
        request(app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por query (manhattan)', done => {
        request(app)
            .get('/v1/location?city=manhattan')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por query (texas)', done => {
        request(app)
            .get('/v1/location?city=texas')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por query (chicago)', done => {
        request(app)
            .get('/v1/location?city=chicago')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por query (florida)', done => {
        request(app)
            .get('/v1/location?city=florida')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por query (kansas)', done => {
        request(app)
            .get('/v1/location?city=kansas')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con un status code 404 le pasamos una city invalida', done => {
        request(app)
            .get('/v1/location?city=invalidCity')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done)
            .expect({ error: 'invalid query' })
    })
})

/**
 *  Testing /current
 */

describe('GET /current', () => {
    it('deberia responder con los datos de mi ubicacion actual y los datos del clima', done => {
        request(app)
            .get('/v1/current')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (manhattan)', done => {
        request(app)
            .get('/v1/current/manhattan')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (kansas)', done => {
        request(app)
            .get('/v1/current/kansas')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (chicago)', done => {
        request(app)
            .get('/v1/current/chicago')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (texas)', done => {
        request(app)
            .get('/v1/current/texas')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (florida)', done => {
        request(app)
            .get('/v1/current/florida')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con un status code 404 le pasamos una city invalida', done => {
        request(app)
            .get('/v1/current/invalidCity')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done)
            .expect({ error: 'invalid query' })
    })
})

/**
 *  Testing /forecast
 */

describe('GET /forecast', () => {
    it('deberia responder con los datos de mi ubicacion actual y los datos del clima a 5 dias', done => {
        request(app)
            .get('/v1/forecast')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (manhattan)', done => {
        request(app)
            .get('/v1/forecast/manhattan')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (kansas)', done => {
        request(app)
            .get('/v1/forecast/kansas')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (chicago)', done => {
        request(app)
            .get('/v1/forecast/chicago')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (texas)', done => {
        request(app)
            .get('/v1/forecast/texas')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con los datos de la ubicacion pasada por params (florida)', done => {
        request(app)
            .get('/v1/forecast/florida')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('deberia responder con un status code 404 le pasamos una city invalida', done => {
        request(app)
            .get('/v1/forecast/invalidCity')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done)
            .expect({ error: 'invalid query' })
    })
})