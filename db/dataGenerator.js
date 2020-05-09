/* eslint-disable no-console */
const faker = require('faker'); // GENERATE 100 RECORDS!
const fs = require('file-system');
const s3 = require('./s3.js');

// TOP DATA [recipeName, thumbs, makes, description, imageURL, photoBy]

let top = 1;
const topData = [];
const makeArr = [2, 4, 6, 8, 10];

while (top <= 100) {
  topData.push(`
  {
    "recipeID": ${top},
    "name": "${faker.random.words()}",
    "thumbs":  ${faker.random.number({ min: 54, max: 100 })},
    "makes": ${makeArr[faker.random.number({ min: 0, max: 4 })]},
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
  `let myTopData = [${topData}
]

module.exports = myTopData`,
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
  "stars": ${faker.random.number({ min: 1, max: 5 })},
  "text": "${faker.lorem.paragraph()}",
  "name": "${faker.name.findName().replace('\'', '')}",
  "location": "${faker.address.state()}",
  "date": "${faker.date.past().toString().slice(0, 10)}",
  "comboID": ${faker.random.number({ min: 1, max: 100 })},
}`);
  reviews += 1;
}
fs.writeFile('./reviewData/reviewData.js',
  `let reviewData = [${reviewData}
]

module.exports = reviewData`,
  (err) => {
    if (err) return console.log(err);
    return console.log('Wrote Reviews');
  });
