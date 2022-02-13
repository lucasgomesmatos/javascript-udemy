const express = require('express');
const route = express.Router();
const homeControllers = require('./src/controllers/homeControllers');
const contatoControllers = require('./src/controllers/contatoControllers');

// Rotas da home
route.get('/', homeControllers.paginaInicial);
route.post('/', homeControllers.trataPost);

// Rotas contato
route.get('/contato', contatoControllers.paginaInicial);

module.exports = route;