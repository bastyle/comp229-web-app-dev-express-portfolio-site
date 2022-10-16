/**
 * @file contact.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date October 14th 2022.
 * @since  1.1.0
 * @comment the base of this file is a copy from comp229 week6 resources on e.centennial, but this file has been modified to achieve the assigment.
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(contactList);
            res.render('./contacts/list',
                {
                    title: 'Contacts',
                    menu: 'contacts',
                    basePath: '../../',
                    ContactList: contactList,
                    displayName: req.user ? req.user.displayName : ''
                });
        }
    }).sort({ name: 1 }).collation({ locale: "en", caseLevel: false });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('./contacts/add', {
        title: 'Add Contact',
        menu: 'contacts',
        basePath: '../../',
        displayName: req.user ? req.user.displayName : '',
        addView: true
    })
}


module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('contacts/edit', {
                title: 'Edit Contact',
                menu: 'contacts',
                basePath: '../../',
                contact: contactToEdit,
                displayName: req.user ? req.user.displayName : '',
                addView: false
            })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    Contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts');
        }
    });
}