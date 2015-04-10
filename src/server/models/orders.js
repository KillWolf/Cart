var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
		custName: String,
		custEmail: String,
		Products: Array
});

var OrdersModel = mongoose.model("Orders", ordersSchema);
module.exports = OrdersModel;