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
    let token = jwt.sign(payload, 'ItsASecretKey', {expiresIn: 60 * 60});
    res.status(200).json({token});
  })
});

registerRoute.post("/login", (req,res) => {
  registerController.loginUser(req, register =>{
    if(register === undefined || !bcrypt.compareSync(req.body.password, register.MOTDEPASSE)){
      res.status(401).json(register);
    } else {
      const payload = { subject : register.id_utilisateur }
      const token = jwt.sign(payload, 'ItsASecretKey', {expiresIn: 60 * 60});
      res.status(200).json({token});
    }
  })
});

module.exports = registerRoute;




/*registerRoute.get("/getAdmin", token.getUserIdFromToken)
{
  return registerController.isAdmin(req, req.idUser);
};*/

registerRoute.get("/getAdmin", token.getUserIdFromToken, (req,res) => {
  registerController.isAdmin(req, req.idUser, bool => {
    return res.status(200).json(bool);
  });
});

module.exports = registerRoute;
