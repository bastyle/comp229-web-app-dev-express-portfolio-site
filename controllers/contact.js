let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    console.log("displayContactList");
    Contact.find((err, contactList) => {
        console.log("find...");
        if(err)
        {
            console.log("error...");
            return console.error(err);
        }
        else
        {
            console.log("lists return");
            console.log(contactList);

            res.render('./contacts/list', 
            {title: 'Contacts', 
            menu:'contacts',
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}