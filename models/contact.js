/**
 * @file contact.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date October 14th 2022.
 * @since  1.1.0
 * @comment the base of this file is a copy from comp229 week6 resources on e.centennial, but this file has been modified to achieve the assigment.
 */
let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    contactNumber: String,
    emailAddress: String
},
    {
        collection: "contacts"
    });
module.exports = mongoose.model('Contact', contactModel);