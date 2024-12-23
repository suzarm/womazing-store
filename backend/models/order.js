var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var OrderSchema=new Schema({
    user:String,
    price:Number,
    products:[{id:mongoose.Types.ObjectId,quantity:Number}],
    amount:Number,
    date:Number,

})

module.exports = mongoose.model('Order', OrderSchema);