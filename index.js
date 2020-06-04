var express = require("express");
var mongoose = require("mongoose");
var course = require("./models/courses.js");
var ladies = require("./models/ladies.js");
var person = require("./models/persons.js");
let path = require('path');

var app = express();
mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true}).then(()=>{console.log("DB Connected..")});


/////////  middleware  ////////

app.use(express.json());
//app.use(express.static(path.join(__dirname,"pages")));
app.use(express.urlencoded({extended:true}));

////////handlers  /////////
// manageHome = (req,res) => {
// // let display = [];

//   // ladies.find({name:"Qurat"},(error,items)=>{

//   // display = items;//.map((item)=>{

//    //return `<li>${item.name}</li> <li>${item.age}</li>`

//   //});
//   res.send(display);

//   });
manageHome = (req,res) => {
// let display = [];
if(res.ip == "::ffff:192.168.1.2")
{
  res.send("fuckOf");
}
res.send(req.ip);
console.log(req.ip);


  


    //res.sendFile(path.join(__dirname,"pages","home.html"));
    
};
 function  handlerApi(req,res){
     person.find({},(err,items)=>{

    res.send(items);
 
     });
     };

 function  ladiesHandler(req,res){
  ladies.find({},(err,items)=>{

    res.send(items);
 
     });
       
   };
//  function  ladiesPostHandler(req,res){
//        ladies.push(req.body);
//        res.send(ladies);
       
//    };
//  function  personPostHandler(req,res){
    
//        persons.push(req.body);
//        res.send(persons);
//     //    req.send(persons);
       
//    };
 function  coursesPostHandler(req,res){
    
   var created = new course(req.body)
   .save()
   .then(
       ()=> {console.log("new coures created..");
       res.send("Oky") }
       );
             
   };
 function  ladiesPostHandler(req,res){
    
   var created = new ladies(req.body)
   .save()
   .then(
       ()=> {console.log("new ladies created..");
       res.send("Yes Ladies Post") }
       );
             
   };
 function  personPostHandler(req,res){
    
   var created = new person(req.body)
   .save()
   .then(
       ()=> {console.log("new Person created..");
       res.send("Yes Person Post") }
       );
             
   };
   
 function  coursesGetHandler(req,res){

    course.find({},(err,items)=>{

   res.send(items);

    });
  
       
   };


/////////// routes///////////

app.get("/", manageHome);
app.get("/ladies", ladiesHandler);
app.post("/ladies", ladiesPostHandler);
app.get("/persons", handlerApi);
app.post("/persons", personPostHandler);
app.get("/courses", coursesGetHandler);
app.post("/courses", coursesPostHandler);

//////////// start the server ///////////////////

var server = app.listen(5000 ,function () {
    console.log("node server is running");   
});