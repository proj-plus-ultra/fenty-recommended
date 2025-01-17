DROP DATABASE IF EXISTS fentyRecommended;
CREATE DATABASE fentyRecommended;
USE fentyRecommended;

CREATE TABLE products(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  price VARCHAR(255) NOT NULL,
  ratingStar FLOAT(1) NOT NULL,
  ratingNum INT NOT NULL,
  fav BOOLEAN NOT NULL,
  moreShades BOOLEAN NOT NULL,
  category VARCHAR(255) NOT NULL,
  foreground VARCHAR(255) NOT NULL,
  background VARCHAR(255) NOT NULL
);