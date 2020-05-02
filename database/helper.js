const db = require('./index.js');

const helper = {
  getProducts: ((callback) => {
    let queryProducts = `SELECT name, description, price, rating_star, rating_num, fav, more_shades, category, foreground, background FROM products`;
    db.query(queryProducts, (err, results) => {
      callback(err, results);
    })
  }),
  getInstagram: ((callback) => {
    let queryInstagram = `SELECT picture_url, username, description, link, product_used1, product_used2, product_used3`;
    db.query(queryInstagram, (err, results) => {
      callback(err, results);
    })
  })
}

module.exports = helper;