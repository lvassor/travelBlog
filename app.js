//jshint:esversion 6

const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
// Nav Bar
app.get("/countries", function(req, res){
    res.sendFile(path.join(__dirname, "public", "pages", "countries.html"));
});
app.get("/tips", function(req, res){
    res.sendFile(path.join(__dirname, "public", "pages", "tips.html"));
});
app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "public", "pages", "about.html"));
});

// Countries
app.get("/countries/philippines", function(req, res){
    res.sendFile(path.join(__dirname, "public", "pages", "countries", "philippines", "philippines.html"));
});

app.get("/countries/srilanka", function(req, res){
    res.sendFile(path.join(__dirname, "public", "pages", "countries", "sriLanka", "sriLanka.html"));
});

app.get("/countries/srilanka/twoweek", function(req, res){
    res.sendFile(path.join(__dirname, "public", "pages", "countries", "sriLanka", "sriLankaTwoWeek.html"));
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});