module.exports.getByMember = function(req, idMember, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query('select * FROM proposition WHERE id_adherent = ?', idMember, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json('Cannot get member');
      }
      //Retourner à la route
      callback(rows[0]);
    });
  });
};

module.exports.getByGroup = function(req, idGroup, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query('select * FROM proposition WHERE id_groupe = ?', idGroup, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json('Cannot get member');
      }
      //Retourner à la route
      callback(rows[0]);
    });
  });
};

module.exports.create = function(req, callback) {
  let query='INSERT INTO proposition (id_adherent, id_groupe) VALUES (?, ?);';
  const value=[
    req.body.id_adherent,
    req.body.id_groupe
  ]
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query(query, value, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json('Cannot create groupChoice');
      }
      //Retourner à la route
      callback(rows);
    });
  });
};
