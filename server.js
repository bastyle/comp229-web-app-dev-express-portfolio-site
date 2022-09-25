const exp = require('express');
const app = exp();
const path = require("path")
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(exp.static('public'))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/views/home.html"));
});

app.use("/about_me", function (req, res) {//doesn care the http method that are using
    res.sendFile(path.join(__dirname, "about_me.html"));
});

app.route("/login")
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, "login.html"));
    })
    .post(function (req, res) {
        console.log("req: " + (req.body))
        console.log("username:" + req.body.username);
        console.log("password:" + req.body.password);
        res.sendFile(path.join(__dirname, "loged.html"));
    });

//
app.get("/product/:id", function (req, res) {
    var product_id={"id" : Number(req.params.id), name : "product one"};
    console.log("product: "+JSON.stringify(product_id));
    //res.send("product_id: "+product_id);
    res.json(product_id)
})

var port = process.env.PORT || 3000; //default setting or value for port var
console.log("port: " + process.env.PORT)
app.listen(port);

