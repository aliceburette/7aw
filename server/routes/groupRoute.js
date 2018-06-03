// Modules
const express = require('express');
const groupRoute = express.Router();
const token = require('../controller/token');

groupController = require('../controller/group');

groupRoute.get('/getAll',(req, res) => {
  groupController.getAll(req, group => {
    return res.status(200).json(group);
  });
});

groupRoute.get('/:idGroup',(req, res) => {
  groupController.getGroup(req, req.params.idGroup, group => {
    if(group === undefined) {
      return res.status(404).json(group);
    }
    else {
      return res.status(200).json(group);
    }
  });
});

groupRoute.post('/create', token.verifyAdmin,  (req, res) => {
  groupController.create(req, group => {
    return res.status(200).json(group);
  });
});

groupRoute.put('/update', token.verifyAdmin, (req, res) => {
  groupController.update(req, group => {
    return res.status(200).json(group);
  });
});

module.exports = groupRoute;
