// ========== Express instance and static var ==========
//self executing
var app = require('express')();
//static
var express = require("express");

// ========== Sessions, ports env, cookies, http, sockets & logs ==========
var http = require('http').Server(app);
var port = Number(process.env.PORT || 5000);
var logfmt = require("logfmt");

// ========== listen for requests ==========
http.listen(port, function(){
  console.log('Listening on port ' + port);
});


app.use('/', express.static(__dirname + '/'));

