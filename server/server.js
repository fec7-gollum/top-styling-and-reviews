/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/dbconfig.js');


const server = express();

// server.use(bodyParser.text());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../public/dist')));

// Server Requests

server.get('/recipes', (req, res) => {
  const getRecipe = 'select * from recipes';
  db.query(getRecipe, (error, result) => {
    if (error) console.error(error);
    res.status(200, console.log('got my recipe!')).send(result);
  });
});

server.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const getRecipe = `select * from recipes where recipeID = ${id}`;
  db.query(getRecipe, (error, result) => {
    if (error) console.error(error);
    res.status(200, console.log('got my recipe!')).send(result);
  });
});

server.get('/reviews', (req, res) => {
  const getReviews = 'select * from reviews';
  db.query(getReviews, (error, result) => {
    if (error) console.error(error);
    res.status(200, console.log('got my recipe!')).send(result);
  });
});

// eslint-disable-next-line no-console
server.listen(3001, () => { console.log('server ON!'); });
