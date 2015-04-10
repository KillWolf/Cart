var Orders = require('../../models/orders');

var order = {
	create: function(req, res, next){
		var order = new Orders(req.body);
		order.save();
		res.send(order);
	},
	getAll: function(req, res, next){
		Orders.find(function(err, data){
			if(err) console.error;
			res.json(data);
		})
	}
}

module.exports = order;