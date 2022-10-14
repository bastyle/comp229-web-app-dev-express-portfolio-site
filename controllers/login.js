/**
 * @file login.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date October 14th 2022.
 * @since  1.1.0
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
//let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias


module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if (!req.user) {
        res.render('auth/login',
            {
                title: "Login",
                menu: "Login",
                messages: req.flash('loginMessage'),
                basePath: '../',
                displayName: req.user ? req.user.displayName : ''
            })
    } else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            // server err?
            if (err) {
                return next(err);
            }
            // is there a user login error?
            if (!user) {
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
            req.login(user, (err) => {
                // server error?
                if (err) {
                    return next(err);
                }
                return res.redirect('/contacts');
            });
        })(req, res, next);
}


module.exports.processRegisterPage = (req, res, next) => {
    console.log("processRegisterPage...");
    // instantiate a user object
    let newUser = new User({
        /*username: req.body.username,
        //password: req.body.password
        email: req.body.email,
        displayName: req.body.displayName*/
        username: 'admin',
        email: 'admin@admin.ca',
        displayName: 'admin'
    });

    User.register(newUser, 'admin', (err) => {
        if (err) {
            console.log("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
                {
                    title: 'Register',
                    messages: req.flash('registerMessage'),
                    displayName: req.user ? req.user.displayName : ''
                });
        }
        else {
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contacts')
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}