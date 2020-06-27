const request = require('supertest')
const { app } = require('../server');

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })
  

  test('Status OK', async () => {
    const response = await request(app).get('/status');
    expect(response.statusCode).toBe(200);
   });

   test('Status OK', async () => {
    const response = await request(app).get('/v1/current/A');
    expect(response.statusCode).toBe(200);
   });


   test('forecast OK', async () => {
    const response = await request(app).get('/v1/forecast/A ');
    expect(response.statusCode).toBe(200);
   });
