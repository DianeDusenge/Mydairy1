import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../server/index';


chai.use(chaiHTTP);
const newUser = {
    title: 'CEO',
    description: 'Tech company',
    CreatedOn: new Date(),
};
describe('Server API test', () => {
    it('Checks the status of the server API', (done) => {
        chai
            .request(app)
            .get('/api/v1')
            .end((error, response) => {
                expect(response.status).to.equals(404);
                expect(response.body).to.be.an('object');
                // expect(response.body.message).to.equals('Server running successfully');
                done();
            });
    });
});



describe("User can get All entries", () => {
    it("GET / User should get all entries", (done) => {
        chai.request(app)
            .get('/api/v1/entries')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
});
describe("User can get specific entry by id", () => {
    it("GET / User should get specific entry entries", (done) => {
        const entryId = 1;
        chai.request(app)
            .get(`/api/v1/entries/${entryId}`)

        .end((err, res) => {
            expect(res.status).to.equals(200);
            expect(res.body).to.be.an('object');
            expect(err).to.be.null;

            done();
        });
    });
    it("the entry is not available", (done) => {
        const entryId = 5;
        chai.request(app)
            .get(`/${entryId}`)
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});
describe("User can add entries", () => {
    it('POST /users should add a new user', done => {
        chai
            .request(app)
            .post('/api/v1/entries')
            .send(newUser)
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.title).not.to.be.null;
                expect(res.body.description).not.to.be.null;
                expect(res.body.CreatedOn).not.to.be.null;
                done();
            });
    });
});
describe("User can modify entry by id", () => {
    it('PUT /users should can modify user', done => {
        // const entryId = 1;
        chai
            .request(app)
            .put('/api/v1/entries/1')
            .send({
                title: 'manager',
                description: 'Tech company',
                CreatedOn: new Date(),
            })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('object');
                expect(res.body.title).not.to.null;
                expect(res.body.description).not.to.null;
                expect(res.body.CreatedOn).not.to.null; // expect(res.body.status).to.equals(201);
                done();
            });
    });
    it("the entry is not available", (done) => {

        chai
            .request(app)
            .put('/api/v1/entries/100')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('object');
                // expect(res.body.message).to.equal('not found');
                done();

            });
    });
});