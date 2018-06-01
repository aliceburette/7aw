// Modules
const express = require('express');
const slotRoute = express.Router();

slotController = require('../controller/slot');

slotRoute.post('/create',  (req, res) => {
  slotController.create(req, slot => {
    return res.status(200).json(slot);
  });
});

module.exports = slotRoute;
