/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";

process.env.NODE_ENV = "test";
const db = require("../database");
const server = require("../server");
const request = require("supertest");

// import App from '../client/src/components/App.jsx';

// import './matchMedia.mock'; // Must be imported before the tested file
// import App from '../client/src/components/App.jsx';
// // import {myMethod} from './file-to-test';

// describe('myMethod()', () => {
//   // Test the method here...
// });

// window.matchMedia = jest.fn().mockImplementation(query => {
//   return {
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(),
//     removeListener: jest.fn(),
//   };
// });

// describe('Unit Tests', () => {
//   jest.mock('axios', () => {
//     const tasks = [
//       {
//         isComplete: false,
//         _id: '5e14daea497a3a48c5bd4612',
//         task: 'Write some tests!',
//         date: '2020-01-07T19:24:26.332Z',
//         __v: 0,
//       },
//     ];

//     return {
//       get: jest.fn(() => Promise.resolve(tasks)),
//     };
//   });

//   test('should render the app component on the screen', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper).toExist();
//   });
//   test('should invoke getAllTodos on componentDidMount', () => {
//     const wrapper = shallow(<App />);
//     const mock = jest.fn();
//     wrapper.instance().getAllTodos = mock;
//     wrapper.instance().forceUpdate();
//     wrapper
//       .instance()
//       .componentDidMount();
//     expect(mock).toHaveBeenCalled();
//   });
// });

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

// Will need this example for testing random category
// test("references", function() {
//   var arr = [1, 2, 3];
//   expect(arr).toEqual([1, 2, 3]);
//   expect(arr).not.toBe([1, 2, 3]); // since === doesn't do deep comparison!
//   expect(arr).toContain(1);
// });