// Modules
const express = require('express');
const memberRoute = express.Router();
const token = require('../controller/token');

memberController = require('../controller/member');

memberRoute.get('/getComplete', (req, res) => {
  memberController.getComplete(req, member => {
    return res.status(200).json(member);
  });
});

memberRoute.get('/getIncomplete',(req, res) => {
  memberController.getIncomplete(req, member => {
    return res.status(200).json(member);
  });
});

memberRoute.get('/getByRegister', token.verifyToken, (req, res) => {
  memberController.getByRegister(req, req.id_utilisateur,member => {
    return res.status(200).json(member);
  });
});

memberRoute.get('/:idMember',(req, res) => {
  memberController.getMember(req, req.params.idMember, member => {
    if(member === undefined) {
      return res.status(404).json(member);
    }
    else {
      return res.status(200).json(member);
    }
  });
});

memberRoute.post('/create', token.verifyToken, (req, res) => {
  memberController.create(req, member => {
    return res.status(200).json(member);
  });
});

memberRoute.put('/update', (req, res) => {
  console.log(req.body);
  memberController.update(req, member => {
    return res.status(200).json(member);
  });
});

memberRoute.delete('/delete/:idMember', token.verifyAdmin, (req, res) => {
  console.log();
  memberController.delete(req, req.params.idMember, member => {
    return res.status(200).json(member);
  });
});




module.exports = memberRoute;
