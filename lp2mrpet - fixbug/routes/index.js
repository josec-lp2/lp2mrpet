var express = require('express');
// import { products } from "./data/products.js";
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/baths', function(req, res, next) {
  res.render('scheduleBaths', { title: 'Express' });
});

router.get('/appointetments', function(req, res, next) {
  res.render('scheduleAppointments', { title: 'Express' });
});
// server.get("/products", (req, res) => {
//   res.json(products);
// });

module.exports = router;
