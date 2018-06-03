const express = require('express');
const groupChoiceRoute = express.Router();
const token = require('../controller/token');


groupChoiceController = require('../controller/groupChoice');

groupChoiceRoute.get('/getByMember',(req, res) => {
  groupChoiceController.getByMember(req, group => {
    return res.status(200).json(group);
  });
});

groupChoiceRoute.post('/create', token.verifyAdmin, (req, res) => {
  groupChoiceController.create(req, member => {
    return res.status(200).json(member);
  });
});

module.exports = groupChoiceRoute;

