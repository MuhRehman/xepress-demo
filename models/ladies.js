var mongoose = require("mongoose");
var schema = mongoose.Schema;

var ladies = new schema(
    
    { name:{type:String},
      age:{type:String},
      students:{type:Number,default:0}
    }


);

module.exports = mongoose.model("ladies",ladies);

