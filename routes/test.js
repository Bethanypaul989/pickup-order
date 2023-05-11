const express = require('express');
const router = express.Router();

const pool = require('../db/connection');
// const productItems = require('../db/queries/foods');

router.get('/', (req, res) => {
  console.log("here....");
  pool.query('SELECT * FROM public.foods;')
    .then((response) => {
      const items = response.rows;
      res.json({ items });
    }).catch((error) => {
      console.error(error);
    });
  // productItems.getItems()
  //   .then((items) => {
  //     res.json(items);
  //   });
});

module.exports = router;
