const db = require('./index.js');

const helper = {
  getProducts: (callback) => {
    const queryProducts =
      'SELECT name, description, price, ratingStar, ratingNum, fav, moreShades, category, foreground, background FROM products';
    db.query(queryProducts, (err, results) => {
      callback(err, results);
    });
  },
};

module.exports = helper;
