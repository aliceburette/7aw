const express = require('express');
const groupChoiceRoute = express.Router();

groupChoiceController = require('../controller/groupChoice');

groupChoiceRoute.get('/getByMember',(req, res) => {
  groupChoiceController.getByMember(req, group => {
    return res.status(200).json(group);
  });
});
