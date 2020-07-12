import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/server';
import {base64} from './base64DummyImage';
const { expect } = chai;
chai.use(chaiHttp);

describe('Server!', () => {
  it('welcomes to news API', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.message).to.equals('Welcome To yara API');
        done();
      });
  });

  it('check the news post API', done => {
    chai
      .request(app)
      .post('/news')
      .send({
        title: 'test',
        description: 'description',
        author: 'nirmal',
        thumbnail: base64,
        pubishDate: 1594287535593 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        // expect(res.body.status).to.equals("success");
        expect(res.body).to.contain({
          title: 'test',
          description: 'description',
          author: 'nirmal',
        });
        done();
      });
  });

  it('check news get API', done =>  {
    chai
      .request(app)
      .get('/news')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
      });
  });
});

