const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Get form data from request body
  const fullname = req.body.fullname;
  const phoneNumber = req.body.phoneNumber;
  const emailAddress = req.body.emailAddress;
  const paymentMethod = req.body.payment;
  const cardNumber = req.body.cardNumber;
  const expDate = req.body.expDate;
  const cvc = req.body.cvc;

  const accountSid = 'AC68f7c9d72919ded91d5af13f8cced40f';
  const authToken = 'f01259548fbf281b3a8ac9fca519ffa2';
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'Hello from Twilio!',
      from: '+12707180875',  //sender
      to: '+12365913094' //receiver
    })

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


