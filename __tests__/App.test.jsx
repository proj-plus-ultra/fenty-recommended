/* eslint-env jest */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

process.env.NODE_ENV = 'test';
const request = require('supertest');

const server = require('../server');

describe('GET /fenty/products', () => {
  test('It responds with an array of products', async () => {
    const response = await request(server).get('/fenty/products');
    expect(response.body.length).toBe(98);
    expect(response.statusCode).toBe(200);
  });
  test('It should grab all properties of the product', async () => {
    const response = await request(server).get('/fenty/products');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('description');
    expect(response.body[0]).toHaveProperty('price');
    expect(response.body[0]).toHaveProperty('rating_star');
    expect(response.body[0]).toHaveProperty('rating_num');
    expect(response.body[0]).toHaveProperty('fav');
    expect(response.body[0]).toHaveProperty('more_shades');
    expect(response.body[0]).toHaveProperty('category');
    expect(response.body[0]).toHaveProperty('foreground');
    expect(response.body[0]).toHaveProperty('background');
  });
});
