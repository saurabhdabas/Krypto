const router = require('express').Router();
const axios = require("axios").default;
module.exports = (db) => {
  // all routes will go here 

  router.get('/', (req, res) => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((response) => {
      res.json(response.data);
    }).catch((error) => {
      console.error(error);
    });
  });

  return router;
}