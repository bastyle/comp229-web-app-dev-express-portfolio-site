const exp = require('express');
//const app = exp();
//const path = require("path")
const bodyParser = require('body-parser');
var app = require('./app');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(exp.static('public'))
//const viewsPathPrefix = "./public/views";

/*app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, viewsPathPrefix + "/home.html"));
});

app.use("/about_me", function (req, res) {
    res.sendFile(path.join(__dirname, viewsPathPrefix + "/about_me.html"));
});

app.use("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, viewsPathPrefix + "/projects.html"));
});

app.use("/services", function (req, res) {
    res.sendFile(path.join(__dirname, viewsPathPrefix , "/services.html"));
});

app.use("/contact_me", function (req, res) {
    res.sendFile(path.join(__dirname, viewsPathPrefix + "/contact.html"));
});*/



var port = process.env.PORT || 3000; //default setting or value for port var
console.log("port: " + process.env.PORT)
app.listen(port);

