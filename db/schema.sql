DROP DATABASE IF EXISTS myFEC;

CREATE DATABASE myFEC;

USE myFEC;

CREATE TABLE Recipes (
  recipeID int NOT NULL AUTO_INCREMENT,
  recipeName varchar(2000) NOT NULL,
  thumbs int NOT NULL,
  makes int NOT NULL,
  description varchar(2000) NOT NULL,
  photoID int NOT NULL,
  PRIMARY KEY (recipeID)
);

CREATE TABLE Photos (
  photoID INT NOT NULL AUTO_INCREMENT,
  image varchar(2000) NOT NULL,
  photoBy varchar(2000) NOT NULL,
  recipeID INT NOT NULL,
  PRIMARY KEY (photoID)
  -- FOREIGN KEY (recipeID) REFERENCES Recipes(recipeID)
  -- ON DELETE CASCADE
);

CREATE TABLE Reviews (
  reviewID INT NOT NULL AUTO_INCREMENT,
  stars INT NOT NULL,
  CONSTRAINT stars_Ck CHECK (stars BETWEEN 1 AND 5),
  text varchar(2000) NOT NULL,
  name varchar(2000) NOT NULL,
  location varchar(2000) NOT NULL,
  date varchar(2000) NOT NULL,
  comboID INT NOT NULL,
  -- CONSTRAINT comboID_Ck CHECK (comboID BETWEEN 1 AND 100),
  -- FOREIGN KEY (comboID) REFERENCES Recipes(recipeID),
  PRIMARY KEY (reviewID)
);

--  mysql -u root < /Users/justinpaoletta/Desktop/top-styling-and-reviews/db/schema.sql
