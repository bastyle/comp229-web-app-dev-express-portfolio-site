/**
 * @file server.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date September 30th 2022.
 * @since  1.0.0
 */
// initial definitions of variables
const exp = require('express');
var app = require('./app');

require('dotenv').config();

var port = process.env.PORT || 3000; //default setting or value for port var
console.log(process.env.URL_DB);
app.listen(port);