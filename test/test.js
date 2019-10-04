import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../server/index';


chai.use(chaiHTTP);
const newUser = {
    title: 'CEO',
    description: 'Tech company',
    CreatedOn: new Date(),
};
describe("User can get All entries", () => { // Test to get all students record
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
            // .get('/api/v1/entries:entryId')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(err).to.be.null;
                // expect(res).to.have.status(200);
                done();
            });
    });
    it("should not get a single student record", (done) => {
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
                expect(res.status).to.equals(201);
                expect(res.body).to.be.an('object');
                expect(res.body.title).not.to.be.null;
                expect(res.body.description).not.to.be.null;
                expect(res.body.CreatedOn).not.to.be.null;
                done();
            });
    });
});
describe("User can modify entry by id", () => {
    it('PUT /users should add a new user', done => {
        // const entryId = 1;
        chai
            .request(app)
            .put('/api/v1/entries:1')
            .send({
                title: 'manager',
                description: 'Tech company',
                CreatedOn: new Date(),
            })
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.be.an('object');
                expect(res.body.title).not.to.null;
                expect(res.body.description).not.to.null;
                expect(res.body.CreatedOn).not.to.null; // expect(res.body.status).to.equals(201);
                done();
            });
    });
});