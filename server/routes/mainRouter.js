// Modules
const express = require('express');
const mainRouter = express();

registeredRoute = require('./registeredRoute');

mainRouter.use('/registered', registeredRoute);

module.exports = mainRouter;
