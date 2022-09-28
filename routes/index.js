var express = require('express');
var router = express.Router();
const path = require("path")
/*app.use(bodyParser.urlencoded({ extended: true }));
app.use(exp.static('public'))*/

const viewsPathPrefix = "../views";

router.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname, viewsPathPrefix + "/home.html"));
    res.render('home', { title: 'Home'});
});

router.use("/about_me", function (req, res) {
    console.log("about me");
    res.sendFile(path.join(__dirname, viewsPathPrefix + "/about_me.html"));
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