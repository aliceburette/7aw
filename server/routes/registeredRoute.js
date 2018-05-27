// Modules
const express = require('express');
const registeredRoute = express.Router();

registeredController = require('../controller/registered');

registeredRoute.get('/getAllRegistered',(req, res) => {
  registeredController.getAllRegistered(req, registered => {
    return res.status(200).json(registered);
  });
});

module.exports = registeredRoute;
