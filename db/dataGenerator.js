/* eslint-disable no-console */
const faker = require('faker'); // GENERATE 100 RECORDS!
const fs = require('file-system');
const s3 = require('./s3.js');

// TOP DATA [recipeName, thumbs, makes, description, imageURL, photoBy]

let top = 2;
const topData = [`
  {
    "recipeID": 1,
    "name": "Cinnamon-Date Sticky Buns",
    "thumbs": 93,
    "makes": 9,
    "description": "For the final recipe in the Basically Guide to Better Baking, you get all of the glory of a gooey sticky bun without the over-the-top sweetness. Instead of the usual brown sugar and butter filling, the fluffy buttermilk-laced buns are filled with a cinnamon-scented date purée. To make these, youll have to knead, fold, and work with yeast, but the end results are more than worth it. A quick note on substitutions: The places where you can tweak this recipe to suit your preferences (and the contents of your pantry) are the filling and the glaze. The ingredients for the dough, however, are non-negotiable. For more information and to ask questions, head to our baking forum.",
    "photo": {
      "photoID": 1,
      "img": "https://assets.bonappetit.com/photos/5e90b61c90dc660008ef3192/3:2/w_5120,c_limit/BBaking_WEEK10_Buns_Beauty_16x9.jpg",
      "photoBy": "Photo By Laura Murray, Food Styling By Susan Spungen",
    }
  }`,
];
const makeArr = [2, 4, 6, 8, 10];

while (top <= 100) {
  topData.push(`
  {
    "recipeID": ${top},
    "name": "${faker.random.words()}",
    "thumbs": ${faker.random.number({ min: 54, max: 100 })},
    "makes": ${makeArr[faker.random.number({ min: 0, max: 4 })]},
    "description": "${faker.lorem.paragraph()}. ${faker.lorem.paragraph()}. ${faker.lorem.paragraph()}.",
    "photo": {
      "photoID": ${top},
      "img": "${s3[top - 1]}",
      "photoBy": "Photo By ${faker.name.findName().replace('\'', '')}, Food Styling By ${faker.name.findName().replace('\'', '')}"
    }
  }`);

  top += 1;
}

fs.writeFile('./db/topData/topData.js',
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
fs.writeFile('./db/reviewData/reviewData.js',
  `let reviewData = [${reviewData}
]

module.exports = reviewData`,
  (err) => {
    if (err) return console.log(err);
    return console.log('Wrote Reviews');
  });
