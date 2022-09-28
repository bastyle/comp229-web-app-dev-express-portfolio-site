var express = require('express');
var router = express.Router();
const path = require("path")
/*app.use(bodyParser.urlencoded({ extended: true }));
app.use(exp.static('public'))*/

var mime = require('mime');
var fs = require('fs');

const viewsPathPrefix = "../views";

router.get("/", function (req, res) {
    res.render('home', { title: 'Home' , menu: 'home'});
});

router.use("/about_me", function (req, res) {
    console.log("about me __dirname: " + __dirname);
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

router.use("/contact_me", function (req, res) {
    res.render('contact', { title: 'Contact', menu: 'contact' });
});

module.exports = router;