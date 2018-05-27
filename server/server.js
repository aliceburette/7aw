var express = require('express'),
  // server.js
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),

  //userRoutes = require('./router/userRoutes'),
  //accountRoutes = require('./router/accountRoutes'),

  morgan = require('morgan'),
  passport = require('passport'),
  mysql = require('mysql');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(passport.initialize());

const port = process.env.PORT || 4000;

//BD

conn = {
  host: 'localhost',
  user: 'root',
  password:'',
  database:'7aw'
};

myConnection = require('express-myconnection');
app.use(myConnection(mysql, conn, 'single'));

/*conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    conn.query("SELECT * FROM book", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/


// Api -> On renvoie vers le routeur
var api = require('./routes/mainRouter');
app.use('/api/',api);


// routes pour faire communiquer angular et node.js
//Repertoire de travail compilé
app.use(express.static(path.join(__dirname, '../dist/app7aw/')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/app7aw/index.html'));
});

//app.use('/user', userRoutes);

//app.use('/account', accountRoutes);


const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
