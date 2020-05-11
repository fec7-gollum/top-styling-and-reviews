/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Title from './src/components/title';
import TopBar from './src/components/topbar';
import Description from './src/components/description';
import Reviews from './src/components/reviews';
import App from './src/components/app';
import Index from './src/index';

it('renders without crashing', () => {
  expect(
    JSON.stringify(
      { ...Index, _reactInternalInstance: 'censored' },
    ),
  ).toMatchSnapshot();
});


it('Tests The Buttons in Reviews', () => {
  const mockCallBack = jest.fn();
  const button = mount((<Reviews onClick={mockCallBack}>Ok!</Reviews>));
  button.find('.moreButton').simulate('click');
  button.find('.moreButton').simulate('click');
  button.find('.moreButton').simulate('click');
  button.find('.moreButton').simulate('click');
  button.find('.moreButton').simulate('click');
  button.find('.texta').simulate('click');
  button.find('.texta').simulate('click');
  button.find('.cI1').simulate('change');
  button.find('.cI2').simulate('change');
  button.find('.signIn').simulate('click');
  button.find('#yes').simulate('click');
  button.find('#no').simulate('click');
  button.find('.starclicker').simulate('click');
  button.find('.starclicker2').simulate('click');
  button.find('.starclicker3').simulate('click');
  button.find('.starclicker4').simulate('click');
  button.find('.starclicker5').simulate('click');
  button.find('.savebtn').simulate('click');
  const button2 = mount((<Reviews onClick={mockCallBack}>Ok!</Reviews>));
  button2.find('.texta').simulate('click');
  button2.find('.texta').simulate('click');
  button2.find('.texta').simulate('change');
  button2.find('.cancelbtn').simulate('click');
});

it('Tests The Search Functionality', () => {
  const mockCallBack = jest.fn();
  const button = mount((<TopBar onClick={mockCallBack}>Ok!</TopBar>));
  button.find('.search').simulate('click');
  button.find('.searching').simulate('change');
  button.find('.closemodal').simulate('click');
});

// components
describe('App Component', () => {
  it('should render', () => {
    mount(<App />);
  });
});

describe('Title Component', () => {
  it('should render', () => {
    shallow(<Title />);
  });
});

describe('TopBar Component', () => {
  it('should render', () => {
    shallow(<TopBar />);
  });
});

describe('Description Component', () => {
  const descript = shallow(<Description />);
  it('should render', () => {
    expect(descript.exists()).toBe(true);
  });
  it('should render', () => {
    descript.find('.printSection').simulate('click');
  });
});

describe('Reviews Component', () => {
  it('should render', () => {
    shallow(
      <Reviews />,
    );
  });
});

const myTopData = require('./db/topData/topData.js');
const myReviewData = require('./db/reviewData/reviewData.js');
const images = require('./db/s3.js');

// myTopData
test('myTopData should be an Array (object) with 100 entries', () => {
  expect(typeof myTopData).toBe('object');
  expect(myTopData.length).toBe(100);
});

test('Any single object from myTopData should have properties recipeID, name, thumbs, makes, description, photo.photoID, photo.img, photo.photoBy', () => {
  const obj = Math.floor(Math.random() * 100);
  expect(myTopData[obj]).toHaveProperty('recipeID');
  expect(myTopData[obj]).toHaveProperty('name');
  expect(myTopData[obj]).toHaveProperty('thumbs');
  expect(myTopData[obj]).toHaveProperty('makes');
  expect(myTopData[obj]).toHaveProperty('description');
  expect(myTopData[obj]).toHaveProperty('photo.photoID');
  expect(myTopData[obj]).toHaveProperty('photo.img');
  expect(myTopData[obj]).toHaveProperty('photo.photoBy');
});

test('Type of properties recipeID, thumbs, makes, photo.photoID should be a number', () => {
  const obj = Math.floor(Math.random() * 100);
  expect(typeof myTopData[obj].recipeID).toBe('number');
  expect(typeof myTopData[obj].thumbs).toBe('number');
  expect(typeof myTopData[obj].makes).toBe('number');
  expect(typeof myTopData[obj].photo.photoID).toBe('number');
});

test('Type of properties name, description, photo.img, photo.photoBy should be a string', () => {
  const obj = Math.floor(Math.random() * 100);
  expect(typeof myTopData[obj].name).toBe('string');
  expect(typeof myTopData[obj].description).toBe('string');
  expect(typeof myTopData[obj].photo.img).toBe('string');
  expect(typeof myTopData[obj].photo.photoBy).toBe('string');
});

// myReviewData
test('myReviewData should be an Array (object) with 10,000 reviews', () => {
  expect(typeof myReviewData).toBe('object');
  expect(myReviewData.length).toBe(10000);
});

test('Any single object from myReviewData should have properties reviewID, stars, text, name, location, date, comboID', () => {
  const obj = Math.floor(Math.random() * 10000);
  expect(myReviewData[obj]).toHaveProperty('reviewID');
  expect(myReviewData[obj]).toHaveProperty('stars');
  expect(myReviewData[obj]).toHaveProperty('text');
  expect(myReviewData[obj]).toHaveProperty('name');
  expect(myReviewData[obj]).toHaveProperty('location');
  expect(myReviewData[obj]).toHaveProperty('date');
  expect(myReviewData[obj]).toHaveProperty('comboID');
});

test('Type of properties reviewID, stars, comboID should be a number', () => {
  const obj = Math.floor(Math.random() * 10000);
  expect(typeof myReviewData[obj].reviewID).toBe('number');
  expect(typeof myReviewData[obj].stars).toBe('number');
  expect(typeof myReviewData[obj].comboID).toBe('number');
});

test('Type of properties text, name, location, date should be a string', () => {
  const obj = Math.floor(Math.random() * 10000);
  expect(typeof myReviewData[obj].text).toBe('string');
  expect(typeof myReviewData[obj].name).toBe('string');
  expect(typeof myReviewData[obj].location).toBe('string');
  expect(typeof myReviewData[obj].date).toBe('string');
});

// s3
test('images should be an Array (object) with 100 urls', () => {
  expect(typeof images).toBe('object');
  expect(images.length).toBe(100);
});

// server
// const supertest = require('supertest');
// const server = require('./server/server.js');
// const request = supertest(server);

// it('successfully gets an object of data from the recipes endpoint', async (done) => {
//   const response = await request.get('/recipes/1');
//   expect(response.status).toBe(200);
//   expect(typeof response).toBe('object');
//   done();
// });

// it('successfully gets an object of data from the reviews endpoint', async (done) => {
//   const response = await request.get('/reviews/1');
//   expect(response.status).toBe(200);
//   expect(typeof response).toBe('object');
//   done();
// });
