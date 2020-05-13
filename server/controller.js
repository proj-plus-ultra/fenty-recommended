const helper = require('../database/helper.js');

const controller = {
  getRelatedProducts: (req, res) => {
    helper.getRelatedProducts((err, results) => {
      if (err) { res.status(404).send(err); }
      res.status(200).json(results);
    });
  },
};

module.exports = controller;
