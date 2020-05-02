const db = require('./index.js');

const helper = {
  getProducts: ((callback) => {
    let queryProducts = `SELECT name, description, price, rating_star, rating_num, fav, more_shades, category, foreground, background FROM products`;
    db.query(queryProducts, (err, results) => {
      callback(err, results);
    })
  })
}

module.exports = helper;