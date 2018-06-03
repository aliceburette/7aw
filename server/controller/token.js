const jwt = require('jsonwebtoken');
const registerController = require('./register');
// Modules
const express = require('express').Router();

module.exports = {
  verifyToken: function (req, res, next) {
    console.log('Verifying token');
    if (!req.headers.authorization) {
      //If the authorization is missing from header
      return res.status(401).send('Unauthorized request');
    }

    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
      return res.status(401).send('Unauthorized request');
    }

    let payload;
    try {
      payload = jwt.verify(token, 'UnMoineauUnijambiste');
      if (!payload) {
        //if toekn is invalid, there's no payload generated, so we send 401 code
        return res.status(401).send('Unauthorized request');
      }

      req.id_utilisateur = payload.subject;
      next();
    } catch (e) {
      if (e instanceof jwt.TokenExpiredError) {
        console.log('Expired token');
        return res.status(401).send('Token experied');
      } else if (e instanceof jwt.JsonWebTokenError) {
        return res.status(401).send('Unauthorized request');
      }
    }
  },

  verifyAdmin: function (req, res, next) {
    console.log('Verifying token');
    if (!req.headers.authorization) {
      //If the authorization is missing from header
      return res.status(401).send('Unauthorized request');
    }

    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
      return res.status(401).send('Unauthorized request');
    }

    let payload;
    try {
      payload = jwt.verify(token, 'UnMoineauUnijambiste');
      if (!payload) {
        //if token is invalid, there's no payload generated, so we send 401 code
        return res.status(401).send('Unauthorized request');
      }

      req.id_utilisateur = payload.subject;
      registerController.isAdmin(req, req.id_utilisateur, bool => {
        if(bool){
          console.log('Access granted');
          next();
        } else {
          return res.status(403).send({message : 'Forbidden access'});
        }
      });
    } catch (e) {
      if (e instanceof jwt.TokenExpiredError) {
        console.log('Expired token');
        return res.status(401).send({message :'Token experied'});
      } else if (e instanceof jwt.JsonWebTokenError) {
        return res.status(401).send('Unauthorized request');
      }
    }
  }
}
