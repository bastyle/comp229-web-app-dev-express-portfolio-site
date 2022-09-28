var express = require('express');
var router = express.Router();
const path = require("path")
/*app.use(bodyParser.urlencoded({ extended: true }));
app.use(exp.static('public'))*/

var mime = require('mime');
var fs = require('fs');

const viewsPathPrefix = "../views";

router.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname, viewsPathPrefix + "/home.html"));
    res.render('home', { title: 'Home'});
});

router.use("/about_me", function (req, res) {
    console.log("about me __dirname: "+__dirname);
    //res.sendFile(path.join(__dirname, viewsPathPrefix + "/about_me.html"));
    res.render('about_me', { title: 'About Me-'});
});

router.get("/download_resume", function (req, res) {
    //res.sendFile(path.join(__dirname + "pdfs/Bastian_Bastias_2022_resume_v01.pdf"));    
    //res.download("./public/resume/Bastian_Bastias_2022_resume_v01.pdf");

    var file = "./public/resume/Bastian_Bastias_2022_resume_v01.pdf";

    var filename = path.basename(file);
    var mimetype = mime.lookup(file);
  
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);
    res.download(file);
  
});

router.use("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, viewsPathPrefix + "/projects.html"));
});

router.use("/services", function (req, res) {
    res.sendFile(path.join(__dirname, viewsPathPrefix , "/services.html"));
});

router.use("/contact_me", function (req, res) {
    res.sendFile(path.join(__dirname, viewsPathPrefix + "/contact.html"));
});

module.exports = router;