const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Thank you for your order!');
});

module.exports = router;
