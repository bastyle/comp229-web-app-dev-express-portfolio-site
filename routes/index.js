/**
 * @file index.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date September 30th 2022.
 * @since  1.0.0
 */

var express = require('express');
var router = express.Router();
const path = require("path")

var mime = require('mime');
var fs = require('fs');

const viewsPathPrefix = "../views";

let loginController = require('../controllers/login');

// definition of routes
router.get("/", function (req, res) {
    res.render('home', { title: 'Home', menu: 'home', modal: false, basePath: '../' });
});

router.use("/about_me", function (req, res) {
    res.render('about_me', { title: 'About Me', menu: 'about', basePath: '../' });
});

router.get("/download_resume", function (req, res) {
    var file = "./public/resume/Bastian_Bastias_2022_resume_v01.pdf";
    var filename = path.basename(file);
    var mimetype = mime.lookup(file);
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);
    res.download(file);
});

router.use("/projects", function (req, res) {
    res.render('projects', { title: 'Projects', menu: 'projects', basePath: '../' });
});

router.use("/services", function (req, res) {
    res.render('services', { title: 'Services', menu: 'services', basePath: '../' });
});

router.get("/contact_me", function (req, res) {
    res.render('contact', { title: 'Contact', menu: 'contact', basePath: '../' });
});

// when is a post request from with contact form data.
router.post("/", function (req, res) {
    //console.log("req:  %j" , (req.body));
    const contact = JSON.parse(JSON.stringify(req.body));
    //console.log("contact:  " , contact);
    res.render('home', { title: 'Home', menu: 'home', modal: true, contact: contact, basePath: '../' });
});


/* GET Route for displaying the Login page */
router.get('/login', loginController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', loginController.processLoginPage);

router.use('/register', loginController.processRegisterPage);


/* GET to perform UserLogout */
router.get('/logout', loginController.performLogout);

module.exports = router;