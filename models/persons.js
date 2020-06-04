var mongoose = require("mongoose");
var schema = mongoose.Schema;

var person = new schema(
    
    { name:{type:String},
      age:{type:String},
      students:{typr:Number,default:0}

}


);

module.exports = mongoose.model("person",person);

