var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var games = require('./routes/games');
var consoles = require('./routes/consoles');

// set static folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/api/games', games);
app.use('/api/consoles', consoles);

// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/

app.listen(3000);
console.log('Ready on port 3000');