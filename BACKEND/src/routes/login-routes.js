const express = require('express');
const routes = express.Router();
const login = require('../controllers/login-controller.js');
routes.get('/api/login', login.dizerOi);
module.exports = routes;