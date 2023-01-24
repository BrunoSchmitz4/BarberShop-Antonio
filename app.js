// app.js é o arquivo js do login.html

const express = require('express');
const app = express();
// var http = require('http');

// http.createServer(function(req, res){
//     res.end("Pagina login carregada com sucesso");
// }).listen(8080);


app.get("/", function(req, res){
    res.sendFile(__dirname + "/pages/login.html");
});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/pages/index.html");
});

app.get("/index", function(req, res){
    res.send("Pagina Index");
});

app.get("/sobre", function(req, res){
    res.send("Pagina Sobre");
});

app.get("produtos", function(req, res){
    res.send("Pagina Produtos");
});

// Instanciar server com Express.JS
app.listen(8080); // localhost:8080

// scripts/app.js
// scripts/login.js