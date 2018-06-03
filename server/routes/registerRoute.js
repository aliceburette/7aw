const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const token = require('../controller/token');

// Modules
const express = require('express');
const registerRoute = express.Router();

registerController = require('../controller/register');

registerRoute.post('/create', (req, res) => {
  console.log(req.body);
  registerController.create(req, register => {
    //Creation of payload for token auth
    let payload = { subject : register.insertId};
    let token = jwt.sign(payload, 'UnMoineauUnijambiste', {expiresIn: 60 * 60});
    res.status(200).json({token});
  })
});

registerRoute.post('/login', (req,res) => {
  registerController.loginRegister(req, register =>{
    if(register === undefined || !bcrypt.compareSync(req.body.password, register.motdepasse)){
      res.status(401).json(register);
    } else {
        const payload = { subject : register.id_utilisateur };
        const token = jwt.sign(payload, 'UnMoineauUnijambiste', {expiresIn: 60 * 60});
        console.log(register);
        const admin = register.administrateur;
        res.status(200).json({token, admin});
      }});
  });

module.exports = registerRoute;


