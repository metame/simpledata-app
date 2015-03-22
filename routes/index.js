var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res) {
	res.render('dashboard', {title: 'Data Dashboard', count: count});
});

router.get('/backend', function(req, res) {
	res.render('backend', {title: 'Backend'});
});

var count;
router.post('/backend', function(req, res) {
	count = req.body.count; 
});



module.exports = router;
