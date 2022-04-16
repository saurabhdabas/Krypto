const router = require('express').Router();
const axios = require("axios").default;
module.exports = (db) => {
  // all routes will go here 

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`).then((response) => {
      res.json(response.data);
    }).catch((error) => {
      console.error(error);
    });
  });

  return router;
}