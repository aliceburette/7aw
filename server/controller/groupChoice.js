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
