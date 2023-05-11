const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('submit', {
    fullname: '',
    phoneNumber: '',
    emailAddress: '',
    paymentMethod: '',
    cardNumber: '',
    expDate: '',
    cvc: ''
  });
});

router.post('/', (req, res) => {
  // Get form data from request body
  const fullname = req.body.fullname;
  const phoneNumber = req.body.phoneNumber;
  const emailAddress = req.body.emailAddress;
  const paymentMethod = req.body.payment;
  const cardNumber = req.body.cardNumber;
  const expDate = req.body.expDate;
  const cvc = req.body.cvc;

  res.render('submit', {
    fullname,
    phoneNumber,
    emailAddress,
    paymentMethod,
    cardNumber,
    expDate,
    cvc
  });
});

module.exports = router;


