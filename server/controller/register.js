const bcrypt = require('bcrypt');

module.exports.create = function(req, callback) {
  let query='INSERT INTO utilisateur (nom, prenom, email, motdepasse) VALUES (?, ?, ?, ?);';
  const value=[
    req.body.nom,
    req.body.prenom,
    req.body.email,
    bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(4))
  ]
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query(query, value, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json('Cannot create register');
      }
      //Retourner à la route
      callback(rows);
    });
  });
};

module.exports.isAdmin = function(req, idRegister, callback){
  req.getConnection(function (err,connection){
    connection.query('SELECT administrateur FROM utilisateur WHERE id_utilisateur = ?', idRegister, function (err, rows, fields) {
      if (err) {
        console.log(err);
        return res.status(500).send('Error in DB request');
      }
      if(rows[0] === undefined){
        callback(false);
      } else {
        callback(rows[0].administrateur);
      }
    });
  });
};

module.exports.loginRegister =  function(req, callback) {
  req.getConnection(function (err, connection) {
    connection.query('SELECT id_utilisateur, email, motdepasse, administrateur FROM utilisateur WHERE email = ?', req.body.email, function (err, rows, fields) {
      if (err) {
        console.log(err);
        return res.status(500).json('Error in register');
      }
      console.log('Login query sent');
      console.log(rows[0]);
      callback(rows[0]);
    })
  })
}
