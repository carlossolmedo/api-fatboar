import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

import app from '../server/app';
import DB from '../server/helpers/db.helper';
import { authRoute } from '../server/routes/routes';

const dbAPI = new DB();

const userTest = {
    gender: 'F',
    username: 'User Test',
    password: 'passwordTest1',
    email: 'user@test.com',
    birthdate: new Date(),
    postal_code: '75007',
    country: 'Other',
    role: 'customer',
    last_connection: new Date(),
    date_updated: new Date(),
};

before(() => {
    dbAPI.connection();
});

beforeEach((done) => {
    chai.request(app)
        .post(authRoute.signup)
        .set('content-type', 'application/json')
        .send(userTest)
        .end((error, res) => {
            chai.expect(res).to.have.status(201);
            console.log('user test registered\n');
            done(error);
        });
});

afterEach(() => {
    dbAPI.removeOneCollection('users');
});

after(() => {
    dbAPI.close();
});

describe('Authentication\n', () => {
    describe('login()\n', () => {
        it('Should be able to login a user', (done) => {
            chai.request(app)
                .post(authRoute.login)
                .set('content-type', 'application/json')
                .send({ email: 'user@test.com', password: 'passwordTest1' })
                .end((error, res) => {
                    chai.expect(res).to.have.status(200);
                    // chai.assert.strictEqual(res.text, 'Hello world!');
                    done(error);
                });
        });
    });
});
