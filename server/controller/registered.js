module.exports.getAllRegistered = function(req, callback) {
  //La requete
  req.getConnection(function (err, connection) {
    //
    connection.query("select nom, prenom, date_naissance, num_licence FROM adherent", function(err, rows, fields) {
      console.log("Query sent");
      if (err) {
        console.log (err);
        console.log("Cannot get books");
        return res.status(300).json("Cannot get books");
      }
      console.log("Query successfully executed");
      //Retourner à la route
      callback(rows);
    });
  });
};
