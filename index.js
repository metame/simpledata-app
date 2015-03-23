var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.port || 3000;

var path = require('path');
var redis = require('./lib/redis');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// routing
var routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// sockets
io.on('connection', function(socket) {
	console.log('client connected');

	socket.on('count', function(count) {
		redis.set('count', count, redis.print);
		redis.get('count', function(err, value) {
			if(err) throw err;
			io.emit('counted', value);
		});

	});
});


server.listen(port, function(){
	console.log('Server listening at ' + port);
});