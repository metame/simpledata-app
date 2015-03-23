var express = require('express');
var router = express.Router();
var io = require('socket.io');
var redis = require('./../lib/redis');

redis.get('count', function(err, value) {
	if(err) throw err;

	/* GET Dashboard */
	router.get('/', function(req, res) {
		res.render('dashboard', {title: 'Dashboard', count: value });
	});

	/* GET Backend */
	router.get('/backend', function(req, res) {
		res.render('backend', {title: 'Backend', count: value });
	});
});

module.exports = router;
