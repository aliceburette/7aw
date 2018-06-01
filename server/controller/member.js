module.exports.getComplete = function(req, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query("select id_adherent, nom, prenom, date_naissance, num_licence FROM adherent WHERE en_regle = 1 AND id_groupe IS NOT NULL", function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json("Cannot get member");
      }
      //Retourner à la route
      callback(rows);
    });
  });
};

module.exports.getIncomplete = function(req, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query("select id_adherent, nom, prenom, date_naissance, num_licence FROM adherent WHERE en_regle = 0 OR id_groupe IS NULL", function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json("Cannot get member");
      }
      //Retourner à la route
      callback(rows);
    });
  });
};

module.exports.getMember = function(req, idMember, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query("select * FROM adherent WHERE id_adherent = ?", idMember, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json("Cannot get member");
      }
      //Retourner à la route
      callback(rows[0]);
    });
  });
};

module.exports.create = function(req, callback) {
  let query="INSERT INTO adherent (nom, prenom, date_naissance, email, telephone, id_utilisateur) VALUES (?, ?, ?, ?, ?, ?);";
  const value=[
    req.body.nom,
    req.body.prenom,
    req.body.date_naissance,
    req.body.email,
    req.body.telephone,
    req.body.id_utilisateur
  ]
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query(query, value, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json("Cannot create member");
      }
      //Retourner à la route
      callback(rows);
    });
  });
};

module.exports.update = function(req, callback) {
  let query="UPDATE adherent SET nom = ?, prenom = ?, date_naissance = STR_TO_DATE(SUBSTRING_INDEX(?,'T',1),'%Y-%m-%d'), email = ?, telephone = ?, num_licence = ?, en_regle = ? WHERE id_adherent = ?;";
  console.log(req.body.EN_REGLE);
  const value=[
    req.body.NOM,
    req.body.PRENOM,
    req.body.DATE_NAISSANCE,
    req.body.EMAIL,
    req.body.TELEPHONE,
    req.body.NUM_LICENCE,
    req.body.EN_REGLE,
    req.body.ID_ADHERENT
  ]
  console.log(value);
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query(query, value, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json("Cannot update member");
      }
      //Retourner à la route
      callback(rows);
    });
  });
};

module.exports.delete = function(req, idMember, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query("DELETE FROM adherent WHERE id_adherent = ?", idMember, function(err, rows, fields) {
      if (err) {
        console.log (err);
        return res.status(500).json("Cannot delete member");
      }
      //Retourner à la route
      callback(rows[0]);
    });
  });
};


