const bcrypt = require('bcrypt');

module.exports.create = function(req, callback) {
  let query="INSERT INTO utilisateur (nom, prenom, email, motdepasse) VALUES (?, ?, ?, ?);";
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
        return res.status(500).json("Cannot create register");
      }
      //Retourner à la route
      callback(rows);
    });
  });
};

module.exports.isAdmin = function(req, idUser, callback){
  req.getConnection(function (err,connection){
    connection.query("SELECT ADMINISTRATEUR FROM UTILISATEUR WHERE ID_UTILISATEUR = ?", idUser, function (err, rows, fields) {
      if (err) {
        console.log(err);
        return res.status(500).send("Error in DB request");
      }
      if(rows[0] === undefined){
        callback(false);
      } else {
        callback(rows[0].ADMINISTRATEUR);
      }
    });
  });
};

module.exports.loginUser =  function(req, callback) {
  req.getConnection(function (err, connection) {
    connection.query("SELECT ID_UTILISATEUR, EMAIL, MOTDEPASSE from UTILISATEUR where EMAIL = ?", req.body.email, function (err, rows, fields) {
      if (err) {
        console.log(err);
        return res.status(500).json("Error in register");
      }
      console.log("Login query sent");
      console.log(rows[0]);
      callback(rows[0]);
    })
  })
}
