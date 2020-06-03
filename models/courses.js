var mongoose = require("mongoose");
var schema = mongoose.Schema;

var course = new schema({

subject:{type:String}, duration:{type:String},
students:{typr:Number,default:0}

});

module.exports = mongoose.model("course",course);

