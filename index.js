var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.port || 3000;

var bodyParser = require('body-parser');
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routing
var routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);



server.listen(port, function(){
	console.log('Server listening at ' + port);
});