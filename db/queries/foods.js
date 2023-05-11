const db = require('../connection');


const getItems = () => {
  return db.query('SELECT * FROM foods;')
    .then(response => {
      return response.rows;
    });
};

module.exports = { getItems };
