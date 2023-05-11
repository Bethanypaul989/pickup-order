const express = require('express');
const router = express.Router();

const productItems = require('../db/queries/foods');

router.get('/', (req, res) => {
  productItems.getItems()
    .then((items) => {
      res.render('checkout', { items });
    });
});

module.exports = router;
