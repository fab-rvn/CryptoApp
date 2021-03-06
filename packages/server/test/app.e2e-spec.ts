import supertest from 'supertest';
import app from '../src/server';

describe('AppController (e2e)', () => {
  it('gets the home endpoint', async () => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello world!');
  });

  it('gets the 404 endpoint', async () => {
    const response = await supertest(app).get('/*');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('404: Page not found!');
  });
});
