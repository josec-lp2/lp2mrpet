var express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.get('/Users', async (req, res) => {
  const User = await prisma.users.findMany();
  res.json(User);
});

// import { products } from "./data/products.js";
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/baths', function(req, res, next) {
  res.render('scheduleBaths', { title: 'Express' });
});

router.get('/appointments', function(req, res, next) {
  res.render('scheduleAppointments', { title: 'Express' });
});
// server.get("/products", (req, res) => {
//   res.json(products);
// });

module.exports = router;
