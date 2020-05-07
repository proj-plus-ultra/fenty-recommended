DROP DATABASE IF EXISTS fenty;
CREATE DATABASE fenty;
USE fenty;

CREATE TABLE products(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  price VARCHAR(255) NOT NULL,
  rating_star FLOAT(1) NOT NULL,
  rating_num INT NOT NULL,
  fav BOOLEAN NOT NULL,
  more_shades BOOLEAN NOT NULL,
  category VARCHAR(255) NOT NULL,
  foreground VARCHAR(255) NOT NULL,
  background VARCHAR(255) NOT NULL
);