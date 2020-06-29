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

  test('Location OK', async () => {
    const response = await request(app).get('/v1/location');
    expect(response.statusCode).toBe(200);
    expect(response.body.city).toBe('Buenos Aires')
   });

  test('Current local weather OK', async () => {
    const response = await request(app).get('/v1/current/Buenos Aires');
    expect(response.statusCode).toBe(200);
   });

   test('Current weather by city OK', async () => {
    const response = await request(app).get('/v1/current/Buenos Aires');
    expect(response.statusCode).toBe(200);
   });

   test('local forecast OK', async () => {
    const response = await request(app).get('/v1/forecast/');
    expect(response.statusCode).toBe(200);
   });

   test('forecast weather by city OK', async () => {
    const response = await request(app).get('/v1/forecast/Buenos Aires');
    expect(response.statusCode).toBe(200);
   });
