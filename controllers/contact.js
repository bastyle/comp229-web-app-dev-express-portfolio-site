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
        if (err) {
            return console.error(err);
        }
        else {
            console.log(contactList);
            res.render('./contacts/list',
                {
                    title: 'Contacts',
                    menu: 'contacts',
                    basePath: '../../',
                    ContactList: contactList,
                    /*displayName: req.user ? req.user.displayName : ''*/
                    displayName: 'Bastian'
                });
        }
    }).sort({ name: 1 }).collation({locale:"en", caseLevel:false});
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('./contacts/add', {
        title: 'Add Contact',
        menu: 'contacts',
        basePath: '../../',
        /*displayName: req.user ? req.user.displayName : ''*/
        displayName: 'Bastian'
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
                displayName: 'Bastian'
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
