/*
 * Authors
 */
exports.list = function(req, res){
	res.send(200, 'Authors');

	db.collection('books').find().toArray(function(err, items) {});
};

exports.view = function(req, res){
	res.send(200, 'Authors');

	db.collection('books').find({'author' : req.params[0]});
};