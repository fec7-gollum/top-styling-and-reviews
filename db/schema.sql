DROP DATABASE IF EXISTS myFEC;

CREATE DATABASE myFEC;

USE myFEC;

CREATE TABLE Recipes (
  recipeID int NOT NULL AUTO_INCREMENT,
  recipeName varchar(255) NOT NULL,
  thumbs int NOT NULL,
  description varchar(500) NOT NULL,
  photoID int NOT NULL,
  PRIMARY KEY (recipeID)
);

CREATE TABLE Photos (
  photoID INT NOT NULL AUTO_INCREMENT,
  image varchar(255) NOT NULL,
  photoBy varchar(60) NOT NULL,
  recipeID INT NOT NULL,
  PRIMARY KEY (photoID),
  FOREIGN KEY (recipeID) REFERENCES Recipes(recipeID)
  ON DELETE CASCADE
);

CREATE TABLE Reviews (
  reviewID INT NOT NULL AUTO_INCREMENT,
  stars INT NOT NULL,
  CONSTRAINT stars_Ck CHECK (stars BETWEEN 1 AND 5),
  text varchar(500) NOT NULL,
  userID INT NOT NULL,
  PRIMARY KEY (reviewID)
);

CREATE TABLE Users (
  userID INT NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  location varchar(30) NOT NULL,
  date varchar(15) NOT NULL,
  reviewID INT NOT NULL,
  PRIMARY KEY (userID),
  FOREIGN KEY (reviewID) REFERENCES Reviews(reviewID)
  ON DELETE CASCADE
);

--  mysql -u root < /Users/justinpaoletta/Desktop/top-styling-and-reviews/db/schema.sql
