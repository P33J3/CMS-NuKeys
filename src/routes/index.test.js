import chai, { expect } from 'chai';
import http from 'chai-http';
import app from '../app';

describe('Users route', () => {
    chai.use(http);
    const request = chai.request(app)
    it('GET /users', () => {
        request.get('/users')
        .end((err, res) => {
            expect(res.status).to.eq(200)
        })
    }) 
})
