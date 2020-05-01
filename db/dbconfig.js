/* eslint-disable quotes */
/* eslint-disable no-console */
const mysql = require('mysql2');
const tdata = require('./topData/topData.js');
const rdata = require('./reviewData/reviewData.js');

console.log(rdata);

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'myFEC',
});


connection.connect(((err) => {
  if (err) {
    console.error(err);
  } else {
    tdata.forEach((cluster) => {
      const myQuery = `INSERT INTO recipes (recipeID, recipeName, thumbs, description, photoID) VALUES (${cluster.recipeID}, '${cluster.name}', ${cluster.thumbs}, '${cluster.description}', ${cluster.photo.photoID});`;
      const myQuery2 = `INSERT INTO photos (photoID, image, photoBy, recipeID) VALUES (${cluster.photo.photoID}, '${cluster.photo.img}', '${cluster.photo.photoBy}', ${cluster.recipeID});`;
      connection.query(myQuery, (error, result) => {
        if (error) return console.error(error);
        return console.log(result);
      });
      connection.query(myQuery2, (error, result) => {
        if (error) return console.error(error);
        return console.log(result);
      });
    });

    rdata.forEach((cluster) => {
      const myQuery3 = `INSERT INTO reviews (reviewID, stars, text, userID) VALUES (${cluster.reviewID}, ${cluster.stars}, '${cluster.text}', ${cluster.user.userID});`;
      const myQuery4 = `INSERT INTO users (userID, name, location, date, reviewID) VALUES (${cluster.user.userID}, '${cluster.user.name}', '${cluster.user.location}', '${cluster.user.date}', ${cluster.reviewID});`;
      connection.query(myQuery3, (error, result) => {
        if (error) return console.error(error);
        return console.log(result);
      });
      connection.query(myQuery4, (error, result) => {
        if (error) return console.error(error);
        return console.log(result);
      });
    });
  }
}));
