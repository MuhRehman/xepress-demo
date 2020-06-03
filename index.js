var express = require("express");
var mongoose = require("mongoose");
var course = require("./models/courses.js");

var app = express();
mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true}).then(()=>{console.log("DB Connected..")});


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//handlers
manageHome = (req,res) => {
    res.send("<html><body><h1> Hello World </h1></body></html>")
}
 function  handlerApi(req,res){
       console.log("Hello");
       res.send(persons);
     };

 function  ladiesHandler(req,res){
       console.log("Hello");
    //    res.send(persons);
       res.send(ladies);
       
   };
 function  ladiesPostHandler(req,res){
       ladies.push(req.body);
       res.send(ladies);
       
   };
 function  personPostHandler(req,res){
    
       persons.push(req.body);
       res.send(persons);
    //    req.send(persons);
       
   };
 function  coursesPostHandler(req,res){
    
   var created = new course(req.body)
   .save()
   .then(
       ()=> {console.log("new coures created..");
       res.send("Oksy") }
       );
             
   };
   
 function  coursesGetHandler(req,res){

    course.find({},(err,items)=>{

 res.send(items);

    });
  
       
   };
/////////////////////


// routes///////////
app.get("/", manageHome);
app.get("/persons", handlerApi);
app.get("/ladies", ladiesHandler);
app.post("/ladies", ladiesPostHandler);
app.post("/persons", personPostHandler);
app.get("/courses", coursesGetHandler);
app.post("/courses", coursesPostHandler);

////////////

var server = app.listen(5000 ,function () {
    console.log("node server is running");
    
    
});