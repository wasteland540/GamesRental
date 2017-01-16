var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('gamesrental', ['games']);

router.get('/', function (req, res) {
	db.games.find().sort({name: 1}, function(err, docs){
		if(err){
			res.send(err);
		}
		else {
			res.json(docs);
		}
	});
});

router.post('/', function(req, res){

	db.games.insert(req.body, function(err, doc){
		if(err){
			res.send(err);
		}
		else {
			res.json(doc);
		}
	});	
	
});

router.get('/:id', function (req, res) {
	var id = req.params.id;

	db.games.findOne({_id: mongojs.ObjectID(id)}, function(err, doc){
		if(err){
			res.send(err);
		}
		else {
			res.json(doc);
		}
	});
});

router.put('/:id', function(req, res){
	var id = req.params.id;

	db.games.findAndModify({query: {_id: mongojs.ObjectId(id)}, 
		update: {
			$set: {
				name: req.body.name,
				trailer: req.body.trailer,
				plattform: req.body.plattform,
				status: req.body.status,
				borrower: req.body.borrower
			}
		},
		new: true
	}, function(err, doc){
		res.json(doc);
	});
});

router.delete('/:id', function(req, res){
	var id = req.params.id;

	db.games.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		if(err){
			res.send(err);
		}
		else {
			res.json(doc);
		}
	});
});

module.exports = router;