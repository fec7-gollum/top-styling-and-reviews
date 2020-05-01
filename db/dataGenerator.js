/* eslint-disable no-console */
const faker = require('faker'); // GENERATE 100 RECORDS!
const fs = require('file-system');
const s3 = require('./s3.js');

// TOP DATA [recipeName, thumbs, description, imageURL, photoBy]

let top = 1;
const topData = [];

while (top <= 100) {
  topData.push(`
  {
    "recipeID": ${top},
    "name": "${faker.random.words()}",
    "thumbs": ${faker.random.number({ min: 25, max: 100})}
    "description": "${faker.lorem.paragraph()}",
    "photo": {
      "photoID": ${top},
      "img": "${s3.images[top - 1]}",
      "photoBy": "Photo By ${faker.name.findName().replace('\'', '')}"
    }
  }`);

  top += 1;
}

fs.writeFile('./topData/topData.js',
  `module.exports = myTopData = [${topData}
]`,
  (err) => {
    if (err) return console.log(err);
    return console.log('Wrote Top Data');
  });


// REVIEWS DATA [stars, text, name, location, date]

let reviews = 1;
const reviewData = [];


while (reviews <= 10000) {
  reviewData.push(`
{
  "reviewID": ${reviews},
  "stars": ${Math.ceil(Math.random() * (5 - 0) + 0)},
  "text": "${faker.lorem.paragraph()}",
  "user": {
    "userID": ${reviews},
    "name": "${faker.name.findName()}",
    "location": "${faker.address.state()}",
    "date": "${faker.date.past().toString().slice(0, 11)}"
  }
}`);
  reviews += 1;
}
fs.writeFile('./reviewData/reviewData.js',
  `module.exports = reviewData = [${reviewData}
]`,
  (err) => {
    if (err) return console.log(err);
    return console.log('Wrote Reviews');
  });
