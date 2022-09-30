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

// definition of routes
router.get("/", function (req, res) {
    res.render('home', { title: 'Home' , menu: 'home', modal: false});
});

router.use("/about_me", function (req, res) {
    res.render('about_me', { title: 'About Me', menu: 'about' });
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
    res.render('projects', { title: 'Projects', menu: 'projects' });
});

router.use("/services", function (req, res) {
    res.render('services', { title: 'Services', menu: 'services' });
});

router.get("/contact_me", function (req, res) {
    res.render('contact', { title: 'Contact', menu: 'contact' });
});

// when is a post request from with contact form data.
router.post("/", function (req, res) {
    //console.log("req:  %j" , (req.body));
    const contact = JSON.parse(JSON.stringify(req.body));
    //console.log("contact:  " , contact);
    res.render('home', { title: 'Home' , menu: 'home', modal: true, contact: contact});
});

module.exports = router;