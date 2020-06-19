const { Router } = require('express');

const calculatorController = require('./controllers/calculator');

const routes = Router();

routes.post('/calculate', calculatorController.calculate);

module.exports = routes;
