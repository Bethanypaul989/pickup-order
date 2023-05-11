const accountSid = 'AC68f7c9d72919ded91d5af13f8cced40f';
const authToken = 'f01259548fbf281b3a8ac9fca519ffa2';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Twilio!',
    from: '+12707180875',  //sender
    to: '+12365913094' //receiver
  })
  .then(message => console.log(message.sid));


// client.messages
//   .create({
//     body: 'Hello from Twilio!',
//     from: '+12707180875',  //sender
//     to: '+12365913094' //receiver
//   })
//   .then(res => console.log("message has sent!"))
//   .catch((err) => {
//     {
//       console.log(err);
//     }
//   });
