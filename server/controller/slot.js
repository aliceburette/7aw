module.exports.create = function(req, callback) {
  let query='INSERT INTO creneau (jour, heure_debut, heure_fin, encadrant, id_groupe ) VALUES (?, ?, ?, ?, ?);';
  const value=[
    req.body.jour,
    req.body.heure_debut,
    req.body.heure_fin,
    req.body.encadrant,
    req.body.id_groupe
  ]
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query(query, value, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(300).json('Cannot create slot');
      }
      //Retourner à la route
      callback(rows);
    });
  });


};
