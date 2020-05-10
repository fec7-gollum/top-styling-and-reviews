/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const faker = require('faker');
const db = require('../db/dbconfig.js');

const server = express();

// server.use(bodyParser.text());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../public/dist')));
server.use('/:id', express.static(path.join(__dirname, '/../public/dist')));

// Server Requests
server.get('/:id/recipes', (req, res) => {
  const { id } = req.params;
  // console.log(db.connection.Connection.config.ConnectionConfig);
  const getRecipe = `select * from recipes, photos where recipes.recipeID = ${id} && recipes.recipeID = photos.recipeID`;
  db.connection.query(getRecipe, (error, result) => {
    if (error) console.error(error);
    res.status(200, console.log('got my recipe!')).send(result);
  });
});

server.get('/:id/reviews', (req, res) => {
  const { id } = req.params;
  const getReviews = `select * from reviews where reviews.comboID = ${id}`;
  db.connection.query(getReviews, (error, result) => {
    if (error) console.error(error);
    res.status(200, console.log('got my recipe!')).send(result);
  });
});

server.post('/:id/reviews', (req, res) => {
  const { id } = req.params;
  const date = new Date().toDateString().slice(0, 12) + new Date().toDateString().slice(14, 16);
  const state = faker.address.state();
  const postReview = `INSERT INTO reviews (stars, text, name, location, date, comboID)
  VALUES (${req.body.stars}, '${req.body.text}', '${req.body.name}', '${state}', '${date}', ${id})`;
  db.connection.query(postReview, (error, result) => {
    if (error) console.error(error);
    res.status(200, console.log('posted my recipe!')).send(result);
  });
});

// eslint-disable-next-line no-console
server.listen(3001, () => { console.log('server ON!'); });

module.exports = server;
