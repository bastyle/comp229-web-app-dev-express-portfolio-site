const exp = require('express');
var app = require('./app');
var port = process.env.PORT || 3000; //default setting or value for port var
//console.log("port: " + process.env.PORT)
app.listen(port);