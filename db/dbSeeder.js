/* eslint-disable no-console */
const db = require('./dbconfig.js');
const tdata = require('./topData/topData.js');
const rdata = require('./reviewData/reviewData.js');

db.connection.connect(((err) => {
  if (err) {
    console.error(err);
  } else {
    tdata.forEach((cluster) => {
      const myQuery = `INSERT INTO recipes (recipeID, recipeName, thumbs, description, photoID) VALUES (${cluster.recipeID}, '${cluster.name}', ${cluster.thumbs}, '${cluster.description}', ${cluster.photo.photoID});`;
      const myQuery2 = `INSERT INTO photos (photoID, image, photoBy, recipeID) VALUES (${cluster.photo.photoID}, '${cluster.photo.img}', '${cluster.photo.photoBy}', ${cluster.recipeID});`;
      db.connection.query(myQuery, (error, result) => {
        if (error) return console.error(error);
        return console.log(result);
      });
      db.connection.query(myQuery2, (error, result) => {
        if (error) return console.error(error);
        return console.log(result);
      });
    });

    rdata.forEach((cluster) => {
      const myQuery3 = `INSERT INTO reviews (reviewID, stars, text, userID) VALUES (${cluster.reviewID}, ${cluster.stars}, '${cluster.text}', ${cluster.user.userID});`;
      const myQuery4 = `INSERT INTO users (userID, name, location, date, reviewID) VALUES (${cluster.user.userID}, '${cluster.user.name}', '${cluster.user.location}', '${cluster.user.date}', ${cluster.reviewID});`;
      db.connection.query(myQuery3, (error, result) => {
        if (error) return console.error(error);
        return console.log(result);
      });
      db.connection.query(myQuery4, (error, result) => {
        if (error) return console.error(error);
        return console.log(result);
      });
    });
  }
}));
