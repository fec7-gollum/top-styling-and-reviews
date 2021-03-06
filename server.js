/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const faker = require('faker');
const cors = require('cors');
const db = require('./db/dbconfig');

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors());

server.use((req, res, next) => { res.set('Access-Control-Allow-Origin', '*'); next(); });

// server.use('/docs', express.static(path.join(__dirname, '')));

server.use('/:id', express.static(path.join(__dirname, '/public/dist')));

// Server Requests

// server.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/docs/index.html`);
// });


server.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const getRecipe = `select * from Recipes, Photos where Recipes.recipeID = ${id} && Recipes.recipeID = Photos.recipeID`;
  db.connection.query(getRecipe, (error, result) => {
    if (error) {
      console.error(error, 'failed to get top data from database');
      res.status(400);
    }
    res.status(200, console.log('got my recipe!')).send(result);
  });
});

server.get('/reviews/:id', (req, res) => {
  const { id } = req.params;
  const getReviews = `select * from Reviews where Reviews.comboID = ${id}`;
  db.connection.query(getReviews, (error, result) => {
    if (error) {
      console.error(error, 'failed to get reviews from database');
      res.status(400);
    }
    res.status(200, console.log('got my recipe!')).send(result);
  });
});

server.post('/reviews/:id', (req, res) => {
  const { id } = req.params;
  const date = new Date().toDateString().slice(0, 12) + new Date().toDateString().slice(14, 16);
  const state = faker.address.state();
  const postReview = `INSERT INTO Reviews (stars, text, name, location, date, comboID)
  VALUES (${req.body.stars}, '${req.body.text}', '${req.body.name}', '${state}', '${date}', ${id})`;
  db.connection.query(postReview, (error, result) => {
    if (error) {
      console.error(error, 'failed to post review to database');
      res.status(500);
    }
    res.status(200, console.log('posted my recipe!')).send(result);
  });
});

// eslint-disable-next-line no-console
server.listen(4000, () => { console.log('server ON!'); });

module.exports = server;
