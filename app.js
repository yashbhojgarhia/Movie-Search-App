var express = require("express");
var app =express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res){
   var query = req.query.search;
   request("http://www.omdbapi.com/?apikey=a6a913c1&s=" + query, function(error, response, body){
       if(!error && response.statusCode == 200){
           var data = JSON.parse(body);
           res.render("results", {data: data});
       }
   }); 
});

app.get("/", function(req, res){
    res.render("search");
});

app.listen(3000, function(){
    console.log("Serving movie app");
});