/**
 * @file server.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date September 30th 2022.
 * @since  1.0.0
 */

const exp = require('express');
var app = require('./app');
var port = process.env.PORT || 3000; //default setting or value for port var
//console.log("port: " + process.env.PORT)
app.listen(port);