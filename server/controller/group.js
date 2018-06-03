module.exports.getAll = function(req, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query('select id_groupe, nom, description FROM groupe', function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(300).json('Cannot get group');
      }
      //Retourner à la route
      callback(rows);
    });
  });
};

module.exports.getGroup = function(req, idGroup, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query('select * FROM groupe WHERE id_groupe = ?', idGroup, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json('Cannot get group');
      }
      //Retourner à la route
      callback(rows[0]);
    });
  });
};

module.exports.create = function(req, callback) {
  let query='INSERT INTO groupe (nom, description) VALUES (?, ?);';
  const value=[
    req.body.nom,
    req.body.description
  ]
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query(query, value, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(300).json('Cannot create group');
      }
      //Retourner à la route
      callback(rows);
    });
  });
};

module.exports.update = function(req, callback) {
  let query='UPDATE groupe SET nom = ?, description = ? WHERE id_groupe = ?;';
  console.log(req.body.EN_REGLE);
  const value=[
    req.body.nom,
    req.body.description,
    req.body.id_groupe
  ]
  console.log(value);
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query(query, value, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json('Cannot update group');
      }
      //Retourner à la route
      callback(rows);
    });
  });
};
